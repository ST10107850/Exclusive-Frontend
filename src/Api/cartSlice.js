import { apiSlice } from "./apiSlice";

const CART_URL = "/api/cart";

export const cartSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => CART_URL,
      providesTags: ["cart"],
    }),
    addToCart: builder.mutation({
      query: (data) => ({
        url: CART_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["cart"],
    }),
    updateCart: builder.mutation({
      query: ({ id, data }) => ({
        url: `${CART_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["cart"],
    }),
    updateCartQuantity: builder.mutation({
      query: ({ id, quantity }) => ({
        url: `${CART_URL}/${id}`,
        method: "PUT",
        body: { quantity },
      }),
      invalidatesTags: ["cart"],
    }),
    removeFromCart: builder.mutation({
      query: (id) => ({
        url: `${CART_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateCartMutation,
  useUpdateCartQuantityMutation,
  useRemoveFromCartMutation,
} = cartSlice;
