import { baseApi } from "../../api/basiApi";

export type TProduct = {
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

type TProductQueryParams = {
    sort?: string;
    limit?: number;
    searchTerm?: string;
}
// type TSingleProductQueryParams = {
//     id: string
// }

const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query<TProduct[], undefined | string | TProductQueryParams>({
            query: (payload: TProductQueryParams) => {
                // console.log(payload)
                return {
                    // url: `/products?limit=${limit}&order=${order}`,
                    url: `/products`,
                    params: payload,
                    method: 'GET',
                }
            }
        }),
        getSingleProductsByID: builder.query({
            query: (payload) => {
                // console.log(payload)
                return {
                    url: `/products/${payload}`,
                    method: 'GET',
                }
            }
        }),
    }),
})

export const { useGetAllProductsQuery, useGetSingleProductsByIDQuery } = productsApi