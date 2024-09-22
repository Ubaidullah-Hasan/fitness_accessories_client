import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const baseApi = createApi({
    reducerPath: 'categories',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:6001/api/v1' }),
    tagTypes: ['cart', 'product'],  // Define 'Cart' as a tag type
    endpoints: () => ({})
})


