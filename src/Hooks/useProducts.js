import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../Api/useProductSlice";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const {data, isSuccess} = useGetProductsQuery({page :currentPage, limit: 6});

  useEffect(() => {
    if (isSuccess && data) {
      setProducts(data.data);
      setTotalPages(data.totalPages);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [isSuccess, data]);

  return {
    products,
    loading,
    totalPages,
    currentPage,
    setCurrentPage,
  };
};
