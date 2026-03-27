import {
	TrendTopicBox,
	type TrendTopicBoxProps,
} from "@feacher/TrendTopicBox/TrendTopicBox";

export const TrendTopic: React.FC = () => {
	const TrendTopicBoxData: Array<TrendTopicBoxProps> = [
		{
			tagname: "Web3Design",
			count: 50,
		},
		{
			tagname: "Web3Design",
			count: 80,
		},
		{
			tagname: "Web3Design",
			count: 510,
		},
		{
			tagname: "Web3Design",
			count: 600,
		},
	];

	return (
		<section className="TrendTopic">
			<h2>Trending Topics</h2>
			<section className="TrendTopic_content">
				{TrendTopicBoxData.map((data) => (
					<TrendTopicBox
						tagname={data.tagname}
						count={data.count}
					/>
				))}
			</section>
		</section>
	);
};
