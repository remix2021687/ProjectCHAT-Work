import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useLoginUserMutation } from "@store/Api/ApiSlice";
import type { LoginRequest } from "@store/Api/ApiSlice";
import { EnvelopeIcon, PasswordIcon } from "@phosphor-icons/react";
import { toast } from "react-toastify";

export const LoginForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginRequest>();

	const [Login] = useLoginUserMutation();

	const navigate = useNavigate();

	const onSubmit = async (data: LoginRequest) => {
		try {
			const result = await Login(data).unwrap();
			if (result) {
				localStorage.setItem("token", result.access ?? "");
				localStorage.setItem("refrash", result.refresh ?? "");
			}

			navigate("/");

			toast.success("Login Success. Welcome to Paradox !", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
			});
		} catch (res: any) {
			const errMSG = res.data.message[0];

			if (errMSG) {
				toast.error(errMSG, {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: true,
					closeOnClick: true,
				});
			}
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
