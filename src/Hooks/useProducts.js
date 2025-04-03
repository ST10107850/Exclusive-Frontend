import { useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProducts = async (page = 1, limit = 6) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/product?currentPage=${page}&limit=${limit}&sortBy=createdAt&sortOrder=desc`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();
      setProducts(data.data);
      setTotalPages(data.totalPages);
      setCurrentPage(data.currentPage);
      
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    products,
    fetchProducts,
    loading,
    totalPages,
    currentPage,
    setCurrentPage,
  };
};
