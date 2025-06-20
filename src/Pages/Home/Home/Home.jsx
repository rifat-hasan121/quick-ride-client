import React from 'react';
import Banner from '../Banner/Banner';
import Services from './Services/ServicesCards';
import ClientLogoMarquee from '../ClientLogoMarquee/ClientLogoMarquee';
import ServiceCards from '../Features/ServiceCards';
import BeMerchant from '../BeMerchant.jsx/BeMerchant';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ClientLogoMarquee></ClientLogoMarquee>
            <ServiceCards></ServiceCards>
            <BeMerchant></BeMerchant>
        </div>
    );
};

export default Home;