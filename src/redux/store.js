import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from "./features/categoryCard/collectionSlice";
import productsReducer from "./features/products/productSlice";
import productReducer from "./features/productDetail/productDetailSlice";
import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    category: collectionReducer,
    products: productsReducer,
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
  },
});
