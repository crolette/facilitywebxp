/* eslint-disable react/no-unescaped-entities */
// app/[lang]/page.tsx
import Button from '../../components/Button';
import ArrowBottomPage from '../../components/ui/ArrowBottomPage';
import { dictionaries, Lang } from '../../../lib/dictionaries';
import Link from 'next/link';
import Contact from '../../components/Contact';

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
				<div
					id='1'
					className='sticky top-0 h-screen flex flex-col items-center justify-center bg-accent text-secondary text-center'>
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
					id='2'
					className='sticky top-0 h-screen flex flex-col items-center justify-center bg-secondary text-accent text-center'>
					<div className='container space-y-10'>
						<h2 className=''>Notre mission</h2>
						<p className=''>
							Notre missions est de fournir des services de consultance, de
							développement et de maintenance de sites web et d’application SAAS
							de haute qualité pour aider les entreprises tant dans leur gestion
							que dans leur présence en ligne.
						</p>
						<p className='text-3xl font-serif italic'>
							Nous transformons vos idées en solutions numériques puissantes et
							efficaces.
						</p>
					</div>
				</div>
				<div
					id='2'
					className='sticky top-0 h-screen flex flex-col items-center justify-center bg-background text-accent text-center'>
					<div className='container space-y-10'>
						<h2 className=''>Nos services</h2>
						<ul className='flex justify-around gap-4'>
							<li className='w-80 bg-background text-accent p-4'>
								<h3>Site vitrine</h3>
								<p>
									Elément essentiel aujourd'hui pour se démarquer et vous faire
									connaitre auprès de vos futurs clients, un site vitrine est
									plus que jamais obligatoire pour présenter votre entreprise en
									ligne.
								</p>
							</li>
							<li className='w-80 bg-background text-accent p-4'>
								<h3>Site internet</h3>
								<p>
									Vous avez besoin d'un site complexe pour présenter votre
									entreprise en long et en large. Présenter vos produits, vos
									services, vos valeurs, votre équipe, et bien plus encore ?
									Alors nous sommes votre partenaire de choix.
								</p>
							</li>

							<li className='w-80 bg-background text-accent p-4'>
								<h3>Application web</h3>
								<p>
									Vous avez besoin d'un intranet, d'une application en ligne,...
									nous sommes là pour vous aider et vous conseiller.
								</p>
							</li>
							<li className='w-80 bg-background text-accent p-4'>
								<h3>Maintenance et support</h3>
								<p>
									Nous assurons un suivi continu pour garantir la pérennité et
									l'efficacité de vos solutions web.
								</p>
							</li>
						</ul>
						<Link href={`#contact`}>
							<Button value={t.contactUsTitle} />
						</Link>
					</div>
				</div>
				<div className='sticky top-0 h-screen flex flex-col items-center justify-center text-secondary bg-foreground'>
					<div className='container'>
						<h2 className=''>Pourquoi choisir Facility Web Experience ?</h2>
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
					<Link href={`#contact`}>
						<Button value={t.contactUsTitle} />
					</Link>
				</div>
				<Contact
					lang={lang}
					headline={`Prenez de l'avance sur la concurrence ! Ensemble, développons l'avenir de votre entreprise sur le web !`}
				/>
			</div>
			<ArrowBottomPage />
		</>
	);
}
