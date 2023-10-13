'use client'

import { type CardData } from '@/utils/interfaces'
import Image from 'next/image'

export const Card = ({ data }: CardData) =>
	<div className="card">
		<Image
			className="block bg-[#8c8c8c] pointer w-full h-auto"
			src={process.env.SERVER_URL + data.imageUrl}
			alt="card_image"
			quality={75}
			priority={true}
			width={0}
			height={0}
			sizes="100vw"
		/>
		<div className="flex flex-wrap justify-between h-[80px] items-center mx-[10px]">
			<h3 className="text-xs font-medium">{data.title}</h3>
		</div>
	</div>
