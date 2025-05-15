/* eslint-disable react/no-unescaped-entities */
// app/[lang]/page.tsx
import Contact from '../../components/Contact';
import { dictionaries, Lang } from '../../../lib/dictionaries';

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
				<div className='sticky top-0 h-screen flex flex-col items-center justify-center text-foreground text-center'>
					<div className='container'>
						<h1 className=''>Facility Management</h1>
						<p className='mt-2'>{t.facilitySectionLine1}</p>
						<p className='mt-2 font-serif italic text-2xl'>
							Le Facility Management est la solution et nous sommes la pour
							vous!
						</p>
					</div>
				</div>
				<div className='sticky top-0 h-screen flex flex-col items-center justify-center text-secondary bg-accent'>
					<div className='container'>
						<h2 className=''>Qu'est-ce-que le Facility Management ?</h2>
						<p className='mt-2'>
							Le Facility Management est cette discipline qui a pour mission
							d'élaborer et de mettre en œuvre des moyens, des services et des
							procédures permettant à l'ensemble des collaborateurs d'une
							entreprise d'assumer leurs responsabilités professionnelles dans
							un environnement efficace, flexible et aussi peu contraignant que
							possible tout en optimalisant les coûts de fonctionnement.
						</p>
						<p>
							Le métier de Facility Manager a profondément évolué ces dix
							dernières années. La pression croissante sur les coûts,
							l’augmentation des contraintes réglementaires, l’apparition de
							nouveaux risques... ont impacté directement et fortement, en un
							laps de temps assez court, les conditions d’exercice du métier.
						</p>
						<h3>Les nouveaux enjeux de la profession</h3>
						<ul className='flex justify-around gap-4'>
							<li className='w-80 bg-background text-accent p-4'>
								<h4>Développement durable</h4>
								<p>
									construction et exploitation HQE (haute qualité
									environnementale) des bâtiments de bureaux, économies
									d’énergie, qualité de l’air et de l’eau, optimisation de
									l’utilisation des ressources, …
								</p>
							</li>
							<li className='w-80 bg-background text-accent p-4'>
								<h4>Insertion</h4>
								<p>
									L’insertion des personnes souffrant de handicap et de publics
									en difficulté, mixité et diversité, équilibre des relations
									donneurs d’ordres / prestataires...
								</p>
							</li>
							<li className='w-80 bg-background text-accent p-4'>
								<h4>Bien-être et lutte contre le stress</h4>
								<p>
									évaluation des risques professionnels, ergonomie,
									conciergeries, crèches d’entreprise, restauration, salles de
									sport, massages...
								</p>
							</li>
							<li className='w-80 bg-background text-accent p-4'>
								<h4>Eefficacité des équipes et attractivité de l’entreprise</h4>
								<p>
									Dans un contexte de compétition exacerbée et de lutte pour
									attirer et conserver les meilleurs talents, la qualité,
									l’adaptabilité et l’optimisation de l’environnement de travail
									vont devenir une arme essentielle et un atout compétitif
									majeur dans les années à venir.
								</p>
							</li>
						</ul>
					</div>
				</div>
				<div className='sticky top-0 h-screen flex flex-col items-center justify-center text-foreground bg-secondary'>
					<div className='container'>
						<h2 className=''>Comment pouvons-nous vous aider ?</h2>
						<p className='mt-2'>
							Notre consultance en Facility management implique l'analyse, la
							planification et la supervision des services et des
							infrastructures de votre entreprise afin d'améliorer son
							efficacité opérationnelle. Nous pouvons gérer le suivi des
							opérations via nos solutions adaptées mais nous offrons surtout
							une vision stratégique visant à améliorer la gestion globale des
							services et des infrastructures de votre entreprise, tout en
							réduisant les coûts et en augmentant votre efficacité.
						</p>
						<h3>Notre accompagnement pour votre entreprise se traduit par:</h3>
						<div className='container flex flex-row justify-between gap-10 flex-wrap'>
							<ul className='flex flex-wrap'>
								<li className=''>
									<h4>Optimisation des ressources</h4>
									<p>
										Réduire les coûts en améliorant la gestion des ressources
										telles que l'énergie, l'espace et les équipements, …
									</p>
								</li>
								<li>
									<h4>Amélioration de votre productivité</h4>
									<p>
										Simplifier les processus et les opérations pour augmenter
										votre efficacité et votre performance globale.
									</p>
								</li>
								<li>
									<h4>Réduction de l’empreinte carbone de votre entreprise</h4>
									<p>
										Utilisation des énergies renouvelables, optimisation des
										consommations d'énergies, réduction des déchets, gestion
										efficace de l'eau, compensation carbone, …
									</p>
								</li>
								<li>
									<h4>Conformité réglementaire</h4>
									<p>
										Assurer que votre entreprise respecte les normes et les
										réglementations en vigueur pour éviter les sanctions.
									</p>
								</li>
								<li>
									<h4>Qualité de vie au travail</h4>
									<p>
										Créer un environnement de travail agréable et bien géré pour
										augmenter la satisfaction et l'engagement de votre
										personnel.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='sticky top-0 h-screen flex flex-col items-center justify-center text-accent bg-background'>
					<div className='container'>
						<h2 className=''>Pourquoi choisir Facility Web Experience ?</h2>
						<p className='mt-2'>
							Comme toute entreprise de Facility Management, nous offrons des
							services tels que la gestion des infrastructures, la gestion des
							énergies, la maintenance préventive et corrective, ainsi que des
							services aux employés. Mais avant tout, nous croyons en des
							valeurs fondamentales qui guident chaque projet que nous
							entreprenons :{' '}
							<span className='font-serif'>
								Respect, Innovation, Excellence et Flexibilité.
							</span>
						</p>
						<h3>Nos atouts</h3>
						<ul className='space-y-4'>
							<li className='ml-4'>
								Nous prenons le temps de comprendre ce qui rend votre entreprise
								unique
							</li>
							<li className='ml-8'>
								Nous travaillons en confiance et en étroite collaboration avec
								vos équipes pour une intégration parfaite
							</li>
							<li className='ml-12'>
								Notre expertise de terrain et académique nous permet une
								adaptation permanente aux évolutions du métier
							</li>
							<li className='ml-16'>
								L’utilisation de notre solution unique pensée par une PME pour
								les PME
							</li>
							<li className='ml-20'>
								L’intégration naturelle et sans contrainte des objectifs de
								développement durable dans nos projets
							</li>
							<li className='ml-24'>
								Nous pouvons également développer et optimiser le site web de
								votre entreprise ou créer une application SAAS adaptée à vos
								besoins, en intégrant des technologies avancées comme
								l'intelligence artificielle.
							</li>
						</ul>
						<p className='font-serif text-4xl mt-10 text-center'></p>
					</div>
				</div>
				<Contact
					lang={lang}
					headline={`Prenez de l'avance sur la concurrence ! Ensemble, optimisons vos
							infrastructures, maximisons votre potentiel pour une efficacité
							durable !`}
				/>
			</div>
		</>
	);
}
