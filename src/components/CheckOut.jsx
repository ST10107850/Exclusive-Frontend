import { Link } from "lucide-react";
import React, { useState } from "react";
import { FaTruck, FaShoppingBag, FaTrash } from "react-icons/fa";

export const CheckOut = () => {
  const addresses = [
    {
      _id: "1",
      street: "123 Main St",
      town: "Downtown",
      city: "Johannesburg",
      postalCode: "2001",
    },
    {
      _id: "2",
      street: "456 Side Rd",
      town: "Suburb",
      city: "Cape Town",
      postalCode: "8001",
    },
  ];

  const cart = {
    items: [
      {
        _id: "101",
        product: {
          productName: "Wireless Headphones",
          image:
            "https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/shop-bg.jpg",
          price: 1200,
          discount: 10,
        },
        quantity: 2,
      },
      {
        _id: "102",
        product: {
          productName: "Bluetooth Speaker",
          image:
            "https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/shop-bg.jpg",
          price: 800,
          discount: 5,
        },
        quantity: 1,
      },
    ],
  };

  const [deliveryOption, setDeliveryOption] = useState("delivery");
  const [selectedAddress, setSelectedAddress] = useState(addresses[0]._id);
  const [setPaymentMethod] = useState("");

  const subtotal = cart.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const taxRate = 0.15;
  const tax = subtotal * taxRate;
  const deliveryFee = deliveryOption === "pickup" ? 0 : 50;
  const discountTotal = cart.items.reduce(
    (acc, item) =>
      acc + (item.product.price * item.quantity * item.product.discount) / 100,
    0
  );

  const orderTotal = subtotal + tax + deliveryFee - discountTotal;

  return (
    <div className="mx-[120px] p-20">
      <div className="flex space-x-10">
        <div className="w-1/2 border border-gray-300">
          <div className="bg-secondaryColor py-4 px-6 rounded-t-lg">
            <h1 className="text-2xl font-bold text-secondary">
              Payment Information
            </h1>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-secondary mb-2">
                Delivery Method
              </h2>
              <div className="flex flex-col space-y-3">
                <label className="border border-gray-300 p-4 rounded-md flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="deliveryOption"
                    checked={deliveryOption === "delivery"}
                    onChange={() => setDeliveryOption("delivery")}
                    className="mr-2 accent-green-600"
                  />
                  <FaTruck className="mr-2 text-xl" />
                  Get It Delivered
                </label>

                <label className="border border-gray-300 p-4 rounded-md flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="deliveryOption"
                    checked={deliveryOption === "pickup"}
                    onChange={() => setDeliveryOption("pickup")}
                    className="mr-2 accent-green-600"
                  />
                  <FaShoppingBag className="mr-2 text-xl" />
                  Pickup Available in Stores
                </label>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-secondary mt-6 mb-2">
              Shipping Address
            </h2>
            <select
              value={selectedAddress}
              onChange={(e) => setSelectedAddress(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
            >
              {addresses.map((address) => (
                <option key={address._id} value={address._id}>
                  {address.street}, {address.town}, {address.city},{" "}
                  {address.postalCode}
                </option>
              ))}
            </select>

            <h2 className="text-xl font-semibold text-secondary mt-6 mb-2">
              Payment Options
            </h2>
            <div className="flex items-center space-x-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="paymentOption"
                  value="card"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2 accent-green-600"
                />
                Card
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="paymentOption"
                  value="cash"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2 accent-green-600"
                />
                Cash on Delivery
              </label>
            </div>
          </div>
        </div>

        <div className="w-1/2 border border-gray-300">
          <div className="py-4 px-6 border-b border-gray-300">
            <h1 className="text-2xl font-bold">Order Summary</h1>
          </div>
          <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
            {cart.items.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center border-b border-gray-300 py-3"
              >
                <img
                  src={item.product.image}
                  alt={item.product.productName}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <span className="flex-1 ml-4 font-medium text-gray-700">
                  {item.product.productName}
                </span>
                <span className="text-gray-500">x{item.quantity}</span>
                <span className="font-semibold">
                  R{(item.product.price * item.quantity).toFixed(2)}
                </span>
                <FaTrash className="text-red-500 cursor-pointer hover:text-red-700 transition" />
              </div>
            ))}
          </div>

          <div className="p-6 space-y-2 border-t border-gray-300">
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>R{deliveryFee}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-600">
                -R{discountTotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal (exc. VAT)</span>
              <span>R{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>R{tax.toFixed(2)}</span>
            </div>
          </div>

          <div className="border-t border-gray-300 p-6">
            <div className="flex justify-between items-center font-inter text-secondary text-lg font-bold pb-4">
              <span>Order Total</span>
              <span className="text-xl font-extrabold">
                R{orderTotal.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <button className="w-2xl bg-button text-white py-4 px-5 text-2xl mt-6 rounded-full transition duration-300 hover:bg-opacity-80">
        Place Order
      </button>
    </div>
  );
};
