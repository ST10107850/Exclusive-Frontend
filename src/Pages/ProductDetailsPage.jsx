import {ProductDetails} from "../Components/ProductDetails";
import { Reviews } from "../Components/Reviews";
import { useFetchProductDetails } from "../Hooks/useFetchProductDetails";

export const ProductDetailsPage = () => {
  const { product } = useFetchProductDetails();
  return (
    <div>
    
      <ProductDetails product={product} />
      <Reviews />
    </div>
  );
};
