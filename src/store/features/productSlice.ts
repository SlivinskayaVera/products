import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../pages/MainPage/MainPage";

type AuthStateType = {
    products: Product[];
};

const initialState: AuthStateType = {
  products: [],
};

const productsSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setProductsList: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProductsList } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
