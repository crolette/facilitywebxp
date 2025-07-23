// app/[lang]/page.tsx
import { dictionaries, Lang } from '../../lib/dictionaries';
import Button from '../components/Button';
import AnimationHero from '../components/AnimationHero';
import Link from 'next/link';
import { Metadata } from 'next';
import Contact from '../components/Contact';
import ArrowBottomPage from '../components/ui/ArrowBottomPage';

export const metadata: Metadata = {
	title:
		'Consultance en Facility Management & Création de Sites Web | FacilityWebXP',
	description:
		'FacilityWebXP aide les PME à optimiser leurs infrastructures via la consultance en Facility Management et à se développer en ligne grâce à des sites web performants.',
	keywords: [
		'Facility Management',
		'consultance entreprise',
		'création site internet',
		'développement web PME',
		'optimisation infrastructures'
	],
	alternates: {
		canonical: 'https://facilitywebxp.be/fr',
		languages: {
			fr: 'https://facilitywebxp.be/fr',
			'x-default': 'https://facilitywebxp.be/fr'
		}
	},
	openGraph: {
		title:
			'FacilityWebXP | Consultance Facility Management & Développement Web',
		description:
			'Optimisez vos infrastructures et développez votre présence en ligne avec FacilityWebXP, expert en Facility Management et développement web pour PME.',
		url: 'https://facilitywebxp.be/fr',
		type: 'website',
		locale: 'fr_FR',
		images: [
			{
				url: 'https://facilitywebxp.be/logo.webp',
				width: 1200,
				height: 630,
				alt: 'FacilityWebXP logo'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'FacilityWebXP | Consultance Facility Management & Web Development',
		description:
			'FacilityWebXP aide les PME à optimiser leurs infrastructures et à créer des sites internet performants.',
		images: ['https://facilitywebxp.be/logo.webp']
	}
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
			<div className='relative '>
				<div className='sticky top-0 min-h-screen flex flex-col items-center justify-center text-center'>
					<div>
						<AnimationHero />
					</div>
					<div className='mt-10 z-50 w-10/12 sm:w-2/3 bg-accent/50 p-3 text-white'>
						<h1 className='z-50 !text-2xl'>
							Consultance en Facility Management et Création de Sites Web pour
							PME
						</h1>
						<p>{t.welcome}</p>
					</div>
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
									Optimisez vos infrastructures, réduisez vos coûts et gagnez en
									efficacité opérationnelle avec FacilityWebXP.
								</p>
								<Link href={`${lang}/facility`}>
									<Button value={t.knowMore} />
								</Link>
							</div>
							<div className='flex justify-center items-center w-full'>
								<img
									src='/facility-management.webp'
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
									La compétitivité de votre PME passe aussi par une présence
									digitale forte et bien pensée.
								</p>
								<p className='font-semibold'>
									Notre mission ? Développer votre présence en ligne !
								</p>
								<p>
									FacilityWebXP vous accompagne dans la création de sites
									internet sur mesure et le développement d’applications web
									performantes, adaptées à vos besoins. Que vous souhaitiez un
									site vitrine élégant, un site complexe ou une application
									métier, nous transformons vos idées en solutions numériques
									efficaces.
								</p>
								<p>
									Donnez un nouvel élan à votre entreprise sur le web grâce à
									FacilityWebXP, votre partenaire digital de confiance.
								</p>
								<p className='highlight'>
									Donnez un nouvel élan à votre entreprise sur le web grâce à
									FacilityWebXP, votre partenaire digital de confiance.
								</p>
								<Link href={`${lang}/web`}>
									<Button value={t.knowMore} />
								</Link>
							</div>
							<div className='flex justify-center items-center w-full'>
								<img
									src='/web-development.webp'
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
