import { useEffect } from "react";
import { NavigationMenu } from "./components/NavigationMenu/NavigationMenu";
import { PostMenu } from "./components/PostMenu/PostMenu";
import { RecomendationComponents } from "./components/RecomendationComponents/RecomendationComponents";
import { type PostBoxProps, PostBox } from "@feacher/PostBox/PostBox";
import avatar from "@assets/img/avatar.png";
import bg from "@assets/img/Background.png";

export const HomePage: React.FC = () => {
	useEffect(() => {
		document.title = "Paradox | Home";
	}, []);

	const PostBoxData: Array<PostBoxProps> = [
		{
			title: "Test Post",
			content:
				"LoREMfksdfksdlfklsdfkdslkfsldkfsdlfksdl;fksdfskdfl;sdkflsd;kfs;dlfkdsl;fksd;lfksdl;LoREMfksdfksdlfklsdfkdslkfsldkfsdlfksdl;fksdfskdfl;sdkflsd;kfs;dlfkdsl;fksd;lfksdl;LoREMfksdfksdlfklsdfkdslkfsldkfsdlfksdl;fksdfskdfl;sdkflsd;kfs;dlfkdsl;fksd;lfksdl;LoREMfksdfksdlfklsdfkdslkfsldkfsdlfksdl;fksdfskdfl;sdkflsd;kfs;dlfkdsl;fksd;lfksdl;",
			like_count: 50,
			media_content: bg,
			is_liked: true,
			user: {
				first_name: "Test1",
				last_name: "User1",
				avatar: avatar,
				username: "testuser",
				is_verified: false,
			},
			created_at: "5h",
		},
	];

	return (
		<section className='HomePage'>
			<NavigationMenu />
			<section className='HomePage_content'>
				<PostMenu />
				<section className='HomePage_posts'>
					{PostBoxData.map((data, index) => (
						<PostBox
							key={index + 1}
							title={data.title}
							content={data.content}
							media_content={data.media_content}
							like_count={data.like_count}
							is_liked={data.is_liked}
							user={data.user}
							created_at={data.created_at}
						/>
					))}
				</section>
			</section>
			<section className='HomePage_left'>
				<RecomendationComponents />
			</section>
		</section>
	);
};
