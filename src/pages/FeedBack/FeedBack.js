import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";
// import './FeedBack.css'


const FeedBack = () => {

    return (
        <div className="max-w-7xl mx-auto pt-16 px-8">
            <h1 className=" text-[#39404a] lg:text-4xl text-2xl font-serif font-semibold text-center mb-8">Client's Feedback</h1>

            <div className=" lg:flex lg:flex-wrap justify-center lg:gap-x-12  mt-16 ">


                <div className="relative mb-16 lg:mb-0">
                    <div className=" lg:w-[550px]  w-full  rounded-md bg-[#119744] text-center px-10 py-6 ">
                        <div className="flex justify-center mb-5">
                            <FaQuoteLeft size={50} className="text-white " />
                        </div>
                        <h1 className="text-xl font-medium text-white">Think in a Redux way course is highly recommended for beginner and also helpful for those who is using redux for a long time and want to know what is going on behind the scene. Its nice and very helpfull </h1>

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



                    </div>


                    <div className=" flex justify-center bg-white">
                        <img className=" absolute mt-[-40px] w-20 h-20 rounded-full border-4 border-white" src="https://mironmahmud.com/greeny/assets/ltr/images/avatar/03.jpg" alt="" />
                    </div>

                </div>
                <div className="relative">
                    <div className=" lg:w-[550px]  w-full rounded-md bg-[#119744] text-center px-10 py-6 ">
                        <div className="flex justify-center mb-5">
                            <FaQuoteLeft size={50} className="text-white " />
                        </div>
                        <h1 className="text-xl font-medium text-white">Quality not depends on Quantity! এর চাক্ষুষ প্রমাণ সুমিত ভাইয়ের থিংক ইন এ রিডাক্স ওয়ে কোর্সটি। যদি আপনি কোর্সটিকে এর মাত্র ১৯৯৯ টাকা ফি দিয়ে বিচার করেন তাহলে আপনি ষোল আনাই ভুল। সুমিত ভাইয়ের শেখানোর পদ্ধতি নিয়ে নতুন করে কিছুই বলার নেই।   </h1>

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



                    </div>


                    <div className=" flex justify-center bg-white">
                        <img className=" absolute mt-[-40px] w-20 h-20 rounded-full border-4 border-white" src="https://mironmahmud.com/greeny/assets/ltr/images/avatar/03.jpg" alt="" />
                    </div>

                </div>

            </div>


        </div>
    );
};

export default FeedBack;