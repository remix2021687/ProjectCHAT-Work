import {
	ChartLineIcon,
	UserIcon,
	UserPlusIcon,
	EyeIcon,
	PaperPlaneRightIcon,
} from "@phosphor-icons/react";

export const ProfileStateBox: React.FC = () => {
	return (
		<section className="ProfileStateBox">
			<section className="ProfileStateBox_header">
				<h2>Channel Stats</h2>
				<ChartLineIcon
					size={24}
					color="#AD92C9"
				/>
			</section>
			<section className="ProfileStateBox_content">
				<section className="ProfileStateBox_content_box">
					<h4>
						<UserIcon
							size={24}
							color="#7F13EC"
							weight="bold"
						/>
						Followers
					</h4>
					<span>1.2M</span>
				</section>
				<section className="ProfileStateBox_content_box">
					<h4>
						<UserPlusIcon
							size={24}
							color="#7F13EC"
							weight="bold"
						/>
						Following
					</h4>
					<span>1.2M</span>
				</section>
				<section className="ProfileStateBox_content_box">
					<h4>
						<EyeIcon
							size={24}
							color="#7F13EC"
							weight="bold"
						/>
						Total Views
					</h4>
					<span>1.2M</span>
				</section>
			</section>
			<button>
				<PaperPlaneRightIcon
					size={24}
					color="#FFFFFF"
					weight="bold"
				/>
				Send Message
			</button>
		</section>
	);
};
