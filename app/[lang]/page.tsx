// app/[lang]/page.tsx
import { dictionaries, Lang } from '../../lib/dictionaries';
import Button from '../components/Button';
import AnimationHero from '../components/AnimationHero';
import Link from 'next/link';
import { Metadata } from 'next';
import Contact from '../components/Contact';
import ArrowBottomPage from '../components/ui/ArrowBottomPage';
import Head from 'next/head';

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
			<Head>
				<meta
					name='description'
					content=''
				/>
			</Head>

			<div className='relative '>
				<div className='sticky top-0 min-h-screen flex flex-col items-center justify-center text-center'>
					<div>
						<AnimationHero text={t.welcome} />
					</div>
					<p className='mt-10 z-50 w-10/12 sm:w-2/3 bg-accent/50 p-3 text-white'>
						{t.welcome}
					</p>
				</div>
				<div
					className='sticky min-h-screen flex flex-col items-center justify-center bg-secondary text-foreground px-4'
					id='facility'>
					<div className='container border-b-[120px] border-secondary space-y-2'>
						<h2 className='sticky top-0 border-t-[120px] border-secondary bg-secondary py-5'>
							{t.menuFacility}
						</h2>
						<div className='flex lg:flex-row flex-col-reverse gap-8'>
							<div className='space-y-4'>
								<p className=''>{t.facilitySectionLine1}</p>
								<p className='font-semibold'>{t.facilitySectionTitle1}</p>
								<p className=''>{t.facilitySectionLine2}</p>
								<p className=''>{t.facilitySectionLine3}</p>
								<p className='highlight'>
									Prenez de l&apos;avance sur la concurrence ! Ensemble,
									optimisons vos infrastructures, maximisons votre potentiel
									pour une efficacité durable !
								</p>
								<Link href={`${lang}/facility`}>
									<Button value={t.knowMore} />
								</Link>
							</div>
							<div className='flex justify-center items-center w-full'>
								<img
									src='facility-management.webp'
									alt=''
									className='h-2/3  rounded-md object-cover shadow-2xl'
								/>
							</div>
						</div>
					</div>
				</div>
				<div
					className='sticky min-h-screen flex flex-col items-center justify-center bg-accent text-white  px-4'
					id='web'>
					<div className='container  border-b-[120px] border-accent space-y-2'>
						<h2 className='sticky top-0 border-t-[120px] border-accent bg-accent py-5'>
							{t.menuWeb}
						</h2>
						<div className='flex lg:flex-row flex-col-reverse gap-8'>
							<div className='space-y-4'>
								<p className='mt-2'>
									La compétitivté de votre PME, passe aussi par votre présence
									en ligne ! Pour assurer cette compétitivité, vous avez besoin
									de visibilité !
								</p>
								<p className='font-semibold'>
									Notre mission ? Développer votre présence en ligne !
								</p>
								<p>
									Notre missions est de fournir des services de consultance, de
									développement et de maintenance de sites web et d’application
									SAAS de haute qualité pour aider les entreprises tant dans
									leur gestion que dans leur présence en ligne. Nous pouvons
									transformer vos idées en solutions numériques puissantes et
									efficaces.
								</p>
								<p className='highlight'>
									Prenez de l&apos;avance sur la concurrence ! Ensemble,
									développons l&apos;avenir de votre entreprise sur le web !
								</p>
								<Link href={`${lang}/web`}>
									<Button value={t.knowMore} />
								</Link>
							</div>
							<div className='flex justify-center items-center w-full'>
								<img
									src='web-development.webp'
									alt=''
									className='h-2/3  rounded-md object-cover shadow-2xl'
								/>
							</div>
						</div>
					</div>
				</div>
				<Contact lang={lang} />
			</div>
			<ArrowBottomPage />
		</>
	);
}
