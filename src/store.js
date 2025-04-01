import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Api/apiSlice";
import { userApiSlice } from "./Api/userApiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApiSlice.middleware),
});
