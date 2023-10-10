import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartItems.push(payload);
    },

    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item?.id !== payload.id
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
    },

    increaseCount: (state, { payload }) => {
      const item = state.cartItems.find((i) => i.id === payload.id);
      item.quantity_incart += 1;
    },

    decreaseCount: (state, { payload }) => {
      const item = state.cartItems.find((i) => i.id === payload.id);
      item.quantity_incart -= 1;
    },

    addCartItemsTotal: (state) => {
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.price * item.quantity_incart;
      });
      state.cartTotal = total;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addCartItemsTotal,
  clearCart,
  increaseCount,
  decreaseCount,
} = cartSlice.actions;

export default cartSlice.reducer;
