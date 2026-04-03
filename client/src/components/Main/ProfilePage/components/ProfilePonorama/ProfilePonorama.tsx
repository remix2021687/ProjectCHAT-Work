import { CameraIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import bigBG from "@assets/img/Gradient+Image_BG.png";

export const ProfilePonorama: React.FC = () => {
	return (
		<section className="ProfilePonorama">
			<img
				src={bigBG}
				alt="ponorama"
			/>
			<motion.button
				whileHover={{
					backgroundColor: "#291a38",
				}}>
				<CameraIcon
					size={18}
					color="white"
					weight="bold"
				/>{" "}
				Edit Cover
			</motion.button>
		</section>
	);
};
