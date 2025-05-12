// app/[lang]/page.tsx
import { dictionaries, Lang } from '@/lib/dictionaries';

export default async function HomePage({
	params
}: {
	params: Promise<{ lang: Lang }>;
}) {
	const { lang } = await params;
	const t = await dictionaries[lang];

	return (
		<>
			<div className='relative'>
				<div className='sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white'>
					<h1 className=''>Web Development</h1>
					<p className='mt-2'>Scroll Down</p>
				</div>
			</div>
		</>
	);
}
