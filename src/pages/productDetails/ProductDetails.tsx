import { useEffect } from 'react';
import { useGetSingleProductsByIDQuery } from '../../redux/features/products/productsApi';
// import { ShoppingCartOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, notification } from 'antd';
import { useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { TCartItem } from '../../redux/features/cart/cartSlice';
import { useAddCartsMutation } from '../../redux/features/cart/cartsApi';
import RatingIcon from '../../components/rating/RatingIcon';


const ProductDetails = () => {
    const quantity = 1;

    const { id } = useParams<{ id: string }>()
    const { data: product } = useGetSingleProductsByIDQuery(id);

    const cartItems = useSelector((state: RootState) => state.cart.items);
    const [addToCart, {data, isSuccess}] = useAddCartsMutation();


    // Check if product is already in the cart
    const cartItem = cartItems.find((item: TCartItem) => item.productId === product?._id);
    const isAddToCartDisabled = cartItem && cartItem.quantity >= product?.stock;

    const handleAddToCart = () => {
        if (quantity > (product?.stock - (cartItem?.quantity || 0))) {
            notification.error({
                message: "Error",
                description: "Cannot add more than available stock.",
            });
            return;
        }

        addToCart({
            productId: product?._id,
            name: product?.name,
            price: product?.price,
            quantity,
            stock: product?.stock,
        })
    };

    useEffect(() => {
        if (isSuccess && data?.message) {
            notification.success({
                message: "Success",
                description: data.message,
            });
        }
    }, [isSuccess, data]);

    // const handleIncreaseQuantity = () => {
    //     if (cartItem && cartItem.quantity < product?.stock) {
    //         dispatch(increaseQuantity({ productId: product?._id }));
    //     }
    // };

    // const handleDecreaseQuantity = () => {
    //     if (cartItem && cartItem.quantity > 1) {
    //         dispatch(decreaseQuantity({ productId: product?._id }));
    //     }
    // };


    return (
        <div className="mx-auto p-6"> {/* container */}
            <div className="flex flex-col lg:flex-row">
                {/* Product Image */}
                <div className="flex-1">
                    <img
                        src={product?.image}
                        alt={product?.name}
                        className="rounded-lg shadow-lg max-w-full"
                    />
                </div>

                {/* Product Details */}
                <div className="flex-1 lg:ml-10 mt-4 lg:mt-0">
                    <p className="text-sm my-4 text-white uppercase font-semibold tracking-widest bg-stone-900 p-1 rounded-md w-fit ">{product?.brand}</p>
                    <h1 className="text-3xl font-bold">{product?.name}</h1>
                    <p className="my-4">{product?.description}</p>
                    <div className='flex items-center gap-6'>
                        <span className="text-xl text-stone-900 font-bold">$ {product?.price}</span>
                        <RatingIcon rating={product?.rating} />
                    </div>

                    <div className="mt-4 flex items-center">
                        {/* <Button
                            icon={<MinusOutlined />}
                            onClick={handleDecreaseQuantity}
                            disabled={!cartItem || cartItem.quantity <= 1}
                        /> */}
                        {/* <InputNumber
                            min={1}
                            max={product?.stock - (cartItem?.quantity || 0)}
                            value={cartItem?.quantity || quantity}
                            onChange={(value) => setQuantity(value || 1)}
                            className="mx-2"
                        /> */}
                        {/* <Button
                            icon={<PlusOutlined />}
                            onClick={handleIncreaseQuantity}
                            disabled={isAddToCartDisabled}
                        /> */}

                        <Button
                            type="primary"
                            icon={<ShoppingCartOutlined />}
                            onClick={handleAddToCart}
                            disabled={isAddToCartDisabled}
                        >
                            {isAddToCartDisabled ? 'Out of Stock' : 'Add to Cart'}
                        </Button>
                    </div>

                    <p className="mt-2 text-sm text-gray-500">
                        {product?.stock} items available
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;