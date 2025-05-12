import { dictionaries, Lang } from '@/lib/dictionaries';
import Button from './Button';
import CardEvent from './CardEvent';
import { ChessRunEvent } from '@/lib/types';
import Link from 'next/link';

export default function SectionEvents({ lang }: { lang: Lang }) {
	const t = dictionaries[lang];

	const events: ChessRunEvent[] = [
		{
			id: 1,
			image: {
				en: '/images/FlyerHerbesthal20250518EN.png',
				fr: '/images/FlyerHerbesthal20250518FR.png',
				de: '/images/FlyerHerbesthal20250518DE.png',
				nl: '/images/FlyerHerbesthal20250518NL.png'
			},
			country: 'Belgium',
			title: 'Herbesthal',
			beginDate: '05/18/2025', // date will be mm/dd/yyyy
			endDate: '05/18/2025'
		}
	];

	return (
		<>
			{events.length > 0 ? (
				<div className='flex flex-col items-center text-center mx-auto py-20 bg-neutral-200 dark:bg-neutral-600'>
					<h2
						className='text-3xl text-background font-semibold
					 mb-4 uppercase bg-foreground w-fit pl-2 pt-2 pr-10 pb-6 z-10'>
						{t?.eventsNext}
					</h2>
					<div
						className={`container -mt-8 grid grid-cols-3 justify-center items-center gap-8 lg:justify-center px-8`}>
						{events.map((event: ChessRunEvent) => (
							<CardEvent
								event={event as ChessRunEvent}
								lang={lang}
								key={event?.title}
							/>
						))}
					</div>
					<Link href={`/${lang}/events`}>
						<Button
							classname='mt-15'
							value={t?.eventsAll}
							inverted
						/>
					</Link>
				</div>
			) : (
				<div className='flex flex-col items-center text-center mx-auto py-20 bg-neutral-400 dark:bg-neutral-600'>
					<h2
						className='text-3xl text-background font-semibold
					 mb-4 uppercase bg-foreground w-fit pl-2 pt-2 pr-10 pb-6 z-10'>
						{t?.eventsNext}
					</h2>
					<div>
						<p>No events yet?.</p>
					</div>
					{/* <Link href={`/${lang}/events`}>
						<Button
							classname='mt-15'
							value={t?.eventsAll}
							inverted
						/>
					</Link> */}
				</div>
			)}
		</>
	);
}
