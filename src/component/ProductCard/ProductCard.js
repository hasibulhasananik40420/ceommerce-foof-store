import React, { useEffect, useState } from 'react';
import './ProductCard.css'

import Product from './Product';
import { AiFillEye } from 'react-icons/ai';
import Loading from '../Loading/Loading';
const ProductCard = () => {
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

                    <div className='mt-12 mx-w-7xl mx-auto mx-4'>
                        <div className='p-4'>
                            <h1 className='lg:text-4xl text-2xl font-bold text-center '>Recently Sold Items</h1>
                        </div>

                        {/* productcard */}
                        <div className='lg:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center'>



                            {
                                products.slice(0, 10).map(product => <Product key={product._id} product={product} />)
                            }





                        </div>





                        <div className='flex justify-center items-center mt-12 '>
                            <button className='px-6 py-3 text-[#119744]  flex justify-center items-center gap-1 border-2 border-[#119744] rounded-md font-bold hover:bg-[#119744] hover:text-white duration-200'><span>  <AiFillEye size={20} /></span> <span>Show More</span></button>
                        </div>





                        <div className='mt-24 flex justify-center items-center '>
                            <img className='rounded-md transform transition duration-500 hover:scale-105' src="https://mironmahmud.com/greeny/assets/ltr/images/promo/home/03.jpg" alt="" />
                        </div>


                    </div>
            }

        </>
    );
};

export default ProductCard;