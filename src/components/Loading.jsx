import React from "react";

export const Loading = ({ loadingMessage }) => {
  window.location.reload();
  return (
    <div className="flex justify-center items-center space-x-2 h-screen w-full opacity-50 bg-black fixed inset-0 z-50  bg-opacity-100">
      <div className="w-8 h-8 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-primaryColor"></div>
      <p className="text-primaryColor font-semibold">{loadingMessage}</p>
    </div>
  );
};
