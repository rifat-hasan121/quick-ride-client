import React from 'react';
import BangladeshMap from './BangladeshMap';
import { useLoaderData } from 'react-router';

const Covarage = () => {
    const servicesCenter = useLoaderData()
    return (
      <div className="p-6">
        <h1 className="text-5xl font-extrabold text-center text-black mb-4">
          We are available in 64 districts
        </h1>

        {/* <DistrictSearch /> */}

        <div className="mt-8">
          <BangladeshMap servicesCenter={servicesCenter}/>
        </div>
      </div>
    );
};

export default Covarage;