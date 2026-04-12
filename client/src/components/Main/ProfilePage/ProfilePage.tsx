import {
	ProfilePostBox,
	type ProfilePostBoxProps,
} from "@feacher/ProfilePostBox/ProfilePostBox";
import { useEffect } from "react";
import { ProfileInfo } from "./components/ProfileInfo/ProfileInfo";
import { ProfilePonorama } from "./components/ProfilePonorama/ProfilePonorama";
import bg from "@assets/img/Background.png";
import { ProfileStateBox } from "./components/ProfileStateBox/ProfileStateBox";
import { ProfileConnect } from "./components/ProfileConnect/ProfileConnect";

export const ProfilePage: React.FC = () => {
	useEffect(() => {
		document.title = "Pardox | User";
	}, []);

	const ProfilePostData: Array<ProfilePostBoxProps> = [
		{
			media: bg,
			name: "Exploring the High Peaks: 4K Cinematic Journey",
			views: 50,
			created_at: "5",
		},
		{
			media: bg,
			name: "Exploring the High Peaks: 4K Cinematic Journey",
			views: 50,
			created_at: "5",
		},
		{
			media: bg,
			name: "Exploring the High Peaks: 4K Cinematic Journey",
			views: 50,
			created_at: "5",
		},
		{
			media: bg,
			name: "Exploring the High Peaks: 4K Cinematic Journey",
			views: 50,
			created_at: "5",
		},
	];

	return (
		<section className="ProfilePage">
			<section className="ProfilePage_header">
				<ProfileInfo ProfilePonorama={ProfilePonorama} />
			</section>
			<section className="ProfilePage_content">
				<section className="ProfilePage_content_left">
					{ProfilePostData.map((data, index) => (
						<ProfilePostBox
							key={index + 1}
							media={data.media}
							name={data.name}
							views={data.views}
							created_at={data.created_at}
						/>
					))}
				</section>
				<section className="ProfilePage_content_right">
					<ProfileStateBox />
					<ProfileConnect />
				</section>
			</section>
		</section>
	);
};
