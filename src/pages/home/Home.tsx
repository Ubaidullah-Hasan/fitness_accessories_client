import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProduct from './components/FeaturedProduct';
import Gallary from './components/Gallary';

const Home = () => {
    return (
        <div>
            <Hero />
            <Categories />
            <FeaturedProduct />
            <Gallary />
        </div>
    );
};

export default Home;