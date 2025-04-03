import React, {  useEffect } from 'react'
import {CategoryCard} from "../Cards/CategoryCard.jsx"
import { useCategories } from '../Hooks/useCategories.js';
export const Categories = () => {

  const {categories, fetchCategories} = useCategories();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col pt-[120.4px] mb-base pb-20 mx-[120px] px-10 justify-center items-center">
      <h1 className="font-inter text-5xl mb-20">Our Categories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
        {categories && Array.isArray(categories) && categories.map((category) => (
          <CategoryCard
            key={category._id}
            categoryName={category.categoryName}
            image={category.ImageUri}
          />
        ))}
      </div>
    </div>
  );
}
