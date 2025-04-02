import { ChevronRight } from "lucide-react";
import React from "react";

export const EntryHeader = ({ currentStep, page }) => {
  const steps = [
    { id: 1, title: "Shopping Cart" },
    { id: 2, title: "Checkout Details" },
    { id: 3, title: "Order Complete" },
  ];

  return (
    <div className="w-full mx-auto max-w-5xl px-10 pt-16">
      <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800">
       {page}
      </h1>
      <div className="flex items-center justify-between relative">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col  w-full">
            <div className="flex items-center text-center space-x-6">
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full text-white text-lg font-bold
                transition-all duration-300 ease-in-out
                ${
                  currentStep >= step.id
                    ? "bg-button shadow-md shadow-blue-300"
                    : "bg-gray-400"
                }
                `}
              >
                {step.id}
              </div>

              <h2
                className={`text-2xl font-medium transition-all duration-300
                ${currentStep >= step.id ? "text-button" : "text-gray-500"}
                `}
              >
                {step.title}
              </h2>

              {index < steps.length - 1 && (
                <ChevronRight
                  className={`text-4xl transition-all duration-300
                  ${currentStep > step.id ? "text-button" : "text-gray-400"}
                  `}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
