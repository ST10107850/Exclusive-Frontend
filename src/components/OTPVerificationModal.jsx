import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "./Loading";

export const OTPVerificationModal = ({ email, show, onClose }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }

    if (newOtp.join("").length === 6) {
      handleVerifyOTP(newOtp.join(""));
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerifyOTP = async (enteredOTP) => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/users/verify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp: enteredOTP }),
      });

      const data = await res.json();
      if (res.status !== 200) {
        throw new Error(data.message || "Verification failed");
      }

      console.log("OTP Verified:", data);
      setSuccess(true);

      setTimeout(() => {
        onClose();
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.error(err);
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center text-secondary bg-[#EBF5EE] bg-opacity-50 z-20">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-xl font-semibold mb-2 text-primaryColor">
          Verify Your Email
        </h2>
        <p className="text-gray-600 mb-4">
          We have sent an OTP to <span className="font-bold">{email}</span>.
          Please enter it below to verify your email address.
        </p>

        {success ? (
          <p className="text-green-500 font-semibold">
            ✅ Email verified successfully! Redirecting...
          </p>
        ) : (
          <>
            <div className="flex justify-center gap-2 mb-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="w-10 h-12 border border-gray-300 text-center text-lg font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              ))}
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {!success && otp.join("").length === 6 && (
             <Loading loadingMessage="Verifying OTP..." />
            )}

            {!success && otp.join("").length < 6 && (
              <button
                onClick={() => handleVerifyOTP(otp.join(""))}
                className="bg-primaryColor text-white px-4 py-2 rounded w-full mt-2"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            )}

            <p className="text-sm text-gray-500 mt-3">
              Didn’t receive the OTP?{" "}
              <button className="text-primaryColor font-semibold hover:underline">
                Resend OTP
              </button>
            </p>
          </>
        )}

        {!success && (
          <p className="mt-4 text-gray-600 text-sm">
            If you didn’t receive the OTP, please check your email or{" "}
            <span className="text-blue-600 font-semibold">
              request a new one.
            </span>
          </p>
        )}
      </div>
    </div>
  );
};
