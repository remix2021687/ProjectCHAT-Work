import type React from "react";
import { RootLayout } from "./Layout/RootLayout/RootLayout";
import { HomePage } from "./Main/HomePage/HomePage";
import { AuthPage } from "./Main/AuthPage/AuthPage";
import { VerifyPage } from "./Main/VerifyPage/VerifyPage";
import { PostPage } from "./Main/PostPage/PostPage";
import { ProfilePage } from "./Main/ProfilePage/ProfilePage";

export const components: Record<string, React.ComponentType<any>> = {
	RootLayout,
	HomePage,
	PostPage,
	AuthPage,
	VerifyPage,
	ProfilePage,
};
