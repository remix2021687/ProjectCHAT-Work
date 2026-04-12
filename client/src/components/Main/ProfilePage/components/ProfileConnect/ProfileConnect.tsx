import { TelegramLogoIcon } from "@phosphor-icons/react";
import {
	type ProfileConnectBoxProps,
	ProfileConnectBox,
} from "./components/ProfileConnectBox/ProfileConnectBox";

export const ProfileConnect: React.FC = () => {
	const ProfileConnectBoxData: Array<ProfileConnectBoxProps> = [
		{
			icon: (
				<TelegramLogoIcon
					size={24}
					color="#FFF"
					weight="fill"
				/>
			),
			name: "Test1",
			url: "http://cat1.com/",
		},
		{
			icon: (
				<TelegramLogoIcon
					size={24}
					color="#FFF"
					weight="fill"
				/>
			),
			name: "Test2",
			url: "http://cat2.com/",
		},
		{
			icon: (
				<TelegramLogoIcon
					size={24}
					color="#FFF"
					weight="fill"
				/>
			),
			name: "Test2",
			url: "http://cat3.com/",
		},
	];

	return (
		<section className="ProfileConnect">
			<h2>Connect</h2>
			<section className="ProfileConnect_content">
				{ProfileConnectBoxData.map((data, index) => (
					<ProfileConnectBox
						key={index + 1}
						icon={data.icon}
						name={data.name}
						url={data.url}
					/>
				))}
			</section>
		</section>
	);
};
