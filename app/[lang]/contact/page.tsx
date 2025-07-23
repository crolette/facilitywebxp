import { Metadata } from 'next';
import { dictionaries, Lang } from '../../../lib/dictionaries';
import ContactForm from '../../components/ContactForm';
import DividerHero from '../../components/DividerHero';

export const metadata: Metadata = {
	title:
		'Contactez FacilityWebXP | Consultance Facility Management & Développement Web',
	description:
		'Contactez FacilityWebXP pour vos besoins en consultance Facility Management ou création de sites web. Notre équipe est à votre écoute pour accompagner votre PME.',
	keywords:
		'contact FacilityWebXP, consultance facility management, création site internet, agence web PME, support client',
	alternates: {
		canonical: 'https://facilitywebxp.be/fr/contact',
		languages: {
			fr: 'https://facilitywebxp.be/fr/contact',
			'x-default': 'https://facilitywebxp.be/fr/contact'
		}
	},
	openGraph: {
		title:
			'Contactez FacilityWebXP | Consultance Facility Management & Développement Web',
		description:
			"Prenez contact avec FacilityWebXP, votre partenaire en optimisation d'infrastructures et développement web performant pour PME.",
		url: 'https://facilitywebxp.be/fr/contact',
		type: 'website',
		images: [
			{
				url: 'https://facilitywebxp.be/logo.webp',
				alt: 'FacilityWebXP Logo'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title:
			'Contactez FacilityWebXP | Consultance Facility Management & Web Development',
		description:
			'FacilityWebXP accompagne votre PME en Facility Management et développement web. Contactez-nous pour votre projet.',
		images: ['https://facilitywebxp.be/logo.webp']
	}
};

export default async function ContactPage({
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
				<div className='sticky min-h-screen flex flex-col items-center justify-center text-center'>
					<div className='container'>
						<h1 className=''>{t.contactTitle}</h1>
						<p className=''>{t.contactDescriptionLine1}</p>
						<p className=''>{t.contactDescriptionLine2}</p>
						<p className=''>{t.contactDescriptionLine3}</p>
						<p className=''>{t.contactDescriptionLine4}</p>
						<ContactForm lang={lang} />
					</div>
				</div>
			</div>
		</>
	);
}
