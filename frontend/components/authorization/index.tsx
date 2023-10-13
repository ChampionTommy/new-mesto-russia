'use client'
import { fetchAuth } from '@/redux/slices/auth'
import { closeModal, openModal } from '@/redux/slices/modal'
import { type AppDispatch } from '@/redux/store'

import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

export const Authorization = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { register, handleSubmit } = useForm<{
		email: string
		password: string
	}>()

	const onSubmit = async (data: { email: string; password: string }) => {
		const res = await dispatch(fetchAuth(data))
		if (!res.payload) {
			alert('Не удалось войти!'); return
		}
		if ('token' in res.payload) {
			window.localStorage.setItem('token', res.payload.token)
			dispatch(closeModal())
		}
	}
	return (
		<>
			<div className="py-[30px]">
				<div className="font-medium text-[22px] leading-[30px]">Вход в аккаунт</div>
			</div>
			<div className="w-full">
				<form onSubmit={handleSubmit(onSubmit)} className="mb-[20px]">
					<div className="field mb-[16px]">
						<label htmlFor="email" className="field__wrapper transition">
							<input
								type="email"
								placeholder="Почта"
								{...register('email', {
									required: true,
									pattern: /^\S+@\S+$/i,
								})}
								className="w-full h-full leading-none text-inherit bg-transparent shadow-none appearance-none m-0 p-0 border-[none] outline-none"
							/>
						</label>
					</div>
					<div className="field mb-[16px]">
						<label htmlFor="password" className="field__wrapper transition">
							<input
								type="password"
								placeholder="Пароль"
								{...register('password')}
								className="w-full h-full leading-none text-inherit bg-transparent shadow-none appearance-none m-0 p-0 border-[none] outline-none"
							/>
						</label>
					</div>
					<button type="submit" onClick={() => onSubmit} className="button w-full mb-[16px]">
            Войти
					</button>
				</form>
			</div>
			<div className="text-[#969c9d] text-center">
        Нет аккаунта?
				<button
					type="button"
					className="text-[#3375d6] cursor-pointer inline-block text-[17px] leading-[26px] ml-2 hover:opacity-[.70]"
					onClick={() => dispatch(openModal('register'))}
				>
          Регистрация
				</button>
			</div>
		</>
	)
}
