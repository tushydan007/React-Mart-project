import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCollections = createAsyncThunk(
  "collections/getcollections",
  () => {
    return axios
      .get("http://127.0.0.1:8000/store/collections/")
      .then((response) => response.data);
  }
);

const initialState = {
  collections: [],
  isLoading: false,
  error: "",
};

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  extraReducers: {
    [getCollections.pending]: (state) => {
      state.collections = [];
      state.isLoading = true;
    },
    [getCollections.fulfilled]: (state, action) => {
      state.collections = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    [getCollections.rejected]: (state, action) => {
      state.collections = [];
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default collectionSlice.reducer;
