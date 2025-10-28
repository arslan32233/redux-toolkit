import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  expiresAt: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      const { user, token, expiresAt } = action.payload;
      state.user = user;
      state.token = token;
      state.expiresAt = expiresAt;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.expiresAt = null;
    },
  },
});

export const { setProfile, logout } = authSlice.actions;
export default authSlice.reducer;
