import { motion } from "motion/react";

export type UserListBoxProps = {
	avatar: string;
	first_name: string;
	last_name: string;
	subscribers: number;
};

export const UserListBox: React.FC<UserListBoxProps> = ({
	avatar,
	first_name,
	last_name,
	subscribers,
}) => {
	return (
		<section className="UserListBox">
			<section className="UserListBox_info">
				<img
					src={avatar}
					alt="avatar"
				/>
				<section className="UserListBox_info_header">
					<h4>
						{last_name} {first_name}
					</h4>
					<h5>{subscribers} Subscribers</h5>
				</section>
			</section>
			<motion.button
				whileHover={{
					color: "#FFF",
					backgroundColor: "#7f13ec94",
				}}>
				Join
			</motion.button>
		</section>
	);
};
