/* eslint-disable @typescript-eslint/no-unused-vars */
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
				<div className='sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white'>
					<h2 className='text-4xl font-bold'>Facility Management</h2>
					<p className='mt-2'>Scroll Down for next slide</p>
				</div>
			</div>
		</>
	);
}
