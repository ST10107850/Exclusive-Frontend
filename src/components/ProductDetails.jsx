import React, { useState } from "react";
import { Heart, Minus, Plus } from "lucide-react";
import { FaCartPlus } from "react-icons/fa";

const product = {
  images: [
    "https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/product-9.jpg",
    "https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/product-22-768x768.jpg",
    "https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/product-11-768x768.jpg",
    "https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/product-04.jpg",
  ],
};

export const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [zoomStyle, setZoomStyle] = useState({ display: "none" });
  const [quantity, setQuantity] = useState(1);

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
  return (
    <div className="flex flex-col mx-[120px] px-20 my-20">
      <div className="flex gap-7 my-10 h-[70vh]  w-full  ">
        <div className="flex flex-col  w-[17%] justify-between">
          {product.images.map((src, index) => (
            <div
              key={index}
              className="flex justify-center items-center  cursor-pointer"
              onClick={() => setMainImage(src)}
            >
              <img
                src={src}
                alt={`Product thumbnail ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        <div className="relative flex justify-center items-center  w-[60%]">
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
            className="size-full object-cover "
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </div>

        <div className=" space-y-5 ">
          <p className="text-[#777777] text-sm">Home /Shop/ Golden Glow</p>
          {/* Category Name */}
          <p className="text-button text-base">Indoor Plant</p>
          <h1 className="text-xl font-bold text-primary">Golden Glow</h1>
          <h1 className="text-base text-secondary">
            <span className="text-2xl ">R100.00</span> & Free Shipping
          </h1>

          <p className="text-secondary">
            Faucibus lacus tincidunt molestie accumsan nibh non odio aenean
            molestie purus tristique sed tempor consequat risus tellus amet
            augue egestas mauris scelerisque donec ultrices.
          </p>
          <p className="text-secondary">
            Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac
            egestas elementum ut in ornare sit malesuada.
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
                //   onClick={handleAddToCart}
                className="bg-button text-primary px-6 py-2 flex space-x-3 items-center text-xl hover:cursor-pointer transition rounded-md"
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
            <span className="text-secondary">Categories: </span> Indoor Plant
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
