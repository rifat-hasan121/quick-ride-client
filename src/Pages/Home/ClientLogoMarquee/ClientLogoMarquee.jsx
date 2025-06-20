import React from "react";
import Marquee from "react-fast-marquee";

// import logo
import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/start.png";
import logo7 from "../../../assets/brands/start-people 1.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const ClientLogoMarquee = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className=" mx-auto px-4">
        <h2 className="font-bold text-center text-2xl mb-6">
          We've helped thousands of sales teams
        </h2>
        <Marquee pauseOnHover speed={50} gradient={false}>
          {logos.map((logo, idx) => (
            <div key={idx} className="mx-24 flex items-center">
              <img
                src={logo}
                alt={`Client logo ${idx + 1}`}
                className=" h-6 object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ClientLogoMarquee;
