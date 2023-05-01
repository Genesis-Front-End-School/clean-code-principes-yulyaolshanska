import { PayloadAction } from "@reduxjs/toolkit";

interface IToken {
  token: string | null;
}

export const setTokenReducer = (
  state: IToken,
  action: PayloadAction<string>
): void => {
  state.token = action.payload;
};

export const unsetTokenReducer = (state: IToken) => {
  state.token = null;
};
