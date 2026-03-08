import { configureStore } from "@reduxjs/toolkit";
import NotifyMenuReducer from "./Slices/NotifyMenuSlice";

export const store = configureStore({
    reducer: {
        notifymenu: NotifyMenuReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;