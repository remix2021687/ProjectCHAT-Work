import { UserIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";

export const ProfileBox: React.FC = () => {
	return (
		<motion.section
			className="ProfileBox"
			whileHover={{
				backgroundColor: "#4d3267",
				borderRadius: "30%",
			}}>
			<UserIcon
				size={18}
				color="white"
				weight="bold"
			/>
		</motion.section>
	);
};
