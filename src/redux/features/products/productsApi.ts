/* eslint-disable @typescript-eslint/no-explicit-any */
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

const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query<TProduct[], undefined | string | TProductQueryParams>({
            query: (payload: TProductQueryParams) => {
                return {
                    url: `/products`,
                    params: payload,
                    method: 'GET',
                }
            },
            providesTags: ["product", "cart"],
        }),
        getSingleProductsByID: builder.query({
            query: (payload) => {
                return {
                    url: `/products/${payload}`,
                    method: 'GET',
                }
            },
            providesTags: ["product", "cart"],  
        }),
        createProduct: builder.mutation({
            query: (payload) => {
                return {
                    url: "/products",
                    method: 'POST',
                    body: payload
                }
            },
            invalidatesTags: ["product"]
        }),
        deleteProduct: builder.mutation({
            query: (id) => {
                return {
                    url: `/products/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ["product"]
        }),
        updateProduct: builder.mutation({
            query: (args) => {
                return {
                    url: `/products/${args.id}`,
                    method: 'PATCH',
                    body: args.payload
                }
            },
            invalidatesTags: ["product"]
        })
    }),
})

export const { useGetAllProductsQuery, useGetSingleProductsByIDQuery, useCreateProductMutation, useDeleteProductMutation, useUpdateProductMutation }: any = productsApi