import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../Api/apiSlice";
import { useRegisterUserMutation } from "../Api/authApiSlice";

export const useRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);

  const dispatch = useDispatch();
  const [registerUser] = useRegisterUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await registerUser({
        email,
        password,
        confirmPassword,
      }).unwrap();

      dispatch(setCredentials(response.data));
      alert("Registration successful! Please verify your email.");
      setShowOTPModal(true);
    } catch (err) {
      console.error("Error:", err?.data?.message || err);
      setError(err?.data?.message || "Registration failed.");
      alert(err?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleSubmit,
    error,
    loading,
    showOTPModal,
    setShowOTPModal,
  };
};
