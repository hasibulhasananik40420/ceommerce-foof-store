import React from 'react';
import { AiOutlineDelete, AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const CheckOutPage = () => {
    return (
        <div className='bg-[#f5f6f7] p-8 rounded  pt-24'>
            <div className='bg-white w-5/6  mx-auto rounded mt-8  border-t-4 border-[#119744]'>
                <h1 className='text-xl font-semibold text-center p-5 rounded'><span className='text-[#119744]'>Returning customer?</span> <span className='text-red-500'><Link to='/login'>Click here to login</Link></span></h1>
            </div>

            <div>

                <div className='bg-[#f5f6f7] flex justify-center'>

                    <div className="relative overflow-x-auto mt-6 bg-white w-5/6 p-8 rounded">
                        <div> <h1 className='text-2xl font-semibold mb-6 p-1 border-b-2 border-[#119744]'>Your Order</h1></div>
                        <table className="w-full text-sm text-left text-white  rounded-md">
                            <thead className="text-xs text-white uppercase bg-[#119744]">
                                <tr>
                                    <th scope="col" className="px-6 py-5">
                                        Serial
                                    </th>
                                    <th scope="col" className="px-6 py-5">
                                        Product
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>

                                    <th scope="col" className="px-6 py-5">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-5">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-5">
                                        Shopping
                                    </th>
                                    <th scope="col" className="px-6 py-5">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-black border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        01
                                    </th>

                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img className='w-20 h-20 rounded-md ' src="https://mironmahmud.com/greeny/assets/ltr/images/product/01.jpg" alt="" />
                                    </th>
                                    <td className="px-6 py-4">
                                        Product Sliver
                                    </td>
                                    <td className="px-6 py-4">
                                        $28
                                    </td>
                                    <td className="px-6 py-4">
                                        Stock Out
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className='px-4 py-2 bg-[#119744] text-white font-medium rounded'>Add To Cart</button>
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className='flex gap-3 mt-4 cursor-pointer'>

                                            <span className='h-10 w-10 rounded-md bg-[#119744] text-white border flex justify-center items-center'> <AiOutlineEye size={20} /></span>
                                            <span className='h-10 w-10 rounded-md bg-red-500 text-white border flex justify-center items-center'> <AiOutlineDelete size={20} /></span>
                                        </div>
                                    </td>
                                </tr> <tr className="text-black border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        01
                                    </th>

                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img className='w-20 h-20 rounded-md ' src="https://mironmahmud.com/greeny/assets/ltr/images/product/01.jpg" alt="" />
                                    </th>
                                    <td className="px-6 py-4">
                                        Product Sliver
                                    </td>
                                    <td className="px-6 py-4">
                                        $28
                                    </td>
                                    <td className="px-6 py-4">
                                        Stock Out
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className='px-4 py-2 bg-[#119744] text-white font-medium rounded'>Add To Cart</button>
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className='flex gap-3 mt-4 cursor-pointer'>

                                            <span className='h-10 w-10 rounded-md bg-[#119744] text-white border flex justify-center items-center'> <AiOutlineEye size={20} /></span>
                                            <span className='h-10 w-10 rounded-md bg-red-500 text-white border flex justify-center items-center'> <AiOutlineDelete size={20} /></span>
                                        </div>
                                    </td>
                                </tr> <tr className="text-black border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        01
                                    </th>

                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img className='w-20 h-20 rounded-md ' src="https://mironmahmud.com/greeny/assets/ltr/images/product/01.jpg" alt="" />
                                    </th>
                                    <td className="px-6 py-4">
                                        Product Sliver
                                    </td>
                                    <td className="px-6 py-4">
                                        $28
                                    </td>
                                    <td className="px-6 py-4">
                                        Stock Out
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className='px-4 py-2 bg-[#119744] text-white font-medium rounded'>Add To Cart</button>
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className='flex gap-3 mt-4 cursor-pointer'>

                                            <span className='h-10 w-10 rounded-md bg-[#119744] text-white border flex justify-center items-center'> <AiOutlineEye size={20} /></span>
                                            <span className='h-10 w-10 rounded-md bg-red-500 text-white border flex justify-center items-center'> <AiOutlineDelete size={20} /></span>
                                        </div>
                                    </td>
                                </tr> <tr className="text-black border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        01
                                    </th>

                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img className='w-20 h-20 rounded-md ' src="https://mironmahmud.com/greeny/assets/ltr/images/product/01.jpg" alt="" />
                                    </th>
                                    <td className="px-6 py-4">
                                        Product Sliver
                                    </td>
                                    <td className="px-6 py-4">
                                        $28
                                    </td>
                                    <td className="px-6 py-4">
                                        Stock Out
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className='px-4 py-2 bg-[#119744] text-white font-medium rounded'>Add To Cart</button>
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className='flex gap-3 mt-4 cursor-pointer'>

                                            <span className='h-10 w-10 rounded-md bg-[#119744] text-white border flex justify-center items-center'> <AiOutlineEye size={20} /></span>
                                            <span className='h-10 w-10 rounded-md bg-red-500 text-white border flex justify-center items-center'> <AiOutlineDelete size={20} /></span>
                                        </div>
                                    </td>
                                </tr> <tr className="text-black border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        01
                                    </th>

                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <img className='w-20 h-20 rounded-md ' src="https://mironmahmud.com/greeny/assets/ltr/images/product/01.jpg" alt="" />
                                    </th>
                                    <td className="px-6 py-4">
                                        Product Sliver
                                    </td>
                                    <td className="px-6 py-4">
                                        $28
                                    </td>
                                    <td className="px-6 py-4">
                                        Stock Out
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className='px-4 py-2 bg-[#119744] text-white font-medium rounded'>Add To Cart</button>
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className='flex gap-3 mt-4 cursor-pointer'>

                                            <span className='h-10 w-10 rounded-md bg-[#119744] text-white border flex justify-center items-center'> <AiOutlineEye size={20} /></span>
                                            <span className='h-10 w-10 rounded-md bg-red-500 text-white border flex justify-center items-center'> <AiOutlineDelete size={20} /></span>
                                        </div>
                                    </td>
                                </tr>





                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CheckOutPage;