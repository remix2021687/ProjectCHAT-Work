import { ProfileInfo } from "./components/ProfileInfo/ProfileInfo";
import { ProfilePonorama } from "./components/ProfilePonorama/ProfilePonorama";

export const ProfilePage: React.FC = () => {
	return (
		<section className='ProfilePage'>
			<section className='ProfilePage_header'>
				<ProfileInfo ProfilePonorama={ProfilePonorama} />
			</section>
		</section>
	);
};
