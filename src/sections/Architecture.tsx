import { useGSAP } from "@gsap/react";
import { StackIcon } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import ArchitectureGraph from "@/components/architecture/ArchitectureGraph";
import Badge from "@/components/ui/Badge";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ArchitectureCompact() {
	const sectionRef = useRef<HTMLElement | null>(null);
	const badgeRef = useRef<HTMLDivElement | null>(null);
	const h2Ref = useRef<HTMLHeadingElement | null>(null);
	const pRef = useRef<HTMLParagraphElement | null>(null);
	const graphWrapRef = useRef<HTMLDivElement | null>(null);

	useGSAP(
		() => {
			if (badgeRef.current) gsap.set(badgeRef.current, { autoAlpha: 0, y: -8 });
			if (h2Ref.current)
				gsap.set(h2Ref.current, { autoAlpha: 0, y: 16, filter: "blur(8px)" });
			if (pRef.current) gsap.set(pRef.current, { autoAlpha: 0, y: 12 });

			const nodes = graphWrapRef.current?.querySelectorAll(".arch-node");
			if (nodes?.length) {
				gsap.set(nodes, { autoAlpha: 0, y: 24, filter: "blur(6px)" });
			}

			const tl = gsap.timeline({
				defaults: { ease: "power3.out" },
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 70%",
					once: true,
				},
			});

			if (badgeRef.current) {
				tl.to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.45 }, 0);
			}

			tl.to(
				h2Ref.current,
				{ autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.7 },
				0.05,
			);

			if (pRef.current) {
				tl.to(pRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.35");
			}

			if (nodes?.length) {
				tl.to(
					nodes,
					{
						autoAlpha: 1,
						y: 0,
						filter: "blur(0px)",
						duration: 0.7,
						stagger: 0.12,
					},
					"-=0.1",
				);
			}
		},
		{ scope: sectionRef },
	);

	return (
		<section
			ref={sectionRef}
			id="architecture"
			className="relative w-full overflow-hidden py-20"
		>
			<div className="relative mx-auto max-w-6xl px-6">
				<div className="mb-10 text-center">
					<div ref={badgeRef}>
						<Badge
							icon={<StackIcon />}
							text="Modern stack, proven architecture"
						/>
					</div>
					<h2
						ref={h2Ref}
						className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-nocta-300/80 sm:text-4xl"
					>
						Built for{" "}
						<span className="text-nocta-50">performance and scale</span>.
					</h2>
					<p
						ref={pRef}
						className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-nocta-50/60 sm:text-base"
					>
						A carefully crafted architecture combining Rust's performance with
						React's flexibility, designed for modern applications that demand
						both speed and reliability.
					</p>
				</div>

				<div ref={graphWrapRef}>
					<ArchitectureGraph />
				</div>
			</div>
		</section>
	);
}
