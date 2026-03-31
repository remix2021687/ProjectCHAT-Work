import { UserIcon } from "@phosphor-icons/react";
import { NavLink } from "react-router";
import { motion } from "motion/react";

export const ProfileBox: React.FC = () => {
	return (
		<motion.section
			className="ProfileBox"
			whileHover={{
				backgroundColor: "#4d3267",
				borderRadius: "30%",
			}}>
			<NavLink to={"profile/132"}>
				<UserIcon
					size={18}
					color="white"
					weight="bold"
				/>
			</NavLink>
		</motion.section>
	);
};
