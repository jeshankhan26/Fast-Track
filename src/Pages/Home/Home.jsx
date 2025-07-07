import React from 'react';
import { Helmet } from 'react-helmet';
import BannerSlider from '../../Components/Home/BannerSlider';
import Feathers from '../../Components/Home/Feathers';
import Brands from '../../Components/Home/Brands';
import Services from '../../Components/Common/Services';

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
            
        </>
    );
};

export default Home;