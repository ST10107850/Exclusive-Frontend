import React from 'react'
import { useState } from 'react';
import images1 from "../assets/uploads/product-05-400x434.jpg";
import { useAuth } from '../Hooks/useAuth';

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const {login, error}  = useAuth();

    const submitHandler=(e)=>{
       e.preventDefault();

       login(email, password)
    }
  return (
    <div className="flex h-[75vh] mt-20">
      <div className="w-1/2 md:block hidden h-full bg-[#d0e4ec] ">
        <img
          src={images1}
          alt="Login Illustration"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="md:w-1/2 w-full flex items-center justify-center">
        <div className="max-w-sm w-full">
          <h2 className="text-3xl font-bold uppercase text-primaryColor text-center mb-8">
            Welcome Back!
          </h2>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={submitHandler}>
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
              {/* <img src={Google} alt="Google Logo" className="w-5 h-5 mr-2" /> */}
              Sign In with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
