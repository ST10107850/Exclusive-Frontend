import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../Api/useProductSlice";

export const useFetchProductDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductByIdQuery(id, { skip: !id });

  const fetchedData = data?.data || null;

  return { product: fetchedData, isLoading, error };
};
