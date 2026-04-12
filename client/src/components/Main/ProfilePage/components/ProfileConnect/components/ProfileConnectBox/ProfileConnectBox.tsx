export type ProfileConnectBoxProps = {
	icon: React.ReactNode;
	name: string;
	url: string;
};

export const ProfileConnectBox: React.FC<ProfileConnectBoxProps> = ({
	icon,
	name,
	url,
}) => {
	return (
		<section className="ProfileConnectBox">
			{icon}
			<section className="ProfileConnectBox_content">
				<h2>{name}</h2>
				<span>{url}</span>
			</section>
		</section>
	);
};
