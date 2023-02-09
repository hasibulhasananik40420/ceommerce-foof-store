import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='mt-20 h-[100vh] bg-[#f5f6f7]'>
            <h1 className='text-4xl font-bold text-[#119744] text-center pt-10'>404 | Not Found</h1>
            <div className='flex justify-center items-center'>
                <img src="https://mironmahmud.com/greeny/assets/ltr/images/error.png" alt="" />
            </div>

            <div>
                <h1 className='text-4xl font-bold mt-2 text-center'>OOOPPS! THIS PAGE CAN'T BE FOUND.</h1>
                <p className='text-xl font-medium mt-2 text-center'>It looks like nothing was found at this location.
                </p>
            </div>


            <div className='flex justify-center items-center mt-6 '>
                <Link to='/' className='px-6 py-3 text-[#119744]  flex justify-center items-center gap-1 border-2 border-[#119744] rounded-md font-bold hover:bg-[#119744] hover:text-white duration-200'><span></span> <span>Go To Home</span></Link>
            </div>
        </div>
    );
};

export default ErrorPage;