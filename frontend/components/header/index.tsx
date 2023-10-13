'use client';

import Image from 'next/image';
import { Icon24Add, Icon28DoorArrowLeftOutline } from '@vkontakte/icons';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/slices/modal';
import { Profile } from '../profile';
import { type AppDispatch } from '../../redux/store';
import { fetchAuthStatus, loggedIn } from '@/redux/slices/auth';
import { useEffect } from 'react';

export default function Header() {
	const isAuth = useSelector(loggedIn);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchAuthStatus());
	}, []);

	return (
		<header className="sticky top-0 z-10 py-[20px] bg-[#26282b]">
			<div className="container flex justify-between items-center">
				<a href="/">
					<Image
						src="/logo.svg"
						width={0}
						height={0}
						alt="logo"
						sizes="100vw"
						priority={true}
						className="w-full h-auto"
					/>
					<p className="font-[300] text-[10px] mt-[3px]">Сфотано с любовью...!</p>
				</a>
				{isAuth ? (
					<button className="button" type="button" onClick={() => dispatch(openModal('editor'))}>
						<p className="mx-2">Создать запись</p>
						<Icon24Add color="#c9cccf" />
					</button>
				) : null}

				{isAuth ? (
					<Profile />
				) : (
					<button className="button" type="button" onClick={() => dispatch(openModal('auth'))}>
						<p className="mx-2">Войти</p>
						<Icon28DoorArrowLeftOutline color="#c9cccf" />
					</button>
				)}
			</div>
		</header>
	);
}
