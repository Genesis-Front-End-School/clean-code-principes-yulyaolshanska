import { createSlice } from "@reduxjs/toolkit";
import { setThemeReducer } from "./userReducers";

interface IUserState {
  theme: string;
}

const initialState: IUserState = {
  theme: "light",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTheme: setThemeReducer,
  },
});

export const { setTheme } = userSlice.actions;
