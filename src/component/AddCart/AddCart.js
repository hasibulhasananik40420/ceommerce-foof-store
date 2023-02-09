import React from 'react';
import { AiOutlineEye } from 'react-icons/ai'
import { BiBasket } from 'react-icons/bi'
import { DiGitCompare } from 'react-icons/di'
import { BiRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom';
const AddCart = () => {
    return (
        <div className='bg-[#f5f6f7] px-10 pt-20 pb-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6'>
                <div className='card'>
                    <div className='info'>
                        <img src="https://mironmahmud.com/greeny/assets/ltr/images/product/01.jpg" alt="" />

                        <h1>Fresh Green Clies</h1>
                        <h2>$28/pieces</h2>
                        <div>
                            <button className='add-button'><span><BiBasket />
                            </span> <span>Remove From Cart</span> </button>
                        </div>

                    </div>

                    <div className='icon'>
                        <DiGitCompare className='icon1' />
                        <BiRightArrow className='icon2' />
                        <Link to='/product-details'> <AiOutlineEye className='icon3' /></Link>

                    </div>



                </div> <div className='card'>
                    <div className='info'>
                        <img src="https://mironmahmud.com/greeny/assets/ltr/images/product/01.jpg" alt="" />

                        <h1>Fresh Green Clies</h1>
                        <h2>$28/pieces</h2>
                        <div>
                            <button className='add-button'><span><BiBasket />
                            </span> <span>Remove From Cart</span> </button>
                        </div>

                    </div>

                    <div className='icon'>
                        <DiGitCompare className='icon1' />
                        <BiRightArrow className='icon2' />
                        <Link to='/product-details'> <AiOutlineEye className='icon3' /></Link>

                    </div>



                </div> <div className='card'>
                    <div className='info'>
                        <img src="https://mironmahmud.com/greeny/assets/ltr/images/product/01.jpg" alt="" />

                        <h1>Fresh Green Clies</h1>
                        <h2>$28/pieces</h2>
                        <div>
                            <button className='add-button'><span><BiBasket />
                            </span> <span>Remove From Cart</span> </button>
                        </div>

                    </div>

                    <div className='icon'>
                        <DiGitCompare className='icon1' />
                        <BiRightArrow className='icon2' />
                        <Link to='/product-details'> <AiOutlineEye className='icon3' /></Link>

                    </div>



                </div>
            </div>

        </div>
    );
};

export default AddCart;