"use client";

import { useGSAP } from "@gsap/react";
import {
	CheckCircleIcon,
	LightningIcon,
} from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Connector from "@/components/get-started/Connector";
import Deck from "@/components/get-started/Deck";
import DiagCard from "@/components/get-started/DiagCard";
import TimelineStep from "@/components/get-started/TimelineStep";
import { Chip } from "@/components/ui/Chip";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function GetStarted() {
	const sectionRef = useRef<HTMLElement | null>(null);
	const badgeRef = useRef<HTMLDivElement | null>(null);
	const h2Ref = useRef<HTMLHeadingElement | null>(null);
	const pRef = useRef<HTMLParagraphElement | null>(null);
	const cardRef = useRef<HTMLDivElement | null>(null);

	useGSAP(
		() => {
			if (badgeRef.current) gsap.set(badgeRef.current, { autoAlpha: 0, y: -8 });
			if (h2Ref.current)
				gsap.set(h2Ref.current, { autoAlpha: 0, y: 16, filter: "blur(8px)" });
			if (pRef.current) gsap.set(pRef.current, { autoAlpha: 0, y: 12 });

			const steps = cardRef.current?.querySelectorAll<HTMLElement>(
				"[data-timeline-step], .timeline-step, .connector",
			);
			const deck =
				cardRef.current?.querySelectorAll<HTMLElement>("[data-deck], .deck");
			const diagCards = cardRef.current?.querySelectorAll<HTMLElement>(
				"[data-diag-card], .diag-card",
			);
			const chips =
				cardRef.current?.querySelectorAll<HTMLElement>("[data-chip], .chip");

			if (steps?.length)
				gsap.set(steps, { autoAlpha: 0, y: 18, filter: "blur(6px)" });
			if (deck?.length)
				gsap.set(deck, { autoAlpha: 0, y: 18, filter: "blur(6px)" });
			if (diagCards?.length)
				gsap.set(diagCards, { autoAlpha: 0, y: 18, filter: "blur(6px)" });
			if (chips?.length) gsap.set(chips, { autoAlpha: 0, y: 10 });

			const tl = gsap.timeline({
				defaults: { ease: "power3.out" },
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 70%",
					once: true,
				},
			});

			if (badgeRef.current)
				tl.to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.45 }, 0);
			tl.to(
				h2Ref.current,
				{ autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.7 },
				0.05,
			);
			if (pRef.current)
				tl.to(pRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.35");

			if (steps?.length) {
				tl.to(
					steps,
					{
						autoAlpha: 1,
						y: 0,
						filter: "blur(0px)",
						duration: 0.6,
						stagger: 0.08,
					},
					"-=0.1",
				);
			}

			if (deck?.length) {
				tl.to(
					deck,
					{ autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.6 },
					"-=0.3",
				);
			}

			if (diagCards?.length) {
				tl.to(
					diagCards,
					{
						autoAlpha: 1,
						y: 0,
						filter: "blur(0px)",
						duration: 0.6,
						stagger: 0.1,
					},
					"-=0.25",
				);
			}

			if (chips?.length) {
				tl.to(
					chips,
					{ autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.06 },
					"-=0.2",
				);
			}
		},
		{ scope: sectionRef },
	);

	return (
		<section id="get-started" ref={sectionRef} className="relative py-20">
			<div className="mx-auto max-w-6xl px-6">
				<header className="mb-8">
					<div
						ref={badgeRef}
						className="inline-flex items-center gap-2 rounded-full border border-nocta-50/15 bg-nocta-50/5 px-3 py-1 text-[11px] text-nocta-50/75"
					>
						<LightningIcon size={14} />
						Get Started
					</div>
					<h2
						ref={h2Ref}
						className="mt-3 text-[22px] font-semibold text-nocta-300/80"
					>
						From clone to{" "}
						<span className="text-nocta-50">application</span> in less
						than 3 minutes
					</h2>
					<p ref={pRef} className="mt-1 text-sm text-nocta-50/70">
						Follow the step-by-step guide to set up LunarBase locally and start
						building with our powerful database management platform.
					</p>
				</header>

				<div
					ref={cardRef}
					className="relative rounded-lg border border-nocta-50/10 bg-nocta-50/[0.025] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] backdrop-blur-md"
				>
					<span
						aria-hidden
						className="pointer-events-none absolute -inset-px rounded-md bg-gradient-to-b  to-transparent opacity-60"
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

					<div className="grid grid-cols-1 md:grid-cols-5 gap-6">
						<aside className="relative col-span-2 md:border-r border-nocta-50/10">
							<div>
							<TimelineStep
								index={1}
								title="Clone repository"
								desc="Download LunarBase from GitHub repository."
							/>

							<Connector />

							<TimelineStep
								index={2}
								title="Install dependencies"
								desc="Set up Rust toolchain and required dependencies."
							/>

							<Connector />

							<TimelineStep
								index={3}
								title="Build application"
								desc="Compile LunarBase with embedded admin interface."
							/>

							<Connector />

							<TimelineStep
								index={4}
								title="Configure environment"
								desc="Set up environment variables."
							/>

							<Connector />

							<TimelineStep
								index={5}
								title="Start production server"
								desc="Launch LunarBase with ACME SSL support."
							/>

						</div>
						</aside>

						<div className="relative col-span-3">
							<div>
								<Deck />

								<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
									<DiagCard
										title="Quick tests"
										items={[
											"cargo test -- --test-threads=1",
											"Check /docs — verify OpenAPI works",
											"Log in, perform CRUD and observe realtime",
										]}
									/>
									<DiagCard
										title="Requirements"
										items={[
											"Rust 1.88.0 (stable) + Cargo",
											"Node.js 18+ + npm",
											"Optional: Docker + LocalStack (S3)",
										]}
									/>
								</div>
							</div>

							<div className="border-t border-nocta-50/10 py-6 mt-6">
								<div className="flex flex-wrap items-center gap-2 text-[12px]">
									<Chip
										icon={<CheckCircleIcon size={12} />}
										text="API: https://your-domain/api"
									/>
									<Chip
										icon={<CheckCircleIcon size={12} />}
										text="Docs: https://your-domain/docs"
									/>
									<Chip
										icon={<CheckCircleIcon size={12} />}
										text="Panel: https://your-domain/admin"
									/>
									<div className="ml-auto"></div>
								</div>
							</div>
						</div>
					</div>

					<span
						aria-hidden
						className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-60"
						style={{
							background:
								"linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
						}}
					/>
				</div>
			</div>
		</section>
	);
}
