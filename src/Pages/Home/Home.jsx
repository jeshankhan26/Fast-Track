import React from 'react';
import { Helmet } from 'react-helmet';
import BannerSlider from '../../Components/Home/BannerSlider';

const Home = () => {
    return (
        <>
        <Helmet>
            <title>
                Home Page | Pro-Fast
            </title>
        </Helmet>
        <BannerSlider></BannerSlider>
            
        </>
    );
};

export default Home;