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
				<div className='sticky top-0 h-screen flex flex-col items-center justify-center text-center'>
					<h1 className='font-light'>Facility Web Experience</h1>
					<p className='mt-4'>{t.welcome}</p>
				</div>
				<div className='sticky top-0 h-screen flex flex-col items-center justify-center bg-secondary text-foreground'>
					<h2 className='text-4xl font-bold'>Facility Management</h2>
					<p className='mt-2'>Scroll Down for next slide</p>
				</div>
				<div className='sticky top-0 h-screen flex flex-col items-center justify-center bg-accent text-white'>
					<div className='bg-red-500 p-10'>
						<h2 className='text-4xl font-bold'>Web Development</h2>
						<p className='mt-2'>Scroll Down</p>
					</div>
				</div>
				<div className='sticky top-0 h-screen flex flex-col items-center justify-center bg-background'>
					<h2 className='text-4xl font-bold'>Contact</h2>
				</div>
			</div>
		</>
	);
}
