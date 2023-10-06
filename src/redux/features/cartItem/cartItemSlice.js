import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const cartItemSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    increaseCount: (state) => {
      state.count = state.count + 1;
    },

    decreaseCount: (state) => {
      state.count = state.count - 1;
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
