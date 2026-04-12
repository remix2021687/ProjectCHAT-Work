import avatar from "@assets/img/avatar.png";
import { ShareNetworkIcon, SealCheckIcon } from "@phosphor-icons/react";

export const ProfileInfoHeader: React.FC = () => {
	return (
		<section className='ProfileInfo_header'>
			<section className='ProfileInfo_header_info'>
				<section className='ProfileInfo_header_info_avatar'>
					<img src={avatar} alt='avatar' />
					<section>
						<SealCheckIcon color='#FFF' weight='fill' />
					</section>
				</section>
				<section>
					<h1>Alex Rivers</h1>
					<h3>@alex_rivers</h3>
					<span>Tech Reviewer • Filmmaker • Explorer</span>
				</section>
			</section>
			<section className='ProfileInfo_header_buttons'>
				<button id='EditPofile'>Edit Profile</button>
				<button id='ShareProfile'>
					<ShareNetworkIcon size={25} color='white' />
					Share
				</button>
			</section>
		</section>
	);
};
