import React from 'react';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProduct from './components/FeaturedProduct';

const Home = () => {
    return (
        <div>
            <Hero />
            <Categories />
            <FeaturedProduct />
        </div>
    );
};

export default Home;