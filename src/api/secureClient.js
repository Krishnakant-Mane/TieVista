/**
 * secureClient.js - Browser-side Secure API Client
 *
 * PHASE 1 - Handshake (runs once on page load)
 *   Step 1. GET  /api/keys/public  -> fetch RSA-2048 public key
 *   Step 2. Generate random 32-byte AES key + 32-byte HMAC secret
 *   Step 3. RSA-OAEP encrypt the keys bundle
 *   Step 4. POST /api/keys/exchange -> receive sessionId
 *
 * PHASE 2 - Every Secure Request (via axios interceptor)
 *   Step 1. AES-256-GCM encrypt body -> wrapped as { data: "base64" }
 *   Step 2. HMAC-SHA256 sign: nonce + "." + timestamp + "." + encBody
 *   Step 3. Attach headers: X-Session-Id, X-Timestamp, X-Nonce, X-HMAC-Signature
 *   Step 4. Decrypt encrypted response envelope from server
 *
 * AES payload layout (must match backend Utils/crypto/aesGcm.js):
 *   base64( iv[12 bytes] | authTag[16 bytes] | ciphertext )
 */

import axios from 'axios';

const BASE_URL = 'https://lead.tievista.com/api';

// --- Dynamic Session State ---
let sessionId          = null;
let dynamicAesKey      = null;   // CryptoKey (imported into Web Crypto)
let dynamicHmacSecret  = null;   // string    (the hmacSecretHex itself, used as UTF-8 key)
let isNegotiating      = false;
let negotiationPromise = null;

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

// ArrayBuffer -> Base64 string
function bufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}

// Base64 string -> ArrayBuffer
function base64ToBuffer(base64) {
    const binary = window.atob(base64);
    const bytes  = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
}

// ArrayBuffer -> lowercase hex string
function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

// Strip PEM headers and decode to ArrayBuffer (for RSA key import)
function pemToArrayBuffer(pem) {
    const b64 = pem.replace(/(-----(BEGIN|END) PUBLIC KEY-----|\r|\n)/g, '');
    return base64ToBuffer(b64);
}

// =============================================================================
// PHASE 1 - KEY NEGOTIATION (Handshake)
// =============================================================================

async function negotiateKeys() {
    // Guard: if already negotiating, return the in-flight promise
    if (isNegotiating) return negotiationPromise;
    isNegotiating = true;

    negotiationPromise = (async () => {
        try {
            // Step 1: Fetch RSA public key from backend
            const pubKeyRes    = await axios.get(`${BASE_URL}/keys/public`);
            const publicKeyPem = pubKeyRes.data.publicKey;

            // Step 2: Import RSA-OAEP public key into Web Crypto
            const rsaPublicKey = await window.crypto.subtle.importKey(
                'spki',
                pemToArrayBuffer(publicKeyPem),
                { name: 'RSA-OAEP', hash: 'SHA-256' },
                false,
                ['encrypt']
            );

            // Step 3: Generate random 32-byte AES-256 key and 32-byte HMAC secret
            const aesKeyRaw     = window.crypto.getRandomValues(new Uint8Array(32));
            const hmacSecretRaw = window.crypto.getRandomValues(new Uint8Array(32));
            const aesKeyHex     = bufferToHex(aesKeyRaw);
            const hmacSecretHex = bufferToHex(hmacSecretRaw);

            // Step 4: RSA-OAEP encrypt the keys bundle
            const keysJson = JSON.stringify({ aesKeyHex, hmacSecretHex });
            const keysBuffer = new TextEncoder().encode(keysJson);
            const encBuf = await window.crypto.subtle.encrypt(
                { name: 'RSA-OAEP' },
                rsaPublicKey,
                keysBuffer
            );
            const encryptedBase64 = bufferToBase64(encBuf);

            // Step 5: POST encrypted keys -> receive sessionId
            const exchangeRes = await axios.post(`${BASE_URL}/keys/exchange`, {
                data: encryptedBase64,
            });

            sessionId         = exchangeRes.data.sessionId;
            dynamicHmacSecret = hmacSecretHex; // store the hex string (see signHmac below)

            // Step 6: Import AES key into Web Crypto for encrypt/decrypt
            dynamicAesKey = await window.crypto.subtle.importKey(
                'raw',
                aesKeyRaw,
                'AES-GCM',
                false,
                ['encrypt', 'decrypt']
            );

            console.log('[secureClient] Session established:');
        } catch (error) {
            console.error('[secureClient] Key negotiation failed:', error);
            throw error;
        } finally {
            isNegotiating = false;
        }
    })();

    return negotiationPromise;
}

