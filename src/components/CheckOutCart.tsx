import { TCartItem } from '../types';

const CheckOutCart = ({ cart }: { cart: TCartItem }) => {
    return (
        <div
            className="border justify-between mb-6 rounded-lg bg-white p-4 shadow-sm sm:flex sm:justify-start"
        >
            <img src={cart.image} alt="product-image" className="w-full rounded-lg sm:w-40" />
            <div className="sm:ml-4 sm:flex flex-col sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">{cart.name}</h2>
                    <p className="mt-1 text-xs text-gray-700 uppercase">{cart.brand}</p>
                </div>

                <div className="flex items-center justify-between border-gray-100">
                    <p className=" mt-2 font-semibold text-sm">Quantaty: {cart.quantity}</p>
                    <p className="text-sm font-bold">{cart.price} ৳</p>
                </div>
            </div>
        </div>
    );
};

export default CheckOutCart;