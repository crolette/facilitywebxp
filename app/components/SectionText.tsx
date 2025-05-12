import { PropsWithChildren } from 'react';

export default function SectionText({
	title,
	imageUrl,
	inverted = false,
	children
}: PropsWithChildren<{
	title: string;
	imageUrl: string;
	inverted?: boolean;
}>) {
	return (
		<div className="flex flex-col items-center mx-auto py-20">
			<h2 className="text-3xl text-background font-semibold mb-4 uppercase bg-foreground w-fit pl-2 pt-2 pr-10 pb-6 z-10">
				{title}
			</h2>
			<div
				className={`container -mt-8 flex flex-col justify-center items-center gap-4 lg:justify-center px-8 ${
					inverted ? 'lg:flex-row-reverse' : 'lg:flex-row'
				}`}
			>
				<div className="lg:w-1/2 relative">
					<img
						src={imageUrl}
						alt=""
						className="w-full object-cover grayscale"
					/>
					<div
						className={`${
							inverted ? 'bg-gradient-to-r' : 'bg-gradient-to-l'
						} from-background from-2% to-foreground/20 to-90% inset-0 w-full h-full absolute`}
					></div>
				</div>
				<div className="lg:w-1/2 flex flex-col gap-4 justify-center text-md">
					{children}
				</div>
			</div>
		</div>
	);
}
