import React, { useState } from "react";
import { ProductCard } from "../Cards/ProductCard";
import { useLocation } from "react-router-dom";

export const Tranding = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalItems = 10;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [sortOrder, setSortOrder] = useState("asc");

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div className="flex flex-col pt-[100.4px] mb-base pb-20 mx-[120px] px-10 justify-center items-center">
      {isHome && (
        <>
          <h1 className="font-inter text-5xl mb-20">Trending Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
            {[...Array(6)].map((_, index) => (
              <ProductCard key={index} />
            ))}
          </div>
        </>
      )}
      {!isHome && (
        <div className="w-full">
          <div className="flex justify-between items-center mb-5 px-18">
            <h2 className="font-inter text-base text-secondary">
              Showing all {totalItems} results
            </h2>
            <div className="flex mb-5 px-5 space-x-4">
              <button className="px-4 py-2 border border-dotted border-gray-400">
                Category Filter
              </button>
              <select
                value={sortOrder}
                onChange={handleSortChange}
                className="px-4 py-2 border border-dotted border-gray-400 "
              >
                <option value="asc">Sort: Ascending</option>
                <option value="desc">Sort: Descending</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
            {[...Array(itemsPerPage)].map((_, index) => (
              <ProductCard key={index} />
            ))}
          </div>
          <div className="mt-10 flex justify-center gap-4">
            <button
              className="px-4 py-2 border rounded-md"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="px-4 py-2">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="px-4 py-2 border rounded-md"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
