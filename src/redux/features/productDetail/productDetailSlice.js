import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("product/getProduct", async (id) => {
  const { data } = await axios.get(
    `http://127.0.0.1:8000/store/products/${id}/`
  );
  return data;
});

const initialState = {
  product: null,
  isLoading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [getProduct.pending]: (state) => {
      state.product = null;
      state.isLoading = true;
      state.error = null;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.product = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [getProduct.rejected]: (state, action) => {
      state.product = null;
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default productSlice.reducer;
