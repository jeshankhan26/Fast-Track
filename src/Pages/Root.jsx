import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Common/Navbar';
import Footer from '../Components/Common/Footer';

const Root = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className='bg-white'>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
            
        </>
    );
};

export default Root;