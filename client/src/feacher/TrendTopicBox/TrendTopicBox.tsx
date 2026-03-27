export type TrendTopicBoxProps = {
	tagname: string;
	count: number;
};

export const TrendTopicBox: React.FC<TrendTopicBoxProps> = ({
	tagname,
	count,
}) => {
	return (
		<section className="TrendTopicBox">
			<h2>#{tagname}</h2>
			<h4>{count} posts</h4>
		</section>
	);
};
