'use client';
import { useEffect } from 'react';

export default function DividerHero() {
	useEffect(() => {
		setTimeout(() => {
			const loader = document.getElementById('loader');
			loader?.remove();
		}, 750);
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
		</div>
	);
}
