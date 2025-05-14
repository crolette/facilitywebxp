import { dictionaries, Lang } from '../../lib/dictionaries';

export default function Contact({
	lang,
	headline
}: {
	lang: Lang;
	headline?: string;
}) {
	const t = dictionaries[lang];

	const headlineText = headline ?? 'Discutons de votre projet ensemble ! ';

	return (
		<div
			className='relative h-screen flex flex-col items-center justify-center bg-background'
			id='contact'>
			<div className='container p-10 space-y-4'>
				<h2 className='text-4xl font-bold'>{t.contactTitle}</h2>
				<p className='text-3xl font-serif font-extralight'>{headlineText}</p>
				<p>{t.contactUsText}</p>
				<a href='mailto:info@facilitywebxp.be'>
					<button>Contact</button>
				</a>
			</div>
		</div>
	);
}
