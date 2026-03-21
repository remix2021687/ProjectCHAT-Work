import { useState, useEffect, type MouseEventHandler } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import { LoginForm } from "./components/LoginForm/LoginForm";
import icon from "@assets/svg/Overlay+Border.svg";

type ButtonDataType = {
	id: number;
	value: string;
	text: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
};

export const AuthPage: React.FC = () => {
	const token = localStorage.getItem("token");
	const navigate = useNavigate();
	const [activTab, setAcitvTab] = useState("signUp");

	const ButtonHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
		const value = (event.currentTarget as HTMLButtonElement).value;
		setAcitvTab(value);
	};

	useEffect(() => {
		if (token) {
			navigate(-1);
		}
	}, [token]);

	const ButtonData: Array<ButtonDataType> = [
		{
			id: 1,
			value: "signUp",
			text: "Sign Up",
			onClick: ButtonHandler,
		},
		{
			id: 2,
			value: "signIn",
			text: "Sign In",
			onClick: ButtonHandler,
		},
	];

	return (
		<section className="AuthPage">
			<section className="AuthPage_left_block">
				<img
					src={icon}
					alt="icon"
				/>
				<h2>
					Chatting and Video Posting <br />
					on <span>Paradox</span> Project
				</h2>
				<p>
					Join the world's fastest growing community of creators and
					streamers. Share your passions in real-time.
				</p>
			</section>
			<section className="AuthPage_right_block">
				<section className="AuthPage_right_block_select">
					{ButtonData.map((data) => (
						<button
							key={data.id}
							value={data.value}
							onClick={data.onClick}>
							<motion.span
								animate={
									activTab == data.value
										? { color: "white" }
										: { color: "#94a3b8" }
								}
								className="AuthPage_right_block_select_text">
								{data.text}
							</motion.span>
							{activTab === data.value && (
								<motion.span
									layoutId="selected"
									transition={{
										type: "spring",
										bounce: 0.25,
									}}
									className="AuthPage_right_block_select_indecator"></motion.span>
							)}
						</button>
					))}
				</section>
				<section className="AuthPage_right_block_content">
					{activTab === "signUp" ? <RegisterForm /> : <LoginForm />}
				</section>
			</section>
		</section>
	);
};
