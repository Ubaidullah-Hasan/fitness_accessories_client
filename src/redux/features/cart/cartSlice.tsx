import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TCartItem = {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    stock: number;
};

type TCartState = {
    items: TCartItem[];
};

const initialState: TCartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<TCartItem>) => {
            const product = action.payload;
            const existingItem = state.items.find(item => item.productId === product?.productId);

            if (existingItem) {
                if (existingItem.quantity < existingItem.stock) {
                    existingItem.quantity += 1;
                }
            } else {
                state.items.push({ ...product, quantity: 1 });
            }
            
        },
        increaseQuantity: (state, action: PayloadAction<{ productId: string }>) => {
            const item = state.items.find(item => item.productId === action.payload.productId);

            if (item && item.quantity < item.stock) {
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state, action: PayloadAction<{ productId: string }>) => {
            const item = state.items.find(item => item.productId === action.payload.productId);

            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        removeFromCart: (state, action: PayloadAction<{ productId: string }>) => {
            state.items = state.items.filter(item => item.productId !== action.payload.productId);
        },
    },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
