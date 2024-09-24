import { baseApi } from "../../api/basiApi"

export const paymentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createPayment: builder.mutation({
            query: (payload) => {
                // console.log(payload);
                return {
                    url: `/order`,
                    method: 'post',
                    body: payload
                }
            },
        }),
        // getCarts: builder.query({
        //     query: () => ({
        //         url: `/carts`,
        //         method: 'GET',
        //     }),
        //     providesTags: ["cart"]
        // })
    }),
})