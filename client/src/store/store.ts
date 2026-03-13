import { configureStore } from "@reduxjs/toolkit";
import NotifyMenuReducer from "./Slices/NotifyMenuSlice";
import { api } from "./Api/ApiSlice";

export const store = configureStore({
	reducer: {
		notifymenu: NotifyMenuReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefultMiddleware) =>
		getDefultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
