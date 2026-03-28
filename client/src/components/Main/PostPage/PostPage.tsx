import { NavLink } from "react-router";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { VideoPlayer } from "./components/VideoPlayer/VideoPlayer";
import { PostInfo } from "./components/PostInfo/PostInfo";
import video from "@assets/video/282086.mp4";
import { Comments } from "./components/Comments/Comments";

export const PostPage: React.FC = () => {
	return (
		<section className='PostPage'>
			<NavLink to={"/"}>
				<ArrowLeftIcon size={18} color='#AD92C9' weight='bold' />
				Back to Feed
			</NavLink>
			<section className='PostPage_content'>
				<section className='PostPage_content_videoPlayer'>
					<VideoPlayer src={video} />
				</section>
				<PostInfo />
				<Comments />
			</section>
			<section></section>
		</section>
	);
};
