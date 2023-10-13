import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItems: [],
  cartTotal: 0,
  isLoading: false,
  error: null,
  addedItem: null,
  updatedItem: null,
  idOfCart: null,
};

export const addItemToCart = createAsyncThunk(
  "cartItem/addCartItem",
  async (cartId, item) => {
    const { data } = await axios.post(
      `http://127.0.0.1:8000/store/carts/${cartId}}/items/`,
      { quantity: item.quantity_incart, product_id: item.id }
    );
    return data;
  }
);

export const generateCartId = createAsyncThunk(
  "cartId/createCartId",
  async () => {
    const { data } = await axios.post(`http://127.0.0.1:8000/store/carts/`, {});
    return data;
  }
);

export const updateCartItem = createAsyncThunk(
  "upCartItem/updateCartItem",
  async (cartId, cartItem) => {
    const { data } = await axios.patch(
      `http://127.0.0.1:8000/store/carts/${cartId}/items/${cartItem.id}/`,
      { quantity: cartItem.quantity_incart }
    );
    return data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addItemToCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.addedItem = null;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.addedItem = action.payload;
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.addedItem = null;
      })
      .addCase(generateCartId.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.idOfCart = null;
      })
      .addCase(generateCartId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.idOfCart = action.payload.id;
      })
      .addCase(generateCartId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.idOfCart = null;
      })
      .addCase(updateCartItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.updatedItem = null;
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.updatedItem = action.payload;
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.updatedItem = null;
      });
  },

  reducers: {
    addToCart: (state, { payload }) => {
      state.cartItems.push({
        id: payload.id,
        title: payload.title,
        description: payload.description,
        price: payload.price,
        inventory: payload.inventory,
        collection: payload.collection,
        in_cart: payload.in_cart,
        images: payload.images,
        reviews: payload.reviews,
        manufacturer: payload.manufacturer,
        quantity: 1,
      });
    },

    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item?.id !== payload.id
      );
    },

    increaseCount: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.quantity += 1;
    },

    decreaseCount: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.quantity -= 1;
    },

    clearCart: (state) => {
      state.cartItems = [];
    },

    addCartItemsTotal: (state) => {
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.price * item.quantity;
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
