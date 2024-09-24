import { ReactNode } from 'react';
import { useGetCartsQuery } from '../redux/features/cart/cartsApi';
import { useNavigate } from 'react-router-dom';

const CheckOutProtected = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();
    const { data: carts } = useGetCartsQuery(undefined);
    
    if(carts?.carts?.length === 0){
        navigate("/products");
    }

    return children;
};

export default CheckOutProtected;