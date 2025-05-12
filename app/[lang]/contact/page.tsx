import { dictionaries, Lang } from '@/lib/dictionaries';

export async function generateStaticParams(): Promise<{ lang: Lang }[]> {
	return (['en', 'fr', 'de', 'nl'] as Lang[]).map((lang) => ({ lang }));
}

export default async function ContactPage({
	params
}: {
	params: Promise<{ lang: Lang }>;
}) {
	const { lang } = await params;
	const t = await dictionaries[lang];

	return (
		<>
			<div className='relative'>
				<div className='sticky top-0 h-screen flex flex-col items-center justify-center text-center'>
					<div className='container'>
						<h1 className=''>{t.contactTitle}</h1>
						<p className=''>{t.contactDescription}</p>
						<div className='grid grid-cols-[30%_70%]'>
							<div className='bg-red-500'></div>
							<form action=''>
								<div>
									<label htmlFor='name'>Name</label>
									<input
										type='text'
										name='name'
										id='name'
										placeholder='Your name'
									/>
								</div>
								<div>
									<label htmlFor='tel'>Phone</label>
									<input
										type='text'
										name='tel'
										id='tel'
										placeholder='Your phone'
									/>
								</div>
								<div>
									<label htmlFor='email'>Email</label>
									<input
										type='email'
										name='email'
										id='email'
										placeholder='Your email'
									/>
								</div>
								<button type='submit'>Send</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
