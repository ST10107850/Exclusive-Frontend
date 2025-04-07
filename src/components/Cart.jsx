import { CircleX, Minus, Plus } from "lucide-react";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Hooks/useCart";
import { Loading } from "./Loading";

export const Cart = () => {
  const { cart, updateCartItems, removeCartItem, isLoading } = useCart();
  const cartItems = useMemo(() => cart?.items || [], [cart]);

  const { subtotal, total } = useMemo(() => {
    let subtotal = 0;
    let total = 0;

    cartItems.forEach((item) => {
      const price = parseFloat(item.product?.price) || 0;
      const quantity = parseInt(item.quantity, 10) || 0;
      const itemSubtotal = price * quantity;
      subtotal += itemSubtotal;
      total += itemSubtotal;
    });

    return {
      subtotal: subtotal.toFixed(2),
      total: total.toFixed(2),
    };
  }, [cartItems]);

  return (
    <div className="mx-[120px] p-20">
      <div className="flex space-x-6 w-full h-auto">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-3xl font-bold text-secondary mb-4">
              Your Cart is Empty
            </h1>
            <a
              href="/shops"
              className="bg-button text-white py-2 px-4 rounded-full text-lg transition duration-300 hover:bg-opacity-80"
            >
              Return to Shop
            </a>
          </div>
        ) : (
          <>
            <table className="flex-1 table-auto h-auto rounded-2xl px-5 border border-gray-300">
              <thead className="bg-[#EBF5EE] text-center">
                <tr>
                  <th className="p-3 w-1/4">Product</th>
                  <th className="p-3 w-1/8 text-start">Price</th>
                  <th className="p-3 w-1/8">Quantity</th>
                  <th className="p-3 w-1/8">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="4" className="text-center p-4 bg-transparent">
                      <div className="flex justify-center items-center space-x-2 ">
                        <div className="w-8 h-8 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-primaryColor"></div>
                        <span>Loading...</span>
                      </div>
                    </td>
                  </tr>
                ) : cartItems.length > 0 ? (
                  cartItems.map((item) => {
                    if (!item?.product) return null;

                    const price = parseFloat(item.product?.price) || 0;
                    const quantity = parseInt(item.quantity, 10) || 0;
                    const itemSubtotal = (price * quantity).toFixed(2);
                    return (
                      <tr key={item._id} className="border-b border-gray-300">
                        <td className="flex flex-row space-x-4 items-center p-4">
                          <CircleX
                            className="text-gray-400 hover:cursor-pointer"
                            onClick={() => removeCartItem(item._id)}
                          />
                          <img
                            src={item.product?.ImageUri}
                            alt={item.product.productName}
                            className="w-14 h-14"
                          />
                          <p className="text-button">
                            {item.product.productName.slice(0, 30)}
                          </p>
                        </td>
                        <td className="p-4 text-secondary">
                          R{price.toFixed(2)}
                        </td>
                        <td className="p-4 text-secondary text-center">
                          <div className="flex items-center justify-center space-x-0 border border-gray-300">
                            <button
                              className="bg-primaryColor text-gray-400 text-xl flex items-center border-r border-gray-300 justify-center font-bold w-10 h-10 hover:cursor-pointer"
                              onClick={() =>
                                updateCartItems(item._id, quantity - 1)
                              }
                            >
                              <Minus className="w-5 h-5" />
                            </button>
                            <span className="w-10 h-10 flex text-base text-secondary items-center border-r border-gray-300 justify-center bg-secondaryColor">
                              {quantity}
                            </span>
                            <button
                              className="bg-primaryColor text-gray-400 flex items-center justify-center font-bold w-10 h-10 hover:cursor-pointer"
                              onClick={() =>
                                updateCartItems(item._id, quantity + 1)
                              }
                            >
                              <Plus className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                        <td className="p-4 text-secondary text-center">
                          R{itemSubtotal}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr className="border-b border-gray-300">
                    <td colSpan="4" className="text-center p-4 text-secondary">
                      No items in cart
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            <div className="min-w-[250px] w-1/4 h-[30vh] flex-shrink-0 border border-gray-300">
              <div className="flex justify-center bg-secondaryColor py-3 px-4 bg-[#EBF5EE] text-xl text-secondary border-b border-gray-300">
                <span>Cart Summary</span>
              </div>

              <div className="px-6">
                <div className="flex justify-between text-secondary border-b border-gray-300 py-4">
                  <span className="font-inter font-bold">Subtotal:</span>
                  <span>R{subtotal}</span>
                </div>

                <div className="flex justify-between text-secondary border-b border-gray-300 py-4">
                  <span className="font-inter font-bold">Total:</span>
                  <span>R{total}</span>
                </div>
              </div>

              <div className="p-8">
                <Link
                  to="/checkout"
                  className="block w-full bg-button rounded-full text-white font-semibold py-3 hover:bg-blue-300 transition text-center"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
