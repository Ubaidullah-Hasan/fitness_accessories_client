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
                { type: 'Product', id: productId },
            ],

        }),
        getCarts: builder.query({
            query: () => ({
                url: `/carts`,
                method: 'GET',
            }),
            providesTags: ['Cart'],
        }),
        changeCartQuantaty: builder.mutation({
            query: (payload) => {
                console.log(payload);
                return {
                    url: `/carts/change-quantity/${payload.id}`,
                    method: 'PATCH',
                    body: payload,
                }
            },
            invalidatesTags: (result, error, { productId }) => {
                console.log(productId); 
                return [{ type: 'Cart', id: productId }];
            },
        }),
    }),
})

export const { useAddCartsMutation, useGetCartsQuery, useChangeCartQuantatyMutation } = cartsApi