import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Loading from '../../component/Loading/Loading';

const MyReview = () => {
    const [loading, setLoading] = useState(false)

    const addReview = (e) => {
        e.preventDefault()
        const review = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            des: e.target.des.value,

        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Thanks for your review',
                    showConfirmButton: false,
                    timer: 2000
                })
                e.target.reset()
            })
    }


    return (
        <>

            {
                loading ? <Loading /> :
                    <div>
                        <h1 className='text-xl font-semibold ml-8 text-[#5ab88a] font-serif'>Please Sent Your review </h1>
                        <div className="max-w-2xl mx-auto bg-white p-16">

                            <form onSubmit={addReview}>
                                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                                    <div>
                                        <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
                                        <input type="text" id="first_name" name='firstName' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                    </div>
                                    <div>
                                        <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
                                        <input type="text" id="last_name" name='lastName' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                                    </div>


                                </div>
                                <div className="mb-6">
                                    <label for="img" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Review</label>
                                    <textarea type="text" name='des' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-32" required placeholder='review' />
                                </div>




                                <button type="submit" className="text-white bg-[#119744] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Add Revire</button>
                            </form>


                        </div>

                    </div>

            }

        </>
    );
};

export default MyReview;