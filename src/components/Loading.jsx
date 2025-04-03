import React from 'react'

export const Loading = ({loadingMessage}) => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div className="w-8 h-8 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-primaryColor"></div>
      <p className="text-primaryColor font-semibold">{loadingMessage}</p>
    </div>
  );
}