// Start handshake immediately on module load
let keysReady = negotiateKeys();

// =============================================================================
// PHASE 2 - ENCRYPTION / DECRYPTION
// =============================================================================

const IV_LENGTH = 12; // 96-bit IV recommended for AES-GCM

/**
 * encryptPayload - AES-256-GCM encrypt a plaintext string.
 *
 * Output layout: base64( iv[12] | authTag[16] | ciphertext )
 * Matches backend Utils/crypto/aesGcm.js exactly.
 */
async function encryptPayload(plaintext) {
    if (!dynamicAesKey) throw new Error('AES key not initialized.');

    // 1. Random 96-bit IV
    const iv = window.crypto.getRandomValues(new Uint8Array(IV_LENGTH));

    // 2. Encrypt - Web Crypto appends authTag at end of output
    const ciphertextBuffer = await window.crypto.subtle.encrypt(
        { name: 'AES-GCM', iv },
        dynamicAesKey,
        new TextEncoder().encode(plaintext)
    );

    const full             = new Uint8Array(ciphertextBuffer);
    const authTag          = full.slice(-16);       // last 16 bytes
    const actualCiphertext = full.slice(0, -16);    // everything before

    // 3. Repack as: iv | authTag | ciphertext  (backend layout)
    const combined = new Uint8Array(IV_LENGTH + 16 + actualCiphertext.length);
    combined.set(iv,               0);
    combined.set(authTag,          IV_LENGTH);
    combined.set(actualCiphertext, IV_LENGTH + 16);

    return bufferToBase64(combined.buffer);
}

/**
 * decryptPayload - AES-256-GCM decrypt a base64 payload.
 *
 * Expects layout: base64( iv[12] | authTag[16] | ciphertext )
 */
async function decryptPayload(base64Payload) {
    if (!dynamicAesKey) throw new Error('AES key not initialized.');

    const data = new Uint8Array(base64ToBuffer(base64Payload));
    if (data.byteLength < IV_LENGTH + 16) throw new Error('Encrypted payload too short.');

    const iv               = data.slice(0, IV_LENGTH);
    const authTag          = data.slice(IV_LENGTH, IV_LENGTH + 16);
    const actualCiphertext = data.slice(IV_LENGTH + 16);

    // Web Crypto expects authTag appended at the END of ciphertext
    const withTag = new Uint8Array(actualCiphertext.length + 16);
    withTag.set(actualCiphertext, 0);
    withTag.set(authTag, actualCiphertext.length);

    const decrypted = await window.crypto.subtle.decrypt(
        { name: 'AES-GCM', iv },
        dynamicAesKey,
        withTag
    );

    return new TextDecoder().decode(decrypted);
}

// =============================================================================
// PHASE 2 - HMAC SIGNING
// =============================================================================

/**
 * signHmac - HMAC-SHA256 sign a message string.
 *
 * CRITICAL: The backend stores hmacSecretHex as a plain string and passes it
 * directly to Node's crypto.createHmac('sha256', hmacSecretHex).
 * Node treats the string as UTF-8 bytes.
 * We MUST do the same: new TextEncoder().encode(dynamicHmacSecret).
 * Do NOT hex-decode it to binary - those are entirely different key materials.
 *
 * Message format (matches backend hmacValidator.js):
 *   nonce + "." + timestamp + "." + encryptedBodyJsonString
 */
async function signHmac(message) {
    if (!dynamicHmacSecret) throw new Error('HMAC secret not initialized.');

    const key = await window.crypto.subtle.importKey(
        'raw',
        new TextEncoder().encode(dynamicHmacSecret), // UTF-8 of the hex string (NOT decoded bytes)
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign']
    );

    const sig = await window.crypto.subtle.sign(
        'HMAC',
        key,
        new TextEncoder().encode(message)
    );

    return bufferToHex(sig);
}

// =============================================================================
// AXIOS INSTANCE + INTERCEPTORS
// =============================================================================

const api = axios.create({ baseURL: BASE_URL });

// --- REQUEST INTERCEPTOR ---

