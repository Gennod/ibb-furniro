import { SubmitHandler, useForm } from 'react-hook-form'

interface IFormInput {
	name: string
	email: string
	message: string
}

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<IFormInput>({
		mode: 'onChange'
	})
	const onSubmit: SubmitHandler<IFormInput> = () => {
		reset()
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col gap-5">
				<div className="flex flex-col gap-2">
					<label className="font-bold">Your Name</label>
					<input
						placeholder="Ivan"
						{...register('name', {
							required: 'Name is required!',
							maxLength: {
								value: 20,
								message: 'Name must be less than 20 characters'
							}
						})}
						className="rounded-2xl border px-8 py-4"
					/>
					{errors.name && (
						<span className="text-red-500">{errors.name.message}</span>
					)}
				</div>
				<div className="flex flex-col gap-2">
					<label className="font-bold">Email Address</label>
					<input
						placeholder="ivan@gmail.com"
						{...register('email', {
							required: 'Email is required!',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Invalid email address'
							}
						})}
						className="rounded-2xl border px-8 py-4"
					/>
					{errors.email && (
						<span className="text-red-500">{errors.email.message}</span>
					)}
				</div>
				<div className="flex flex-col gap-2">
					<label className="font-bold">Message</label>
					<textarea
						placeholder="Hi! I'd like to ask about..."
						{...register('message', {
							required: 'Message is required!',
							maxLength: {
								value: 120,
								message: 'Message must be less than 120 characters'
							}
						})}
						className="min-h-28 resize-none overflow-hidden rounded-2xl border px-8 py-4"
					/>
					{errors.message && (
						<span className="text-red-500">{errors.message.message}</span>
					)}
				</div>
			</div>
			<input
				className="mt-12 cursor-pointer bg-(--color-primary) px-20 py-3 text-white active:scale-95"
				type="submit"
			/>
		</form>
	)
}
