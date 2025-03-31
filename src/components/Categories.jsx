import React from 'react'
import {CategoryCard} from "../Cards/CategoryCard.jsx"
export const Categories = () => {
  return (
    <div className="flex flex-col pt-[120.4px] mb-base pb-20 mx-[120px] px-10 justify-center items-center">
      <h1 className="font-inter text-5xl mb-20">Our Categories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
}
