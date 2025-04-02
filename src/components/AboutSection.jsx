import React from "react";
import about from "../assets/uploads/about-us.jpg";

const features = [
  {
    title: "Passionate About Work",
    description:
      "Passion for work is enthusiasm and excitement for what you do.",
  },
  {
    title: "Creative Team Members",
    description:
      "A creative team designs and executes campaigns & encourages innovation.",
  },
  {
    title: "Innovation Solutions",
    description:
      "Using either completely new concepts or finding new ways to use existing ones.",
  },
  {
    title: "Qualitiful Products",
    description:
      "Product quality refers to how well a product satisfies our customers.",
  },
  {
    title: "Customer Satisfaction",
    description:
      "Happy customers are delighted because of excellent customer service.",
  },
  {
    title: "Simplicity Interface",
    description:
      "Simplicity is used to minimize processes for an improved user experience.",
  },
];

export const AboutSection = () => {
  return (
    <div className="w-full py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center pb-24 mx-[120.4px] px-20">
        <div className="w-full">
          <img
            src={about}
            alt="About Us"
            className="w-full max-w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="border-b pb-6">
          <h2 className="text-4xl lg:text-5xl font-primary leading-tight mb-10">
            We Strive to Provide Our Customers with the Highest Quality
          </h2>
          <p className="text-secondary mt-4 leading-relaxed mb-10">
            Urban Jungle Co. was founded in 1960 by a group of plant enthusiasts
            who recognized the positive impact that plants can have on our
            lives. Whether it’s purifying the air, reducing stress, or simply
            adding a touch of beauty to your environment, plants are more than
            just decoration—they’re a lifestyle.
          </p>
        </div>
      </div>

      <div className="bg-[#ECF4D3] w-full">
        <div className="mt-16 text-center mx-[120.4px] px-20 py-24 ">
          <h2 className="text-primary text-4xl lg:text-5xl font-bold">
            Our Core Values that Drive Everything We Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-row p-6">
                <div className="w-16 h-16 flex items-center justify-center bg-primary text-white rounded-full mb-4">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3zM256 68.4l192 72v1.1l-192 78-192-78v-1.1l192-72zm32 356V275.5l160-65v133.9l-160 80z"></path>
                  </svg>
                </div>

                <div className="flex flex-col items-start pl-7 text-left">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 mt-2">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
