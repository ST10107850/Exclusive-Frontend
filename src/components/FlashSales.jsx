import Middle from "../assets/uploads/middle-cta.jpg";

export const FlashSales = () => {
  return (
    <div
      className="relative w-full flex-col py-24 h-auto bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${Middle})`,
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
          Flash Sale: Up to 50% Off On Select Items!
        </h1>{" "}
        <p className="text-center text-base max-w-[700px]  font-Instrument Sans">
          Don’t miss out on our flash sale event! For a limited time, enjoy up
          to 50% off on a selection of our best-selling products.
        </p>
      </div>
      <a
        href="#"
        className="border border-white text-white text-[16px] px-8 py-4 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out "
      >
        Shop Now
      </a>
    </div>
  );
};
