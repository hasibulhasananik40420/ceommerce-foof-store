import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillStar, AiOutlineEye } from 'react-icons/ai';
import { BiBasket, BiRightArrow } from 'react-icons/bi';
import { IoIosGitCompare } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../Firebase/Firebase.init';

const AddToCartFeaturedItem = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const productDetails = (id) => {
        navigate(`/product-details/${id}`)
    }



    const addToCart = () => {
        if (user?.email) {
            const cartDetails = {
                cartimage: product.img,
                userEmail: user?.email,
                cartName: product.name,
                cartPrice: product.price,
                cartDes: product.description,
                cartQuantity: product.quantity
            }

            const url = `https://ecommerce-food-store-server.vercel.app/addtocart`

            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartDetails)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    Swal.fire(
                        'SuccessFully Added',
                        'You Can Checkout this Product Now',
                        'success'
                    )

                })



        }

        else {
            Swal.fire(
                'Log In First',
                "You Can't Add To Cart WithOut Login",
                'info'
            )
        }
    }



    return (
        <div>

            <div
                className="lg:w-[600px] lg:h-[280px] w-full h-full relative p-6 bg-white rounded-lg shadow-lg hover:border hover:border-[#119744]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className={`absolute top-[170px] left-[50px] ${isHovered ? 'block' : 'hidden'
                        }`}
                >

                    <div className='flex gap-3 mt-4 cursor-pointer'>
                        <span className='h-10 w-10 rounded-md bg-[#119744] text-white border flex justify-center items-center'> <IoIosGitCompare size={20} /></span>

                        <span className='h-10 w-10 rounded-md bg-[#119744] text-white border flex justify-center items-center'> <BiRightArrow size={20} /></span>

                        <span className='h-10 w-10 rounded-md bg-[#119744] text-white border flex justify-center items-center'> <AiOutlineEye onClick={() => productDetails(product._id)} size={20} /></span>

                    </div>
                </div>
                {/* card content */}
                <div className='lg:flex gap-5 '>
                    <div className=''>
                        <img src={product.img} alt="" />
                        <span className=''> <p className='bg-[#b12fad] px-1 w-16 text-white rounded absolute top-3 left-3'>Feature</p></span>
                    </div>
                    <div className=' border border-l border-[#119744]'></div>

                    <div>
                        <h1 className='text-2xl font-sans font-semibold'>{product.name}</h1>
                        <span className='flex  items-center gap-2 mt-2'>
                            <AiFillStar className='text-[#ffab10]' />
                            <AiFillStar className='text-[#ffab10]' />
                            <AiFillStar className='text-[#ffab10]' />
                            <AiFillStar className='text-[#ffab10]' />
                            <p className=' text-xl font-thin text-[39404a]'>(3 reviews)</p>

                        </span>
                        <p className='font-medium text-xl mt-2'>${product.price}</p>
                        <p className='mt-2'>Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...</p>

                        <div className='mt-2'>
                            <button onClick={addToCart} className='add-button'><span><BiBasket />
                            </span> <span>Add</span> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToCartFeaturedItem;