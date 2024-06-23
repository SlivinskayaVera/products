import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./features/productSlice";

export const makeStore = () => {
  return configureStore({
    reducer: combineReducers({
      products: productsReducer,
    }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
