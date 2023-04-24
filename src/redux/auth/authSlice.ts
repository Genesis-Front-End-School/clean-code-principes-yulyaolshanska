import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    unsetToken: (state) => {
      state.token = null;
    },
  },
});

export const { setToken, unsetToken } = authSlice.actions;
