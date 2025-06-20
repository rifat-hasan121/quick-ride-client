import React from 'react';
import logo from '../../assets/logo.png'; // Adjust the path as necessary

const QuickRiderLogo = () => {
    return (
        <div className='flex items-end'>
            <img className='mb-2' src={logo} alt="Quick Rider" />
            <p className='text-3xl font-extrabold -ml-3'>Quick Rider</p>
        </div>
    );
};

export default QuickRiderLogo;