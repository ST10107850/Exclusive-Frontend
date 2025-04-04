import { apiSlice } from "./apiSlice";

const PRODUCT_URL = "/api/product";

export const useProductSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page = 1, limit = 6 }) =>
        `${PRODUCT_URL}?currentPage=${page}&limit=${limit}&sortBy=createdAt&sortOrder=desc`,
      providesTags: ["Product"],
    }),
    getProductById: builder.query({
      query: (id) => `${PRODUCT_URL}/${id}`,
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = useProductSlice;
