import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../Firebase/Firebase.init';
import useMyCart from '../../hooks/useMyCart';


// const stripePromise = loadStripe('pk_test_51L3O63A075wgahMPXUKqu3rlTdQ90cYSLsDuKsWMH70GXlQDUteuuo2eTmki8zEHEyz5q1n3gUsTCMudqCHo0FP000aFDt7yOk');

const CheckOutPage = () => {


    let prices = []
    const [user] = useAuthState(auth)
    const [myCart] = useMyCart(user?.email)
    // console.log(myCart)

    myCart.map(data => prices.push(Number(data.cartPrice)))
    // console.log(prices);
    let subtotal = prices.reduce((previusValue, currentValue) => previusValue + currentValue, 0)
    let VAT = ((5 / 100) * subtotal).toFixed(2)
    let delivery = Number(70)
    let Total = Number(subtotal) + Number(VAT) + Number(delivery)


    //https://dashboard.stripe.com/test/payments

    //prace order 




    const addorder = (e) => {
        e.preventDefault()
        const order = {
            name: e.target.name.value,
            email: user?.email,
            phone: e.target.phone.value,
            addinfo: e.target.addinfo.value,
            total: Total,
            mycart: myCart


        }

        fetch('http://localhost:5000/orderplace', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Please go to my order page to pay',
                    showConfirmButton: false,
                    timer: 2000
                })
                e.target.reset()
            })
    }

    // payment








    return (
        <div className='bg-[#f5f6f7] p-8 rounded  pt-24'>
            <div className='bg-white w-5/6  mx-auto rounded mt-8  border-t-4 border-[#119744]'>
                <h1 className='text-xl font-semibold text-center p-5 rounded'><span className='text-[#119744]'>Returning customer?</span> <span className='text-red-500'><Link to='/login'>Click here to login</Link></span></h1>
            </div>

            <div>



                <div className='lg:max-w-7xl md-w-full  mx-auto px-4  md:px-12 mt-12'>
                    <div className="md:flex gap-6  ">
                        <div className='md:w-[70%] '>
                            <form onSubmit={addorder}>
                                <p className='text-2xl'>Billing Details</p>
                                <label className='text-mono'>Your Name</label>
                                <input type="text" name='name' className='py-3 px-3 border border-[#119744] rounded w-full mb-4' defaultValue={user?.displayName} placeholder='Your Full Name' />
                                <label className='text-mono'>Your Email</label>
                                <input type="text" className='py-3 px-3 border border-[#119744] rounded w-full mb-4' defaultValue={user?.email} placeholder='Your Email' disabled />
                                <label className='text-mono'>Phone Number (optional)</label>
                                <input type="text" name='phone' className='py-3 px-3 border border-[#119744] rounded w-full mb-4' placeholder='Your Phone' />
                                <p className='text-2xl '>Additional information</p>
                                <textarea className=' p-2 h-[96px] border border-[#119744] rounded w-full mb-4' name="addinfo" id="" ></textarea>



                                <p className='text-2xl '>Your Order</p>
                                <div className='w-full flex justify-between mt-4'>
                                    <h2 className='font-bold text-[#FE5D03]'>Product</h2>
                                    <h2 className='font-bold text-[#FE5D03]'>Subtotal</h2>
                                </div>
                                <hr />



                                <div className='w-full flex justify-between mt-4'>
                                    <h2 className='font-bold text-[#FE5D03]'>Subtotal</h2>
                                    <h2 className='font-bold text-[#FE5D03]'>৳ {subtotal} BDT</h2>
                                </div>
                                <hr />
                                <div className='w-full flex justify-between mt-4'>
                                    <h2 className='font-bold text-[#FE5D03]'>Delivery</h2>
                                    <h2 className='font-bold text-[#FE5D03]'>৳ {delivery} BDT</h2>
                                </div>
                                <hr />
                                <div className='w-full flex justify-between mt-4'>
                                    <h2 className='font-bold text-[#FE5D03]'>VAT</h2>
                                    <h2 className='font-bold text-[#FE5D03]'>৳ {VAT} BDT</h2>
                                </div>
                                <hr />

                                <div className='w-full flex justify-between mt-4'>
                                    <h2 className='font-bold text-[#FE5D03]'>Total</h2>
                                    <div id='allprice'><h2 className='font-bold text-[#FE5D03]'>৳ {Total} BDT</h2></div>
                                </div>








                                <button disabled={Total <= 0} className='my-4 w-full bg-[#FE5D03] py-3 text-xl font-bold text-white rounded-md' type='submit' >Place Order</button>

                            </form>

                        </div>
                        <div className='md:w-[30%]  '>
                            <div>
                                <img className='mx-auto' src="https://www.oneeducation.org.uk/wp-content/uploads/2021/11/side-checkout-2.jpg" alt="" />
                            </div>
                            <div>
                                <img className='mx-auto' src="https://www.oneeducation.org.uk/wp-content/uploads/2021/11/side-checkout-1.jpg" alt="" />
                            </div>

                        </div>
                    </div>


                </div>




            </div>
        </div>
    );
};

export default CheckOutPage;