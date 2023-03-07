import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineEye } from 'react-icons/ai';
import { BiBasket, BiRightArrow } from 'react-icons/bi';
import { DiGitCompare } from 'react-icons/di';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../Firebase/Firebase.init';

const Product = ({ product }) => {
    const [user] = useAuthState(auth)
    const { name, price, img, _id, quantity, description } = product
    const navigate = useNavigate()
    const productDetails = (id) => {
        navigate(`/product-details/${id}`)
    }

    const addToCart = () => {
        if (user?.email) {
            const cartDetails = {
                cartimage: img,
                userEmail: user?.email,
                cartName: name,
                cartPrice: price,
                cartDes: description,
                cartQuantity: quantity
            }

            const url = `http://localhost:5000/addtocart`

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
            <div className='card'>
                <div className='info'>
                    <img src={img} alt="" />

                    <h1>{name}</h1>
                    <h2><span className='text-2xl font-medium'>৳</span>{price}/pieces</h2>
                    <div>
                        <button onClick={addToCart} className='add-button'><span><BiBasket />
                        </span> <span>Add</span>
                        </button>
                    </div>

                </div>

                <div className='icon'>
                    <DiGitCompare className='icon1' />
                    <BiRightArrow className='icon2' />
                    <AiOutlineEye onClick={() => productDetails(product._id)} className='icon3' />

                </div>



            </div>
        </div>
    );
};

export default Product;