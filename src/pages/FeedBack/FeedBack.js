import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";
import './FeedBack.css'


const FeedBack = () => {

    return (
        <div className="mx-10 pt-16">
            <h1 className=" text-[#39404a] text-4xl font-serif font-semibold text-center mb-8">Client's Feedback</h1>

            <div className="container lg:flex lg:justify-evenly mt-16 ">
                <div className="lg:w-[550px] lg:h-[330px] w-full h-full rounded-md bg-[#119744] text-center px-10 py-6 mb-5 lg:mb-0">
                    <div className="flex justify-center mb-5">
                        <FaQuoteLeft size={50} className="text-white " />
                    </div>
                    <h1 className="text-xl font-semibold text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vero, esse autem hic libero tenetur eius voluptate? Aspernatur, saepe. Dolorem ea recusandae dolore</h1>

                    <div className="mt-5 mb-5">
                        <p className="font-medium text-xl text-white">Hasibul Hasan</p>

                        <span className='flex justify-center items-center'>
                            <AiFillStar className='text-[#ffab10]' />
                            <AiFillStar className='text-[#ffab10]' />
                            <AiFillStar className='text-[#ffab10]' />
                            <AiFillStar className='text-[#ffab10]' />
                            <AiFillStar className='text-[#ffab10]' />
                        </span>
                    </div>

                    <div className="flex justify-center">
                        <img className=" w-20 h-20 rounded-full border-4 border-white" src="https://mironmahmud.com/greeny/assets/ltr/images/avatar/01.jpg" alt="" />
                    </div>

                </div>

                <div className="lg:w-[550px] lg:h-[330px] w-full h-full rounded-md bg-[#119744] text-center px-10 py-6 ">
                    <div className="flex justify-center mb-5">
                        <FaQuoteLeft size={50} className="text-white " />
                    </div>
                    <h1 className="text-xl font-semibold text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vero, esse autem hic libero tenetur eius voluptate? Aspernatur, saepe. Dolorem ea recusandae dolore</h1>

                    <div className="mt-5 mb-5">
                        <p className="font-medium text-xl text-white">Hasibul Hasan</p>

                        <span className='flex justify-center items-center'>
                            <AiFillStar className='text-[#ffab10]' />
                            <AiFillStar className='text-[#ffab10]' />
                            <AiFillStar className='text-[#ffab10]' />
                            <AiFillStar className='text-[#ffab10]' />
                            <AiFillStar className='text-[#ffab10]' />
                        </span>
                    </div>

                    <div className="flex justify-center">
                        <img className=" w-20 h-20 rounded-full border-4 border-white" src="https://mironmahmud.com/greeny/assets/ltr/images/avatar/03.jpg" alt="" />
                    </div>

                </div>
            </div>


        </div>
    );
};

export default FeedBack;