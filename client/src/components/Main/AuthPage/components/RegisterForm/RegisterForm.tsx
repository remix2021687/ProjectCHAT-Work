import { useForm } from "react-hook-form"
import { UserIcon, EnvelopeIcon, PasswordIcon } from '@phosphor-icons/react'

type FormData = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}


export const RegisterForm: React.FC = () => {
    const { register, watch, handleSubmit, formState: { errors } } = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <form className="RegisterForm" onSubmit={handleSubmit(onSubmit)}>
            <section className="RegisterForm_title">
                <h2>Sign Up</h2>
                <p>Join our community today.</p>
            </section>
            <section className="RegisterForm_inputs">
                <label htmlFor="username">
                    <h3>Username</h3>
                    <UserIcon className="icon" size={25} />
                    <input id="username" type="text" placeholder="Username" {...register('username', {
                        required: {
                            value: true,
                            message: 'Username is required'
                    } })} />
                </label>
                {errors.username && <span className="error">{errors.username.message}</span>}
                
                <label htmlFor="email">
                    <h3>Email</h3>
                    <EnvelopeIcon className="icon" size={25} />
                    <input id="email" type="email" placeholder="Email" {...register('email', {
                        required: {
                            value: true,
                            message: 'Email is required'
                    } })} />
                </label>
                {errors.email && <span className="error">{errors.email.message}</span>}
                
                <label htmlFor="password">
                    <h3>Password</h3>
                    <PasswordIcon className="icon" size={25} />
                    <input id="password" type="password" placeholder="Password" {...register('password', {
                        required: {
                            value: true,
                            message: 'Password is required'
                    } })} />
                </label>
                {errors.password && <span className="error">{errors.password.message}</span>}

                <label htmlFor="confirmPassword">
                    <h3>Confirm Password</h3>
                    <PasswordIcon className="icon" size={25} />
                    <input id="confirmPassword" type="password" placeholder="Confirm Password" {...register('confirmPassword', {
                        required: {
                            value: true,
                            message: 'Confirm Password is required'
                        },
                        validate: (value) => value === watch('password') || 'Passwords do not match'
                    })} />
                </label>
                {errors.confirmPassword && <span className="error">{ errors.confirmPassword.message }</span>}
            </section>
            <button type="submit">Sing Up</button>
        </form>
    )
}