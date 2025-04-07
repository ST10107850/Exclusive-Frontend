import { useState } from "react";

export const useOrder = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createOrder = async (orderData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/orders/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        const error = await response.json();
        console.log("Backend Error:", error); // Log the error from the backend
        throw new Error(error.message || "Failed to create order");
      }

      const createdOrder = await response.json();
      console.log(createOrder);
      
      return createdOrder;
    } catch (err) {
      setError(err.message || "An error occurred while placing the order");
    } finally {
      setTimeout(() => setLoading(false), 1000);
      // window.location.reload();
    }
  };

  return { createOrder, loading, error };
};
