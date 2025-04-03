import React from "react";

export const CategoryCard = ({image, categoryName}) => {
  return (
    <div className="max-w-xs">
      <div className="w-[285px] h-[300px]">
        <img
          src={image}
          alt="Zen Bamboo Grove"
          className="w-full h-full object-container "
        />
      </div>
      <div className="p-4 text-center">
        <h1 className="text-2xl font-medium font-inter text-primary mb-2">
          {categoryName}
        </h1>
      </div>
    </div>
  );
};
