import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillStar, AiOutlineEye } from 'react-icons/ai';
import { BiBasket, BiRightArrow } from 'react-icons/bi';
import { IoIosGitCompare } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Loading from '../../component/Loading/Loading';
import auth from '../../Firebase/Firebase.init';
import AddToCartFeaturedItem from './AddToCartFeaturedItem';

const FeaturedItems = () => {


    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch('https://ecommerce-food-store-server.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProducts(data)
            })
    }, [])







    return (
        <>
            {
                !products.length ? <Loading /> :

                    <div className=' mt-16'>

                        <h1 className='mt-20 mb-20 text-center lg:text-4xl text-2xl font-bold'>Our Featured Items</h1>


                        <div className='lg:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center'>



                            {
                                products.slice(10, 16).map(product => <AddToCartFeaturedItem product={product} key={product._id}>






                                </AddToCartFeaturedItem>)
                            }







                        </div>
                    </div>
            }
        </>






    );
};

export default FeaturedItems;