import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Api/authApiSlice";
import { apiSlice } from "./Api/apiSlice";

export const store = configureStore({
  devTools: true,
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
