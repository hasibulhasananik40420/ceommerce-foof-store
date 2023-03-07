import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillEye, AiOutlineHome } from 'react-icons/ai';
import { BiDockBottom } from 'react-icons/bi';
import { HiOutlineDocumentRemove } from 'react-icons/hi';
import { MdReviews } from 'react-icons/md';
import { RiUserLine } from 'react-icons/ri';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../../component/CustomLink/CustomLink';
import auth from '../../Firebase/Firebase.init';
import useAdmin from '../../hooks/useAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className='pt-6'>
            <div className=''>

                <div className='lg:flex justify-between mx-8 '>
                    <Link to='/' className='px-6 py-2 text-[#119744]  flex justify-center items-center gap-1 border-2 border-[#119744] rounded-md font-bold hover:bg-[#119744] hover:text-white duration-200'><span>  <AiFillEye size={20} /></span> <span>Back Home Page</span></Link >

                    <h1 className='lg:text-4xl text-2xl text-center pt-5 text-[#5ab88a] font-montons font-semibold'>{user?.displayName} welcome to our <span className='text-black font-montons font-semibold'></span>Food Store Dashboard</h1>


                </div>


                <div className='  bg-[#FDFCF6] w-full'>
                    <div className='lg:max-w-7xl md-w-full  mx-auto px-4  md:px-12 '>


                    </div>
                </div>
                <div className="w-full mt-8">
                    <div className='md-w-full  mx-auto md:flex gap-10 justify-center'>
                        <div className='md:w-[20%] md:max-h-max h-full rounded-sm shadow-md p-2'>


                            <CustomLink className="hover:bg-[#FC8B06]  " to='my-profile'> <span className='w-3/4 flex  items-center'><AiOutlineHome className='block text-xl mr-6' /> <span className='block'>My Profile</span></span> </CustomLink>
                            <CustomLink className="hover:bg-[#FC8B06]  " to='my-wallet'> <span className='w-3/4 flex  items-center'><AiOutlineHome className='block text-xl mr-6' /> <span className='block'>My Wallet</span></span> </CustomLink>

                            <CustomLink className="hover:bg-[#FC8B06]" to='my-review'>  <span className='w-3/4 flex  items-center'><MdReviews className='block  mr-6 text-xl' /> <span className='block '>My Review</span></span></CustomLink>

                            {admin && <>

                                <CustomLink className="hover:bg-[#FC8B06]" to='all-users'><span className='w-3/4 flex  items-center'><RiUserLine className='block text-xl mr-6' /><span className='block'> All Users </span> </span></CustomLink>


                                <CustomLink className="hover:bg-[#FC8B06]" to='add-product'><span className='w-3/4 flex  items-center'><RiUserLine className='block text-xl mr-6' /><span className='block'> Add Product </span> </span></CustomLink>



                                <CustomLink className="hover:bg-[#FC8B06]" to='add-offer'><span className='w-3/4 flex  items-center'><RiUserLine className='block text-xl mr-6' /><span className='block'> Add Offer </span> </span></CustomLink>

                            </>
                            }






                        </div>
                        <div className='md:w-[80%]  rounded-sm  shadow-lg border border-[#eefff7] p-2 '>
                            {/* Out let Here */}
                            <Outlet />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;