import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addEmail } from "@store/Api/EmailVerifySlice";
import { useLoginUserMutation } from "@store/Api/ApiSlice";
import type { LoginRequest } from "@store/Api/ApiSlice";
import { EnvelopeIcon, PasswordIcon } from "@phosphor-icons/react";
import { toast } from "react-toastify";

export const LoginForm: React.FC = () => {
	const dispatch = useDispatch();
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
			const errMSG = res.data.message;

			switch (errMSG) {
				case "Email is not verificated !":
					navigate("/auth/verify/");

					dispatch(addEmail(data.email));

					toast.error(`${errMSG} Please verificat your account !`, {
						position: "top-right",
						autoClose: 3000,
						hideProgressBar: true,
						closeOnClick: true,
					});
					break;

				default:
					toast.error(errMSG[0], {
						position: "top-right",
						autoClose: 3000,
						hideProgressBar: true,
						closeOnClick: true,
					});
					break;
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
