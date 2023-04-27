import { PayloadAction } from "@reduxjs/toolkit";

interface IToken {
  token: string | null;
}

export const setTokenReducer = (
  state: IToken,
  action: PayloadAction<string>
) => {
  state.token = action.payload;
};

export const unsetTokenReducer = (state: IToken) => {
  state.token = null;
};
