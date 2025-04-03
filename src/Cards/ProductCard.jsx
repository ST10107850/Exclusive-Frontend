import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, image, productName, categoryName, price }) => {
  // const [isHearted, setIsHearted] = useState(false);

  // Toggle heart for wishlist
  // const toggleWishlist = () => {
  //   setIsHearted(!isHearted);
  // };

  return (
    <div className="max-w-[480px] justify-self-center">
      <div className="relative w-[386.66px] h-[429px]">
        {/* Image */}
        <Link to={`/product/${id}`}>
        <img
          src={image}
          alt="Zen Bamboo Grove"
          className="w-full h-full object-container hover:cursor-pointer"
        />
        </Link>
    
        {/* <div className="absolute top-0 left-0 cursor-pointer inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="826 826 140 140"
            className="w-16 h-16 text-red-500" // Adjust size and color as needed
          >
            <path d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385v-19.254c0-5.315-1.881-9.853-5.641-13.613c-3.76-3.761-8.298-5.641-13.613-5.641s-9.853,1.88-13.613,5.641c-3.761,3.76-5.641,8.298-5.641,13.613v19.254c0,1.304-0.476,2.432-1.429,3.385c-0.953,0.953-2.081,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.429-2.081-1.429-3.385v-19.254c0-7.973,2.821-14.779,8.461-20.42c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461C922.062,842.712,924.881,849.519,924.881,857.492z"></path>
          </svg>
        </div> */}

    
        {/* <div
          className="absolute top-2 right-2 cursor-pointer"
          onClick={toggleWishlist}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={`w-8 h-8 ${
              isHearted ? "text-red-500" : "text-gray-500"
            }`}
          >
            <path
              fill="currentColor"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </div> */}
      </div>

      <div className="p-4">
        <p className="text-lg mb-3">☆☆☆☆☆</p>
        <h1 className="text-base font-medium font-inter text-primary mb-2">
          {productName.slice(0, 30)}...
          {productName.length > 20 ? "..." : ""}
        </h1>
        <p className="text-sm text-secondary font-light mb-2">{categoryName}</p>
        <h2 className="text-lg font-bold text-secondary mb-2">R{price}</h2>
      </div>
    </div>
  );
};
