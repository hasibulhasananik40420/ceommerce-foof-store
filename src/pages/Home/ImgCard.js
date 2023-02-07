import React from 'react';

const ImgCard = () => {
    return (
        <div className='lg:mx-2'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className=' lg:h-[270px] lg:w-[400px] w-full h-full transform transition duration-500 hover:scale-105'>
                    <img className='rounded-xl ' src="https://mironmahmud.com/greeny/assets/ltr/images/promo/home/06.jpg" alt="" />
                </div>
                <div className=' lg:h-[270px] lg:w-[400px] w-full h-full transform transition duration-500 hover:scale-105'>
                    <img className='rounded-xl ' src="https://mironmahmud.com/greeny/assets/ltr/images/promo/home/07.jpg" alt="" />
                </div>
                <div className=' lg:h-[270px] lg:w-[400px] w-full h-full transform transition duration-500 hover:scale-105'>
                    <img className='rounded-xl' src="https://mironmahmud.com/greeny/assets/ltr/images/promo/home/08.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ImgCard;