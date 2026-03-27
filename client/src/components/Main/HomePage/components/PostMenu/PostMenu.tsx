import { ImageIcon, SmileyIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import avatar from "@assets/img/avatar.png";

export const PostMenu: React.FC = () => {
	return (
		<section className='PostMenu'>
			<section className='PostMenu_header'>
				<h1>Social Activity</h1>
				<p>Stay updated with your community</p>
			</section>
			<form className='PostMenu_form'>
				<section className='PostMenu_form_content'>
					<section className='PostMenu_form_content_upper'>
						<img src={avatar} alt='avatar' />
						<textarea placeholder='Share an update, link or video...'></textarea>
					</section>
					<section className='PostMenu_form_content_lower'>
						<section className='PostMenu_form_content_lower_buttons'>
							<button>
								<ImageIcon weight='bold' color='white' size={18} />
							</button>
							<button>
								<SmileyIcon weight='bold' color='white' size={18} />
							</button>
						</section>
						<motion.button
							whileHover={{
								backgroundColor: "#471778",
							}}
							transition={{
								duration: 0.3,
							}}
							className='PostMenu_submit_button'>
							Post
						</motion.button>
					</section>
				</section>
			</form>
		</section>
	);
};
