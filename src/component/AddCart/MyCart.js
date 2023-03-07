import React, { useState } from 'react';
import { BiBasket } from 'react-icons/bi';
import Swal from 'sweetalert2';

const MyCart = ({ data }) => {
    // const { cartId, cartName, cartPrice, userEmail, cartimage } = data
    // console.log(cart)

    const [cartData, setCartData] = useState(data)

    const deleteCart = (id) => {
        fetch(`https://ecommerce-food-store-server.vercel.app/deletecart/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted Item',
                    text: 'Successfully Removed',

                })

                setCartData(data)
            })
    }

    return (
        <div>
            <div className='card'>
                <div className='info'>
                    <img src={cartData.cartimage} alt="" />

                    <h1>{cartData.cartName}</h1>
                    <h2><span className='text-2xl font-medium'> ৳</span> {cartData.cartPrice}/pieces</h2>


                    <div>

                        <button onClick={() => deleteCart(cartData._id)} className='add-button'><span><BiBasket />
                        </span> <span>Remove From Cart</span> </button>
                    </div>

                </div>


            </div>        </div>
    );
};

export default MyCart;