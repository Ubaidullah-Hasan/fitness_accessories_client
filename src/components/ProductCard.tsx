import '@smastrom/react-rating/style.css'
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import RatingIcon from './rating/RatingIcon';

type TProduct = {
    _id: string;
    name: string;
    description: string;
    categoryId: string;
    price: number;
    image: string;
    stock: number;
    brand: string;
    rating: number;
};

type TProductProps = {
    product: TProduct;
    isPrice?: boolean;
    col?: number;
};

const ProductCard = ({ product, isPrice = false, col = 4 }: TProductProps) => {


    return (
        <div className={`border w-[${100 / col}%]`}>
            <div>
                <InnerImageZoom
                    src={product?.image}
                    zoomSrc={product?.image}
                    zoomType="hover"
                    zoomPreload={true}
                    className='h-[205px] object-cover mb-[-20px] !block'
                />
            </div>
            <div className='p-2 border-t'>
                <h3 className='text-lg font-semibold tracking-wide my-2'>{product?.name}</h3>
                <div className='flex items-center gap-3 justify-between'>
                    <div className='flex gap-3'>
                        <RatingIcon rating={product?.rating} />
                        <span className='text-[11px] text-gray-400'>{`(${product?.rating})`}</span>
                    </div>
                    <NavLink to={`/products/${product?._id}`}><Button className='uppercase'>details</Button></NavLink>
                </div>
                {isPrice && <p className='mt-2 text-[#ff6f00] font-bold'>${product?.price}</p>}
            </div>
        </div>
    );
};

export default ProductCard;