import React from "react";

export const Features = () => {
  return (
    <div className="flex justify-between p-10 mx-20 border-b border-[#454545]">
      <div className="flex flex-col items-center p-6 ">
        <div className="flex items-center justify-center p-3.5 bg-[#ECF4D3] rounded-full shadow-lg mb-4">
          <span className="elementor-icon text-4xl text-black">
            <svg
              aria-hidden="true"
              viewBox="0 0 576 512"
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 text-black"
            >
              <path d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"></path>
            </svg>
          </span>
        </div>
        <div className="text-center">
          <h5 className="text-xl font-inter font-bold text-primary">
            <span>Secure Payment</span>
          </h5>
          <p className="text-base text-secondary mt-2">
            Elementum feugiat diam
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center p-6 ">
        <div className="flex items-center justify-center p-3.5 bg-[#ECF4D3] rounded-full shadow-lg mb-4">
          <span className="elementor-icon text-4xl text-black">
            <svg
              aria-hidden="true"
              class="e-font-icon-svg e-fas-truck"
              viewBox="0 0 640 512"
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 text-black"
            >
              <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path>
            </svg>
          </span>
        </div>
        <div className="text-center">
          <h5 className="text-xl font-inter font-bold text-primary">
            <span>Free Shipping</span>
          </h5>
          <p className="text-base text-secondary mt-2">For R1000+ order</p>
        </div>
      </div>

      <div className="flex flex-col items-center p-6 ">
        <div className="flex items-center justify-center p-3.5 bg-[#ECF4D3] rounded-full shadow-lg mb-4">
          <span className="elementor-icon text-4xl text-black">
            <svg
              aria-hidden="true"
              class="e-font-icon-svg e-fas-cube"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 text-black"
            >
              <path d="M239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3zM256 68.4l192 72v1.1l-192 78-192-78v-1.1l192-72zm32 356V275.5l160-65v133.9l-160 80z"></path>
            </svg>
          </span>
        </div>
        <div className="text-center">
          <h5 className="text-xl font-inter font-bold text-primary">
            <span>Delivered with Care</span>
          </h5>
          <p className="text-base text-secondary mt-2">
            our package, our priority
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center p-6 ">
        <div className="flex items-center justify-center p-3.5 bg-[#ECF4D3] rounded-full shadow-lg mb-4">
          <span className="elementor-icon text-4xl text-black">
            <svg
              aria-hidden="true"
              class="e-font-icon-svg e-far-heart"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 text-black"
            >
              <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
            </svg>
          </span>
        </div>
        <div className="text-center">
          <h5 className="text-xl font-inter font-bold text-primary">
            <span>Excellent Service</span>
          </h5>
          <p className="text-base text-secondary mt-2">Always here to help.</p>
        </div>
      </div>
    </div>
  );
};
