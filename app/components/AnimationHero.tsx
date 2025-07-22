'use client';
import { useEffect, useState } from 'react';

export default function AnimationHero(text) {
	useEffect(() => {
		const timeoutLoader = setTimeout(() => {
			const loader = document.getElementById('loader');
			console.log(loader);
			loader?.remove();
		}, 2000);

		clearTimeout(timeoutLoader);
	}, []);

	return (
		<div className='container p-10 '>
			<div
				className='w-full min-h-screen grid grid-rows-3 loader'
				id='loader'>
				<div className='line line1'></div>
				<div className='line line2'></div>
				<div className='line line3'></div>
			</div>
			<div
				className={`titles font-light `}
				id='titles'>
				<div
					className={`title title1  `}
					id='title1'>
					Facility-Web
				</div>
				<div
					className={`title title2 `}
					id='title2'>
					experience
				</div>
			</div>
			<div>
				<img
					src='hero1.webp'
					alt=''
					className='image-container'
					id='image1'
				/>
				<img
					src='hero2.webp'
					alt=''
					className='image-container'
					id='image2'
				/>
				<img
					src='hero3b.webp'
					alt=''
					className='image-end'
					id='image3'
				/>
			</div>
		</div>
	);
}
