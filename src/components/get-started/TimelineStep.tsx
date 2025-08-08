export default function TimelineStep({
	index,
	title,
	desc,
	children,
}: {
	index: number;
	title: string;
	desc: string;
	children?: React.ReactNode;
}) {
	return (
		<div data-timeline-step className="group relative">
			<div className="flex items-start gap-3">
				<span className="flex justify-center items-center aspect-square mt-[2px] h-5 w-5 p-1 place-items-center rounded-sm border border-nocta-50/25 bg-nocta-50/10 text-[11px] text-nocta-50/85">
					{index}
				</span>
				<div className="flex-1">
					<h3 className="text-sm font-medium text-nocta-50/90">{title}</h3>
					<p className="mt-1 text-[13px] text-nocta-50/70">{desc}</p>
					{children && <div className="mt-2">{children}</div>}
				</div>
			</div>
		</div>
	);
}
