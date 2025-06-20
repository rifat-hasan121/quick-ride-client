import React from 'react';
import location from "../../../assets/location-merchant.png";

const BeMerchant = () => {
    return (
        <div className='mx-4 md:mx-16'>


      <div className="flex justify-around bg-[url('src/assets/be-a-merchant-bg.png')] bg-no-repeat my-12 py-10 px-4 md:px-20 bg-[#03373D] rounded-2xl ">
        <div className="hero-content flex-col lg:flex-row-reverse items-center justify-center">
          <img src={location} className=" rounded-lg shadow-2xl " />
          <div>
            <h1 className="text-5xl font-bold text-white">
              Merchant and Customer Satisfaction is Our First Priority
            </h1>
            <p className="py-6 text-[#DADADA] my-4">
              We offer the lowest delivery charge with the highest value along
              with <br /> 100% safety of your product. Pathao courier delivers your
              parcels in every <br /> corner of Bangladesh right on time.
            </p>
            <button className="btn btn-primary p-6 text-black rounded-full">
              Become a Merchant
            </button>
            <button className="btn btn-primary p-6 btn-outline text-primary ms-4 rounded-full hover:text-black">
              Earn with Profast Courier
            </button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default BeMerchant;