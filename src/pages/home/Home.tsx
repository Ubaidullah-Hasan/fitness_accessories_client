import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProduct from './components/FeaturedProduct';
import Gallary from './components/Gallary';
import BenefitsSection from './components/BenefitsSection';

const Home = () => {
    return (
        <div>
            <Hero />
            <Categories />
            <FeaturedProduct />
            <BenefitsSection />
            <Gallary />
        </div>
    );
};

export default Home;