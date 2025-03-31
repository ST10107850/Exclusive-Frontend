import React from "react";
import { ProductCard } from "../Cards/ProductCard";

export const Tranding = () => {
  return (
    <div className="flex flex-col pt-[120.4px] mb-base pb-20 mx-[120px] px-10 justify-center items-center">
      <h1 className="font-inter text-5xl mb-20">Trending Products</h1>

      {/* Grid Container for 3 Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
