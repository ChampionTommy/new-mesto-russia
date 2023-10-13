'use client'
import './globals.css'

import Header from '../components/header'
import Modal from '../components/modal'
import { Providers } from '@/redux/providers'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<Providers>
			<html lang="en" className="styled-scrollbar">
				<body className="w-full text-[#c9cccf] bg-[#161617] mx-auto my-0">
					<Header />
					{children}
					<Modal />
				</body>
			</html>
		</Providers>
	)
}
