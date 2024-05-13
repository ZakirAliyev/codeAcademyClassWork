import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import BASE_URL from "./contants.js";

export const ProductsApi = createApi({
    reducerPath: 'ProductsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `products`,
        }),
        deleteProductById: builder.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE',
            }),
        })
    }),
})

export const { useGetAllProductsQuery, useDeleteProductByIdMutation } = ProductsApi