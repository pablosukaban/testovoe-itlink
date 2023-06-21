import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "@/redux/productSlice";
import { productApi } from "@/redux/productAPI";

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
