import ContactForm from '../../components/ContactForm';
import { dictionaries, Lang } from '../../../lib/dictionaries';

// export async function generateStaticParams(): Promise<{ lang: Lang }[]> {
// 	return (['fr'] as Lang[]).map((lang) => ({ lang }));
// }

export default async function ContactPage({
	params
}: {
	params: Promise<{ lang: Lang }>;
}) {
	const { lang } = await params;
	const t = await dictionaries[lang];

	return (
		<>
			<div className='relative'>
				<div className='sticky top-0 h-screen flex flex-col items-center justify-center text-center'>
					<div className='container'>
						<h1 className=''>{t.contactTitle}</h1>
						<p className=''>{t.contactDescription}</p>
						<ContactForm lang={lang} />
					</div>
				</div>
			</div>
		</>
	);
}
