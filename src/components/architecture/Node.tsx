import { Chip } from "@/components/ui/Chip";

export default function Node({
	title,
	subtitle,
	chips = [],
	icon,
}: {
	title: string;
	subtitle?: string;
	chips?: string[];
	icon?: React.ReactNode;
}) {
	return (
		<div className={`relative rounded-md bg-[#171717] backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.10)_inset,0_10px_30px_-18px_rgba(0,0,0,0.35)] $`}>
			<div className="relative z-10 px-4 py-3 rounded-md ">
				<div className="mb-1.5 flex items-center gap-2">
					<div
						className={`relative flex h-6 w-6 items-center justify-center rounded-sm text-nocta-50/70`}
					>
						{icon ?? (
							<span className="block h-2 w-2 rounded-sm bg-nocta-50/70 shadow-[0_0_8px_rgba(255,255,255,0.45)]" />
						)}
						<span className="pointer-events-none absolute inset-0 rounded-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_12px_0_18px_-16px_rgba(255,255,255,0.18),inset_-12px_0_18px_-16px_rgba(255,255,255,0.16),inset_0_-10px_20px_-18px_rgba(255,255,255,0.10)]" />
					</div>
					<div className="text-[13px] font-medium text-nocta-50/90 tracking-tight">
						{title}
					</div>
				</div>
				{subtitle && (
					<div className="text-[12px] text-nocta-50/65">{subtitle}</div>
				)}
				{chips.length > 0 && (
					<div className="mt-2 flex flex-wrap gap-1.5">
						{chips.map((c) => (
							<Chip key={c} text={c} />
						))}
					</div>
				)}
			</div>

			<span
				aria-hidden
				className="pointer-events-none absolute inset-0 rounded-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
			/>
		</div>
	);
}
