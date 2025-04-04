import { useEffect, useState } from "react";
import { useGetCategoriesQuery } from "../Api/useCategorySlice";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const { data, isSuccess } = useGetCategoriesQuery();

  useEffect(() => {
    if (isSuccess && data) {
      setCategories(data.data);
      setLoading(false);
    }
  }, [isSuccess, data]);

  return {
    categories,
    loading,
  };
};
