import { useGSAP } from "@gsap/react";
import { ShieldCheckIcon } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import FeaturesTimeline from "@/components/features/FeaturesTimeline";
import Badge from "@/components/ui/Badge";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Features() {
	const sectionRef = useRef<HTMLElement | null>(null);
	const badgeRef = useRef<HTMLDivElement | null>(null);
	const h2Ref = useRef<HTMLHeadingElement | null>(null);
	const pRef = useRef<HTMLParagraphElement | null>(null);
	const timelineWrapRef = useRef<HTMLDivElement | null>(null);

	useGSAP(
		() => {
			if (badgeRef.current) gsap.set(badgeRef.current, { autoAlpha: 0, y: -8 });
			if (h2Ref.current)
				gsap.set(h2Ref.current, { autoAlpha: 0, y: 16, filter: "blur(8px)" });
			if (pRef.current) gsap.set(pRef.current, { autoAlpha: 0, y: 12 });

			const featureItems =
				timelineWrapRef.current?.querySelectorAll(".feature-item");
			if (featureItems?.length) {
				gsap.set(featureItems, { autoAlpha: 0, y: 24, filter: "blur(6px)" });
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

			if (featureItems?.length) {
				tl.to(
					featureItems,
					{
						autoAlpha: 1,
						y: 0,
						filter: "blur(0px)",
						duration: 0.7,
						stagger: 0.12,
					},
					"-=0.2",
				);
			}
		},
		{ scope: sectionRef },
	);

	return (
		<section
			ref={sectionRef}
			id="features"
			className="relative w-full overflow-hidden py-20"
		>
			<div className="relative mx-auto max-w-6xl px-6">
				<div className="mb-10 text-center">
					<div ref={badgeRef}>
						<Badge icon={<ShieldCheckIcon />} text="Core capabilities" />
					</div>
					<h2
						ref={h2Ref}
						className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-nocta-300/80 sm:text-4xl"
					>
						Powerful{" "}
						<span className="text-nocta-50">core capabilities</span>.
					</h2>
					<p
						ref={pRef}
						className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-nocta-50/60 sm:text-base"
					>
						From multi-layered authentication to real-time data synchronization
						— every component designed with security as the foundation while
						delivering exceptional performance.
					</p>
				</div>

				<div ref={timelineWrapRef}>
					<FeaturesTimeline />
				</div>
			</div>
		</section>
	);
}
