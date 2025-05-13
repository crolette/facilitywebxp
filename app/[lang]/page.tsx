// app/[lang]/page.tsx
import { dictionaries, Lang } from '@/lib/dictionaries';
import Button from '../components/Button';
import Link from 'next/link';
import { Metadata } from 'next';
import Contact from '../components/Contact';

export async function generateStaticParams(): Promise<{ lang: Lang }[]> {
	return (['en', 'fr', 'de', 'nl'] as Lang[]).map((lang) => ({ lang }));
}

export const metadata: Metadata = {
	title: 'Facility Web Experience',
	description: 'Facility Management and Web Development under one roof'
};

export default async function HomePage({
	params
}: {
	params: Promise<{ lang: Lang }>;
}) {
	const { lang } = await params;
	const t = await dictionaries[lang];

	return (
		<>
			<div className='relative scroll-smooth'>
				<div className='sticky top-0 h-screen flex flex-col items-center justify-center text-center'>
					<div className='container p-10'>
						<h1 className='font-light'>Facility Web Experience</h1>
						<p className='mt-4'>{t.welcome}</p>
					</div>
				</div>
				<div
					className='sticky top-0 h-screen flex flex-col items-center justify-center bg-secondary text-foreground'
					id='facility'>
					<div className='container p-10 space-y-3'>
						<h2 className='text-4xl font-bold'>{t.menuFacility}</h2>
						<p className='mt-2'>{t.facilitySectionLine1}</p>
						<p className='font-semibold'>{t.facilitySectionTitle1}</p>
						<p className='mt-2'>{t.facilitySectionLine2}</p>
						<p className='mt-2'>{t.facilitySectionLine3}</p>
						<p className='font-light italic font-serif'>
							Prenez de l&apos;avance sur la concurrence ! Ensemble, optimisons
							vos infrastructures, maximisons votre potentiel pour une
							efficacité durable !
						</p>
						{/* <Link href={`${lang}/facility`}> */}
						<Link href={`#contact`}>
							<Button value={t.contactUsTitle} />
						</Link>
					</div>
				</div>
				<div
					className='sticky top-0 h-screen flex flex-col items-center justify-center bg-accent text-white '
					id='web'>
					<div className='container p-10 space-y-3'>
						<h2 className='text-4xl font-bold'>{t.menuWeb}</h2>
						<p className='mt-2'>
							La compétitivté de votre PME, passe aussi par votre présence en
							ligne ! Pour assurer cette compétitivité, vous avez besoin de
							visibilité !
						</p>
						<p className='font-semibold'>
							Notre mission ? Développer votre présence en ligne !
						</p>
						<p>
							Notre missions est de fournir des services de consultance, de
							développement et de maintenance de sites web et d’application SAAS
							de haute qualité pour aider les entreprises tant dans leur gestion
							que dans leur présence en ligne. Nous pouvons transformer vos
							idées en solutions numériques puissantes et efficaces.
						</p>
						<p className='font-light italic font-serif'>
							Prenez de l&apos;avance sur la concurrence ! Ensemble, développons
							l&apos;avenir de votre entreprise sur le web !
						</p>
						{/* <Link href={`${lang}/web`}> */}
						<Link href={`#contact`}>
							<Button value={t.contactUsTitle} />
						</Link>
					</div>
				</div>
				<Contact lang={lang} />
			</div>
		</>
	);
}
