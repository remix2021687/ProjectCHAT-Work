import { useDispatch, useSelector } from "react-redux";
import type { MouseEventHandler } from "react";
import type { RootState } from "@store/store";
import {
	VideoIcon,
	ChatIcon,
	ImageIcon,
	WarningCircleIcon,
} from "@phosphor-icons/react";
import { motion } from "motion/react";
import { NavMenuState } from "@store/Slices/ProfileNavMenuSlice";

type NavButtonsType = {
	icon: React.ReactNode;
	name: string;
	onclick: MouseEventHandler<HTMLButtonElement>;
};

export const ProfileInfoNav: React.FC = () => {
	const dispatch = useDispatch();
	const ProfileNavMenuState = useSelector(
		(state: RootState) => state.profilenavmenu.category,
	);
	const ButtonNavData: Array<NavButtonsType> = [
		{
			icon: (
				<VideoIcon
					size={25}
					color={ProfileNavMenuState == "Videos" ? "#FFF" : "#ad92c9"}
					weight='bold'
					className='icon'
				/>
			),
			name: "Videos",
			onclick: () => {
				dispatch(NavMenuState("Videos"));
			},
		},
		{
			icon: (
				<ChatIcon
					size={25}
					color={ProfileNavMenuState == "Posts" ? "#FFF" : "#ad92c9"}
					weight='bold'
					className='icon'
				/>
			),
			name: "Posts",
			onclick: () => {
				dispatch(NavMenuState("Posts"));
			},
		},
		{
			icon: (
				<ImageIcon
					size={25}
					color={ProfileNavMenuState == "Media" ? "#FFF" : "#ad92c9"}
					weight='bold'
					className='icon'
				/>
			),
			name: "Media",
			onclick: () => {
				dispatch(NavMenuState("Media"));
			},
		},
		{
			icon: (
				<WarningCircleIcon
					size={25}
					color={ProfileNavMenuState == "About" ? "#FFF" : "#ad92c9"}
					weight='bold'
					className='icon'
				/>
			),
			name: "About",
			onclick: () => {
				dispatch(NavMenuState("About"));
			},
		},
	];
	return (
		<section className='Profile_content_right_nav'>
			{ButtonNavData.map((data, index) => (
				<motion.button
					key={index + 1}
					onClick={data.onclick}
					animate={
						data.name === ProfileNavMenuState
							? { color: "#FFF" }
							: { color: "#ad92c9" }
					}>
					{data.icon}
					{data.name}
					{data.name === ProfileNavMenuState && (
						<motion.span
							layoutId='selected'
							transition={{
								type: "spring",
								bounce: 0.25,
							}}></motion.span>
					)}
				</motion.button>
			))}
		</section>
	);
};
