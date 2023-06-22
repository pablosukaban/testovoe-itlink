import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemType } from "@/types";

type StateType = {
  products: ItemType[];
};

const initialState: StateType = {
  products: [],
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
    updateProduct: (state, action: PayloadAction<ItemType>) => {
      const updateItem = action.payload;

      const index = state.products.findIndex(
        (item) => item.id === updateItem.id
      );

      if (index !== -1) {
        state.products[index] = updateItem;
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});
