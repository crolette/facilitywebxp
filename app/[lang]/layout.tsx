import '../globals.css';
import { ReactNode } from 'react';
import { Lang } from '@/lib/dictionaries';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowDown } from 'lucide-react';

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
				<main className=''>{children}</main>
			</div>
			<div className='sticky bottom-10 animate-bounce flex flex-col items-center justify-center'>
				<ArrowDown
					size={48}
					absoluteStrokeWidth
				/>
			</div>
			<Footer lang={lang} />
		</>
	);
}
