'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type AppDispatch } from '@/redux/store';
import { fetchImages } from '@/redux/slices/images';
import { Card } from '../components/card';
import { HelperImageData } from '@/utils/helpers';

export default function Home() {
	const dispatch = useDispatch<AppDispatch>();
	const { items } = useSelector(HelperImageData);

	useEffect(() => {
		dispatch(fetchImages());
	}, []);
	console.log(items);
	return (
		<section className="container">
			<div className="grid grid-cols-3 grid-rows-1 my-[35px] gap-[35px]">
				{items.map((item, index: string) => (
					<Card key={index} data={item} />
				))}
			</div>
		</section>
	);
}
