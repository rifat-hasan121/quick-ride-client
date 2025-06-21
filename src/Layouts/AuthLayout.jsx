import React from 'react';
import { Outlet } from 'react-router';
import authLogo from '../assets/authImage.png'
import QuickRiderLogo from '../Sheared/Logo/QuickRiderLogo';

const AuthLayout = () => {
    return (
      <div className="p-12 bg-base-200">
        <div>
          <QuickRiderLogo></QuickRiderLogo>
        </div>
      
          <div className="hero-content flex-col  lg:flex-row-reverse">
            <div className="flex-1">
              <img src={authLogo} className=" rounded-lg shadow-2xl" />
            </div>
            <div className="flex-1">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
     
    );
};

export default AuthLayout;