import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { authApi } from "./auth/authApi";
import { persistedReducer } from "./auth/authPersist";
import { coursesApi } from "./coursesApi";

export const store = configureStore({
  reducer: {
    [coursesApi.reducerPath]: coursesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    authApi.middleware,
    coursesApi.middleware,
  ],
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
