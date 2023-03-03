import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import useMyCart from '../../hooks/useMyCart';
import MyCart from './MyCart';
const AddCart = () => {
    let prices = []
    const [user] = useAuthState(auth)
    const [myCart] = useMyCart(user?.email)
    console.log(myCart)

    myCart.map(data => prices.push(Number(data.cartPrice)))
    // console.log(prices);
    let subtotal = prices.reduce((previusValue, currentValue) => previusValue + currentValue, 0)
    let VAT = ((5 / 100) * subtotal).toFixed(2)
    let delivery = 70
    let Total = Number(subtotal) + Number(VAT) + Number(delivery)


    return (
        <div className='pt-20'>

            <div className=''>
                {
                    myCart.length <= 0 && <div className="p-5 border w-full mb-2 text-center">
                        <h2 className='text-red-500 text-xl'><span className=' text-2xl'></span> Your Cart is Emty ! <Link className='text-blue-500' to='/'>Continue Shopping.</Link> </h2>
                    </div>
                }
            </div>


            <div className='bg-[#f5f6f7] px-10 pt-2 pb-8'>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6'>
                    {
                        myCart?.map(cart => <MyCart key={cart._id} data={cart} />)
                    }
                </div>



                <div className='w-2/4 mx-auto mt-12 border-t-2 border-red-500'></div>

                <div className='pt-12 '>
                    <div className=' lg:w-2/4 w-full mx-auto bg-white rounded shadow-lg p-4'>
                        <div className='w-full flex justify-between mt-4'>
                            <h2 className='font-bold text-[#FE5D03]'>Subtotal</h2>
                            <h2 className='font-bold text-[#FE5D03]'><span className='text-2xl font-medium'> ৳</span> {subtotal} BDT</h2>
                        </div>
                        <hr />
                        <div className='w-full flex justify-between mt-4'>
                            <h2 className='font-bold text-[#FE5D03]'>Delivery Fee</h2>
                            <h2 className='font-bold text-[#FE5D03]'><span className='text-2xl font-medium'> ৳</span> 70 BDT</h2>
                        </div>
                        <hr />
                        <div className='w-full flex justify-between mt-4'>
                            <h2 className='font-bold text-[#FE5D03]'>VAT</h2>
                            <h2 className='font-bold text-[#FE5D03]'><span className='text-2xl font-medium'> ৳</span> {VAT}BDT</h2>
                        </div>
                        <hr />
                        <div className='w-full flex justify-between mt-4'>
                            <h2 className='font-bold text-[#FE5D03]'>Total</h2>
                            <h2 className='font-bold text-[#FE5D03]'><span className='text-2xl font-medium'> ৳</span> {Total} BDT</h2>
                        </div>
                        <Link to='/checkout'>
                            <button className='my-4 w-full bg-[#FE5D03] py-3 text-xl font-bold text-white rounded-md' type='submit'>Proceed to Checkout</button>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddCart;