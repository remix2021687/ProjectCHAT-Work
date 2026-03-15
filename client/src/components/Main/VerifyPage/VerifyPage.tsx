import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useVerifyUserMutation } from "@store/Api/ApiSlice";
import type { VerifyRequest } from "@store/Api/ApiSlice";
import { SealCheckIcon } from "@phosphor-icons/react";

export const VerifyPage: React.FC = () => {
	const navigate = useNavigate();
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
			const result = await verifyUser(data);

			if (result) {
				navigate("/auth");
			}
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
						<span>design@example.com</span>
					</p>
				</section>
			</section>
			<form
				className="VerifyPage_form"
				onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="verify_input">
					<input
						{...register("code", {
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
					{errors.code?.message ? (
						<span>{errors.code?.message}</span>
					) : null}
				</label>
				<button>Send Code</button>
			</form>
		</section>
	);
};
