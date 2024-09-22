import { baseApi } from "../../api/basiApi";

export type TCategories = {
    _id: string,
    categoriName: string;
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