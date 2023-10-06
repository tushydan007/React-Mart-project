import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("product/getProduct", (id) => {
  return axios
    .get(`http://127.0.0.1:8000/store/products/${id}/`)
    .then((response) => response.data);
});

const initialState = {
  product: {},
  isLoading: false,
  error: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [getProduct.pending]: (state) => {
      state.product = {};
      state.isLoading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.product = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    [getProduct.rejected]: (state, action) => {
      state.product = {};
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default productSlice.reducer;