api.interceptors.request.use(async (config) => {

    // Skip security for the handshake endpoints themselves
    if (config.url.includes('/keys/public') || config.url.includes('/keys/exchange')) {
        return config;
    }

    // Step 1: Wait for the handshake to complete
    await keysReady;

    // Step 2: Attach Session ID
    config.headers['X-Session-Id'] = sessionId;

    // Step 3: AES-encrypt the request body -> { data: "<base64>" }
    let bodyStr = '';
    if (config.data && ['post', 'put', 'patch'].includes(config.method)) {
        const plaintext       = JSON.stringify(config.data);
        const encryptedBase64 = await encryptPayload(plaintext);
        config.data = { data: encryptedBase64 };
        bodyStr     = JSON.stringify(config.data);
    }

    // Step 4: Generate Timestamp and Nonce
    const timestamp  = String(Math.floor(Date.now() / 1000));
    const nonceBytes = window.crypto.getRandomValues(new Uint8Array(16));
    const nonce      = bufferToHex(nonceBytes);

    // Step 5: HMAC sign over: nonce + "." + timestamp + "." + encryptedBodyStr
    // hmacValidator runs BEFORE decryptRequest, so it sees the encrypted envelope
    const hmacMessage = `${nonce}.${timestamp}.${bodyStr}`;
    const signature   = await signHmac(hmacMessage);

    // Step 6: Attach security headers
    config.headers['X-Timestamp']      = timestamp;
    config.headers['X-Nonce']          = nonce;
    config.headers['X-HMAC-Signature'] = signature;

    return config;

}, (error) => Promise.reject(error));

// --- RESPONSE INTERCEPTOR ---

api.interceptors.response.use(async (response) => {

    // Skip decryption for handshake endpoints (they return plain JSON)
    if (response.config.url.includes('/keys')) {
        return response;
    }

    // Step 4: Decrypt the { data: "<base64>" } envelope from the server
    if (response.data?.data) {
        try {
            const decryptedStr = await decryptPayload(response.data.data);
            response.data = JSON.parse(decryptedStr);
        } catch (err) {
            console.error('[secureClient] Response decryption failed:', err);
            return Promise.reject(new Error('Invalid or corrupted payload from server'));
        }
    }

    return response;

}, async (error) => {

    // Decrypt encrypted error response bodies.
    // encryptResponse wraps ALL res.json() calls (including 4xx/5xx),
    // so error.response.data arrives as { data: "<cipher>" } even for errors.
    if (error.response?.data?.data && !error.config?.url?.includes('/keys')) {
        try {
            const decryptedStr  = await decryptPayload(error.response.data.data);
            error.response.data = JSON.parse(decryptedStr);
        } catch (decryptErr) {
            console.warn('[secureClient] Could not decrypt error body:', decryptErr.message);
        }
    }

    // Auto-retry once on 403 SESSION_EXPIRED: renegotiate keys and replay the request
    if (error.response?.status === 403 && error.response.data?.error === 'SESSION_EXPIRED') {
        if (!error.config._retry) {
            error.config._retry = true;
            console.warn('[secureClient] Session expired - renegotiating keys...');
            keysReady = negotiateKeys();
            await keysReady;
            return api(error.config);
        }
    }

    return Promise.reject(error);
});

// =============================================================================
// PUBLIC API
// =============================================================================

/**
 * securePost(path, payload)
 *
 * Sends a POST via the secure axios instance.
 * Handles: AES encryption, HMAC signing, response decryption, session retry.
 *
 * @param {string} path    - e.g. "/gupshup/send-otp"
 * @param {object} payload - plain JS object (will be JSON-encrypted)
 * @returns {Promise<object>} decrypted response data
 * @throws {Error} with server error message on failure
 */
export async function securePost(path, payload) {
    try {
        const response = await api.post(path, payload);
        return response.data;
    } catch (err) {
        const msg = err.response?.data?.message
            || err.response?.data?.error
            || err.message
            || 'Request failed';
        throw new Error(msg);
    }
}

/**
 * resetSession() - Force a fresh handshake on the next request.
 */
export function resetSession() {
    sessionId         = null;
    dynamicAesKey     = null;
    dynamicHmacSecret = null;
    keysReady         = negotiateKeys();
}

// DEBUG: Expose raw handshake for verification
