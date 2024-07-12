import { baseApi } from "../../api/basiApi";

type TCategories = {
    _id: string,
    name: string;
    img: string;
};

const categoriesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategories: builder.query<TCategories[], string>({
            query: () => ({
                url: `/categories`,
                method: 'GET',
            }),
        }),
    }),
})

export const { useGetAllCategoriesQuery } = categoriesApi