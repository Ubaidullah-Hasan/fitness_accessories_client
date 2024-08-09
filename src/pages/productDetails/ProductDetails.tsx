import React, { useState } from 'react';
import { TProduct, useGetSingleProductsByIDQuery } from '../../redux/features/products/productsApi';
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, InputNumber, notification } from 'antd';
import { useParams } from 'react-router-dom';

type TProductProps = {
    product: TProduct
}

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState<{ [key: string]: number }>({});

    const { productName } = useParams<{ productName: string }>()
    const { data: product } = useGetSingleProductsByIDQuery(productName);
    // const { data: productItem } = useGetSingleProductsByIDQuery("6691785bb0b604e2e2252593"); todo
    console.log(product);

    const handleAddToCart = () => {
        if (quantity > product.stock) {
            notification.error({
                message: "Error",
                description: "Cannot add more than available stock.",
            });
            return;
        }

        setCart((prevCart) => {
            const newCart = { ...prevCart };
            newCart[product?._id] = (newCart[product?._id] || 0) + quantity;
            return newCart;
        });

        notification.success({
            message: "Success",
            description: "Product added to cart.",
        });
    };


    return (
        <div className="container mx-auto p-6">
            <div className="flex flex-col lg:flex-row">
                {/* Product Image */}
                <div className="flex-1">
                    <img
                        src={product?.image}
                        alt={product?.name}
                        className="rounded-lg shadow-lg max-w-full"
                    />
                </div>


                <div className="flex-1 lg:ml-10 mt-4 lg:mt-0">
                    <h1 className="text-3xl font-bold">{product?.name}</h1>
                    <p className="text-xl text-gray-600 my-2">${product?.price}</p>
                    <p className="my-4">{product?.description}</p>
                    <p className="text-sm text-gray-500">Category: {product?.categoryId}</p>

                    <div className="mt-4">
                        <InputNumber
                            min={1}
                            max={product?.stock}
                            defaultValue={1}
                            value={product?.stock}
                            onChange={(value) => setQuantity(value || 1)}
                        />
                        <Button
                            type="primary"
                            icon={<ShoppingCartOutlined />}
                            className="ml-4"
                            onClick={handleAddToCart}
                            disabled={quantity >= product?.stock}
                        >
                            Add to Cart
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