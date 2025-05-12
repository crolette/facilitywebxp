'use client';

import Link from 'next/link';
import { Lang } from '@/lib/dictionaries';

export default function Menu({
	lang,
	closeMenu
}: {
	lang: Lang;
	closeMenu: () => void;
}) {
	const navLinks = [
		{ href: '/', key: 'home' },
		{ href: 'facility', key: 'facility management' },
		{ href: 'web', key: 'web development' },
		{ href: 'contact', key: 'contact' }
	];

	// const t = dictionaries[lang];

	return (
		<>
			<nav className='flex items-center justify-center w-full'>
				<div className='container p-4 h-full'>
					<ul className='flex flex-col justify-around items-center  h-full text-3xl'>
						{navLinks.map((link) => (
							<Link
								onClick={() => closeMenu()}
								key={link.key}
								href={`/${lang}/${link.href}`}
								className='hover:underline capitalize'>
								{link.key}
							</Link>
						))}
					</ul>
				</div>
			</nav>
		</>
	);
}
