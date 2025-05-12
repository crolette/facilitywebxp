import '../globals.css';
import { ReactNode } from 'react';
import { Lang } from '@/lib/dictionaries';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default async function LangLayout({
	children,
	params
}: {
	children: ReactNode;
	params: Promise<{ lang: Lang }>;
}) {
	const { lang } = await params;

	return (
		<>
			<Header lang={lang}></Header>
			<div className='wrapper'>
				<main>{children}</main>
			</div>
			<Footer lang={lang} />
		</>
	);
}
