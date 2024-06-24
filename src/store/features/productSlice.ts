import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../pages/MainPage/MainPage";

type ProductStateType = {
  products: Product[];
  favoriteMode: boolean;
  dynamicProduct: Product | undefined;
};

const initialState: ProductStateType = {
  products: [],
  favoriteMode: false,
  dynamicProduct: undefined,
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
    setFavoriteProduct: (
      state,
      action: PayloadAction<{id: number | undefined}>,
    ) => {
      state.products = [...state.products].map(product => {
        if (product.id === action.payload?.id)
          return { ...product, isLiked: !product.isLiked };
        return product;
      });
    },
    setFavoriteMode: state => {
      state.favoriteMode = !state.favoriteMode;
    },
    setDeleteProduct: (state, action: PayloadAction<{id: number | undefined}>) => {
      state.products = state.products.filter(product => {
        if (product.id !== action.payload.id) return product;
      });
    },
    setDynamicProductPage: (
      state,
      action: PayloadAction<Pick<Product, "id">>,
    ) => {
      state.dynamicProduct = state.products.find(product => {
        if (product.id === action.payload.id) return product;
      });
    },
  },
});

export const {
  setProductsList,
  setFavoriteProduct,
  setFavoriteMode,
  setDeleteProduct,
  setDynamicProductPage,
} = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
