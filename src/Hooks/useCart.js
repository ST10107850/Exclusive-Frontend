import { useEffect, useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = async (product, quantity) => {
    try {
      const res = await fetch(`/api/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: [{ product, quantity }] }),
      });

      if (!res.ok) {
        throw new Error("Failed to add to cart");
      }
      const data = await res.json();
      alert("Product added to cart successfully!");
    } catch (error) {
      console.log("Error:", error.message);
      alert("Failed to add product to cart. Please try again.");
    }
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch(`/api/cart`);

        if (!res.ok) {
          throw new Error("Failed to fetch cart");
        }
        const data = await res.json();
        if (data && data[0] && Array.isArray(data[0].items)) {
          const filteredItems = data[0].items.filter(
            (item) => item.product !== null
          );
          setCart({ ...data[0], items: filteredItems });
        } else {
          setCart(data[0]);
          console.log("No valid items found in the cart.");
        }
      } catch (error) {
        console.log("Error:", error.message);
      }
    };

    fetchCart();
  }, []);

  const updateCartItems = async (itemId, newQuantity) => {
    if (newQuantity < 1) {
      alert("Quantity must not be less than 1.");
      return;
    }

    try {
      const res = await fetch(`/api/cart/${itemId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: newQuantity }),
      });

      if (!res.ok) {
        throw new Error("Failed to update cart item");
      }
     await res.json();

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
    }
  };


  const removeCartItem = async (itemId) => {
    try {
      const res = await fetch(`/api/cart/${itemId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to remove cart item");
      }
      await res.json();

      setCart((prevCart) => ({
        ...prevCart,
        items: prevCart.items.filter((item) => item._id !== itemId),
      }));
      alert("Cart item removed successfully!");
    } catch (error) {
      console.log("Error:", error.message);
      alert("Failed to remove cart item. Please try again.");
    }
  };
  return { addToCart, cart, updateCartItems, removeCartItem };
};
