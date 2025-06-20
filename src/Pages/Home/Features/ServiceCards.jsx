import React from "react";
import features from "./featuresData";

const ServiceCards = () => {
  return (
    <div className=" py-10 px-4 md:px-16">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="bg-white rounded-xl shadow-sm mb-6 p-6 flex flex-col md:flex-row items-center gap-6"
        >
          <img
            src={feature.image}
            alt={feature.title}
            className="w-48 h-50 object-contain "
          />
          <div className=" pl-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              {feature.title}
            </h2>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
