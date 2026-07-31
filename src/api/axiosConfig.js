import axios from 'axios';

const VITE_API_BASE ="https://partners.tievista.com"

// Dynamic Session State
let sessionId = null;
let dynamicAesKey = null; // CryptoKey
let dynamicHmacSecret = null; // string
let isNegotiating = false;
let negotiationPromise = null;

// --- Utility: Hex / Base64 / ArrayBuffer conversions ---

function bufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}

function base64ToBuffer(base64) {
    const binary = window.atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
}

function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

function pemToArrayBuffer(pem) {
    const b64Lines = pem.replace(/(-----(BEGIN|END) PUBLIC KEY-----|\r|\n)/g, '');
    return base64ToBuffer(b64Lines);
}

// --- Key Exchange Function ---

async function negotiateKeys() {
    if (isNegotiating) return negotiationPromise;
    isNegotiating = true;
    
    negotiationPromise = (async () => {
        try {
            // 1. Fetch RSA Public Key from backend
            const pubKeyRes = await axios.get(`${VITE_API_BASE}/api/keys/public`);
            const publicKeyPem = pubKeyRes.data.publicKey;
            
            // 2. Import RSA Public Key
            const rsaPublicKey = await window.crypto.subtle.importKey(
                'spki',
                pemToArrayBuffer(publicKeyPem),
                { name: 'RSA-OAEP', hash: 'SHA-256' },
                false,
                ['encrypt']
            );
            
            // 3. Generate random 32-byte AES key and 32-byte HMAC secret
            const aesKeyRaw = window.crypto.getRandomValues(new Uint8Array(32));
            const hmacSecretRaw = window.crypto.getRandomValues(new Uint8Array(32));
            
            const aesKeyHex = bufferToHex(aesKeyRaw);
            const hmacSecretHex = bufferToHex(hmacSecretRaw);
            
            // 4. Encrypt keys using RSA
            const encoder = new TextEncoder();
            const keysJson = JSON.stringify({ aesKeyHex, hmacSecretHex });
            const keysBuffer = encoder.encode(keysJson);
            
            const encryptedKeysBuffer = await window.crypto.subtle.encrypt(
                { name: 'RSA-OAEP' },
                rsaPublicKey,
                keysBuffer
            );
            
            const encryptedKeysBase64 = bufferToBase64(encryptedKeysBuffer);
            
            // 5. Send to exchange endpoint
            const exchangeRes = await axios.post(`${VITE_API_BASE}/api/keys/exchange`, {
                data: encryptedKeysBase64
            });
            
            sessionId = exchangeRes.data.sessionId;
            dynamicHmacSecret = hmacSecretHex;
            
            // Import AES key for encryption
            dynamicAesKey = await window.crypto.subtle.importKey(
                'raw',
                aesKeyRaw,
                'AES-GCM',
                false,
                ['encrypt', 'decrypt']
            );
            
            console.log('✅ Dynamic keys successfully negotiated.');
        } catch (error) {
            console.error('Failed to negotiate keys:', error);
            throw error;
        } finally {
            isNegotiating = false;
        }
    })();
    
    return negotiationPromise;
}

// Start negotiation immediately on load
let keysReady = negotiateKeys();

// --- Encryption and Decryption Functions ---

const IV_LENGTH = 12;

async function encryptPayload(plaintext) {
    if (!dynamicAesKey) throw new Error('Encryption key not initialized.');
    const iv = window.crypto.getRandomValues(new Uint8Array(IV_LENGTH));
    const encoder = new TextEncoder();
    const encodedPlaintext = encoder.encode(plaintext);

    const ciphertextBuffer = await window.crypto.subtle.encrypt(
        { name: 'AES-GCM', iv },
        dynamicAesKey,
        encodedPlaintext
    );

    const ciphertextArray = new Uint8Array(ciphertextBuffer);
    const authTag = ciphertextArray.slice(-16);
    const actualCiphertext = ciphertextArray.slice(0, -16);

    // Layout required by backend: iv (12) | authTag (16) | ciphertext
    const combined = new Uint8Array(iv.length + 16 + actualCiphertext.length);
    combined.set(iv, 0);
    combined.set(authTag, iv.length);
    combined.set(actualCiphertext, iv.length + 16);

    return bufferToBase64(combined.buffer);
}

