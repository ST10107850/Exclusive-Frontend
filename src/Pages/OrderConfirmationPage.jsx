import React from "react";
import { OrderConfirmation } from "../Components/OrderConfirmation";
import { EntryHeader } from "../Components/EntryHeader";

export const OrderConfirmationPage = () => {
  return (
    <div>
      <EntryHeader page="Checkout" currentStep={3}/>
      <OrderConfirmation />
    </div>
  );
};
