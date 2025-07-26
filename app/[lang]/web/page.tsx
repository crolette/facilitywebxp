/* eslint-disable react/no-unescaped-entities */
// app/[lang]/page.tsx
import Button from '../../components/Button';
import ArrowBottomPage from '../../components/ui/ArrowBottomPage';
import { dictionaries, Lang } from '../../../lib/dictionaries';
import Link from 'next/link';
import Contact from '../../components/Contact';
import DividerHero from '../../components/DividerHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title:
		'Création de Site Internet, Site Vitrine & Application Web | FacilityWebXP',
	description:
		'Boostez la visibilité de votre PME avec FacilityWebXP, spécialiste en création de sites vitrines, sites internet complexes et applications web sur mesure.',
	keywords: [
		'création site internet',
		'site vitrine',
		'application web',
		'développement web PME',
		'maintenance site web',
		'support site internet'
	],
	alternates: {
		canonical: 'https://facilitywebxp.be/fr/web',
		languages: {
			fr: 'https://facilitywebxp.be/fr/web',
			'x-default': 'https://facilitywebxp.be/fr/web'
		}
	},
	openGraph: {
		title:
			'Création de Site Internet, Site Vitrine & Application Web | FacilityWebXP',
		description:
			'Boostez la visibilité de votre PME avec FacilityWebXP, spécialiste en création de sites vitrines, sites internet complexes et applications web sur mesure.',
		url: 'https://facilitywebxp.be/fr/web',
		type: 'website',
		locale: 'fr_FR',
		images: [
			{
				url: 'https://facilitywebxp.be/logo.webp',
				width: 1200,
				height: 630,
				alt: 'FacilityWebXP - Création site internet'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title:
			'Création de Site Internet, Site Vitrine & Application Web | FacilityWebXP',
		description:
			'Boostez la visibilité de votre PME avec FacilityWebXP, spécialiste en création de sites vitrines, sites internet complexes et applications web sur mesure.',
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
			<DividerHero />
			<div className='relative'>
				<div
					id='1'
					className='sticky top-0 h-screen flex flex-col items-center justify-center text-center px-4'>
					<div className='container space-y-10'>
						<h1 className='!text-4xl'>
							Création de sites internet, sites vitrine et applications web
						</h1>
						<p className=''>
							La compétitivité de votre PME passe aussi par votre présence en
							ligne ! Pour assurer cette compétitivité, vous avez besoin d’une
							visibilité professionnelle et performante.
						</p>
						<p className='mt-2 font-serif italic !text-2xl'>
							Nous sommes là pour vous!
						</p>
					</div>
				</div>

				<div
					id='3'
					className='sticky min-h-screen flex flex-col items-center justify-center bg-accent text-background text-center px-4'>
					<div className='container border-b-[120px] border-accent space-y-2 xl:px-20'>
						<h2 className='sticky top-0 border-t-[120px] border-accent bg-accent py-5'>
							Nos services
						</h2>
						<div className='grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4'>
							<div className='bg-background text-accent w-full'>
								<div>
									<img
										src='/site-vitrine.webp'
										alt=''
										className='w-full h-80 object-cover'
									/>
								</div>

								<div className='p-4'>
									<h3 className=''>Site vitrine</h3>
									<p>
										Un site vitrine est essentiel pour présenter votre
										entreprise et capter l’attention de vos futurs clients. Nous
										créons des sites élégants, ergonomiques et adaptés à votre
										image.
									</p>
								</div>
							</div>
							<div className='bg-background text-accent w-full'>
								<div>
									<img
										src='/site-internet.webp'
										alt=''
										className='w-full  h-80 object-cover'
									/>
								</div>

								<div className='p-4'>
									<h3>Site internet</h3>
									<p>
										Vous souhaitez un site plus complet pour exposer vos
										produits, services, valeurs et équipe ? Nous développons des
										sites internet sur mesure, optimisés pour le SEO et la
										conversion.
									</p>
								</div>
							</div>
							<div className='bg-background text-accent w-full'>
								<div>
									<img
										src='/web-development.webp'
										alt=''
										className='w-full  h-80 object-cover'
									/>
								</div>

								<div className='p-4'>
									<h3>Application web</h3>
									<p>
										Pour un intranet ou une application métier en ligne, nous
										vous accompagnons de la conception au déploiement, avec un
										suivi adapté à vos besoins.
									</p>
								</div>
							</div>
							<div className='bg-background text-accent w-full'>
								<div>
									<img
										src='/maintenance.jpg'
										alt=''
										className='w-full h-80 object-cover'
									/>
								</div>

								<div className='p-4'>
									<h3>Maintenance et support</h3>
									<p>
										Nous assurons un suivi continu pour garantir la pérennité,
										la sécurité et la performance de vos solutions web.
									</p>
								</div>
							</div>
						</div>
						<p>
							Nos solutions sont développées en responsive design, compatibles
							avec tous les appareils, et conçues pour optimiser votre
							référencement naturel.
						</p>
						<p>
							Découvrez quelques-unes de{' '}
							<a
								href='#realisations'
								className='underline'>
								nos réalisations{' '}
							</a>
							récentes conçues pour répondre aux besoins spécifiques de nos
							clients.
						</p>
						<p>
							Contactez-nous dès aujourd’hui pour discuter de votre projet et
							booster votre présence en ligne !
						</p>
						<div className=' w-full flex justify-center mt-10'>
							<Link href={`#contact`}>
								<Button
									value={t.contactUsTitle}
									classname='text-xl'
								/>
							</Link>
						</div>
					</div>
				</div>
				<div
					className='sticky min-h-screen flex flex-col items-center justify-center text-secondary bg-foreground px-4'
					id='realisations'>
					<div className='container border-b-[120px] border-foreground space-y-2 xl:px-20'>
						<h2 className='sticky top-0 border-t-[120px] border-foreground bg-foreground py-5 z-50'>
							Nos réalisations
						</h2>
						<p className='mt-2'>
							Nous avons déjà créé des applications et des sites web divers,
							dont vous trouverez quelques unes de nos dernières réalisations
							ci-dessous :{' '}
						</p>

						<ul className='flex gap-4 max-w-full flex-wrap justify-center'>
							<li className='w-72 bg-secondary text-foreground'>
								<div className='relative'>
									<img
										src='/creations/wowresto.webp'
										alt=''
										className='h-40 object-cover'
									/>
									<span className='absolute bottom-0 right-0 bg-secondary p-2 text-sm'>
										Application web
									</span>
								</div>
								<div className='py-8 px-4 space-y-2'>
									<p className='text-4xl font-bold mb-2'>WOW Resto</p>
									<p>
										L'application web 'WOW Resto' est un site permettant de
										donner son avis sur les toilettes des restaurants.
									</p>
									<a
										href='https://www.wow-resto.com'
										className=''>
										Lien vers le site
									</a>
								</div>
							</li>
							<li className='w-72 bg-secondary text-foreground'>
								<div className='relative'>
									<img
										src='/creations/charlotte.webp'
										alt=''
										className='h-40 object-cover'
									/>
									<span className='absolute bottom-0 right-0 bg-secondary p-2 text-sm'>
										Site vitrine
									</span>
								</div>
								<div className='py-8 px-4 space-y-2'>
									<p className='text-4xl font-bold mb-2'>
										L'Atelier de Charlotte
									</p>
									<p>
										Le site de "L'Atelier de Charlotte" est un site d'un salon
										de coiffure à Theux. Offrant une vitrine parfaite pour
										Charlotte.
									</p>
									<a href='https://www.latelierdecharlotte.be'>
										Lien vers le site
									</a>
								</div>
							</li>
							<li className='w-72 bg-secondary text-foreground'>
								<div className='relative'>
									<img
										src='/creations/fwebxp.webp'
										alt=''
										className='h-40 object-cover'
									/>
									<span className='absolute bottom-0 right-0 bg-secondary p-2 text-sm'>
										Site internet
									</span>
								</div>
								<div className='py-8 px-4 space-y-2'>
									<p className='text-4xl font-bold mb-2'>
										Facility Web Experience
									</p>
									<p>
										Le site internet de "Facility Web Experience" est le site
										sur lequel vous navigez en ce moment même.
									</p>
									<a href='https://www.facilitywebxp.be'>Lien vers le site</a>
								</div>
							</li>
						</ul>
						<div className=' w-full flex justify-center mt-10'>
							<Link href={`#contact`}>
								<Button
									value={t.contactUsTitle}
									classname='text-xl'
								/>
							</Link>
						</div>
					</div>
				</div>
				<div
					className='sticky min-h-screen flex flex-col items-center justify-center text-foreground bg-secondary px-4'
					id='5'>
					<div className='container border-b-[120px] border-secondary space-y-2 xl:px-20'>
						<h2 className='sticky top-0 border-t-[120px] border-secondary bg-secondary py-5'>
							Pourquoi choisir Facility Web Experience ?
						</h2>
						<p className='mt-2'>
							Nous croyons en des valeurs fondamentales qui guident chaque
							projet que nous entreprenons :{' '}
							<span className='font-serif'>
								Respect, Innovation, Excellence et Flexibilité.
							</span>
						</p>
						<h3>Nos atouts</h3>
						<ul className='space-y-4'>
							<li className='ml-4'>
								Nous prenons le temps de{' '}
								<span className='highlight'>
									comprendre ce qui rend votre entreprise unique
								</span>
							</li>
							<li className='ml-8'>
								Nous travaillons en <span className='highlight'>confiance</span>{' '}
								et en <span className='highlight'>étroite collaboration</span>{' '}
								avec vos équipes pour un résultat parfait
							</li>
							<li className='ml-12'>
								Dans un monde en constante évolution,{' '}
								<span className='highlight'>l'innovation et la créativité</span>{' '}
								sont nos moteurs
							</li>
							<li className='ml-16'>
								<span className='highlight'>L'excellence</span> n'est pas un
								objectif, mais un art de travailler
							</li>
							<li className='ml-20'></li>
							<li className='ml-24'>
								Nous comprenons que{' '}
								<span className='highlight'>chaque projet est unique</span>.
								Notre flexibilité nous permet de{' '}
								<span className='highlight'>
									répondre précisément à vos besoins spécifiques
								</span>
							</li>
							<li className='ml-28'>
								Avec notre consultance en Facility Management, nous pouvons
								également vous accompagner dans l'analyse, la planification et
								la supervision des services et des infrastructures de votre
								entreprise afin d'améliorer son efficacité opérationnelle.
								<a
									href={`/${lang}/facility`}
									className='underline block'>
									Voir la page Facility Management
								</a>
							</li>
						</ul>
						<p className='font-serif text-4xl mt-10 text-center'></p>
						<div className=' w-full flex justify-center mt-10'>
							<Link href={`#contact`}>
								<Button
									value={t.contactUsTitle}
									classname='text-xl'
								/>
							</Link>
						</div>
					</div>
				</div>
				<Contact
					lang={lang}
					headline={`Prenez de l'avance sur la concurrence ! Ensemble, développons l'avenir de votre entreprise sur le web ! Prenez contact avec nous pour une offre sans engagement. Nous vous recontacterons dans les plus brefs délais.`}
				/>
			</div>
			<ArrowBottomPage />
		</>
	);
}
