import {
	ProfilePostBox,
	type ProfilePostBoxProps,
} from "@feacher/ProfilePostBox/ProfilePostBox";
import bg from "@assets/img/Background.png";

export const Posts: React.FC = () => {
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
		<>
			{ProfilePostData.map((data, index) => (
				<ProfilePostBox
					key={index + 1}
					media={data.media}
					name={data.name}
					views={data.views}
					created_at={data.created_at}
				/>
			))}
		</>
	);
};
