import { useNavigate } from "react-router-dom";
import { TCartItem } from "../../types";

type TSubTotalProps = {
    subtotal: number,
    shipping: number,
    carts: TCartItem[],
}

const SubTotal = ({ subtotal, shipping, carts }: TSubTotalProps) => { 
    const navigate = useNavigate();
    const handleCheckout = () => {
        const cartInfo = {
            total: subtotal + shipping,
            carts
        }
        localStorage.setItem('carts', JSON.stringify(cartInfo));
        navigate("/checkout");
    }

    return (
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">{subtotal?.toFixed(1)} ৳</p>
            </div>
            <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">{shipping === 0 ? "Free" : shipping}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div>
                    <p className="mb-1 text-lg font-bold text-end">{(subtotal + shipping)?.toFixed(1)} ৳</p>
                    <p className="text-sm text-gray-700">including VAT</p>
                </div>
            </div>
            <button disabled={carts?.length === 0} onClick={() => handleCheckout()} className="mt-6 w-full rounded-md bg-blue-500 disabled:bg-blue-400 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
            </button>
        </div>
    );
};

export default SubTotal;