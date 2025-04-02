import { Cart } from "../Components/Cart";
import { EntryHeader } from "../Components/EntryHeader";


export const CartPage = () => {
 

  return (
    <div>
      <EntryHeader currentStep={1} page="Cart"/>
      <Cart/>
    </div>
  );
};
