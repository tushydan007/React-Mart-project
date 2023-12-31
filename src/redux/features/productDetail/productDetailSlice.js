import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("product/getProduct", async (id) => {
  const { data } = await axios.get(
    `http://127.0.0.1:8000/store/products/${id}/`
  );
  return data;
});

export const postReview = createAsyncThunk(
  "review/postReview",
  async (productId) => {
    const { data } = await axios.get(
      `http://127.0.0.1:8000/store/products/${productId}/reviews/`
    );
    return data;
  }
);

const initialState = {
  product: null,
  isLoading: false,
  error: null,
  createdReview: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.product = null;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.product = null;
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(postReview.pending, (state) => {
        state.createdReview = null;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postReview.fulfilled, (state, { payload }) => {
        state.createdReview = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(postReview.rejected, (state, action) => {
        state.createdReview = null;
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
