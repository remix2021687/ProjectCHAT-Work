import { configureStore } from "@reduxjs/toolkit";
import { api } from "./Api/ApiSlice";
import MobileMenuSlice from "./Slices/MobileMenuSlice";
import EmailVerifySlice from "./Api/EmailVerifySlice";
import NavigationMenuSlice from "./Slices/NavigationMenuSlice";

export const store = configureStore({
	reducer: {
		mobilemenu: MobileMenuSlice,
		navigationmenu: NavigationMenuSlice,
		emailverify: EmailVerifySlice,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefultMiddleware) =>
		getDefultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
