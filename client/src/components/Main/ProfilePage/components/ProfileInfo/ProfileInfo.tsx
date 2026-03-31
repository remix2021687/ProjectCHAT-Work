interface ProfileInfoProps {
	ProfilePonorama: React.ComponentType;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({
	ProfilePonorama,
}) => {
	return (
		<section className='ProfileInfo'>
			<ProfilePonorama />
		</section>
	);
};
