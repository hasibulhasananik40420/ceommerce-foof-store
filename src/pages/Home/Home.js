import React from 'react';
import ProductCard from '../../component/ProductCard/ProductCard';
import Carosul from './Carosul';
import DiscountOffer from './DiscountOffer';
import ImgCard from './ImgCard';
import Twobanner from './Twobanner';

const Home = () => {
    return (
        <div className='bg-[#f5f6f7]'>
            <div className='mx-10'>
                <Carosul />
                <ImgCard />
                <ProductCard />
                <Twobanner />

            </div>
            <DiscountOffer />
        </div>
    );
};

export default Home;