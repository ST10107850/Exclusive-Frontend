import React, { useEffect } from "react";
import { ProductCard } from "../Cards/ProductCard";
import { useLocation } from "react-router-dom";
import { useProducts } from "../Hooks/useProducts";

export const Tranding = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const itemsPerPage = 6;

  const { products, fetchProducts, totalPages, currentPage, setCurrentPage } =
    useProducts();

  useEffect(() => {
    fetchProducts(currentPage, itemsPerPage);
  }, [currentPage]);

 
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      fetchProducts(newPage, itemsPerPage);
    }
  };

  return (
    <div className="flex flex-col pt-[100.4px] mb-base pb-20 mx-[120px] px-10 justify-center items-center">
      {isHome && (
        <>
          <h1 className="font-inter text-5xl mb-20">Trending Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                image={product.ImageUri?.[0] || "fallback-image-url"}
                productName={product.productName}
                categoryName={
                  product.categoryId?.categoryName || "Unknown Category"
                }
                price={product.price}
                id={product._id}
              />
            ))}
          </div>
        </>
      )}

      {!isHome && (
        <div className="w-full">
          <div className="flex justify-between items-center mb-5 px-18">
            <h2 className="font-inter text-base text-secondary">
              Showing {products.length} of {totalPages * itemsPerPage} results
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                image={product.ImageUri?.[0] || "fallback-image-url"}
                productName={product.productName}
                categoryName={
                  product.categoryId?.categoryName || "Unknown Category"
                }
                price={product.price}
                id={product._id}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-10 flex justify-center gap-4">
              <button
                className="px-4 py-2 border rounded-md disabled:opacity-50"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="px-4 py-2">
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="px-4 py-2 border rounded-md disabled:opacity-50"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
