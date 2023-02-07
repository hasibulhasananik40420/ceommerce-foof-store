import React from 'react';
import { BiCar } from 'react-icons/bi'
import { MdSync } from 'react-icons/md'
import { FaHeadset } from 'react-icons/fa'
import { BiLockOpenAlt } from 'react-icons/bi'
const TopSmaillBanner = () => {
    return (
        <div>
            {/* <!-- component --> */}
            <div className="w-full  bg-gray-500  top-small-banner mt-24">
                <div className=" p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center">
                    <div className=" m-0  p-0  text-3xl  text-white  antialiased  text-center">Get 20% Discount For Subscriber</div>
                    <div className=" m-0  p-0  text-xl  text-white  antialiased  text-center">Find out about events and other news</div>
                    <div className=" mt-3  flex  flex-row  flex-wrap">
                        <input type="text" className=" text-gray-600  w-2/3  p-3  rounded-l-lg outline-0" placeholder="john@mail.com" />
                        <button className=" p-3  w-1/3  bg-[#119744]  rounded-r-lg  text-white" type="button">Subscribe</button>
                    </div>
                </div>
            </div>


            <div className='bg-[#f8fffa]'>
                <div className=' lg:flex px-8 py-8 pb-8 mx-10'>

                    <div className='flex justify-center items-center gap-4'>
                        <div className='border border-[#119744] border-dashed rounded-full p-1'>
                            <div className='w-16 h-16 rounded-full border border-dashed border-[#119744] flex justify-center items-center hover:bg-[#119744] hover:text-white'>
                                <BiCar className='text-[#119744] hover:text-white' size={30} />
                            </div>
                        </div>

                        <div>
                            <h1 className='text-xl font-semibold text-gray-600'>Free Home Delivery</h1>
                            <p className='mt-1  text-gray-500'>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                        </div>
                    </div>


                    <div className='flex justify-center items-center gap-4'>
                        <div className='border border-[#119744] border-dashed rounded-full p-1'>
                            <div className='w-16 h-16 rounded-full border border-dashed border-[#119744] flex justify-center items-center hover:bg-[#119744] hover:text-white'>
                                <MdSync className='text-[#119744] hover:text-white' size={30} />
                            </div>
                        </div>

                        <div>
                            <h1 className='text-xl font-semibold text-gray-600'>Instant Return Policy</h1>
                            <p className='mt-1  text-gray-500'>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-4'>
                        <div className='border border-[#119744] border-dashed rounded-full p-1'>
                            <div className='w-16 h-16 rounded-full border border-dashed border-[#119744] flex justify-center items-center hover:bg-[#119744] hover:text-white'>
                                <FaHeadset className='text-[#119744] hover:text-white' size={30} />
                            </div>
                        </div>

                        <div>
                            <h1 className='text-xl font-semibold text-gray-600'>Quick Support System</h1>
                            <p className='mt-1  text-gray-500'>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-4'>
                        <div className='border border-[#119744] border-dashed rounded-full p-1'>
                            <div className='w-16 h-16 rounded-full border border-dashed border-[#119744] flex justify-center items-center hover:bg-[#119744] hover:text-white'>
                                <BiLockOpenAlt className='text-[#119744] hover:text-white' size={30} />
                            </div>
                        </div>

                        <div>
                            <h1 className='text-xl font-semibold text-gray-600'>Secure Payment Way</h1>
                            <p className='mt-1  text-gray-500'>Lorem ipsum dolor sit amet adipisicing elit nobis.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default TopSmaillBanner;