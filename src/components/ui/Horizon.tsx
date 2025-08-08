export default function Horizon() {
	return (
		<div className="absolute bottom-0 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] z-0">
			<div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#ffffff,transparent_70%)] before:opacity-20" />
			<div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-nocta-50/20 bg-nocta-900" />
		</div>
	);
}
