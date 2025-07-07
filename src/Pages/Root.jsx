import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Common/Navbar';

const Root = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
            
        </>
    );
};

export default Root;