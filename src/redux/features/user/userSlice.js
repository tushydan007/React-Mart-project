import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";

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

export const getLoggedInUser = createAsyncThunk("user/getUser", async () => {
  const { data } = await axios.get("http://127.0.0.1:8000/auth/users/me/");
  return data;
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
  newlyRegisteredUser: null,
  loggedInUser: null,
  reUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getAndDecodeUser: (state) => {
      const token = localStorage.getItem("token");
      const user = jwtDecode(token);
      state.loggedInUser = user;
    },
  },

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
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.newlyRegisteredUser = null;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newlyRegisteredUser = action.payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.newlyRegisteredUser = null;
        if (action.error.message === "Request failed with status code 400") {
          state.error = "User already registered";
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(getLoggedInUser.pending, (state) => {
        state.isLoading = true;
        state.reUser = null;
        state.error = null;
      })
      .addCase(getLoggedInUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.reUser = payload;
        state.error = null;
      })
      .addCase(getLoggedInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.reUser = null;
        state.error = action.error.message;
      });
  },
});

export const { getAndDecodeUser } = userSlice.actions;
export default userSlice.reducer;
