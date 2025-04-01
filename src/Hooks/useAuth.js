import React, { useEffect, useState } from "react";
import { useLoginMutation } from "../Api/authApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../Api/apiSlice"; 

export const useAuth = () => {
  const [error, setError] = useState("");

  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      console.log("User logged in, navigating...");
      navigate("/");
    }
  }, [navigate, userInfo]);

  const loginHandler = async (email, password) => {
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      alert("Please fill in all fields.");
      return;
    }

    try {
      console.log("Attempting login with:", email, password);

      const response = await login(
        { email, password },
        {
          headers: { "Content-Type": "application/json" }, // ✅ Ensures JSON format
        }
      ).unwrap();

      console.log("API Response:", response);
      if (!response || !response.data) {
        throw new Error("Invalid response from server");
      }

      dispatch(setCredentials({ ...response.data }));
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      console.error("Login Error:", err);

      // Handle specific errors
      let errorMessage = "Something went wrong.";
      if (err?.originalStatus === 401) {
        errorMessage = "Invalid email or password.";
      } else if (err?.status === "PARSING_ERROR") {
        errorMessage = "Server error: Please check API response format.";
      } else if (err?.data?.message) {
        errorMessage = err.data.message;
      } else if (err?.error) {
        errorMessage = err.error;
      }

      setError(errorMessage);
      alert(errorMessage);
    }
  };

  return { login: loginHandler, error };
};
