import React from 'react'

export const ShopHero = () => {
  return (
    <div>
      <div
        className="relative w-full flex-col h-[50vh] bg-cover bg-center flex items-center pt-20 justify-center text-white"
        style={{
          backgroundImage: `url(https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/shop-bg.jpg)`,
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
          <h1 className="relative text-4xl font-bold max-w-[800px] font-inter text-center text-[64px]">
            Shop
          </h1>
        </div>
      </div>
    </div>
  );
}
