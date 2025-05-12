export default function Button({
	inverted = false,
	value,
	classname,
	...props
}: {
	inverted?: boolean;
	classname?: string;
	value: string;
}) {
	const classes = inverted
		? ' border-2 border-accent text-foreground dark:text-accent hover:bg-accent hover:border-accent hover:text-background '
		: ' bg-accent border-2 border-accent text-background dark:text-background hover:bg-background hover:border-accent hover:text-foreground ';
	return (
		<button
			className={`py-2 px-6 uppercase text-sm tracking-tight font-semibold cursor-pointer h-fit w-fit ${classes} ${classname}`}
			{...props}>
			{value}
		</button>
	);
}
