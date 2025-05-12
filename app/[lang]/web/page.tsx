/* eslint-disable @typescript-eslint/no-unused-vars */
// app/[lang]/page.tsx
import { Lang } from '@/lib/dictionaries';

export async function generateStaticParams(): Promise<{ lang: Lang }[]> {
	return (['en', 'fr', 'de', 'nl'] as Lang[]).map((lang) => ({ lang }));
}

export default async function HomePage({
	params
}: {
	params: Promise<{ lang: Lang }>;
}) {
	return (
		<>
			<div className='relative'>
				<div className='sticky top-0 h-screen flex flex-col items-center justify-center bg-accent text-secondary text-center'>
					<div className='container space-y-10'>
						<h1 className=''>Web Development</h1>
						<p className=''>
							La compétitivté de votre PME, passe aussi par votre présence en
							ligne ! Pour assurer cette compétitivité, vous avez besoin de
							visibilité !
						</p>
						<p className='text-3xl font-serif italic'>
							Nous sommes la pour vous!
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
