import React from 'react';

import { CiShoppingCart } from 'react-icons/ci'
const DiscountOffer = () => {


    return (
        <div className='bg-[#a1f3c0] lg:h-[90vh] mt-16'>

            <div className='lg:flex mx-10 gap-x-16 py-16 '>
                <div className='lg:w-2/4 w-full mt-16 pl-10'>
                    <h1 className='lg:text-4xl text-xl font-bold text-[#39404a] font-serif'>SPECIAL DISCOUNT OFFER</h1>
                    <h1 className='lg:text-4xl text-xl mt-2 lg:ml-4 font-bold text-[#39404a] font-serif'> FOR VEGETABLE ITEMS</h1>
                    <p className='mt-4 text-[#555555]'>Reprehenderit sed quod autem molestiae aut modi minus veritatis iste dolorum suscipit quis voluptatum fugiat mollitia quia minima</p>



                    <div className='flex justify-evenly mt-6'>

                        <div>
                            <h1 className='lg:text-5xl text-3xl font-bold text-[#119744] font-serif'>00</h1>
                            <p className='lg:text-xl text-sm  font-medium text-[#555555]'>Days</p>

                        </div>
                        <div className='lg:text-4xl text-2xl font-semibold flex justify-center items-center text-[#555555] '>:</div>
                        <div>
                            <h1 className='lg:text-5xl text-3xl font-bold text-[#119744] font-serif'>00</h1>
                            <p className='lg:text-xl text-sm  font-medium text-[#555555]'>Days</p>

                        </div>
                        <div className='lg:text-4xl text-2xl font-semibold flex justify-center items-center text-[#555555] '>:</div> <div>
                            <h1 className='lg:text-5xl text-3xl font-bold text-[#119744] font-serif'>00</h1>
                            <p className='lg:text-xl text-sm  font-medium text-[#555555]'>Days</p>

                        </div>
                        <div className='lg:text-4xl text-2xl font-semibold flex justify-center items-center text-[#555555] '>:</div> <div>
                            <h1 className='lg:text-5xl text-3xl font-bold text-[#119744] font-serif'>00</h1>
                            <p className='lg:text-xl text-sm  font-medium text-[#555555]'>Days</p>

                        </div>
                        <div className='lg:text-4xl text-2xl font-semibold flex justify-center items-center text-[#555555] '>:</div>

                    </div>



                    <div className=' mt-12 flex justify-center'>
                        <button className='px-6 py-3  flex justify-center items-center gap-1 border-2 border-[#119744] rounded-md font-bold bg-[#119744] text-white hover:text-[#119744] hover:bg-white duration-200'><span>  <CiShoppingCart size={20} /></span> <span>Shop Now</span></button>
                    </div>
                </div>

                <div className='lg:w-2/4 w-full lg:mt-0 mt-8 relative'>
                    <img className='lg:w-[500px] w-full' src="https://mironmahmud.com/greeny/assets/ltr/images/countdown.png" alt="" />

                    <div className='h-32 w-32 rounded-full bg-[#ff3838] absolute top-0'>
                        <div className=''>
                            <p className='text-4xl text-white mt-7 font-bold font-serif text-center'>20%</p>
                            <p className='text-3xl text-white font-bold font-serif text-center '>OFF</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default DiscountOffer;