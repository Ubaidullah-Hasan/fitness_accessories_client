import { baseApi } from "../../api/basiApi";



const cartsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addCarts: builder.mutation({
            query: (payload) => {
                // console.log(payload);
                return {
                    url: `/carts`,
                    method: 'post',
                    body: payload
                }
            },
            invalidatesTags: (result, error, { productId }) => [
                'Cart',  
                { type: 'Product', id: productId },  // Invalidate the specific Product tag to refetch the product data
            ],

        }),
        getCarts: builder.query({
            query: () => ({
                url: `/carts`,
                method: 'GET',
            }),
            providesTags: ['Cart'],
        }),
    }),
})

export const { useAddCartsMutation, useGetCartsQuery } = cartsApi