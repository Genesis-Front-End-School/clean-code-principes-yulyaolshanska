import { createSlice } from "@reduxjs/toolkit";
import { setTokenReducer, unsetTokenReducer } from "./authReducers";

interface IAuthState {
  token: string | null;
}

const initialState: IAuthState = {
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: setTokenReducer,
    unsetToken: unsetTokenReducer,
  },
});

export const { setToken, unsetToken } = authSlice.actions;
