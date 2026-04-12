// import { useDispatch, useSelector } from "react-redux";
import { ProfileInfoHeader } from "./components/ProfileInfoHeader/ProfileInfoHeader";
import { ProfileInfoNav } from "./components/ProfileInfoNav/ProfileInfoNav";

interface ProfileInfoProps {
	ProfilePonorama: React.ComponentType;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({
	ProfilePonorama,
}) => {
	// const ProfileNavMenuState = useSelector(
	// 	(state: RootState) => state.profilenavmenu.category,
	// );

	return (
		<section className="ProfileInfo">
			<ProfilePonorama />
			<ProfileInfoHeader />
			<section className="ProfileInfo_content">
				<section className="ProfileInfo_content_left">
					<ProfileInfoNav />
				</section>
			</section>
		</section>
	);
};
