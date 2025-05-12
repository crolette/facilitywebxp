'use client';

import { Lang } from '@/lib/dictionaries';
import { usePathname } from 'next/navigation';

export default function NewPathLang(lang: Lang, otherLang: Lang) {
	const pathname = usePathname();
	return pathname.replace(`/${lang}`, `/${otherLang}`);
}
