import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStoreKey = '3c1f06e572f598cefb6cae407a422a8b'



    const onSubmit = async data => {

        const img = data.img[0]
        const formData = new FormData();
        formData.append('image', img);

        const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.display_url
                    const productData = {
                        name: data.name,
                        price: data.price,
                        quantity: data.quantity,
                        description: data.description,
                        img: img
                    }
                    fetch('https://ecommerce-food-store-server.vercel.app/addproducts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                            // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(productData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.insertedId) {
                                Swal.fire({
                                    position: 'top-center',
                                    icon: 'success',
                                    title: 'Your work has been saved',
                                    showConfirmButton: false,
                                    timer: 1500
                                })

                            }

                            else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Something went wrong!',
                                    footer: '<a href="">Why do I have this issue?</a>'
                                })
                            }
                        })
                    reset()
                }
            })
    }



    return (
        <div className=''>
            <div className="max-w-2xl mx-auto bg-white p-16">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                        <div>
                            <label for="product name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product Name</label>
                            <input {...register("name")} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="product name" required />
                        </div>
                        <div>
                            <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                            <input {...register("price")} type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="price" required />
                        </div>


                    </div>

                    <div className="mb-6">
                        <label for="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quantity</label>
                        <input {...register("quantity")} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>

                    <div className="mb-6">
                        <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                        <textarea {...register("description")} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-20" required />
                    </div>

                    <div className="mb-6">
                        <label for="img" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image Upload</label>
                        <input {...register("img")} type="file" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>


                    <button type="submit" className="text-white bg-[#119744] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Publist Product</button>
                </form>


            </div>
        </div>
    );
};

export default AddProduct;