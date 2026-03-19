import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useVerifyUserMutation } from "@store/Api/ApiSlice";
import { SealCheckIcon } from "@phosphor-icons/react";
import type { VerifyRequest } from "@store/Api/ApiSlice";
import type { RootState } from "@/store/store";

export const VerifyPage: React.FC = () => {
	const navigate = useNavigate();
	const EmailSlice = useSelector(
		(state: RootState) => state.emailverify.email,
	);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<VerifyRequest>();

	const [verifyUser, { error }] = useVerifyUserMutation();

	useEffect(() => {
		document.title = "Paradox Verify Email";
	}, []);

	const onSubmit = async (data: VerifyRequest) => {
		try {
			await verifyUser({
				email: EmailSlice,
				email_verification_code: data.email_verification_code,
			}).unwrap();

			toast.success(
				"Email Verification Success. Please Login in your account !",
				{
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: true,
					closeOnClick: true,
				},
			);

			navigate("/auth");
		} catch (err) {
			console.error("Error verifying user:", error);
		}
	};

	return (
		<section className="VerifyPage">
			<section className="VerifyPage_header">
				<section className="VerifyPage_header_icon">
					<SealCheckIcon
						size={64}
						weight="bold"
						color="#A855F7"
					/>
				</section>
				<section className="VerifyPage_header_content">
					<h2>Check your inbox</h2>
					<p>
						We've sent a 6-digit verification code to alex. <br />
						<span>{EmailSlice}</span>
					</p>
				</section>
			</section>
			<form
				className="VerifyPage_form"
				onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="verify_input">
					<input
						{...register("email_verification_code", {
							required: {
								value: true,
								message: "Verify is required",
							},
							validate: (value: number) => {
								const codeStr = value.toString();
								return (
									codeStr.length === 6 ||
									"Verify code must be 6 digits"
								);
							},
						})}
						id="verify_input"
						type="number"
						placeholder="Verify Code"
					/>
					{errors.email_verification_code?.message ? (
						<span>{errors.email_verification_code?.message}</span>
					) : null}
				</label>
				<button>Send Code</button>
			</form>
		</section>
	);
};
