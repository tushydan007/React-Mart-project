import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from "./features/categoryCard/collectionSlice";

export const store = configureStore({
  reducer: {
    category: collectionReducer,
  },
});
