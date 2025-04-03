import React, { useEffect, useState } from "react";
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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registerUser] = useRegisterUserMutation();
    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
      if (userInfo) {
        console.log("User logged in, navigating...");
        navigate("/login");
      }
    }, [navigate, userInfo]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const payload = { email, password , confirmPassword};
    setLoading(true);
    setError("");

    try {
      const response = await registerUser(payload).unwrap();

      console.log(response);
      dispatch(setCredentials(response.data));

      alert(response.status)
      navigate("/login"); 
    } catch (err) {
      console.error("Error:", err.data.message || err);
      setError(err.message || "Registration failed."); 
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
    loading, // For showing a loading spinner or similar indicator
  };
};
