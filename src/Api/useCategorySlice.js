import { apiSlice } from "./apiSlice";

const CATEGORY_URL = "api/category";

export const useCategorySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => CATEGORY_URL,
      providesTags: ["Category"],
    }),
  }),
});

export const { useGetCategoriesQuery } = useCategorySlice;