import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

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
};

const ProductCard = ({ product, isPrice = false }: TProductProps) => {

    const StarDrawing = (
        <path
            d="M398.799,141.794c-43.394-3.977-86.776-6.52-130.158-8.418C258.835,99.302,242.633-4.751,193.173,0.169
      c-39.659,3.944-61.012,90.515-73.08,130.306c-32.333,0.283-64.692,1.062-97.09,2.416c-14.735,0.615-27.908,17.9-18.207,31.732
      c19.157,27.316,44.198,49.389,70.487,70.103c-11.83,38.196-21.665,77.499-29.759,116.53c-3.504,16.91-5.31,32.212,3.881,44.82
      c2.411,9.987,12.018,18.494,22.429,18.029c51.805-2.313,93.872-44.738,133.991-77.119c33.156,26.317,66.309,52.64,99.475,78.951
      c12.835,10.183,37.057,5.178,35.798-14.828c-3.039-48.158-15.477-96.473-30.599-144.041c32.951-25.229,65.899-50.459,99.11-75.353
      C426.818,168.817,420.858,143.814,398.799,141.794z"
        />
    );

    const customStyles = {
        itemShapes: StarDrawing,
        activeFillColor: '#FF6F00',
        inactiveFillColor: '#afaeae66',
    };

    return (
        <div className='border'>
            <div>
                <InnerImageZoom
                    src={product?.image}
                    zoomSrc={product?.image}
                    zoomType="hover"
                    zoomPreload={true}
                />
            </div>
            <div className='p-2'>
                <h3 className='text-lg font-semibold tracking-wide my-2'>{product?.name}</h3>
                <div className='flex items-center gap-3 justify-between'>
                    <div className='flex gap-3'>
                        <Rating
                            style={{ maxWidth: "100px" }}
                            value={product?.rating}
                            readOnly={true}
                            itemStyles={customStyles}
                        />
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