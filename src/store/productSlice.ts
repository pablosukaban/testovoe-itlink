import { createSlice } from "@reduxjs/toolkit";
import { ItemType } from "@/data";

type State = {
  products: ItemType[];
};

const initialState: State = {
  products: [],
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});
