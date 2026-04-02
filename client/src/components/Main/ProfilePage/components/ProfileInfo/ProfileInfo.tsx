import type { MouseEventHandler } from "react";
import {
	VideoIcon,
	ChatIcon,
	ImageIcon,
	WarningCircleIcon,
} from "@phosphor-icons/react";
import { ProfileInfoHeader } from "./components/ProfileInfoHeader/ProfileInfoHeader";

interface ProfileInfoProps {
	ProfilePonorama: React.ComponentType;
}

type NavButtonsType = {
	icon: React.ReactNode;
	name: string;
	onclick: MouseEventHandler<HTMLButtonElement>;
};

export const ProfileInfo: React.FC<ProfileInfoProps> = ({
	ProfilePonorama,
}) => {
	const ButtonNavData: Array<NavButtonsType> = [
		{
			icon: <VideoIcon />,
			name: "Videos",
			onclick: () => {
				console.log("Test");
			},
		},
		{
			icon: <ChatIcon />,
			name: "Posts",
			onclick: () => {
				console.log("Test");
			},
		},
		{
			icon: <ImageIcon />,
			name: "Media",
			onclick: () => {
				console.log("Test");
			},
		},
		{
			icon: <WarningCircleIcon />,
			name: "About",
			onclick: () => {
				console.log("Test");
			},
		},
	];
	return (
		<section className='ProfileInfo'>
			<ProfilePonorama />
			<ProfileInfoHeader />
			<section className='ProfileInfo_content'>
				<section className='ProfileInfo_content_left'>
					<section className='ProfileInfo_content_left_nav'></section>
				</section>
				<section className='ProfileInfo_content_right'></section>
			</section>
		</section>
	);
};
