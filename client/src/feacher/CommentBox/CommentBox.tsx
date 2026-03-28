import avatar from "@assets/img/avatar.png";

export const CommentBox: React.FC = () => {
	return (
		<section className="CommentBox">
			<img
				src={avatar}
				alt="avatar"
			/>
			<section className="CommentBox_content">
				<section className="CommentBox_content_header">
					<h1>
						Alex Rivers <span>5h ago</span>
					</h1>
				</section>
				<section>
					<p>
						This breakdown is exactly what I needed for my current
						project. The section on spatial layouts was particularly
						eye-opening!
					</p>
				</section>
			</section>
		</section>
	);
};
