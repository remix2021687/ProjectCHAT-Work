import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { VerifyRequest } from "@store/Api/ApiSlice";
import { SealCheckIcon } from "@phosphor-icons/react";

export const VerifyPage: React.FC = () => {
	const {
		register,
		formState: { errors },
	} = useForm<VerifyRequest>();

	useEffect(() => {
		document.title = "Paradox Verify Email";
	}, []);

	return (
		<section className='VerifyPage'>
			<section className='VerifyPage_header'>
				<section className='VerifyPage_header_icon'>
					<SealCheckIcon size={64} weight='bold' color='#A855F7' />
				</section>
				<section className='VerifyPage_header_content'>
					<h2>Check your inbox</h2>
					<p>
						We've sent a 6-digit verification code to alex. <br />
						<span>design@example.com</span>
					</p>
				</section>
			</section>
			<form className='VerifyPage_form'>
				<label htmlFor='verify_input'>
					<input
						{...register("code", {
							required: {
								value: true,
								message: "Verify is requried",
							},
						})}
						id='verify_input'
						type='number'
						placeholder='Verify Code'
					/>
					{errors.code?.message ? <span>{errors.code?.message}</span> : null}
				</label>
				<button>Send Code</button>
			</form>
		</section>
	);
};
