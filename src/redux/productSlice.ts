import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: { id: 1 },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload;
    },
  },
});
