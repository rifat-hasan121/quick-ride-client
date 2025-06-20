import React from 'react';
import Banner from '../Banner/Banner';
import Services from './Services/ServicesCards';
import ClientLogoMarquee from '../ClientLogoMarquee/ClientLogoMarquee';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ClientLogoMarquee></ClientLogoMarquee>
        </div>
    );
};

export default Home;