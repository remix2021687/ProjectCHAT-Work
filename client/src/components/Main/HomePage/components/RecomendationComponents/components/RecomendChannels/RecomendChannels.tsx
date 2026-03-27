import {
	UserListBox,
	type UserListBoxProps,
} from "@feacher/UserListBox/UserListBox";
import avatar from "@assets/img/avatar.png";
import { NavLink } from "react-router";

export const RecomendChannels: React.FC = () => {
	const UserListData: Array<UserListBoxProps> = [
		{
			avatar: avatar,
			first_name: "Test2",
			last_name: "User2",
			subscribers: 50,
		},
		{
			avatar: avatar,
			first_name: "Test3",
			last_name: "User3",
			subscribers: 50,
		},
		{
			avatar: avatar,
			first_name: "Test4",
			last_name: "User4",
			subscribers: 50,
		},
	];

	return (
		<section className="RecomendChannels">
			<section className="RecomendChannels_header">
				<h2>Suggested Channels</h2>
				<NavLink to={"/"}>See all</NavLink>
			</section>
			<section className="RecomendChannels_content">
				{UserListData.map((data) => (
					<UserListBox
						avatar={data.avatar}
						first_name={data.first_name}
						last_name={data.last_name}
						subscribers={data.subscribers}
					/>
				))}
			</section>
		</section>
	);
};
