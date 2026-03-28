import { SealCheckIcon, HeartIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import avatar from "@assets/img/avatar.png";

export const PostInfo: React.FC = () => {
	return (
		<section className="PostInfo">
			<section className="PostInfo_info_header">
				<img
					src={avatar}
					alt="avatar"
				/>
				<section>
					<h1>Exploring the Digital Realm & UI Architecture</h1>
					<h3>
						<span>
							Creative Mind{" "}
							<SealCheckIcon
								size={18}
								color="#7F13EC"
								weight="fill"
							/>
						</span>
						• 2 hours ago
					</h3>
				</section>
			</section>

			<p>
				Check out my latest video session where we dive deep into modern
				UI design trends and how to leverage spatial layouts for better
				UX. We talk about accessibility, color theory in dark modes, and
				the future of interaction.
			</p>

			<section className="PostInfo_hashtag">
				<span>#UXDesign</span>
				<span>#UXDesign</span>
				<span>#UXDesign</span>
				<span>#UXDesign</span>
			</section>
			<hr />
			<section className="PostInfo_footer">
				<motion.section
					whileHover={{
						backgroundColor: "#94a3b86d",
					}}>
					<HeartIcon
						size={25}
						weight="bold"
						color="#AD92C9"
					/>
					<span>1.2k</span>
				</motion.section>
			</section>
		</section>
	);
};
