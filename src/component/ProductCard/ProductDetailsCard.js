import React from 'react';
import { AiFillStar, AiOutlineGoogle } from 'react-icons/ai'
import { BiBasket } from 'react-icons/bi'
import { FaFacebookF } from 'react-icons/fa';


const ProductDetailsCard = () => {
    return (
        <div className='mt-16 bg-[#f5f6f7] lg:h-[100vh]'>
            <div className='flex justify-center items-center pt-16 pb-8 '>


                <div
                    className=" lg:w-3/4 w-full p-6 bg-white rounded-lg shadow-lg hover:border hover:border-[#119744]"

                >
                    <div>


                    </div>
                    {/* card content */}
                    <div className='lg:flex gap-5 '>
                        <div className='lg:w-2/4 w-full relative'>
                            <img src="https://mironmahmud.com/greeny/assets/ltr/images/product/09.jpg" alt="" />
                            <div className='absolute top-0 left-0'>
                                <p className='bg-[#119744] rounded text-white w-14 h-6 text-center'>New</p>
                                <p className='bg-red-600 rounded text-white w-14 h-6 text-center mt-1'>-10%</p>
                            </div>
                        </div>
                        <div className=' border border-l border-[#119744]'></div>

                        <div className='lg:w-2/4 w-full p-6'>
                            <h1 className='lg:text-2xl text-xl font-sans font-semibold'>Fresh Organic Green Chilis</h1>
                            <span className='flex  items-center gap-2 mt-2'>
                                <AiFillStar className='text-[#ffab10]' />
                                <AiFillStar className='text-[#ffab10]' />
                                <AiFillStar className='text-[#ffab10]' />
                                <AiFillStar className='text-[#ffab10]' />
                                <p className=' text-xl font-thin text-[39404a]'>(3 reviews)</p>

                            </span>
                            <p className='font-medium text-xl mt-4'>$28/piece</p>
                            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit non tempora magni repudiandae sint suscipit tempore quis maxime explicabo veniam eos reprehenderit fuga</p>






                            <div className="flex flex-row items-center justify-center lg:justify-start mt-5">
                                <p className="text-lg mb-0 mr-4 text-[#39404a]">Share In :</p>
                                <button
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block p-2 bg-[#119744] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                >

                                    <FaFacebookF className='w-4 h-4' />
                                </button>

                                <button
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block p-2 bg-[#119744] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                >

                                    <AiOutlineGoogle className='w-4 h-4' />
                                </button>

                                <button
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block p-2 bg-[#119744] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                >

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">

                                        <path
                                            fill="currentColor"
                                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                        />
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block p-2 bg-[#119744] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4">

                                        <path
                                            fill="currentColor"
                                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                        />
                                    </svg>
                                </button>
                            </div>








                            <div className='mt-8 '>
                                <button className='w-full  py-2 bg-[#119744] rounded-md text-white flex gap-2 justify-center items-center'><span><BiBasket />
                                </span> <span>Add To Cart</span> </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetailsCard;