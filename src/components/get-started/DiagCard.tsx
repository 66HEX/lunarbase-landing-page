import { CheckCircleIcon } from "@phosphor-icons/react";

export default function DiagCard({
	title,
	items,
}: {
	title: string;
	items: string[];
}) {
	return (
		<div className="diag-card rounded-md relative z-10 px-4 py-3 bg-[#171717] backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.10)_inset,0_10px_30px_-18px_rgba(0,0,0,0.35)] p-4">
			<h4 className="text-sm font-medium text-nocta-50/90">{title}</h4>
			<ul className="mt-2 space-y-1 text-[13px] text-nocta-50/70">
				{items.map((i) => (
					<li key={i} className="flex items-start gap-2">
						<CheckCircleIcon size={14} className="mt-[1px] text-nocta-50/70" />
						<span>{i}</span>
					</li>
				))}
			</ul>
			<span
				aria-hidden
				className="pointer-events-none absolute inset-0 rounded-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
			/>
		</div>
	);
}
