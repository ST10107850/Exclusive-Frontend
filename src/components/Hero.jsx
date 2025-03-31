import Hero_bg from "../assets/uploads/home-hero-bg.jpg";

export const Hero = () => {
  return (
    <div
      className="relative w-full flex-col h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${Hero_bg})`,
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
          Welcome to urban jungle co.
        </p>
        <h1 className="relative text-4xl font-bold max-w-[800px] font-inter text-center text-[64px]">
          Discover the Beauty of Nature at Your Fingertips
        </h1>
      </div>
      <a
        href="#"
        className="bg-button text-white text-[16px] px-8 py-4 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out mt-6"
      >
        Shop Now
      </a>
    </div>
  );
};
