import React from 'react'
import contact from "../assets/uploads/contact-bg.jpg";

export const ContactHero = () => {
  return (
    <div>
      <div
        className="relative w-full flex-col h-[70vh] bg-cover bg-center flex items-center pt-20 justify-center text-white"
        style={{
          backgroundImage: `url(${contact})`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-55"
          style={{
            backgroundColor: "#001219",
          }}
        ></div>
        <div className="flex flex-col z-10">
          <p className="text-center uppercase text-[18px] tracking-widest mb-5 font-Instrument Sans">
            Contact Us
          </p>
          <h1 className="relative text-4xl font-bold max-w-[800px] font-inter text-center text-[64px]">
            Let’s Connect
          </h1>
        </div>
      </div>
    </div>
  );
}
