import React from 'react';
import { AiFillEye } from 'react-icons/ai';

const ShopBrands = () => {
    return (
        <div className='mt-20 mx-10'>
            <h1 className='lg:text-4xl font-bold font-serif text-[#39404a] text-center'>Shop By Brands</h1>


            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-20'>
                <div className='text-center '>
                    <div className='h-48 w-48 rounded-full border-2 border-dashed bg-white hover:border-dashed hover:border-[#119744]'>
                        <img className='rounded-full flex justify-center items-center' src="https://mironmahmud.com/greeny/assets/ltr/images/brand/01.jpg" alt="" />
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-xl font-sans font-medium text-[#39404a]'>Natural Greeny</h1>
                        <p className='text-[#39404a] font-medium'>(45 items)</p>
                    </div>
                </div>
                <div className='text-center '>
                    <div className='h-48 w-48 rounded-full border-2 border-dashed bg-white hover:border-dashed hover:border-[#119744]'>
                        <img className='rounded-full flex justify-center items-center' src="https://mironmahmud.com/greeny/assets/ltr/images/brand/06.jpg" alt="" />
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-xl font-sans font-medium text-[#39404a]'>Natural Greeny</h1>
                        <p className='text-[#39404a] font-medium'>(45 items)</p>
                    </div>
                </div> <div className='text-center '>
                    <div className='h-48 w-48 rounded-full border-2 border-dashed bg-white hover:border-dashed hover:border-[#119744]'>
                        <img className='rounded-full flex justify-center items-center' src="https://mironmahmud.com/greeny/assets/ltr/images/brand/02.jpg" alt="" />
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-xl font-sans font-medium text-[#39404a]'>Natural Greeny</h1>
                        <p className='text-[#39404a] font-medium'>(45 items)</p>
                    </div>
                </div> <div className='text-center '>
                    <div className='h-48 w-48 rounded-full border-2 border-dashed bg-white hover:border-dashed hover:border-[#119744]'>
                        <img className='rounded-full flex justify-center items-center' src="https://mironmahmud.com/greeny/assets/ltr/images/brand/03.jpg" alt="" />
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-xl font-sans font-medium text-[#39404a]'>Natural Greeny</h1>
                        <p className='text-[#39404a] font-medium'>(45 items)</p>
                    </div>
                </div> <div className='text-center '>
                    <div className='h-48 w-48 rounded-full border-2 border-dashed hover:border-dashed hover:border-[#119744] bg-white '>
                        <img className='rounded-full flex justify-center items-center' src="https://mironmahmud.com/greeny/assets/ltr/images/brand/04.jpg" alt="" />
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-xl font-sans font-medium text-[#39404a]'>Natural Greeny</h1>
                        <p className='text-[#39404a] font-medium'>(45 items)</p>
                    </div>
                </div> <div className='text-center '>
                    <div className='h-48 w-48 rounded-full border-2 border-dashed hover:border-dashed hover:border-[#119744] bg-white '>
                        <img className='rounded-full flex justify-center items-center' src="https://mironmahmud.com/greeny/assets/ltr/images/brand/05.jpg" alt="" />
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-xl font-sans font-medium text-[#39404a]'>Natural Greeny</h1>
                        <p className='text-[#39404a] font-medium'>(45 items)</p>
                    </div>
                </div>
            </div>


            <div className='flex justify-center items-center mt-16 '>
                <button className='px-6 py-3 text-[#119744]  flex justify-center items-center gap-1 border-2 border-[#119744] rounded-md font-bold hover:bg-[#119744] hover:text-white duration-200'><span>  <AiFillEye size={20} /></span> <span>View All Brands</span></button>
            </div>


        </div>
    );
};

export default ShopBrands;