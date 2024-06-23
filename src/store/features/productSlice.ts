import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../pages/MainPage/MainPage";

type AuthStateType = {
  products: Product[];
  favoriteMode: boolean;
};

const initialState: AuthStateType = {
  products: [],
  favoriteMode: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsList: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload.map(product => {
        return { ...product, isLiked: false };
      });
    },
    setFavoriteProduct: (state, action: PayloadAction<Pick<Product, "id">>) => {
      state.products = [...state.products].map(product => {
        if (product.id === action.payload.id)
          return { ...product, isLiked: !product.isLiked };
        return product;
      });
    },
    setFavoriteMode: state => {
      state.favoriteMode = !state.favoriteMode;
    },
    setDeleteProduct: (state, action: PayloadAction<Pick<Product, "id">>) => {
      state.products = [...state.products].filter(product => {
        if (product.id !== action.payload.id) return product;
      });
    },
  },
});

export const { setProductsList, setFavoriteProduct, setFavoriteMode, setDeleteProduct } =
  productsSlice.actions;
export const productsReducer = productsSlice.reducer;
