import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "@/redux/productSlice";

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