async function decryptPayload(base64Payload) {
    if (!dynamicAesKey) throw new Error('Encryption key not initialized.');
    const encryptedData = new Uint8Array(base64ToBuffer(base64Payload));

    if (encryptedData.byteLength < IV_LENGTH + 16) {
        throw new Error('Invalid encrypted payload: too short');
    }

    const iv = encryptedData.slice(0, IV_LENGTH);
    const authTag = encryptedData.slice(IV_LENGTH, IV_LENGTH + 16);
    const actualCiphertext = encryptedData.slice(IV_LENGTH + 16);

    // Web Crypto API expects the authTag at the end of the ciphertext
    const webCryptoCiphertext = new Uint8Array(actualCiphertext.length + 16);
    webCryptoCiphertext.set(actualCiphertext, 0);
    webCryptoCiphertext.set(authTag, actualCiphertext.length);

    try {
        const decrypted = await window.crypto.subtle.decrypt(
            { name: 'AES-GCM', iv },
            dynamicAesKey,
            webCryptoCiphertext
        );
        const decoder = new TextDecoder();
        return decoder.decode(decrypted);
    } catch (err) {
        throw new Error('Failed to decrypt payload. Bad key or tampered data?');
    }
}

// --- HMAC Signature Function ---
async function signHmac(message) {
    if (!dynamicHmacSecret) throw new Error('HMAC secret not initialized.');
    const encoder = new TextEncoder();
    const keyData = encoder.encode(dynamicHmacSecret);
    const key = await window.crypto.subtle.importKey(
        'raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
    );
    const signatureBuffer = await window.crypto.subtle.sign(
        'HMAC', key, encoder.encode(message)
    );
    return bufferToHex(signatureBuffer);
}

// --- Axios Configuration ---

const api = axios.create({
    baseURL: VITE_API_BASE
});

// Request Interceptor
api.interceptors.request.use(async (config) => {
    // Skip key negotiation endpoints
    if (config.url.includes('/api/keys/public') || config.url.includes('/api/keys/exchange')) {
        return config;
    }

    // Ensure keys are negotiated
    await keysReady;
    
    // 2. Session ID Header
    config.headers['x-session-id'] = sessionId;

    // 3. Encrypt payload and get body string for HMAC
    let bodyStr = '';
    if (config.data && (config.method === 'post' || config.method === 'put' || config.method === 'patch')) {
        const plaintext = JSON.stringify(config.data);
        const encryptedBase64 = await encryptPayload(plaintext);
        config.data = { data: encryptedBase64 };
        bodyStr = JSON.stringify(config.data);
    }

    // 4. Timestamp, Nonce, HMAC
    const timestamp = String(Math.floor(Date.now() / 1000));
    const nonceArray = new Uint8Array(16);
    window.crypto.getRandomValues(nonceArray);
    const nonce = bufferToHex(nonceArray);
    
    const hmacMessage = `${nonce}.${timestamp}.${bodyStr}`;
    const signature = await signHmac(hmacMessage);

    config.headers['X-Timestamp'] = timestamp;
    config.headers['X-Nonce'] = nonce;
    config.headers['X-HMAC-Signature'] = signature;

    return config;
}, (error) => Promise.reject(error));

// Response Interceptor
api.interceptors.response.use(async (response) => {
    // Skip decryption for key endpoints
    if (response.config.url.includes('/api/keys')) {
        return response;
    }

    // Decrypt payload
    if (response.data && response.data.data) {
        try {
            const decryptedString = await decryptPayload(response.data.data);
            response.data = JSON.parse(decryptedString);
        } catch (error) {
            console.error('Decryption failed for response:', error);
            return Promise.reject(new Error('Invalid or corrupted payload from server'));
        }
    }
    return response;
}, async (error) => {
    // Decrypt encrypted error response bodies.
    // encryptResponse on the backend wraps ALL res.json() calls (including 4xx/5xx),
    // so error.response.data arrives as { data: "<cipher>" }.
    // Without decryption here, error.response.data.partner is always undefined,
    // which breaks the 409 resume logic in getUserRegister.
    if (
        error.response &&
        error.response.data?.data &&
        !error.config?.url?.includes('/api/keys')
    ) {
        try {
            const decryptedString = await decryptPayload(error.response.data.data);
            error.response.data = JSON.parse(decryptedString);
        } catch (decryptErr) {
            // Decryption failed — leave error.response.data as-is
            console.warn('[axiosConfig] Could not decrypt error response body:', decryptErr.message);
        }
    }

    // Handle Session Expiration: auto-renegotiate and retry once
    if (error.response?.status === 403 && error.response.data?.error === 'SESSION_EXPIRED') {
        if (!error.config._retry) {
            error.config._retry = true;
            console.warn('Session expired. Renegotiating keys...');
            keysReady = negotiateKeys();
            await keysReady;
            return api(error.config);
        }
    }

    return Promise.reject(error);
});

export default api;
