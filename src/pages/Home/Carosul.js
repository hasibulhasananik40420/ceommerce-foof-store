import React from 'react';
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
const Carosul = () => {

    const slides = [
        {
            url: 'https://mironmahmud.com/greeny/assets/ltr/images/home/category/01.jpg',
        },
        {
            url: 'https://mironmahmud.com/greeny/assets/ltr/images/home/category/03.jpg',
        },
        {
            url: 'https://mironmahmud.com/greeny/assets/ltr/images/home/category/02.jpg',
        },


    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div>
            {/* smaill card */}
            <div className=''>

            </div>


            <div className='max-w-7xl h-[780px] w-full mx-auto py-16  relative group'>
                <div
                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                ></div>
                {/* Left Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white text-green-500 cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white text-green-500 cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer'
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>


            {/* <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    <div className=' h-[100px] w-[180px] desing-img-sm'>
                        <div className='text-center p-3'>
                            <h1 className='text-xl font-semibold text-white'>Vegetables</h1>
                            <p className='text-white'>89 items</p>
                        </div>
                    </div>

                </div>
            </div> */}
        </div>
    );
};

export default Carosul;