import React from "react";
import product from "../assets/uploads/product-01-400x434.jpg";

export const ProductCard = () => {
  return (
    <div className="max-w-xs">
      <div className="w-[386.66px] h-[429px]">
        <img
          src={product}
          alt="Zen Bamboo Grove"
          className="w-full h-full object-container "
        />
      </div>
      <div className="p-4">
        <p className="text-lg mb-3">☆☆☆☆☆ </p>
        <h1 className="text-base font-medium font-inter text-primary mb-2">
          Zen Bamboo Grove
        </h1>
        <p className="text-sm text-secondary font-light mb-2">Indoor Plants</p>

        <h2 className="text-sm font-medium text-primary mb-2">R90.00</h2>
      </div>
    </div>
  );
};
