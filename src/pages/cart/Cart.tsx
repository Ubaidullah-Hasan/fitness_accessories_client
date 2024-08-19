import { useState } from 'react';
import { useChangeCartQuantatyMutation, useGetCartsQuery, useRemoveCartMutation } from '../../redux/features/cart/cartsApi';
import SubTotal from './SubTotal';
import { TCartItem } from '../../redux/features/cart/cartSlice';
import LoadingOverlay from 'react-loading-overlay';

const Cart = () => {
    const [shipping, setShipping] = useState<number>(0);
    const { data: carts } = useGetCartsQuery(undefined);
    console.log(carts?.carts);

    const [changeCartQuantaty, { isLoading: isQuantityChangeLoading }] = useChangeCartQuantatyMutation(undefined);
    const [removeCart, { data: reCart, isLoading: isLoadingCart }] = useRemoveCartMutation(undefined);
    console.log(reCart, isLoadingCart);

    const handleQuantity = (id: string, quantity: number) => {
        changeCartQuantaty({
            id: id,
            quantity: quantity,
        })
    };

    const removeCartHandle = (id: string,) => {
        removeCart(id);
    };


    // Calculating subtotal
    const subtotal = carts?.carts?.reduce((total: number, item: TCartItem) => total + item.price * item.quantity, 0);
    // console.log(subtotal)

    return (
        <div className="relative">
            {isLoadingCart && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <LoadingOverlay
                        active={true}
                        spinner
                        text='Deleting...'
                    />
                </div>
            )}
            <div className=" bg-gray-100 pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">
                        {carts?.carts?.map((item: TCartItem) => (
                            <div
                                key={item._id}
                                className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                            >
                                <img src={item.image} alt="product-image" className="w-full rounded-lg sm:w-40" />
                                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                    <div className="mt-5 sm:mt-0">
                                        <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                                        <p className="mt-1 text-xs text-gray-700 uppercase">{item.brand}</p>
                                    </div>
                                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                        <div className="flex items-center border-gray-100">
                                            <button
                                                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50 disabled:bg-gray-100 disabled:text-inherit"
                                                onClick={() => handleQuantity(item?._id, -1)}
                                                disabled={item?.quantity === 1}
                                            >
                                                -
                                            </button>
                                            <input
                                                className="h-8 w-8 border bg-white text-center text-xs outline-none"
                                                type="number"
                                                value={item.quantity}
                                                min="1"
                                                readOnly
                                            />
                                            <button
                                                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                                onClick={() => handleQuantity(item?._id, 1)}
                                                disabled={item?.quantity === item.stock}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <p className="text-sm">{item.price} ৳</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                                                onClick={() => removeCartHandle(item?._id)}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Sub total */}
                    <SubTotal subtotal={subtotal} shipping={shipping} />
                </div>
            </div>
        </div>

    );
};

export default Cart;