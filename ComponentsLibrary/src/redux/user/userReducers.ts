import { PayloadAction } from "@reduxjs/toolkit";

interface ITheme {
  theme: string;
}

export const setThemeReducer = (
  state: ITheme,
  action: PayloadAction<string>
) => {
  state.theme = action.payload;
};
