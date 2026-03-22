import { useEffect } from "react";

export const HomePage: React.FC = () => {
	useEffect(() => {
		document.title = "Paradox | Home";
	}, []);

	return <section className="HomePage"></section>;
};
