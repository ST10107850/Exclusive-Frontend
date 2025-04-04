import { useEffect, useState } from "react";
import {
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateCartQuantityMutation,
  useRemoveFromCartMutation,
} from "../Api/cartSlice";

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { data, isSuccess } = useGetCartQuery();
  const [addToCartMutation] = useAddToCartMutation();
  const [updateCartQuantity] = useUpdateCartQuantityMutation();
  const [removeFromCartMutation] = useRemoveFromCartMutation();

  const addToCart = async (product, quantity) => {
    try {
      setIsLoading(true);

      const response = await addToCartMutation({
        items: [{ product, quantity }],
      }).unwrap();

      console.log("Add to cart response:", response);
      if (response?.error) {
        throw new Error(response.error);
      }
      alert("Product added to cart successfully!");
    } catch (error) {
      console.log("Error:", error);
      alert("Failed to add product to cart.");
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
      window.location.reload();
    }
  };

  useEffect(() => {
    // setIsLoading(true);
    if (
      isSuccess &&
      data &&
      Array.isArray(data) &&
      data.length > 0 &&
      Array.isArray(data[0].items)
    ) {
      const filteredItems = data[0].items.filter(
        (item) => item.product !== null
      );
      setCart({ ...data[0], items: filteredItems });
    } else {
      setCart({ items: [] });
    }
    // setTimeout(() => setIsLoading(false), 1000);
  }, [data, isSuccess, isLoading]);

  const updateCartItems = async (itemId, newQuantity) => {
    if (newQuantity < 1) {
      alert("Quantity must not be less than 1.");
      return;
    }

    try {
      setIsLoading(true);
      await updateCartQuantity({
        id: itemId,
        quantity: newQuantity,
      }).unwrap();

      setCart((prevCart) => {
        const updatedItems = prevCart.items.map((item) =>
          item._id === itemId ? { ...item, quantity: newQuantity } : item
        );
        return { ...prevCart, items: updatedItems };
      });

      alert("Cart item updated successfully!");
    } catch (error) {
      console.log("Error:", error.message);
      alert("Failed to update cart item. Please try again.");
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  const removeCartItem = async (itemId) => {
    try {
      setIsLoading(true);
      await removeFromCartMutation(itemId).unwrap();

      setCart((prevCart) => ({
        ...prevCart,
        items: prevCart.items.filter((item) => item._id !== itemId),
      }));

      alert("Cart item removed successfully!");
    } catch (error) {
      console.log("Error:", error.message);
      alert("Failed to remove cart item. Please try again.");
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
      window.location.reload();
    }
  };

  return {
    addToCart,
    cart,
    updateCartItems,
    removeCartItem,
    isLoading,
  };
};
