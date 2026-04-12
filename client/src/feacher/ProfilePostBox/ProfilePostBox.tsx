export type ProfilePostBoxProps = {
	media: string;
	name: string;
	created_at: string;
	views: number;
};

export const ProfilePostBox: React.FC<ProfilePostBoxProps> = ({
	media,
	name,
	created_at,
	views,
}) => {
	return (
		<section className="ProfilePostBox">
			<img
				src={media}
				alt="media"
			/>
			<section className="ProfilePostBox_content">
				<h2>{name}</h2>
				<span>
					{views}k views • {created_at} days ago
				</span>
			</section>
		</section>
	);
};
