import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../component/Footer/Footer';
import Navbar from './Navbar';

const Main = () => {
    return (
        <div className=''>
            <Navbar />
            <Outlet />
            <Footer />

        </div>
    );
};

export default Main;