'use client'
import Image from 'next/image'
import { Icon20DoorArrowRightOutline, Icon24ChevronDown } from '@vkontakte/icons'
import { useState } from 'react'
import { logout } from '@/redux/slices/auth'
import { useDispatch } from 'react-redux'
import { type AppDispatch } from '@/redux/store'

export const Profile = () => {
	const [openProfile, setOpenProfile] = useState(false)

	const dispatch = useDispatch<AppDispatch>()
	const onClickLogout = () => {
		if (window.confirm('Вы действительно хотите выйти?')) {
			dispatch(logout())
			window.localStorage.removeItem('token')
		}
	}
	return (
		<>
			<div className="user" onClick={() => {
				setOpenProfile(!openProfile)
			}}>
				<div className="flex items-center">
					<div className="mr-3">
						<Image
							src="/pic01.jpg"
							width={40}
							height={40}
							alt="avatar"
							className="w-10 h-10 rounded-[50%]"
						/>
					</div>
					<Icon24ChevronDown color="#c9cccf" />
				</div>
			</div>
			<div className={`${!openProfile ? 'hidden' : ' '} account-menu user-menu `}>
				<div className="font-medium text-[15px] leading-[22px] ml-2.5 mb-2.5">Мой профиль</div>
				<button className="profile-action" onClick={onClickLogout}>
					<div className="profile-action__wrapper">
						<Icon20DoorArrowRightOutline className="profile-action__icon" />
            Выход
					</div>
				</button>
			</div>
		</>
	)
}
