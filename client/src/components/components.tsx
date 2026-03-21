import type React from "react";
import { RootLayout } from "./Layout/RootLayout/RootLayout";
import { HomePage } from "./Main/HomePage/HomePage";
import { AuthPage } from "./Main/AuthPage/AuthPage";
import { VerifyPage } from "./Main/VerifyPage/VerifyPage";

export const components: Record<string, React.ComponentType<any>> = {
	RootLayout,
	HomePage,
	AuthPage,
	VerifyPage,
};
