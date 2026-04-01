export type Page404InfoBoxProps = {
	icon: React.ReactNode;
	title: string;
	description: string;
};

export const Page404InfoBox: React.FC<Page404InfoBoxProps> = ({
	icon,
	title,
	description,
}) => {
	return (
		<section className='Page404InfoBox'>
			{icon}
			<section className='Page404InfoBox_content'>
				<h2>{title}</h2>
				<p>{description}</p>
			</section>
		</section>
	);
};
