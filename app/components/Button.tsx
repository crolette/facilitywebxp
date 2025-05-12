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
		? ' bg-accent border-2 border-accent text-foreground hover:bg-secondary hover:border-accent hover:text-accent '
		: ' bg-secondary border-2 border-accent text-accent hover:bg-accent hover:border-secondary hover:text-secondary ';
	return (
		<button
			className={`py-2 px-6 uppercase text-sm tracking-tight font-semibold cursor-pointer h-fit w-fit ${classes} ${classname}`}
			{...props}>
			{value}
		</button>
	);
}
