import { CommentBox } from "@feacher/CommentBox/CommentBox";
import avatar from "@assets/img/avatar.png";

export const Comments: React.FC = () => {
	return (
		<section className="Comments">
			<section className="Comments_header">
				<h1>
					Comments <span>245</span>
				</h1>
			</section>
			<hr />
			<form className="Comments_form">
				<img
					src={avatar}
					alt="avatar"
				/>
				<label htmlFor="comments_textarea">
					<textarea
						id="comments_textarea"
						placeholder="Write a comment..."></textarea>
					<button>Send</button>
				</label>
			</form>
			<section className="Comments_content">
				<CommentBox />
			</section>
		</section>
	);
};
