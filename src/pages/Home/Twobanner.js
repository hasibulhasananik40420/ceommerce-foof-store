import React from 'react';

const Twobanner = () => {
    return (
        <div className='mt-16'>
            <div className='lg:flex lg:justify-evenly gap-6 w-full h-full'>
                <div className='lg:mb-0 mb-6 transform transition duration-500 hover:scale-105'>
                    <img className='rounded' src="https://mironmahmud.com/greeny/assets/ltr/images/promo/home/01.jpg" alt="" />
                </div>

                <div className='transform transition duration-500 hover:scale-105'>
                    <img className='rounded' src="https://mironmahmud.com/greeny/assets/ltr/images/promo/home/02.jpg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Twobanner;