import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserAPI, validateTokenAPI } from "../services/authServices";
import { toast } from "react-toastify";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await loginUserAPI({ email, password });
      toast.success(res.message);
      return res;
    } catch (err) {
      toast.error(err.message || "Login failed!");
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const validateTokenThunk = createAsyncThunk(
  "auth/validateToken",
  async (token, thunkAPI) => {
    try {
      const res = await validateTokenAPI(token);
      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => { state.loading = true; })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginThunk.rejected, (state) => { state.loading = false; })
      .addCase(validateTokenThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(validateTokenThunk.rejected, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
