import React, {  useEffect, useState } from "react";
import { useProducts } from "../Hooks/useProducts";
import { FaYinYang } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export const OrderConfirmation = () => {
  const { products, loading } = useProducts();
  const [orderItems, setOrderItems] = useState([]);

  const navigate = useNavigate();

  const orders = localStorage.getItem("order");
  const parsedOrder = orders ? JSON.parse(orders) : null;
  const storeData = parsedOrder?.data;
  // console.log(storeData);

  useEffect(() => {
    if (!storeData || !products.length) return;

    const cartItems = storeData.cart?.[0]?.items || [];

    const enriched = cartItems.map((item) => {
      const product = products.find((p) => p._id === item.product);
      return {
        productName: product?.productName || "Unknown Product",
        imageUrl: product?.ImageUri || "https://via.placeholder.com/150",
        quantity: item.quantity,
        price: product?.price || 0,
        total: (product?.price || 0) * item.quantity,
      };
    });

    setOrderItems(enriched);
  }, [storeData, products]);

  const formattedDate = storeData?.createdAt
    ? new Date(storeData.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const subtotal = orderItems.reduce((acc, item) => acc + item.total, 0);
  const total = subtotal + (storeData?.deliveryFee || 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-secondary">
      <h1 className="text-3xl mb-6 text-center">
        Thank you! Your order has been received
      </h1>

      <div className="bg-[#EBF5EE] p-6 mb-10 flex flex-wrap gap-6 justify-between">
        <div>
          <h2 className="text-xl font-semibold">Order Number:</h2>
          <p className="text-lg">{storeData.orderNumber}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Date:</h2>
          <p className="text-lg">{formattedDate}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Total:</h2>
          <p className="text-lg">
            R{storeData.totalAmount ? storeData.totalAmount.toFixed(2) : "0.00"}
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Payment Method:</h2>
          <p className="text-lg">
            {storeData.paymentMethod === "cash"
              ? "Cash on Delivery"
              : storeData.paymentMethod === "card"
              ? "Paid with Card"
              : storeData.paymentMethod}
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Delivery Method:</h2>
          <p className="text-lg">
            {storeData.deliveryOption === "delivery"
              ? "Delivery"
              : storeData.paymentMethod === "pickup"
              ? "Pick Up"
              : storeData.deliveryOption}
          </p>
        </div>
      </div>

      <div className="mb-6 border border-gray-300">
        <h1 className="text-2xl font-semibold p-3">Order Details</h1>

        <div className="flex justify-between font-semibold mb-2 border-y p-3 border-gray-300">
          <span>Product</span>
          <span>Total</span>
        </div>

        {loading ? (
          <p className="p-3">Loading products...</p>
        ) : (
          orderItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between mb-2 border-b p-3 border-gray-300"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.imageUrl}
                  alt={item.productName}
                  className="w-20 h-20"
                />

                <span>
                  {item.productName.slice(0, 20)} x{item.quantity}
                </span>
              </div>
              <span>R{item.total.toFixed(2)}</span>
            </div>
          ))
        )}

        <div className="flex justify-between font-semibold border-b p-3 border-gray-300">
          <span>Subtotal:</span>
          <span>R{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold border-b p-3 border-gray-300">
          <span>Tax Amount:</span>
          <span>R{storeData.taxAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold p-3">
          <span>Total:</span>
          <span>R{storeData.totalAmount.toFixed(2)}</span>
        </div>
      </div>

      <div className="border border-gray-300 p-6">
        <h1 className="text-2xl font-semibold mb-4 border-b p-3 border-gray-300">
          Billing Address
        </h1>

        <div className="mb-2">
          <span className="font-semibold">Street:</span>
          <p>{storeData.shippingAddress.street}</p>
        </div>
        <div className="mb-2">
          <span className="font-semibold">City:</span>
          <p>{storeData.shippingAddress.city}</p>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Town:</span>
          <p>{storeData.shippingAddress.town}</p>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Postal Code:</span>
          <p>{storeData.shippingAddress.postalCode}</p>
        </div>
      </div>
      <button
        onClick={() => navigate("/shops", window.location.reload())}
        type="button"
        className="bg-button rounded-full px-3 py-4 text-white hover:cursor-pointer mt-3 "
      >
        Return Shopping
      </button>
    </div>
  );
};
