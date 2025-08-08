import { useGSAP } from "@gsap/react";
import { GithubLogoIcon, StarIcon, CodeIcon, HeartIcon } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function GitHubCTA() {
	const sectionRef = useRef<HTMLElement | null>(null);
	const badgeRef = useRef<HTMLDivElement | null>(null);
	const h2Ref = useRef<HTMLHeadingElement | null>(null);
	const pRef = useRef<HTMLParagraphElement | null>(null);
	const ctaRef = useRef<HTMLDivElement | null>(null);

	useGSAP(
		() => {
			if (badgeRef.current) gsap.set(badgeRef.current, { autoAlpha: 0, y: -8 });
			if (h2Ref.current)
				gsap.set(h2Ref.current, { autoAlpha: 0, y: 16, filter: "blur(8px)" });
			if (pRef.current) gsap.set(pRef.current, { autoAlpha: 0, y: 12 });
			if (ctaRef.current) gsap.set(ctaRef.current, { autoAlpha: 0, y: 16 });

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

			if (ctaRef.current) {
				tl.to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.15");
			}
		},
		{ scope: sectionRef },
	);

	return (
		<section
			ref={sectionRef}
			className="relative py-24 px-6 overflow-hidden"
		>
			
			<div className="relative mx-auto max-w-4xl text-center">
				<div ref={badgeRef}>
					<Badge
						icon={<CodeIcon />}
						text="Open source & community driven"
					/>
				</div>
				
				<h2
					ref={h2Ref}
					className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-nocta-300/80 sm:text-4xl"
				>
					Join the{" "}
					<span className="text-nocta-50">LunarBase community</span>.
				</h2>
				
				<p
					ref={pRef}
					className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-nocta-50/60 sm:text-base"
				>
					Explore the source code, contribute to the project, or star the repository to stay updated with the latest developments in secure database management.
				</p>
				
				
				<div ref={ctaRef} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
					<Button variant="primary" asChild>
						<a 
							href="https://github.com/66HEX/lunarbase" 
							target="_blank" 
							rel="noopener noreferrer"
							className="flex items-center gap-2 min-w-[160px] justify-center"
						>
							<GithubLogoIcon size={16} />
							View on GitHub
						</a>
					</Button>
					
					<Button variant="secondary" asChild>
						<a 
							href="https://github.com/66HEX/lunarbase/stargazers"
							target="_blank" 
							rel="noopener noreferrer"
							className="flex items-center gap-2 min-w-[160px] justify-center"
						>
							<StarIcon size={16} />
							Star Repository
						</a>
					</Button>
					
					<Button variant="secondary" asChild>
						<a 
							href="https://github.com/66HEX/lunarbase/issues"
							target="_blank" 
							rel="noopener noreferrer"
							className="flex items-center gap-2 min-w-[160px] justify-center"
						>
							<HeartIcon size={16} />
							Contribute
						</a>
					</Button>
				</div>
			</div>
		</section>
	);
}