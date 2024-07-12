import { baseApi } from "../../api/basiApi";

type TCategories = {
    _id: string,
    name: string;
    image: string;
};

const categoriesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategories: builder.query<TCategories[], undefined|string>({
            query: () => ({
                url: `/categories`,
                method: 'GET',
            }),
        }),
    }),
})

export const { useGetAllCategoriesQuery } = categoriesApi