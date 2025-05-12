'use client';

import { Lang } from '@/lib/dictionaries';
import { MenuIcon, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Menu from './Menu';
import Languages from './Languages';

export default function Header({ lang }: { lang: Lang }) {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<header
			className={`${
				showMobileMenu
					? 'grid grid-rows-[120px_1fr] h-full transition-all duration-150 bg-background '
					: 'grid grid-rows-[120px] items-center transition-all duration-150 '
			} text-foreground z-50 w-full mx-auto fixed top-0 `}>
			<div className='px-2 container w-full flex items-center justify-between mx-auto relative'>
				<div className='text-xl font-bold w-1/4'>
					<Link href={`/${lang}`}>
						<img
							src='/logo.png'
							alt=''
							className='w-24 h-auto drop-shadow-[0_0_5px_rgba(255,255,255,1)]'
							width={80}
							height={80}
						/>
					</Link>
				</div>
				<div className='flex flex-row gap-4 cursor-pointer'>
					<Languages pageLang={lang} />
					<button onClick={() => setShowMobileMenu(!showMobileMenu)}>
						{!showMobileMenu ? (
							<MenuIcon
								size={40}
								className='hover:scale-125'
							/>
						) : (
							<X size={40} />
						)}
					</button>
				</div>
			</div>
			{showMobileMenu && (
				<Menu
					lang={lang}
					closeMenu={() => setShowMobileMenu(false)}
				/>
			)}
		</header>
	);
}
