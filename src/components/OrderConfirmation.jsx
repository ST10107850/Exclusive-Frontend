import React from "react";

export const OrderConfirmation = () => {
  const order = {
    orderNumber: "12346",
    date: "April 2, 2025",
    total: 4000,
    paymentMethod: "Cash on delivery",
    items: [
      {
        productName: "Product name 1",
        quantity: 2,
        total: 500,
      },
    ],
    billingAddress: {
      street: "123 Main St",
      city: "Johannesburg",
      postalCode: "2001",
      country: "South Africa",
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-secondary">
      <h1 className="text-3xl mb-6 text-center ">
        Thank you! Your order has been received
      </h1>

      <div className="bg-[#EBF5EE] p-6  mb-10 flex justify-between">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Order Number:</h2>
          <p className="text-lg">{order.orderNumber}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Date:</h2>
          <p className="text-lg">{order.date}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Total:</h2>
          <p className="text-lg">R{order.total.toFixed(2)}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Payment Method:</h2>
          <p className="text-lg">{order.paymentMethod}</p>
        </div>
      </div>

      <p className="mb-6">Pay with cash upon delivery</p>

      <div className=" mb-6 border border-gray-300">
        <h1 className="text-2xl font-semibold  p-3">Order Details</h1>

        <div className="flex justify-between font-semibold mb-2 border-y p-3 border-gray-300">
          <span>Product</span>
          <span>Total</span>
        </div>

        {order.items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between mb-2 border-b p-3 border-gray-300"
          >
            <span>
              {item.productName} x{item.quantity}
            </span>
            <span>R{item.total.toFixed(2)}</span>
          </div>
        ))}

        <div className="flex justify-between  font-semibold border-b p-3 border-gray-300">
          <span>Subtotal:</span>
          <span>
            R{order.items.reduce((acc, item) => acc + item.total, 0).toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between font-semibold p-3">
          <span>Total:</span>
          <span>R{order.total.toFixed(2)}</span>
        </div>
      </div>

      <div className="border border-gray-300 p-6">
        <h1 className="text-2xl font-semibold mb-4 border-b p-3 border-gray-300">
          Billing Address
        </h1>

        <div className="mb-2 ">
          <span className="font-semibold">Street:</span>
          <p>{order.billingAddress.street}</p>
        </div>
        <div className="mb-2">
          <span className="font-semibold">City:</span>
          <p>{order.billingAddress.city}</p>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Postal Code:</span>
          <p>{order.billingAddress.postalCode}</p>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Country:</span>
          <p>{order.billingAddress.country}</p>
        </div>
      </div>
    </div>
  );
};
