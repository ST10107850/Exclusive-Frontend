import React from "react";
import Footer_bg from "../assets/uploads/footer-bg.jpg";
import logo from "../assets/uploads/normal-header.svg";

export const Footer = () => {
  return (
    <div className="bg-background ">
      <div
        className="relative w-full flex-col py-24 h-auto bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${Footer_bg})`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-55"
          style={{
            backgroundColor: "#001219",
          }}
        ></div>
        <div className="flex flex-col just-center items-center z-10 mb-5">
          <h1 className="relative text-4xl font-bold max-w-[800px] font-inter text-center text-[42px] mb-5">
            Ready to Find your Perfect Plant?
          </h1>{" "}
          <p className="text-center text-base max-w-[400px]  font-Instrument Sans">
            Browse our online store or visit us in person to experience the
            beauty of nature.
          </p>
        </div>
        <a
          href="/shops"
          className="bg-button text-white text-[16px] px-8 py-4 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out "
        >
          Shop Now
        </a>
      </div>

      <div className="pt-16 pb-6 mx-[120.4px] flex justify-between border-b border-gray-400">
        <a href="/">
          <img src={logo} alt="Home" className="h-10" />
        </a>
        <ul className="flex space-x-4 text-3 ">
          <li>
            <a href="/" className="text-black">
              Home
            </a>
          </li>
          <li>
            <a href="/shops" className="text-black">
              Shop
            </a>
          </li>
          <li>
            <a href="/about" className="text-black">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="text-black">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex space-x-3">
          <a
            href="#"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-black transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5"
              fill="currentColor"
            >
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
            </svg>
          </a>

          <a
            href="#"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white hover:opacity-80 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-5 h-5"
              fill="currentColor"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8z"></path>
            </svg>
          </a>

          <a
            href="#"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-5 h-5 rounded-full text-black hover:bg-red-700 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-5 h-5"
              fill="currentColor"
            >
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zM232.145 337.591V175.185l142.739 81.205-142.739 81.201z"></path>
            </svg>
          </a>

          <a
            href="#"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-5 h-5 rounded-full text-black hover:bg-blue-500 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="currentColor"
            >
              <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.084 4.126H5.117L17.083 19.77Z"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center text-secondary py-6">
        <p>Copyright © 2025 Nhlakanipho eCommerce</p>
      </div>
    </div>
  );
};
