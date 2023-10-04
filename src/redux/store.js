import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from "./features/categoryCard/collectionSlice";
import productsReducer from "./features/products/productSlice";

export const store = configureStore({
  reducer: {
    category: collectionReducer,
    products: productsReducer,
  },
});
