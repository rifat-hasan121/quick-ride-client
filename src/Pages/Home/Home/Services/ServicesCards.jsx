import React from "react";
import {
  FaTruck,
  FaGlobe,
  FaWarehouse,
  FaMoneyBillWave,
  FaBuilding,
  FaUndo,
} from "react-icons/fa";

const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon: <FaTruck className="text-4xl text-blue-500" />,
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon: <FaGlobe className="text-4xl text-green-500" />,
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon: <FaWarehouse className="text-4xl text-orange-500" />,
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: <FaMoneyBillWave className="text-4xl text-yellow-500" />,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
    icon: <FaBuilding className="text-4xl text-purple-500" />,
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: <FaUndo className="text-4xl text-red-500" />,
  },
];

const Services = () => {
    return (
      <div className="bg-[#03373D] my-[100px] rounded-3xl">
        <section className="  py-25 px-4 max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white text-center mb-8">
            Our Services
          </h2>
          <p className="text-center text-[#DADADA] mb-12">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to <br /> business shipments —
            we deliver on time, every time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
              >
                <div className="my-4 p-4 w-18 h-18 rounded-full bg-purple-200 flex items-center justify-center">
                  <div>{service.icon}</div>
                </div>
                <h3 className="text-2xl font-bold my-2 text-[#03373D]">
                  {service.title}
                </h3>
                <p className="text-[#606060] font-medium my-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
};

export default Services;
