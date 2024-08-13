import { baseApi } from "../../api/basiApi";



const cartsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addCarts: builder.mutation({
            query: (payload) => {
                console.log(payload);
                return {
                    url: `/carts`,
                    method: 'post',
                    body: payload
                }
            },
        }),
    }),
})

export const { useAddCartsMutation } = cartsApi