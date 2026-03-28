import avatar from "@assets/img/avatar.png";
import { HeartIcon } from "@phosphor-icons/react";

export const CommentBox: React.FC = () => {
	return (
		<section className='CommentBox'>
			<img src={avatar} alt='avatar' />
			<section className='CommentBox_content'>
				<section className='CommentBox_content_header'>
					<h1>Alex Rivers</h1>
					<span>5h ago</span>
				</section>
				<section className='CommentBox_content_text'>
					<p>
						This breakdown is exactly what I needed for my current project. The
						section on spatial layouts was particularly eye-opening!
					</p>
				</section>
				<section className='CommentBox_content_footer'>
					<section>
						<HeartIcon size={20} color='#AD92C9' weight='bold' />
						<span>42</span>
					</section>
					<button>Reply</button>
				</section>
			</section>
		</section>
	);
};
