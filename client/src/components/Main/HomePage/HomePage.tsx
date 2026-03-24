import { useEffect } from "react";
import { NavigationMenu } from "./components/NavigationMenu/NavigationMenu";
import { PostMenu } from "./components/PostMenu/PostMenu";

export const HomePage: React.FC = () => {
	useEffect(() => {
		document.title = "Paradox | Home";
	}, []);

	return (
		<section className="HomePage">
			<NavigationMenu />
			<section className="HomePage_content">
				<PostMenu />
			</section>
			<section>Left</section>
		</section>
	);
};
