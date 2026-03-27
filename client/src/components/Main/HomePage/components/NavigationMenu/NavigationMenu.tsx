import type { MouseEventHandler } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "motion/react";
import {
	HouseIcon,
	TrendUpIcon,
	UserIcon,
	BookIcon,
} from "@phosphor-icons/react";
import { Category } from "@store/Slices/NavigationMenuSlice";
import type { RootState } from "@/store/store";

type dataButtonsType = {
	name: string;
	icon: React.ReactNode | string;
	onclick: MouseEventHandler<HTMLButtonElement>;
};

export const NavigationMenu: React.FC = () => {
	const categoryState = useSelector(
		(state: RootState) => state.navigationmenu.category,
	);

	const dispatch = useDispatch();

	const dataUPButton: Array<dataButtonsType> = [
		{
			name: "Feed",
			icon: <HouseIcon size={18} weight='bold' color='white' />,
			onclick: () => dispatch(Category("Feed")),
		},
		{
			name: "Trending",
			icon: <TrendUpIcon size={18} weight='bold' color='white' />,
			onclick: () => dispatch(Category("Trending")),
		},
		{
			name: "Subscriptions",
			icon: <UserIcon size={18} weight='bold' color='white' />,
			onclick: () => dispatch(Category("Subscriptions")),
		},
		{
			name: "Library",
			icon: <BookIcon size={18} weight='bold' color='white' />,
			onclick: () => dispatch(Category("Library")),
		},
	];

	return (
		<section className='NavigationMenu'>
			<section className='NavigationMenu_header'>
				<h2>Navigation</h2>
				<p>Your digital workspace</p>
			</section>
			<section className='NavigationMenu_buttons'>
				{dataUPButton.map((data) => (
					<>
						<motion.button onClick={data.onclick}>
							<section>
								{data.icon}
								<motion.span
									animate={
										data.name === categoryState
											? { color: "white" }
											: { color: "#AD92C9" }
									}>
									{data.name}
								</motion.span>
							</section>
							{data.name === categoryState && (
								<motion.span
									layoutId='selected'
									transition={{
										type: "spring",
										bounce: 0.25,
									}}
									className='NavigationMenu_buttons_indecator'></motion.span>
							)}
						</motion.button>
					</>
				))}
			</section>
		</section>
	);
};
