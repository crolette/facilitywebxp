import { dictionaries, Lang } from '@/lib/dictionaries';
import Button from './Button';
import Link from 'next/link';

export default function Contact({
	lang,
	headline
}: {
	lang: Lang;
	headline?: string;
}) {
	const t = dictionaries[lang];

	return (
		<div
			className='relative h-screen flex flex-col items-center justify-center bg-background'
			id='contact'>
			<div className='container p-10 space-y-4'>
				<p className='text-3xl font-serif font-extralight'>{headline}</p>
				<h2 className='text-4xl font-bold'>{t.contactTitle}</h2>
				<p>{t.contactUsText}</p>
				<Link
					href='mailto:info@facilitywebxp.be'
					className='w-fit'>
					<Button value={t.contactUsTitle} />
				</Link>
			</div>
		</div>
	);
}
