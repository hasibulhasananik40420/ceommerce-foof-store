import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartCheckFill, BsFillCartFill } from "react-icons/bs";
import { IoIosGitCompare, IoIosListBox } from "react-icons/io";
import { BiMenuAltLeft, BiSearch, BiSearchAlt } from "react-icons/bi";
import { AiFillHeart } from 'react-icons/ai';
const Navbar = () => {
    let [open, setOpen] = useState(false);

    return (
        <div>
            <nav className='mx-16'>
                <div className='shadow-sm w-full fixed top-0 left-0 z-50 border-b'>
                    <div className='md:flex items-center justify-between bg-[#f5f6f7] py-4 md:px-10 px-7'>
                        <div className=' font-bold text-2xl cursor-pointer font-[Poppins] 
  text-white'>
                            <div className='flex justify-center items-center gap-10 md:text-2xl text-xl  text-black mr-1 pt-2'>
                                <Link to="/">
                                    <img className='lg:w-[170px] w-[80px]' src="https://mironmahmud.com/greeny/assets/ltr/images/logo.png" alt="" />

                                </Link>


                                <div className='flex justify-center items-center gap-2'>
                                    <img className='lg:h-10 lg:w-10 w-6 h-6 rounded-full' src="https://mironmahmud.com/greeny/assets/ltr/images/user.png" alt="" />
                                    <h1 className='font-semibold lg:text-xl text-sm text-[#119744] font-serif'>Hasibul</h1>
                                </div>




                            </div>






                        </div>

                        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                            <BiMenuAltLeft className='border border-[#0f172a] shadow rounded w-10 hover:border-[#6d28d9] duration-300' name={open ? 'close' : 'menu'}></BiMenuAltLeft>
                        </div>



                        <ul onClick={() => setOpen(!open)} className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#f5f6f7] text-black md:bg-[#f5f6f7] md:text-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 pr-6 transition-all duration-500 ease-in ${open ? 'top-16 ' : 'top-[-490px]'}`}>


                            <li className='md:my-0 my-7 md:pb-0 md:mr-28 '>
                                <div className='relative '>
                                    <input className='border border-[#119744] bg-white  h-11 lg:w-[400px] w-full rounded-full pl-3 outline-0' type="search" name="" id="" placeholder='Search' />
                                    <button className='absolute top-0 right-0'><BiSearch className='h-11 w-11 p-2 bg-[#119744] rounded-full text-white' /></button>
                                </div>
                            </li>

                            <li title='compare' className='relative h-10 w-10 bg-[#f5f6f7] md:ml-4 rounded-full border flex justify-center items-center hover:bg-[#119744] duration-300 hover:text-white cursor-pointer md:my-0 my-7 md:pb-0'>
                                <Link to='/compare'> <IoIosGitCompare size={20} /></Link>
                                <div className='bg-[#119744] absolute top-[-10px] right-0 rounded-full h-5 w-5 p-1 flex justify-center items-center text-white  '>0</div>
                            </li>

                            <li title='wishlist' className='relative h-10 w-10 bg-[#f5f6f7] md:ml-4 rounded-full border flex justify-center items-center hover:bg-[#119744] duration-300 hover:text-white cursor-pointer md:my-0 my-7 md:pb-0 '>
                                <Link to='/wishlist'> <AiFillHeart size={20} /></Link>
                                <div className='bg-[#119744] absolute top-[-10px] right-0 rounded-full h-5 w-5 p-1 flex justify-center items-center text-white'>0</div>
                            </li>

                            <li title='Add to cart' className='relative h-10 w-10 bg-[#f5f6f7] md:ml-4 rounded-full border flex justify-center items-center hover:bg-[#119744] duration-300 hover:text-white cursor-pointer md:my-0 my-7 md:pb-0 '>
                                <Link to='/cart'>  <BsFillCartCheckFill size={20} /></Link>
                                <div className='bg-[#119744] absolute top-[-10px] right-0 rounded-full h-5 w-5 p-1 flex justify-center items-center text-white'>0</div>
                            </li>


                            <li>
                                <Link to='/login' className='md:ml-8 text-xl text-[#119744]  font-semibold rounded-full border border-[#119744] px-4 py-1 hover:bg-[#119744] hover:text-white hover:duration-500 cursor-pointer '>Login

                                </Link>
                            </li>







                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;