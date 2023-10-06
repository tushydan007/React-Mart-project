import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotal: 0,
  itemCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartItems.unshift(payload);
    },

    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },

    addCartItemsTotal: (state) => {
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.price;
      });
      state.cartTotal = total;
    },
  },
});

export const { addToCart, removeFromCart, addCartItemsTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
