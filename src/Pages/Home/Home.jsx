import React from 'react';
import { Helmet } from 'react-helmet';
import BannerSlider from '../../Components/Home/BannerSlider';
import Feathers from '../../Components/Home/Feathers';
import Brands from '../../Components/Home/Brands';
import Services from '../../Components/Common/Services';
import Benefits from '../../Components/Home/Benefits';
import BecomeMerchant from '../../Components/Home/BecomeMerchant';

const Home = () => {
    return (
        <>
        <Helmet>
            <title>
                Home Page | Pro-Fast
            </title>
        </Helmet>
        <BannerSlider></BannerSlider>
        <Feathers></Feathers>
        <Services></Services>
        <Brands></Brands>
        <Benefits></Benefits>
        <BecomeMerchant></BecomeMerchant>
            
        </>
    );
};

export default Home;