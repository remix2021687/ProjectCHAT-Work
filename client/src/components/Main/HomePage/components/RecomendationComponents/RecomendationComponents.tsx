import { RecomendChannels } from "./components/RecomendChannels/RecomendChannels";
import { TrendTopic } from "./components/TrendTopic/TrendTopic";

export const RecomendationComponents: React.FC = () => {
	return (
		<section className='RecomendationComponents'>
			<RecomendChannels />
			<TrendTopic />
		</section>
	);
};
