export type TCartItem = {
    _id: string;
    productId: TProduct;
    name: string;
    price: number;
    quantity: number;
    stock: number;
    image?: string;
    brand?: string;
};
export type TProduct = {
    key: string;
    _id: string;
    name: string;
    description: string;
    categoryId: string;
    price: number;
    image: string;
    stock: number;
    brand: string;
    rating: number;
}