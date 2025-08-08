interface ChipProps {
	text: string;
	icon?: React.ReactNode;
}

export function Chip({ text, icon }: ChipProps) {
	return (
		<span className="chip inline-flex items-center gap-1 rounded-sm border border-nocta-50/10 bg-nocta-50/5 px-2 py-1 text-[11px] text-nocta-50/75">
			{!icon && <span className="h-1.5 w-1.5 rounded-full bg-nocta-50/60" />}
			{icon}
			{text}
		</span>
	);
}
