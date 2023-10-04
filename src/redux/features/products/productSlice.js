import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products/getProducts", (id) => {
  return axios
    .get(`http://127.0.0.1:8000/store/collections/${id}/products/`)
    .then((response) => response.data);
});

const initialState = {
  products: [],
  isLoading: false,
  error: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.products = [];
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    [getProducts.rejected]: (state, action) => {
      state.products = [];
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default productsSlice.reducer;
