import { configureStore } from "@reduxjs/toolkit";
import { api } from "./Api/ApiSlice";
import NotifyMenuReducer from "./Slices/NotifyMenuSlice";
import EmailVerifySlice from "./Api/EmailVerifySlice";

export const store = configureStore({
	reducer: {
		notifymenu: NotifyMenuReducer,
		emailverify: EmailVerifySlice,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefultMiddleware) =>
		getDefultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
