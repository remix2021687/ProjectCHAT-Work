import type React from "react";
import { Route, Routes } from "react-router";
import { PageTemplate } from "./components/PageTemplate/PageTemplate";

interface RouterProps {
	components: Record<string, React.ComponentType<any>>;
}

export const RouterComponent: React.FC<RouterProps> = ({ components }) => {
	const { HomePage, VerifyPage, AuthPage, RootLayout } = components;

	return (
		<Routes>
			<Route
				index
				element={<PageTemplate Layout={RootLayout} Content={HomePage} />}
			/>
			<Route path='auth/' element={<AuthPage />} />
			<Route path='auth/verify' element={<VerifyPage />} />
		</Routes>
	);
};
