import { LogOut } from "lucide-react";
import { apiSlice } from "./apiSlice";

const USER_URL = "/api/users";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/auth`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USER_URL}/logout`,
        method: "POST",
      }),
      invalidatesTags: ["auth"],
    }),

    registerUser: builder.mutation({
      query: (data)=>({
        url: `${USER_URL}`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ["auth"],
    })
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterUserMutation } = userApiSlice;
