import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import { useDispatch } from "react-redux";
import deviceSlice from "./device/deviceSlice";

export const store = configureStore({
  reducer: {
    authSlice,
    deviceSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
