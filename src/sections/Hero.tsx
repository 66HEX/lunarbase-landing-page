import { useGSAP } from "@gsap/react";
import { DatabaseIcon, GithubLogoIcon } from "@phosphor-icons/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Horizon from "@/components/ui/Horizon";

gsap.registerPlugin(SplitText, useGSAP);

export default function Hero() {
	const sectionRef = useRef<HTMLElement | null>(null);
	const headerRef = useRef<HTMLHeadingElement | null>(null);
	const paraRef = useRef<HTMLParagraphElement | null>(null);
	const ctaRef = useRef<HTMLDivElement | null>(null);
	const badgeRef = useRef<HTMLDivElement | null>(null);

	useGSAP(
		() => {
			if (!headerRef.current) return;

			document.fonts.ready.then(() => {
				const split = new SplitText(headerRef.current, {
					type: "lines",
					wordsClass: "lines",
				});

				gsap.set(split.lines, {
					filter: "blur(16px)",
					yPercent: 30,
					autoAlpha: 0,
					scale: 1.06,
					transformOrigin: "50% 100%",
				});

				if (badgeRef.current) {
					gsap.set(badgeRef.current, { autoAlpha: 0, y: -8 });
				}
				if (paraRef.current) {
					gsap.set(paraRef.current, { autoAlpha: 0, y: 8 });
				}
				if (ctaRef.current) {
					gsap.set(ctaRef.current, { autoAlpha: 0, y: 8 });
				}

				const tl = gsap.timeline({
					defaults: { ease: "power3.out" },
				});

				if (badgeRef.current) {
					tl.to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.0);
				}

				tl.to(
					split.lines,
					{
						filter: "blur(0px)",
						yPercent: 0,
						autoAlpha: 1,
						scale: 1,
						duration: 0.9,
						stagger: 0.15,
					},
					0.1,
				);

				if (paraRef.current) {
					tl.to(paraRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.55");
				}
				if (ctaRef.current) {
					tl.to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.35");
				}
			});
		},
		{ scope: sectionRef },
	);

	return (
		<section
			ref={sectionRef}
			id="home"
			className="relative h-svh w-full overflow-hidden"
		>
			<Horizon />
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]"
			/>
			<div className="relative mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center">
				<div ref={badgeRef}>
					<Badge
						icon={<DatabaseIcon />}
						text="Security‑first database management"
					/>
				</div>
				<h1
					ref={headerRef}
					className="mt-4 text-4xl md:text-5xl font-semibold leading-tight tracking-[-0.02em] text-nocta-50 sm:text-6xl"
				>
					<span className="block">LunarBase</span>
					<span className="block text-nocta-300/80">Security at the Core</span>
				</h1>
				<p
					ref={paraRef}
					className="mt-5 max-w-2xl text-sm leading-6 text-nocta-50/60 sm:text-base"
				>
					Security‑first platform blending Rust performance with React
					flexibility. Real‑time operations through an intuitive admin
					panel—where safety is the foundation and DX stays first‑class.
				</p>
				<div ref={ctaRef} className="mt-7 flex items-center gap-4">
					<Button variant="primary" asChild>
						<a href="#get-started">Get Started</a>
					</Button>
					<Button variant="secondary" asChild>
						<a href="#docs" className="flex items-center gap-2">
							<GithubLogoIcon size={16} />
							GitHub
						</a>
					</Button>
				</div>
			</div>
		</section>
	);
}
