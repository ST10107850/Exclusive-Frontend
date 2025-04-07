import { Link } from "lucide-react";
import React, { useState } from "react";
import { FaTruck, FaShoppingBag, FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useCart } from "../Hooks/useCart";
import { useOrder } from "../Hooks/useOrders";
import { useNavigate } from "react-router-dom";

export const CheckOut = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { cart } = useCart();

  const address = userInfo?.address || [];
  const navigate = useNavigate();

  const [deliveryOption, setDeliveryOption] = useState("delivery");
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState(null);

  const { createOrder, loading, error } = useOrder();

  const items = cart?.items || [];

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const taxRate = 0.15;
  const tax = subtotal * taxRate;
  const deliveryFee = deliveryOption === "pickup" ? 0 : 50;

  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      alert("Please select a shipping address");
      return;
    }

    if (!cart?._id) {
      alert("Cart ID is missing!");
      return;
    }

    if (paymentMethod === "card" && !cardDetails) {
      alert("Please provide your card details");
      return;
    }

    const orderData = {
      shippingAddress: selectedAddress,
      paymentMethod,
      cardDetails: paymentMethod === "card" ? cardDetails : null,
      deliveryOption,
      cartId: cart?._id,
      totalAmount: deliveryFee + subtotal + tax,
      taxAmount: tax,
    };

    try {
      const order = await createOrder(orderData);
      if (order) {
        localStorage.setItem("order", JSON.stringify(order));
        navigate("/confirm-order");
      }
    } catch (err) {
      alert(`Error placing order: ${err.message}`);
    }
  };

  return (
    <>
      {loading && (
        <div className="flex justify-center items-center space-x-2 h-screen w-full opacity-50 bg-black fixed inset-0 z-50  bg-opacity-100">
          <div className="w-8 h-8 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-primaryColor"></div>
          <p className="text-primaryColor font-semibold">Loading....</p>
        </div>
      )}
      <div className="mx-[120px] p-20">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
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
                    value={selectedAddress || ""} // Using empty string to avoid null value
                    onChange={(e) => setSelectedAddress(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
                  >
                    <option value="">---Select Address---</option>{" "}
                    {address.map((address) => (
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
                  {items.map((item) => (
                    <div
                      key={item._id}
                      className="flex justify-between items-center border-b border-gray-300 py-3"
                    >
                      <div className="flex items-center space-x-5">
                        <img
                          src={item.product.ImageUri}
                          alt={item.product.productName}
                          className="w-16 h-16 object-cover "
                        />
                        <span className="flex-1 ml-4 font-medium text-gray-700">
                          {item.product.productName.slice(0, 30)}
                        </span>
                        <span className="text-gray-500">x{item.quantity}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="font-semibold">
                          R{(item.product.price * item.quantity).toFixed(2)}
                        </span>
                        <FaTrash className="text-red-500 cursor-pointer hover:text-red-700 transition" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 space-y-2 border-t border-gray-300">
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>R{deliveryFee}</span>
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
                      R{(deliveryFee + subtotal + tax).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="w-2xl bg-button text-white py-4 px-5 text-2xl mt-6 rounded-full transition duration-300 hover:bg-opacity-80"
              onClick={handlePlaceOrder}
              disabled={loading}
            >
              {loading
                ? "Placing Order..."
                : `Place Order R${(deliveryFee + subtotal + tax).toFixed(2)}`}
            </button>

            {error && <p className="text-red-500">{error}</p>}
          </>
        )}
      </div>
    </>
  );
};
