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
            invalidatesTags: ["cart"]  

        }),
        getCarts: builder.query({
            query: () => ({
                url: `/carts`,
                method: 'GET',
            }),
            providesTags: ["cart"]  
        }),
        changeCartQuantaty: builder.mutation({
            query: (payload) => {
                return {
                    url: `/carts/change-quantity/${payload.id}`,
                    method: 'PATCH',
                    body: payload,
                };
            },
            invalidatesTags: ["cart"]  // todo: cart quantity does not change
        }),

        removeCart: builder.mutation({
            query: (payload) => {
                return {
                    url: `/carts/${payload}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ["cart"]  
        })
    }),
})

export const { useAddCartsMutation, useGetCartsQuery, useChangeCartQuantatyMutation, useRemoveCartMutation } = cartsApi