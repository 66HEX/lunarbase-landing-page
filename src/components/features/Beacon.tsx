export default function Beacon() {
	return (
		<div className="relative h-4 w-4">
			<span className="absolute inset-0 rounded-full bg-nocta-50/15 blur-[6px] animate-[pulse_2.4s_ease-in-out_infinite]" />
			<span className="absolute inset-0 rounded-full bg-nocta-50/70 shadow-[0_0_10px_rgba(255,255,255,0.45)]" />
			<span className="absolute inset-0 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]" />
		</div>
	);
}
