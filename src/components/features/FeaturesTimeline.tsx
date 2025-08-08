import Beacon from "./Beacon";
import FeaturePin, { type Feature } from "./FeaturePin";

const FEATURES: Feature[] = [
	{
		title: "Security-First Architecture",
		description:
			"Multi-layered security with Argon2id password hashing, dual-token JWT system, and comprehensive protection against brute force attacks.",
	},
	{
		title: "Real-time WebSocket System",
		description:
			"Authenticated connections with subscription-based architecture for collections, records, and custom queries with permission-based event filtering.",
	},
	{
		title: "Dynamic Collection Management",
		description:
			"Flexible schema system supporting multiple field types with real-time schema evolution and automatic table creation without downtime.",
	},
	{
		title: "Encrypted Database",
		description:
			"SQLCipher provides transparent AES-256 encryption at rest with excellent performance characteristics and compile-time query validation.",
	},
];

export default function FeaturesTimeline() {
	return (
		<div className="relative rounded-lg border border-nocta-50/10 bg-nocta-50/[0.025] p-8 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]">
			<span
				aria-hidden
				className={`pointer-events-none absolute -inset-px rounded-md bg-gradient-to-b to-transparent opacity-60`}
				style={{
					maskImage:
						"radial-gradient(120% 100% at 50% 0%, black 30%, transparent 70%)",
					WebkitMaskImage:
						"radial-gradient(120% 100% at 50% 0%, black 30%, transparent 70%)",
				}}
			/>

			<span
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-md opacity-60"
				style={{
					background:
						"linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
				}}
			/>

			<div
				className="relative mx-auto h-[2px] w-full"
				style={{
					background:
						"linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.25), rgba(255,255,255,0))",
				}}
			></div>

			<div className="relative mt-[-16px]">
				<div className="no-scrollbar -mx-4 flex snap-x gap-10 overflow-x-auto px-4 py-2 xl:mx-0 xl:grid xl:grid-cols-4 xl:gap-8 xl:overflow-visible xl:px-0">
					{FEATURES.map((f) => (
						<div key={f.title} className="snap-start xl:snap-none">
							<div className="flex flex-col items-center">
								<Beacon />
								<FeaturePin className="feature-item" feature={f} />
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="mt-6 flex items-center justify-center gap-2 text-[12px] text-nocta-50/60">
				<span className="h-px flex-1 bg-nocta-50/10" />
				<span className="relative">From interaction to persistence</span>
				<span className="h-px flex-1 bg-nocta-50/10" />
			</div>
		</div>
	);
}
