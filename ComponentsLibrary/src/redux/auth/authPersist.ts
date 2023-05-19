import { persistReducer } from "redux-persist";
import { authSlice } from "./authSlice";
import storage from "redux-persist/lib/storage";

interface AuthPersistConfig {
  key: string;
  storage: typeof storage;
  whitelist: string[];
}

const authPersistConfig: AuthPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const persistedReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
