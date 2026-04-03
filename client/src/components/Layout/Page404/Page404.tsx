import {
	RocketLaunchIcon,
	MagnifyingGlassIcon,
	TrendUpIcon,
	HeadsetIcon,
	HouseIcon,
} from "@phosphor-icons/react";
import { NavLink } from "react-router";
import {
	type Page404InfoBoxProps,
	Page404InfoBox,
} from "./components/Page404InfoBox/Page404InfoBox";
import logo from "@assets/svg/logo.svg";

export const Page404: React.FC = () => {
	const InfoBoxData: Array<Page404InfoBoxProps> = [
		{
			icon: <MagnifyingGlassIcon size={18} color='#AD92C9' />,
			title: "Search Content",
			description: "Find exactly what you're looking for in our library.",
		},
		{
			icon: <TrendUpIcon size={18} color='#AD92C9' />,
			title: "View Trending",
			description: "See what others are watching right now.",
		},
		{
			icon: <HeadsetIcon size={18} color='#AD92C9' />,
			title: "Report Issue",
			description: "Think this is a mistake? Let our tech team know.",
		},
	];

	return (
		<section className='Page404'>
			<section className='Page404_Logo'>
				<img src={logo} alt='logo' />
				<h1>Paradox | StreamLab</h1>
			</section>
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
					<section className='Page404_footer_info'>
						{InfoBoxData.map((data, index) => (
							<Page404InfoBox
								key={index + 1}
								icon={data.icon}
								title={data.title}
								description={data.description}
							/>
						))}
					</section>
				</section>
			</section>
		</section>
	);
};
