import { dictionaries, Lang } from '@/lib/dictionaries';

export async function generateStaticParams(): Promise<{ lang: Lang }[]> {
	return (['en', 'fr', 'de', 'nl'] as Lang[]).map((lang) => ({ lang }));
}

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
				<div className='sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-blue-200'>
					<h1 className='mb-6'>{t.contactTitle}</h1>
					<p className='mb-4'>{t.contactDescription}</p>
				</div>
			</div>
		</>
	);
}
