import { NavLink } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "motion/react";
import { XIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import { Close } from "@/store/Slices/MobileMenuSlice";
import type { RootState } from "@/store/store";
import { ProfileBox } from "../ProfileBox/ProfileBox";
import { NotifyBox } from "../NotifyBox/NotifyBox";
import logo from "@assets/svg/logo.svg";

export const MobileMenu: React.FC = () => {
	const dispatch = useDispatch();
	const OpenMenuState = useSelector(
		(state: RootState) => state.mobilemenu.isOpen,
	);

	return (
		<motion.section
			animate={OpenMenuState ? { top: "0%" } : { top: "-100%" }}
			transition={{
				type: "tween",
				ease: "easeInOut",
				duration: 0.5,
			}}
			className="MobileMenu">
			<button
				onClick={() => dispatch(Close())}
				className="MobileMenu_close_button">
				<XIcon
					size={32}
					weight="bold"
					color="white"
				/>
			</button>
			<section className="MobileMenu_logo">
				<img
					src={logo}
					alt="logo"
				/>
				<h2>Paradox | StreamLabs</h2>
			</section>
			<section className="MobileMenu_links">
				<NavLink to={"/"}>Home</NavLink>
				<NavLink to={"/"}>Videos</NavLink>
				<NavLink to={"/"}>Chat</NavLink>
				<NavLink to={"/"}>Channels</NavLink>
			</section>

			<search className="MobileMenu_search">
				<label htmlFor="search_input">
					<MagnifyingGlassIcon
						size={18}
						weight="bold"
						color="#ad92c9"
					/>
					<input
						type="search"
						id="serach_input"
						placeholder="Search channels, videos..."
					/>
				</label>
			</search>

			<section className="MobileMenu_buttons">
				<NotifyBox />
				<ProfileBox />
			</section>
		</motion.section>
	);
};
