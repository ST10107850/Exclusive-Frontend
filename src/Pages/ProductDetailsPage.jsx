import { useFetchProductDetails } from "../Hooks/useFetchProductDetails";

export const ProductDetailsPage = () => {
  const { product } = useFetchProductDetails();
  return (
    <div>
    
      {/* <ProductDetails product={product} /> */}
      {/* <Reviews /> */}
    </div>
  );
};
