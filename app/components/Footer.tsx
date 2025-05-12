import { dictionaries, Lang } from '@/lib/dictionaries';

export default function Footer({ lang }: { lang: Lang }) {
	const t = dictionaries[lang];

	return (
		<footer>
			<div className='space-y-2.5'>
				<div className='h-0.5 bg-accent w-full'></div>
				<div className='h-1 bg-accent w-full'></div>
				<div className='h-1.5 bg-accent w-full'></div>
				<div className='h-2 bg-accent w-full'></div>
				<div className='h-2.5 bg-accent w-full'></div>
			</div>
			<div className='mx-auto py-10 space-y-10 bg-accent text-background'>
				<div className='grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-20 md:flex-row px-10'>
					<div className='w-full space-y-2'>
						<h4 className='font-semibold border-b-accent border-b-2'>Menu</h4>
						<ul className='space-y-1 text-sm'>
							<li>
								<a href={`/${lang}/home`}>{t.menuHome}</a>
							</li>
							<li>
								<a href={`/${lang}/facility`}>{t.menuFacility}</a>
							</li>
							<li>
								<a href={`/${lang}/web`}>{t.menuWeb}</a>
							</li>
							<li>
								<a href={`/${lang}/contact`}>{t.menuContact}</a>
							</li>
						</ul>
					</div>
					<img
						src='/logo_white.png'
						alt=''
						className='w-40 h-auto mx-auto'
						width={80}
						height={80}
					/>
					<div className='w-full space-y-2'>
						<h4 className='font-semibold border-b-accent border-b-2'>
							{t.companyTitle}
						</h4>
						<ul className='space-y-1 text-sm'>
							<li>{t.companyAddress}</li>
							<li>{t.companyVAT}</li>
						</ul>
					</div>
				</div>
				<div className='mx-auto text-xs text-center'>
					<p>© Facility Web Experience 2025</p>
					<a
						href='https://www.crolweb.be'
						className='hidden'
						target='_blank'
						title='Website created by CrolWeb'
					/>
				</div>
			</div>
		</footer>
	);
}
