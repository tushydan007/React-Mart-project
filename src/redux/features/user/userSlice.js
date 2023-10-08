import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("users/login", (obj) => {
  return axios
    .post("http://127.0.0.1:8000/auth/jwt/create", {
      username: obj.userName,
      password: obj.password,
    })
    .then((response) => {
      localStorage.setItem("token", response.data.access);
      return response;
    });
});

export const registerUser = createAsyncThunk("users/register", (object) => {
  return axios
    .post("http://127.0.0.1:8000/auth/users/", {
      username: object.userName,
      password: object.password,
      email: object.email,
      first_name: object.firstName,
      last_name: object.lastName,
    })
    .then((response) => {
      return response.data;
    });
});

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        if (action.error.message === "Request failed with status code 401") {
          state.error = "Access Denied! Invalid credentials";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export default userSlice.reducer;
