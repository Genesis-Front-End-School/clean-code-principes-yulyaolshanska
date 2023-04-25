import { PayloadAction } from "@reduxjs/toolkit";

export const setTokenReducer = (
  state: { token: string | null },
  action: PayloadAction<string>
) => {
  state.token = action.payload;
};

export const unsetTokenReducer = (state: { token: string | null }) => {
  state.token = null;
};
