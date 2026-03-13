import type React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";

interface AppProps {
	Router: React.ComponentType<{
		components: Record<string, React.ComponentType>;
	}>;
	Components: Record<string, React.ComponentType<any>>;
}

export const App: React.FC<AppProps> = ({ Router, Components }) => {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");

	useEffect(() => {
		if (!token) {
			navigate("auth/");
		}
	}, [token, navigate]);

	return (
		<>
			<ToastContainer />
			<Router components={Components} />
		</>
	);
};
