import React from "react";
import category from "../assets/uploads/house-plant.jpg";

export const CategoryCard = () => {
  return (
    <div className="max-w-xs">
      <div className="w-[285px] h-[300px]">
        <img
          src={category}
          alt="Zen Bamboo Grove"
          className="w-full h-full object-container "
        />
      </div>
      <div className="p-4 text-center">
        <h1 className="text-2xl font-medium font-inter text-primary mb-2">
          Houseplants
        </h1>
      </div>
    </div>
  );
};
