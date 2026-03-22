import { NavLink } from "react-router";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { NotifyBox } from "./components/NotifyBox/NotifyBox";
import logo from "@assets/svg/logo.svg";
import { ProfileBox } from "./components/ProfileBox/ProfileBox";

export const TopNavMenu: React.FC = () => {
	return (
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
		</nav>
	);
};
