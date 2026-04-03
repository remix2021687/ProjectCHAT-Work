import { configureStore } from "@reduxjs/toolkit";
import { api } from "./Api/ApiSlice";
import MobileMenuSlice from "./Slices/MobileMenuSlice";
import NavigationMenuSlice from "./Slices/NavigationMenuSlice";
import EmailVerifySlice from "./Api/EmailVerifySlice";
import AuthSlice from "./Api/AuthSlice";
import ProfileNavMenuSlice from "./Slices/ProfileNavMenuSlice";

export const store = configureStore({
	reducer: {
		mobilemenu: MobileMenuSlice,
		navigationmenu: NavigationMenuSlice,
		emailverify: EmailVerifySlice,
		auth: AuthSlice,
		profilenavmenu: ProfileNavMenuSlice,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefultMiddleware) =>
		getDefultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
