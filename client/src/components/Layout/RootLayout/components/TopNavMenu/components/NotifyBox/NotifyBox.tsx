import { motion } from "motion/react";
import { BellIcon } from "@phosphor-icons/react";

export const NotifyBox: React.FC = () => {
	return (
		<motion.section
			className="NotifyBox"
			whileHover={{
				backgroundColor: "#4d3267",
				borderRadius: "4px",
			}}>
			<BellIcon
				color="white"
				weight="bold"
			/>
		</motion.section>
	);
};
