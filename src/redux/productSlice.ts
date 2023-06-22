import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemType } from "@/types";

type StateType = {
  products: ItemType[];
  count: number;
};

const initialState: StateType = {
  products: [],
  count: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ItemType>) => {
      state.products = [action.payload, ...state.products];
    },
    setProduct: (state, action: PayloadAction<ItemType[]>) => {
      state.products = action.payload;
    },
    increaseCount: (state, action) => {
      state.count += 1;
    },
  },
});
