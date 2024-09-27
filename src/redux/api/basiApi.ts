import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const baseApi = createApi({
    reducerPath: 'categories',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fitness-accessories.vercel.app/api/v1' }),
    tagTypes: ['cart', 'product'],  // Define 'Cart' as a tag type
    endpoints: () => ({})
})


