'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Lang } from '@/lib/dictionaries';

export default function Languages({ pageLang }: { pageLang: string }) {
	const [selectedLang, setSelectedLang] = useState<string>(pageLang);
	const languages = ['fr', 'de', 'en', 'nl'];
	const languageLabels: Record<string, string> = {
		fr: 'Français',
		de: 'Deutsch',
		en: 'English',
		nl: 'Nederlands'
	};

	const router = useRouter();
	const pathname = usePathname();

	const changeLang = (lang: string) => {
		const newPath = pathname.replace(`/${pageLang}`, `/${lang}`);
		setSelectedLang(lang as Lang);
		router.push(newPath);
	};

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		changeLang(e.target.value);
	};

	return (
		<div className='text-foreground my-auto'>
			<select
				value={selectedLang}
				onChange={handleChange}
				className=''>
				{languages.map((lang) => (
					<option
						key={lang}
						value={lang}
						className='cursor-pointer'>
						{languageLabels[lang]}
					</option>
				))}
			</select>
		</div>
	);
}
