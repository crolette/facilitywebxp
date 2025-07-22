/* eslint-disable react/no-unescaped-entities */
// app/[lang]/page.tsx
import Button from '../../components/Button';
import ArrowBottomPage from '../../components/ui/ArrowBottomPage';
import { dictionaries, Lang } from '../../../lib/dictionaries';
import Link from 'next/link';
import Contact from '../../components/Contact';
import DividerHero from '../../components/DividerHero';

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
						<h1 className=''>Développement web</h1>
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
									<h4 className=''>Site vitrine</h4>
									<p>
										Elément essentiel aujourd'hui pour se démarquer et vous
										faire connaitre auprès de vos futurs clients, un site
										vitrine est plus que jamais obligatoire pour présenter votre
										entreprise en ligne.
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
									<h4>Site internet</h4>
									<p>
										Vous avez besoin d'un site complexe pour présenter votre
										entreprise en long et en large. Présenter vos produits, vos
										services, vos valeurs, votre équipe, et bien plus encore ?
										Alors nous sommes votre partenaire de choix.
									</p>
								</div>
							</div>
							<div className='bg-background text-accent w-full'>
								<div>
									<img
										src='/stress.jpg'
										alt=''
										className='w-full  h-80 object-cover'
									/>
								</div>

								<div className='p-4'>
									<h4>Application web</h4>
									<p>
										Vous avez besoin d'un intranet, d'une application en
										ligne,... nous sommes là pour vous aider et vous conseiller.
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
									<h4>Maintenance et support</h4>
									<p>
										Nous assurons un suivi continu pour garantir la pérennité et
										l'efficacité de vos solutions web.
									</p>
								</div>
							</div>
						</div>
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
					id='4'>
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
					className='sticky h-screen flex flex-col items-center justify-center text-foreground bg-secondary px-4'
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
						</ul>
						<p className='font-serif text-4xl mt-10 text-center'></p>
					</div>
					<div className=' w-full flex justify-center mt-10'>
						<Link href={`#contact`}>
							<Button
								value={t.contactUsTitle}
								classname='text-xl'
							/>
						</Link>
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
