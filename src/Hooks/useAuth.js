import React, { useEffect, useState } from "react";
import { useLoginMutation } from "../Api/authApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../Api/apiSlice";

export const useAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      console.log("User logged in, navigating...");
      navigate("/");
    }
  }, [navigate, userInfo]);

  const loginHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      alert("Please fill in all fields.");
      return;
    }

    const payload = { email, password };
    setError("");

    try {
      const res = await login(payload).unwrap();

      console.log("Login user: ", res.data);

      dispatch(setCredentials({ ...res.data }));
      alert("Login successful!");

      navigate("/");
    } catch (err) {
      console.error("Login Error:", err);
      alert(err.data.message || err.error || "Something went wrong.");
    }
  };

  return {  loginHandler, error, email, setEmail, password, setPassword };
};
