import { RocketLaunchIcon, HouseIcon } from "@phosphor-icons/react";
import { NavLink } from "react-router";
// import logo from "@assets/svg/logo.svg";

export const Page404: React.FC = () => {
	return (
		<section className='Page404'>
			<section className='Page404_header'>
				<h1>
					4<span id='num_0'>0</span>4
				</h1>

				<section className='Page404_header_content'>
					<section className='Page404_header_content_box_1'></section>
					<section className='Page404_header_content_box_2'></section>
					<section className='Page404_header_content_box_3'>
						<RocketLaunchIcon size={75} color='#7F13EC' weight='fill' />
						<h3>Page not Found</h3>
					</section>
				</section>
				<section className='Page404_footer'>
					<NavLink to={"/"}>
						<HouseIcon size={32} weight='fill' color='#FFF' />
						Return to home
					</NavLink>
				</section>
			</section>
		</section>
	);
};
