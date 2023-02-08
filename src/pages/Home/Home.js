import React from 'react';
import ProductCard from '../../component/ProductCard/ProductCard';
import Articles from './Articles';
import Carosul from './Carosul';
import DiscountOffer from './DiscountOffer';
import FeaturedItems from './FeaturedItems';
import ImgCard from './ImgCard';
import ShopBrands from './ShopBrands';
import TopSmaillBanner from './TopSmaillBanner';
import Twobanner from './Twobanner';

const Home = () => {
    return (
        <div className='bg-[#f5f6f7]'>
            <div className='mx-10 pt-8'>
                <Carosul />
                <ImgCard />
                <ProductCard />
                <FeaturedItems />

            </div>
            <DiscountOffer />

            <Twobanner />
            <ShopBrands />
            <Articles />
            <TopSmaillBanner />

        </div>
    );
};

export default Home;