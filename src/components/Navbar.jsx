import React, { useMemo, useState } from "react";
import logo from "../assets/uploads/header-logo.svg";
import logo1 from "../assets/uploads/normal-header.svg";
import { Link, useLocation } from "react-router-dom";
import { Circle, CircleX, Heart, Minus, Plus } from "lucide-react";
import { useCart } from "../Hooks/useCart";
import { Loading } from "./Loading";

export const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { cart, updateCartItems, removeCartItem, isLoading } = useCart();
  const cartItemsCount = cart.items?.length;
  const cartItems = useMemo(() => cart?.items || [], [cart]);

  const { subtotal } = useMemo(() => {
    let subtotal = 0;

    cartItems.forEach((item) => {
      const price = parseFloat(item.product?.price) || 0;
      const quantity = parseInt(item.quantity, 10) || 0;
      const itemSubtotal = price * quantity;
      subtotal += itemSubtotal;
    });

    return {
      subtotal: subtotal.toFixed(2),
    };
  }, [cartItems]);

  const useAlternateStyle = !["/", "/about", "/contact"].includes(currentPath);
  const logoToUse = useAlternateStyle ? logo1 : logo;
  const textColor = useAlternateStyle ? "text-black" : "text-white";
  const positionClass = useAlternateStyle
    ? "relative bg-white shadow-md"
    : "absolute bg-transparent";

  const cartBackgound = useAlternateStyle ? "text-button" : " text-white ";
  const quantityToUse = useAlternateStyle ? "bg-button" : "bg-white";

  return (
    <>
      {isLoading && (
        <div className="flex justify-center items-center space-x-2 h-screen w-full opacity-50 bg-black fixed inset-0 z-50  bg-opacity-100">
          <div className="w-8 h-8 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-primaryColor"></div>
          <p className="text-primaryColor font-semibold">
            Updating quantity.....
          </p>
        </div>
      )}
      <div className={`top-0 left-0 w-full z-20 ${positionClass}`}>
        <div className="mx-[140.4px] px-4 py-3 flex justify-between items-center">
          <a href="/">
            <img src={logoToUse} alt="Home" className="h-10" />
          </a>

          <nav className="flex items-center space-x-6">
            <ul className={`flex space-x-4 text-3 ${textColor}`}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shops">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>

              <i
                className="relative inline-block cursor-pointer"
                onClick={() => setIsCartOpen(true)}
              >
                <span className="inline-block w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="826 826 140 140"
                    className={`w-full h-full fill-current ${cartBackgound}`}
                  >
                    <path d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424  c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77  l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807  s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627  c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627  h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254  c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385  v-19.254c0-5.315-1.881-9.853-5.641-13.613c-3.76-3.761-8.298-5.641-13.613-5.641s-9.853,1.88-13.613,5.641  c-3.761,3.76-5.641,8.298-5.641,13.613v19.254c0,1.304-0.476,2.432-1.429,3.385c-0.953,0.953-2.081,1.429-3.385,1.429  c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.429-2.081-1.429-3.385v-19.254c0-7.973,2.821-14.779,8.461-20.42  c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461C922.062,842.712,924.881,849.519,924.881,857.492z"></path>
                  </svg>
                </span>

                <span
                  className={`absolute -top-2 -right-2 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center ${quantityToUse}`}
                >
                  {cartItemsCount}
                </span>
              </i>
            </ul>
          </nav>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 w-[30vw] h-screen bg-white shadow-lg transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-30 flex flex-col`}
      >
        {/* HEADER */}
        <div className="border-b border-gray-400 p-5 relative">
          <button
            className="absolute top-5 right-5 text-base hover:cursor-pointer"
            onClick={() => setIsCartOpen(false)}
          >
            ✖
          </button>

          <h2 className="text-base font-instrument text-gray-500">
            Shopping Cart
          </h2>
        </div>

        <div className="p-5 text-[#6b6262] flex justify-between items-center overflow-y-auto">
          <div className="flex flex-col space-y-4 w-full">
            {cart?.items?.length > 0 ? (
              cart.items.map((item) => {
                if (!item?.product) return null;

                const price = parseFloat(item.product?.price) || 0;
                const quantity = parseInt(item.quantity, 10) || 0;
                const itemSubtotal = (price * quantity).toFixed(2);

                return (
                  <div
                    className="flex items-center justify-between space-x-4 "
                    key={item._id}
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.product?.ImageUri}
                        alt="Product Image"
                        className="w-20 h-20"
                      />

                      <div className="flex flex-col space-x-4 space-y-4">
                        <h2 className="text-primary font-bold hover:cursor-pointer">
                          {item.product?.productName.slice(0, 20)}...
                          {item.product?.productName.length > 20 && "..."}{" "}
                        </h2>
                        <div className="flex items-center justify-center space-x-0 border border-gray-300 w-1/2 h-1/2">
                          <button
                            className="bg-primaryColor text-gray-400 text-xl flex items-center border-r border-gray-300 justify-center font-bold w-10 h-10 hover:cursor-pointer"
                            onClick={() =>
                              updateCartItems(item._id, quantity - 1)
                            }
                          >
                            <Minus className="w-5 h-5" />
                          </button>
                          <span className="w-10 h-10 flex text-base text-secondary items-center border-r border-gray-300 justify-center bg-secondaryColor">
                            {item.quantity}
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
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-6">
                      <CircleX
                        className="hover:cursor-pointer"
                        onClick={() => removeCartItem(item._id)}
                      />
                      <p>{itemSubtotal}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center text-secondary">No items in cart</div>
            )}
          </div>
        </div>

        {/* BOTTOM BUTTONS */}
        <div className="absolute bottom-0 left-0 w-full py-5 bg-white shadow-lg">
          <div className="border-b border-t border-gray-400 p-4 flex justify-between items-center">
            <h2 className="text-base font-bold text-primary">Subtotal:</h2>
            <p className="text-base text-gray-500">R{subtotal}</p>
          </div>
          <div className="p-5">
            <a
              href="/cart"
              onClick={() => setIsCartOpen(false)}
              className="bg-button text-white px-5 py-2 rounded-full w-full block text-center mr-2 hover:cursor-pointer"
            >
              View Cart
            </a>
            <Link
              to={"/checkout"}
              onClick={() => setIsCartOpen(false)}
              className="bg-button text-white px-5 py-2 rounded-full w-full block text-center mt-4 hover:cursor-pointer"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>

      {isCartOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-100 z-20"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}
    </>
  );
};
