export const PostMenu: React.FC = () => {
	return (
		<section className="PostMenu">
			<section className="PostMenu_header">
				<h1>Social Activity</h1>
				<p>Stay updated with your community</p>
			</section>
			<form className="PostMenu_form">
				<section className="PostMenu_form_content">
					<textarea placeholder="Share an update, link or video..."></textarea>
					<button>Post</button>
				</section>
			</form>
		</section>
	);
};
