import { useRegistersUserMutation } from "@store/Api/ApiSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { addEmail } from "@/store/Api/EmailVerifySlice";
import type { RegisterRequest } from "@store/Api/ApiSlice";
import { UserIcon, EnvelopeIcon, PasswordIcon } from "@phosphor-icons/react";

export const RegisterForm: React.FC = () => {
	const dispatch = useDispatch();
	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterRequest>();
	const [RegisterUser] = useRegistersUserMutation();

	const navigate = useNavigate();

	const onSubmit = async (data: RegisterRequest) => {
		try {
			await RegisterUser(data).unwrap();

			dispatch(addEmail(data.email));

			await navigate("/auth/verify/");
		} catch (err: any) {
			toast.error("Register is Failed. Please try later !", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: true,
				closeOnClick: true,
			});
		}
	};

	return (
		<form
			className="RegisterForm"
			onSubmit={handleSubmit(onSubmit)}>
			<section className="RegisterForm_title">
				<h2>Sign Up</h2>
				<p>Join our community today.</p>
			</section>
			<section className="RegisterForm_inputs">
				<label htmlFor="first_name">
					<h3>First Name</h3>
					<UserIcon
						className="icon"
						size={25}
					/>
					<input
						id="first_name"
						type="text"
						placeholder="First Name"
						{...register("first_name", {
							required: {
								value: true,
								message: "First Name is required",
							},
						})}
					/>
				</label>
				{errors.first_name && (
					<span className="error">{errors.first_name.message}</span>
				)}

				<label htmlFor="last_name">
					<h3>Last Name</h3>
					<UserIcon
						className="icon"
						size={25}
					/>
					<input
						id="last_name"
						type="text"
						placeholder="Last Name"
						{...register("last_name", {
							required: {
								value: true,
								message: "Last Name is required",
							},
						})}
					/>
				</label>
				{errors.last_name && (
					<span className="error">{errors.last_name.message}</span>
				)}

				<label htmlFor="username">
					<h3>Username</h3>
					<UserIcon
						className="icon"
						size={25}
					/>
					<input
						id="username"
						type="text"
						placeholder="Username"
						{...register("username", {
							required: {
								value: true,
								message: "Username is required",
							},
						})}
					/>
				</label>
				{errors.username && (
					<span className="error">{errors.username.message}</span>
				)}

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

				<label htmlFor="confirmPassword">
					<h3>Confirm Password</h3>
					<PasswordIcon
						className="icon"
						size={25}
					/>
					<input
						id="confirmPassword"
						type="password"
						placeholder="Confirm Password"
						{...register("password_confirm", {
							required: {
								value: true,
								message: "Confirm Password is required",
							},
							validate: (value) =>
								value === watch("password") ||
								"Passwords do not match",
						})}
					/>
				</label>
				{errors.password_confirm && (
					<span className="error">
						{errors.password_confirm.message}
					</span>
				)}
			</section>
			<button type="submit">Sing Up</button>
		</form>
	);
};
