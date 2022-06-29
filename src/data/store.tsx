import { configureStore } from "@reduxjs/toolkit";
import limitReducer from "./slices/limitNumber";
import limitWindowReducer from "./slices/limitWindow";

export const store = configureStore({
  reducer: {
    limit: limitReducer,
    limitWindow: limitWindowReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
