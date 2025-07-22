import { dictionaries, Lang } from '../../lib/dictionaries';
import ContactForm from './ContactForm';

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
			className='relative min-h-screen flex flex-col items-center justify-center bg-background px-4'
			id='contact'>
			<div className='container  border-b-[120px] border-background'>
				<h2 className='sticky top-0 border-t-[120px] border-background bg-background py-5'>
					{t.contactTitle}
				</h2>
				<p className='text-3xl font-serif font-extralight'>{headlineText}</p>
				{/* <p>{t.contactUsText}</p> */}
				<ContactForm lang={lang} />
			</div>
		</div>
	);
}
