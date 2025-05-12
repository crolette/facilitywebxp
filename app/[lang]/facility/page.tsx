// app/[lang]/page.tsx
import { dictionaries, Lang } from '@/lib/dictionaries';

export async function generateStaticParams(): Promise<{ lang: Lang }[]> {
	return (['en', 'fr', 'de', 'nl'] as Lang[]).map((lang) => ({ lang }));
}

export default async function HomePage({
	params
}: {
	params: Promise<{ lang: Lang }>;
}) {
	const { lang } = await params;
	const t = dictionaries[lang];

	return (
		<>
			<div className='relative'>
				<div className='sticky top-0 h-screen flex flex-col items-center justify-center text-foreground text-center'>
					<div className='container'>
						<h1 className=''>Facility Management</h1>
						<p className='mt-2'>{t.facilitySectionLine1}</p>
						<p className='mt-2 font-serif italic'>Nous sommes la pour vous!</p>
					</div>
				</div>
				<div className='sticky top-0 h-screen flex flex-col items-center justify-center text-secondary bg-accent'>
					<div className='container'>
						<h2 className=''>Facility Management</h2>
						<p className='mt-2'>Scroll Down for next slide</p>
					</div>
				</div>
			</div>
		</>
	);
}
