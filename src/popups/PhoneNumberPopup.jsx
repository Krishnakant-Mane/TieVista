import React, { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { CircleCheck, Send } from "lucide-react";
import { securePost } from "../api/secureClient";

/* ─────────────────────────────────────────────────────────
   OTP single-digit box
───────────────────────────────────────────────────────── */
function OtpBox({ index, otpValues, setOtpValues, inputRefs }) {
  const handleChange = (e) => {
    const val = e.target.value.replace(/\D/g, "").slice(-1);
    const next = [...otpValues];
    next[index] = val;
    setOtpValues(next);
    if (val && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    const next = [...otpValues];
    [...paste].forEach((ch, i) => {
      if (index + i < 6) next[index + i] = ch;
    });
    setOtpValues(next);
    inputRefs.current[Math.min(index + paste.length, 5)]?.focus();
  };

  return (
    <input
      ref={(el) => (inputRefs.current[index] = el)}
      type="text"
      inputMode="numeric"
      maxLength={1}
      value={otpValues[index]}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      className="w-11 h-12 text-center text-lg font-semibold border border-gray-300 rounded-lg outline-none text-black bg-white transition-all focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] shrink-0"
    />
  );
}

/* ─────────────────────────────────────────────────────────
   Main Component
───────────────────────────────────────────────────────── */
const PhoneNumberPopup = ({ onClose }) => {
  const [showOtp, setShowOtp] = useState(false);
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [consent, setConsent] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [apiError, setApiError] = useState("");
  const [resendTimer, setResendTimer] = useState(0);

  const inputRefs = useRef([]);
  const timerRef = useRef(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { name: "", phone: "" } });

  const phoneValue = watch("phone");
  const nameValue = watch("name");

  /* ── resend countdown ── */
  const startResendTimer = () => {
    setResendTimer(30);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setResendTimer((t) => {
        if (t <= 1) { clearInterval(timerRef.current); return 0; }
        return t - 1;
      });
    }, 1000);
  };

  useEffect(() => () => clearInterval(timerRef.current), []);

  /* ── send OTP ── */
  const sendOtp = async (phone) => {
    setSendingOtp(true);
    setApiError("");
    try {
      await securePost("/gupshup/send-otp", { phone });
      setShowOtp(true);
      startResendTimer();
      setOtpValues(["", "", "", "", "", ""]);
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    } catch (err) {
      setApiError(err?.message || "Failed to send OTP. Please try again.");
    } finally {
      setSendingOtp(false);
    }
  };

  /* ── form submit → step 1: send OTP ── */
  const onSubmit = async (data) => {
    if (!consent) { setApiError("Please give your consent to continue."); return; }
    await sendOtp(data.phone);
  };

  /* ── verify OTP + save lead ── */
  const verifyOtp = async () => {
    const otp = otpValues.join("");
    if (otp.length < 6) { setOtpError("Please enter all 6 digits."); return; }
    setVerifyingOtp(true);
    setOtpError("");
    setApiError("");
    try {
      await securePost("/gupshup/verify-otp", {
        phone: phoneValue,
        otp: Number(otp),
      });
      setIsVerified(true);
      await securePost("/leads/saveLead", {
        name: nameValue,
        phone: phoneValue,
      });
      setSuccess(true);
    } catch (err) {
      setOtpError(err?.message || "Invalid OTP. Please try again.");
    } finally {
      setVerifyingOtp(false);
    }
  };

  /* ─────────────────────────────────────────────────────
     RENDER
  ───────────────────────────────────────────────────── */
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-transparent">
        <div className="relative w-full max-w-[520px] min-h-[500px] bg-white rounded-[18px] shadow-2xl overflow-hidden font-[Inter,_'Segoe_UI',_sans-serif]">

          {/* Close Button */}
          <button
            type="button"
            onClick={() => { onClose(); }}
            className="absolute top-6 right-7 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* ══════════════ FORM PANEL ══════════════ */}
          <div
            className={`absolute inset-0 flex flex-col items-center px-8 pt-7 pb-7 overflow-y-auto transition-all duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] will-change-transform ${success ? "-translate-x-[110%] opacity-0" : "translate-x-0 opacity-100"
              }`}
          >
            {/* Logo */}
            <div className="flex flex-col items-center mb-3">
              <img
                src="/icon.png"
                alt="TieVista Icon"
                className="w-[52px] h-[52px] object-contain mb-1"
              />
              <img
                src="/TieVistaVerticalLogo.png"
                alt="TieVista"
                className="h-[17px] object-contain"
              />
            </div>

            {/* Tagline */}
            <p className="text-center text-base font-medium text-black mb-6 leading-[1.5] max-w-sm poppins-sans">
              Receive institutional-grade daily market updates on WhatsApp.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full" noValidate>

              {/* ── NAME ── */}
              <div className="mb-4">
                <label className="block text-[11px] font-medium tracking-widest text-black uppercase mb-1.5" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                  NAME <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className={`w-full px-3.5 py-3 border rounded-lg text-[15px] text-black outline-none bg-white transition-all focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] ${errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* ── CONTACT NO ── */}
              <div className="mb-3.5">
                <label className="block text-[11px] font-medium tracking-widest text-black uppercase mb-1.5" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                  CONTACT NO<span className="text-red-500">*</span>
                </label>

                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: "Phone number is required" }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <PhoneInput
                      defaultCountry="in"
                      value={value || ""}
                      onChange={(phone) => {
                        onChange(phone);
                        if (showOtp) setShowOtp(false);
                        if (isVerified) setIsVerified(false);
                      }}
                      onBlur={onBlur}
                      disabled={isVerified}
                      className="flex gap-2 w-full"
                      inputClassName={`!w-full !flex-1 !px-2 !py-3 !border !rounded !focus:border-[#d4af37] !outline-none !transition-all !placeholder:text-gray-300 !text-[16px] !text-black !h-auto ${isVerified
                        ? "!bg-green-50 !border-green-500"
                        : errors.phone
                          ? "!border-red-500"
                          : "!border-gray-300"
                        }`}
                      countrySelectorStyleProps={{
                        buttonClassName: `!w-24 !px-3 !py-3 !border !rounded !bg-white !h-auto !flex !items-center !justify-between !text-sm !text-black ${isVerified ? "!border-green-500" : "!border-gray-300"
                          }`,
                      }}
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* ── OTP BOXES + RESEND ── */}
              {showOtp && (
                <div className="mb-3.5">
                  <div className="flex items-center gap-2 flex-nowrap">
                    {otpValues.map((_, i) => (
                      <OtpBox
                        key={i}
                        index={i}
                        otpValues={otpValues}
                        setOtpValues={setOtpValues}
                        inputRefs={inputRefs}
                      />
                    ))}

                    {/* RESEND */}
                    <button
                      type="button"
                      disabled={resendTimer > 0 || sendingOtp}
                      onClick={() => sendOtp(phoneValue)}
                      className={`ml-1 flex items-center gap-1.5 px-3.5 py-3 rounded-xl text-[13px] font-bold tracking-wide whitespace-nowrap shrink-0 border-none transition-all duration-200 ${resendTimer > 0
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
                        : "text-white cursor-pointer shadow-[0_2px_8px_rgba(197,162,39,0.35)]"
                        }`}
                      style={
                        resendTimer === 0
                          ? { background: "linear-gradient(135deg,#c9a227 0%,#e5c65a 50%,#c9a227 100%)" }
                          : {}
                      }
                    >
                      <Send size={13} />
                      {resendTimer > 0 ? `${resendTimer}s` : "RESEND"}
                    </button>
                  </div>

                  {otpError && (
                    <p className="text-red-500 text-xs mt-1.5">{otpError}</p>
                  )}
                </div>
              )}

              {/* API error */}
              {apiError && (
                <p className="text-red-500 text-xs mb-2.5">{apiError}</p>
              )}

              {/* ── Consent checkbox ── */}
              <div className="flex items-start gap-2.5 mb-5 mt-1">
                <div
                  onClick={() => setConsent((c) => !c)}
                  className={`mt-0.5 w-5 h-5 min-w-[20px] rounded flex items-center justify-center cursor-pointer transition-all duration-200 border-2 ${consent
                    ? "bg-[#c9a227] border-[#c9a227]"
                    : "bg-white border-gray-400"
                    }`}
                >
                  {consent && (
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                      <path
                        d="M1 4L4.5 7.5L11 1"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <span className="lg:text-[10px] text-[8px] text-black leading-relaxed poppins-sans">
                  "I give consent to receiving daily market updates from TieVista
                  Global Private Wealth on my mobile number via WhatsApp".
                </span>
              </div>

              {/* ── Action button ── */}
              {!showOtp ? (
                <button
                  type="submit"
                  disabled={isSubmitting || sendingOtp}
                  className={`w-full py-3.5 rounded-xl text-white font-bold text-[15px] tracking-wider border-none shadow-[0_3px_12px_rgba(197,162,39,0.4)] transition-opacity duration-200 ${isSubmitting || sendingOtp ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
                    }`}
                  style={{ background: "linear-gradient(135deg,#c9a227 0%,#e5c65a 50%,#c9a227 100%)" }}
                >
                  {sendingOtp ? "Sending OTP…" : "GET OTP"}
                </button>
              ) : (
                <button
                  type="button"
                  disabled={verifyingOtp}
                  onClick={verifyOtp}
                  className={`w-full py-3.5 rounded-xl text-white font-bold text-[15px] tracking-wider border-none shadow-[0_3px_12px_rgba(197,162,39,0.4)] transition-opacity duration-200 ${verifyingOtp ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
                    }`}
                  style={{ background: "linear-gradient(135deg,#c9a227 0%,#e5c65a 50%,#c9a227 100%)" }}
                >
                  {verifyingOtp ? "Verifying…" : "VERIFY & REGISTER"}
                </button>
              )}
            </form>
          </div>

          {/* ══════════════ SUCCESS PANEL ══════════════ */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center px-10 py-12 gap-7 transition-all duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] will-change-transform ${success ? "translate-x-0 opacity-100" : "translate-x-[110%] opacity-0"
              }`}
          >
            {/* Gold CircleCheck */}
            <div className="w-[100px] h-[100px] flex items-center justify-center ">
              <CircleCheck
                size={120}
                strokeWidth={1.6}
                color="#c9a227"
              />
            </div>

            {/* Text */}
            <div className="text-center">
              <h2 className="text-[26px] font-extrabold text-black mb-3" style={{ fontFamily: "'Georgia', serif" }}>
                Registration Successful
              </h2>
              <p className="text-[15px] text-black leading-relaxed max-w-[300px] mx-auto poppins-sans">
                You will now receive daily global market updates on WhatsApp
              </p>
            </div>

            {/* Optional close */}
            {onClose && (
              <button
                onClick={onClose}
                className="mt-1 px-11 py-3 rounded-xl text-white font-bold text-sm tracking-wider border-none cursor-pointer shadow-[0_3px_12px_rgba(197,162,39,0.35)]"
                style={{ background: "linear-gradient(135deg,#c9a227 0%,#e5c65a 50%,#c9a227 100%)" }}
              >
                CLOSE
              </button>
            )}
          </div>

          {/* Height keeper */}
          <div className="min-h-[500px] invisible" />
        </div>
      </div>
    </>
  );
};

export default PhoneNumberPopup;