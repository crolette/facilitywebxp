'use client';

import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ArrowBottomPage() {
	const [isBottom, setIsBottom] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrolledToBottom =
				window.innerHeight + window.scrollY >= document.body.offsetHeight - 400;
			setIsBottom(scrolledToBottom);
		};

		window.addEventListener('scroll', handleScroll);

		// Check once in case user is already at bottom on mount
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			{!isBottom && (
				<div
					id='arrow-bottom-page'
					className='sticky bottom-10 animate-bounce flex flex-col items-center justify-center'>
					<ArrowDown
						size={48}
						absoluteStrokeWidth
						className=' drop-shadow-md drop-shadow-amber-200'
					/>
				</div>
			)}
		</>
	);
}
