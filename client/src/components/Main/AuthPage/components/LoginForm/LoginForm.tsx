import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { EnvelopeIcon, PasswordIcon } from "@phosphor-icons/react";
import { useLoginUserMutation } from "@store/Api/ApiSlice";
import { toast } from "react-toastify";
import type { LoginRequest } from "@store/Api/ApiSlice";

export const LoginForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginRequest>();

	const [login, { error }] = useLoginUserMutation();

	const navigate = useNavigate();

	const onSubmit = async (data: LoginRequest) => {
		try {
			const resulte = await login(data);
			if (resulte) {
				localStorage.setItem("token", resulte.data?.access ?? "");
				localStorage.setItem("refrash", resulte.data?.refrash ?? "");
				navigate("/");
				toast.success("Login Success. Welcome to Paradox !", {
					position: "top-center",
					autoClose: 3000,
					hideProgressBar: true,
					closeOnClick: true,
				});
			}
		} catch (err) {
			console.log(error);
		}
	};

	return (
		<form
			className="LoginForm"
			onSubmit={handleSubmit(onSubmit)}>
			<section className="LoginForm_title">
				<h2>Sign In</h2>
				<p>Sign In in your account.</p>
			</section>
			<label htmlFor="email">
				<h3>Email</h3>
				<EnvelopeIcon
					className="icon"
					size={25}
				/>
				<input
					id="email"
					type="email"
					placeholder="Email"
					{...register("email", {
						required: {
							value: true,
							message: "Email is required",
						},
					})}
				/>
			</label>
			{errors.email && (
				<span className="error">{errors.email.message}</span>
			)}

			<label htmlFor="password">
				<h3>Password</h3>
				<PasswordIcon
					className="icon"
					size={25}
				/>
				<input
					id="password"
					type="password"
					placeholder="Password"
					{...register("password", {
						required: {
							value: true,
							message: "Password is required",
						},
					})}
				/>
			</label>
			{errors.password && (
				<span className="error">{errors.password.message}</span>
			)}

			<button>Sign In</button>
		</form>
	);
};
