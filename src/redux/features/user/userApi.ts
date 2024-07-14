import { baseApi } from "../../api/basiApi";

export type TUser = {
    _id: string;
    image: string;
    comment: string;
    name: string;
    productId: [];
    role: string;
    password: string;
}

type TUserQueryParams = {
    image?: string;
    limit?: number;
}

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCustomarReview: builder.query<TUser[], undefined | string | TUserQueryParams>({
            query: (payload: TUserQueryParams) => {
                return {
                    url: `/users/reviews?limit=${payload?.limit}&image=${payload?.image}`,
                    // url: `/users/reviews`,
                    method: 'GET',
                }
            }
        }),
    }),
})

export const { useGetAllCustomarReviewQuery } = userApi