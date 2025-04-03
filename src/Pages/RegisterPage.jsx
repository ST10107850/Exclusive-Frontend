import React from "react";
import { useState } from "react";
import images1 from "../assets/uploads/product-05-400x434.jpg";
import { useRegister } from "../Hooks/useRegister";

export const RegisterPage = () => {

  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleSubmit,
    error,
    loading,
  } = useRegister();


  return (
    <div className="flex h-[75vh] my-20">
      <div className="w-1/2 md:block hidden h-full bg-[#d0e4ec]">
        <img
          src={images1}
          alt="Login Illustration"
          className="h-full w-full object-container"
        />
      </div>

      <div className="md:w-1/2 w-full flex items-center justify-center">
        <div className="max-w-sm w-full">
          <h2 className="text-3xl font-bold uppercase text-primaryColor text-center mb-8">
            Welcome Back!
          </h2>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 "
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="password">
                Confirm Password
              </label>
              <input
                type="conpasss"
                id="conpass"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex justify-end mb-4">
              <a href="#" className="text-blue-600 hover:underline text-sm">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-button text-white py-2 transition mb-4"
            >
              Sign In
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center border py-2 hover:bg-gray-100 transition"
            >
              Sign In with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
