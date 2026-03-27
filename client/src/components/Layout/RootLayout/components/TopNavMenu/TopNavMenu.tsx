import { NavLink } from "react-router";
import { MagnifyingGlassIcon, ListIcon } from "@phosphor-icons/react";
import { useDispatch } from "react-redux";
import { Open } from "@store/Slices/MobileMenuSlice";
import { NotifyBox } from "./components/NotifyBox/NotifyBox";
import { ProfileBox } from "./components/ProfileBox/ProfileBox";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";
import logo from "@assets/svg/logo.svg";

export const TopNavMenu: React.FC = () => {
	const dispatch = useDispatch();
	return (
		<>
			<nav className="TopNavMenu">
				<section className="TopNavMenu_left_block">
					<section className="TopNavMenu_left_block_logo">
						<img
							src={logo}
							alt="logo"
						/>
						<h2>Paradox | StreamLabs</h2>
					</section>
					<search className="TopNavMenu_left_block_search">
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
				</section>

				<section className="TopNavMenu_right_block">
					<section className="TopNavMenu_right_block_links">
						<NavLink to={"/"}>Home</NavLink>
						<NavLink to={"/"}>Videos</NavLink>
						<NavLink to={"/"}>Chat</NavLink>
						<NavLink to={"/"}>Channels</NavLink>
					</section>
					<section className="TopNavMenu_right_block_buttons">
						<NotifyBox />
						<ProfileBox />
					</section>
				</section>
				<button
					onClick={() => dispatch(Open())}
					className="TopNavMenu_open_mobile_menu_button">
					<ListIcon
						size={32}
						weight="bold"
						color="white"
					/>
				</button>
			</nav>
			<MobileMenu />
		</>
	);
};
