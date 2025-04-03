import { LogOut } from "lucide-react";
import { userApiSlice } from "./userApiSlice";

const USER_URL = "/api/users";

export const authApiSlice = userApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USER_URL}/logout`,
        method: "POST",
      }),
    }),

    registerUser: builder.mutation({
      query: (data)=>({
        url: `${USER_URL}`,
        method: "POST",
        body: data
      })
    })
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterUserMutation } = authApiSlice;
