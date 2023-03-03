import React from 'react';
import Swal from 'sweetalert2';

const AddOffer = () => {

    const addOffers = (e) => {
        e.preventDefault()
        const offerTitle = e.target.offerTitle.value
        const offerDetails = e.target.offerDetails.value
        const offerData = {
            offerTitle, offerDetails
        }
        fetch('http://localhost:5000/offer', {
            method: 'POST',
            body: JSON.stringify(offerData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => Swal.fire(
                'Offer Published!',
                'A Good Deal For All',
                'success'
            ));
        e.target.reset()
    }
    return (
        <div>
            <h1 className='text-xl font-semibold ml-8 text-[#5ab88a] font-serif'>Please Sent Your Offer Notification </h1>
            <div className="max-w-2xl mx-auto bg-white p-16">

                <form onSubmit={addOffers}>
                    <div className="mb-6">
                        <label for="offer-title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Offer Title</label>
                        <input type="text" name='offerTitle' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " required placeholder='Title' />
                    </div>

                    <div className="mb-6">
                        <label for="offer-details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Offer Details</label>
                        <textarea type="text" name='offerDetails' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-32" required placeholder='Offer Details' />
                    </div>




                    <button type="submit" className="text-white bg-[#119744] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Add Offer</button>
                </form>


            </div>

        </div>
    );
};

export default AddOffer;