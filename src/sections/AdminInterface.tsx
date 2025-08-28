"use client";

import { useGSAP } from "@gsap/react";
import { GearIcon } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Badge from "@/components/ui/Badge";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AdminInterface() {
	const sectionRef = useRef<HTMLElement | null>(null);
	const badgeRef = useRef<HTMLDivElement | null>(null);
	const h2Ref = useRef<HTMLHeadingElement | null>(null);
	const pRef = useRef<HTMLParagraphElement | null>(null);
	const cardsWrapRef = useRef<HTMLDivElement | null>(null);

	useGSAP(
		() => {
			if (badgeRef.current) gsap.set(badgeRef.current, { autoAlpha: 0, y: -8 });
			if (h2Ref.current)
				gsap.set(h2Ref.current, { autoAlpha: 0, y: 16, filter: "blur(8px)" });
			if (pRef.current) gsap.set(pRef.current, { autoAlpha: 0, y: 12 });

			const cards =
				cardsWrapRef.current?.querySelectorAll<HTMLElement>(".admin-card") ??
				cardsWrapRef.current?.querySelectorAll<HTMLElement>("> div");
			if (cards?.length) {
				gsap.set(cards, { autoAlpha: 0, y: 24, filter: "blur(6px)" });
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

			if (cards?.length) {
				tl.to(
					cards,
					{
						autoAlpha: 1,
						y: 0,
						filter: "blur(0px)",
						duration: 0.7,
						stagger: 0.55,
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
			id="admin-interface"
			className="relative w-full overflow-hidden py-20"
		>
			<div className="relative mx-auto max-w-6xl px-6">
				<div className="mb-10 text-center">
					<div ref={badgeRef}>
						<Badge icon={<GearIcon />} text="Admin interface" />
					</div>
					<h2
						ref={h2Ref}
						className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-nocta-300/80 sm:text-4xl"
					>
						Intuitive{" "}
						<span className="text-nocta-50">management dashboard</span>.
					</h2>
					<p
						ref={pRef}
						className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-nocta-50/60 sm:text-base"
					>
						Comprehensive admin interface designed for seamless system
						management. Monitor performance, configure settings, and manage
						users with an elegant and powerful dashboard.
					</p>
				</div>

				<div ref={cardsWrapRef} className="grid grid-cols-1 gap-8 mt-12">
					<div className="admin-card relative rounded-lg border border-nocta-50/10 bg-nocta-50/[0.025] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] backdrop-blur-md">
						<span
							aria-hidden
							className="pointer-events-none absolute -inset-px rounded-md bg-gradient-to-b to-transparent opacity-60"
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
						<div className="bg-nocta-900 border border-nocta-50/10 rounded-md overflow-hidden">
							<img
								src="/1.webp"
								alt="Dashboard Overview"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>

					<div className="admin-card relative rounded-lg border border-nocta-50/10 bg-nocta-50/[0.025] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] backdrop-blur-md">
						<span
							aria-hidden
							className="pointer-events-none absolute -inset-px rounded-md bg-gradient-to-b to-transparent opacity-60"
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
						<div className="bg-nocta-900 border border-nocta-50/10 rounded-md overflow-hidden">
							<img
								src="/2.webp"
								alt="WebSocket Management"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
