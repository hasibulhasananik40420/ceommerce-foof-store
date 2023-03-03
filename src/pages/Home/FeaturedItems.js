import React, { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineEye } from 'react-icons/ai';
import { BiBasket, BiRightArrow } from 'react-icons/bi';
import { IoIosGitCompare } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Loading from '../../component/Loading/Loading';

const FeaturedItems = () => {
    const [isHovered, setIsHovered] = useState(false);

    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    const productDetails = (id) => {
        navigate(`/product-details/${id}`)
    }

    useEffect(() => {
        fetch('http://localhost:5000/products')
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


                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8'>



                            {
                                products.slice(10, 16).map(product => <div product={product} key={product._id}>


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
                                                    <button className='add-button'><span><BiBasket />
                                                    </span> <span>Add</span> </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>)
                            }







                        </div>
                    </div>
            }
        </>






    );
};

export default FeaturedItems;