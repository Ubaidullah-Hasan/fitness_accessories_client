import { baseApi } from "../../api/basiApi";

export type TProduct = {
    _id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    image: string;
    stock: number;
    brand: string;
    rating: number;
}

type TProductQueryParams = {
    order?: string;
    limit?: number;
}

const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query<TProduct[], undefined | string | TProductQueryParams>({
            query: (payload: TProductQueryParams) => {
                const {limit, order} = payload;
                return {
                    url: `/products?limit=${limit}&order=${order}`,
                    method: 'GET',
                }
            }
        }),
    }),
})

export const { useGetAllProductsQuery } = productsApi