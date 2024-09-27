import { Button } from 'antd';
import { Link } from 'react-router-dom';
import "./../style/hero.css"

const Hero = () => {
    return (
        <div className='hero py-[20%] px-8'>
            <div className='w-[60%]'>
                <h1 className='text-5xl text-white uppercase font-extrabold'>Unlock Premium Gym Gear</h1>
                <p className='text-white text-lg my-4 w-[80%]'>Discover the ultimate collection of high-quality exercise equipment and accessories designed to elevate your workouts.</p>
                <Link to="/products">
                    <Button className='py-6 px-8 uppercase font-bold tracking-widest mt-4'>Shop Now</Button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;