type Feature = {
	title: string;
	description: string;
	className?: string;
};

interface FeaturePinProps {
	feature: Feature;
	className?: string;
}

export default function FeaturePin({ feature, className }: FeaturePinProps) {
	return (
		<div
			className={`relative min-w-[220px] flex-1 ${feature.className} ${className}`}
		>
			<span
				aria-hidden
				className="absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-nocta-50/12"
			/>
			<div className="relative mt-6 rounded-md px-4 py-3 bg-[#171717] backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.10)_inset,0_10px_30px_-18px_rgba(0,0,0,0.35)]">
				<div className="relative z-10">
					<div className="mb-1.5 text-[13px] font-medium tracking-tight text-nocta-50/90">
						{feature.title}
					</div>
					<p className="text-[12.5px] leading-relaxed text-nocta-50/70">
						{feature.description}
					</p>
				</div>

				<span
					aria-hidden
					className="pointer-events-none absolute inset-0 rounded-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
				/>
			</div>
		</div>
	);
}

export type { Feature };