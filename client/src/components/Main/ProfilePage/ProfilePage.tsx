import { useEffect } from "react";
import { ProfileInfo } from "./components/ProfileInfo/ProfileInfo";
import { ProfilePonorama } from "./components/ProfilePonorama/ProfilePonorama";
import { ProfileStateBox } from "./components/ProfileStateBox/ProfileStateBox";
import { ProfileConnect } from "./components/ProfileConnect/ProfileConnect";
import { ProfilePageCategory } from "./components/ProfilePageCategory/ProfilePageCategory";

export const ProfilePage: React.FC = () => {
	useEffect(() => {
		document.title = "Pardox | User";
	}, []);

	return (
		<section className="ProfilePage">
			<section className="ProfilePage_header">
				<ProfileInfo ProfilePonorama={ProfilePonorama} />
			</section>
			<section className="ProfilePage_content">
				<section className="ProfilePage_content_left">
					<ProfilePageCategory />
				</section>
				<section className="ProfilePage_content_right">
					<ProfileStateBox />
					<ProfileConnect />
				</section>
			</section>
		</section>
	);
};
