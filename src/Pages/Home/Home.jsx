import React from 'react';
import { Helmet } from 'react-helmet';
import BannerSlider from '../../Components/Home/BannerSlider';
import Feathers from '../../Components/Home/Feathers';

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
            
        </>
    );
};

export default Home;