import React, { useEffect, useState } from "react";
import { Heart, Minus, Plus } from "lucide-react";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../Hooks/useCart";

export const ProductDetails = ({ product }) => {
  const [mainImage, setMainImage] = useState(null);
  const [zoomStyle, setZoomStyle] = useState({ display: "none" });
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  useEffect(() => {
    if (product?.ImageUri?.length) {
      setMainImage(product.ImageUri[0]);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product._id, quantity);
    }
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      display: "block",
      backgroundImage: `url(${mainImage})`,
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: "150%",
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: "none" });
  };

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "increase" ? prev + 1 : Math.max(1, prev - 1)
    );
  };

  if (!product) {
    return <p>Loading...</p>; // Or any loading indicator you prefer
  }

  return (
    <div className="flex flex-col mx-[120px] px-20 my-20">
      <div className="flex gap-7 my-10 h-[70vh]  w-full  ">
        <div className="flex flex-col  w-[17%] justify-between">
          {product.ImageUri?.map((src, index) => (
            <div
              key={index}
              className="flex justify-center items-center  cursor-pointer"
              onClick={() => setMainImage(src)}
            >
              <img
                src={src}
                alt={`Product thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="relative flex justify-center items-center h-full  w-[70%]">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              ...zoomStyle,
              width: "100%",
              height: "100%",
              position: "absolute",
              borderRadius: "10px",
            }}
          ></div>

          <img
            src={mainImage}
            alt="Large product"
            className="size-full object-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </div>

        <div className=" space-y-5 w-full">
          <p className="text-[#777777] text-sm">
            Home /Shop/ {product?.productName?.slice(0, 20)}...
            {product?.productName?.length > 20 ? "..." : ""}
          </p>
          {/* Category Name */}
          <p className="text-button text-base">
            {product.categoryId?.categoryName}
          </p>
          <h1 className="text-xl font-bold text-primary w-full break-words overflow-hidden">
            {product.productName}
          </h1>
          <h1 className="text-base text-secondary">
            <span className="text-2xl ">R{product.price} </span> & Free Shipping
          </h1>

          <p className="text-secondary w-full break-words overflow-hidden">
            {product?.description?.slice(0, 500)}ltrices enim nunc ac egestas
            elementum ut in ornare sit malesuada.
          </p>

          <div className="flex items-center gap-4 border-b pb-4 border-gray-300">
            <div className="flex items-center justify-center space-x-0 border border-gray-300">
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
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="bg-button text-primary px-6 py-2 flex space-x-3 items-center text-xl hover:cursor-pointer transition rounded-full"
              >
                <FaCartPlus />
                <p>Add to Cart</p>
              </button>
              <button
                //   onClick={() => createWishlist(product?._id)}
                className="p-2 hover:cursor-pointer"
              >
                <Heart className="w-5 h-5 text-button" />
              </button>
            </div>
          </div>

          <p className="text-button">
            <span className="text-secondary">Categories: </span>{" "}
            {product.categoryId?.categoryName}
          </p>

          <div className="">
            <p className="text-lg text-gray-800 font-semibold pb-2 mb-4">
              Free Shipping on Orders Over{" "}
              <span className="text-green-600">R1000</span>
              !!
            </p>

            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <span className="w-7 h-7 text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                </span>
                <span className="text-gray-700 font-medium">
                  No-Risk Money Back Guarantee!
                </span>
              </li>

              {/* Hassle-Free Refunds */}
              <li className="flex items-center space-x-3">
                <span className="w-7 h-7 text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                </span>
                <span className="text-gray-700 font-medium">
                  No Hassle Refunds
                </span>
              </li>

              {/* Secure Payments */}
              <li className="flex items-center space-x-3">
                <span className="w-7 h-7 text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                </span>
                <span className="text-gray-700 font-medium">
                  Secure Payments
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

