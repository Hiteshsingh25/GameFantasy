import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./slices/authSlice";

export const store = configureStore({
    reducer: {
      login : loginReducer,
    }
  })