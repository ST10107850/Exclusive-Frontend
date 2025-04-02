import { CircleX, Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const cartItems = [
  {
    image:
      "https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/product-04.jpg",
    productName: "Wedding Flower Bouquet",
    price: 500,
  },
  {
    image:
      "https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/product-04.jpg",
    productName: "Wedding Flower Bouquet",
    price: 500,
  },
  {
    image:
      "https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/product-04.jpg",
    productName: "Wedding Flower Bouquet",
    price: 500,
  },
  {
    image:
      "https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/product-04.jpg",
    productName: "Wedding Flower Bouquet",
    price: 500,
  },
  {
    image:
      "https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/product-04.jpg",
    productName: "Wedding Flower Bouquet",
    price: 500,
  },
];

export const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const subtotal = cartItems[0].price * quantity;
  return (
    <div className="mx-[120px] p-20">
      <div className="flex space-x-6 w-full h-auto">
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
            {cartItems.map((item, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="flex flex-row space-x-4 items-center p-4">
                  <CircleX className="text-gray-400" />
                  <img
                    src={item.image}
                    alt={item.productName}
                    className="w-14 h-14"
                  />
                  <p className="text-button">{item.productName}</p>
                </td>
                <td className="p-4 text-secondary">R{item.price}</td>
                <td className="p-4  text-secondary text-center">
                  <div className="flex items-center justify-center  space-x-0 border border-gray-300">
                    <button
                      className="bg-primaryColor text-gray-400 text-xl flex items-center border-r border-gray-300 justify-center font-bold w-10 h-10 hover:cursor-pointer"
                      onClick={() => handleQuantityChange("decrease")}
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="w-10 h-10 flex text-base text-secondary items-center border-r border-gray-300 justify-center bg-secondaryColor">
                      {quantity}
                    </span>
                    <button
                      className="bg-primaryColor text-gray-400 flex items-center justify-center font-bold w-10 h-10 hover:cursor-pointer"
                      onClick={() => handleQuantityChange("increase")}
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </td>
                <td className="p-4 text-secondary text-center">R{subtotal}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="min-w-[250px] w-1/4 h-[30vh] flex-shrink-0 border border-gray-300">
          <div className="flex justify-center bg-secondaryColor py-3 px-4 bg-[#EBF5EE]  text-xl text-secondary border-b border-gray-300">
            <span>Cart Summary</span>
          </div>

          <div className=" px-6 ">
            <div className="flex justify-between text-secondary border-b border-gray-300 py-4">
              <span className="font-inter font-bold">Subtotal:</span>
              <span>R{subtotal}</span>
            </div>

            <div className="flex justify-between text-secondary border-b border-gray-300 py-4">
              <span className="font-inter font-bold">Total:</span>
              <span>R{subtotal}</span>
            </div>
          </div>

          <div className="p-8">
            <Link
              to="/checkout"
              className="block w-full bg-button rounded-full text-white font-semibold py-3  hover:bg-blue-300 transition text-center"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
