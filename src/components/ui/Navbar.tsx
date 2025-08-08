import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useLenis } from "@/components/ui/LenisContext";

const navLinks = [
	{ href: "#features", label: "Features" },
	{ href: "#architecture", label: "Architecture" },
	{ href: "#admin-interface", label: "Admin Interface" },
];

export default function Navbar() {
	const mobileMenuRef = useRef<HTMLDivElement>(null);
	const hamburgerRef = useRef<HTMLButtonElement>(null);
	const navRef = useRef<HTMLElement>(null);
	const linksRef = useRef<HTMLUListElement>(null);
	let isMenuOpen = false;

	const { scrollTo: lenisScrollTo } = useLenis();

	const handleScrollTo = (id: string) => {
		lenisScrollTo(id);
	};

	useEffect(() => {
		if (navRef.current) {
			gsap.set(navRef.current, { autoAlpha: 0, y: -12, filter: "blur(6px)" });
			const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
			tl.to(navRef.current, {
				autoAlpha: 1,
				y: 0,
				filter: "blur(0px)",
				duration: 0.5,
			});
			const links = linksRef.current?.querySelectorAll("a");
			if (links?.length) {
				gsap.set(links, { autoAlpha: 0, y: -6 });
				tl.to(
					links,
					{ autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.06 },
					"-=0.25",
				);
			}
		}

		if (mobileMenuRef.current) {
			gsap.set(mobileMenuRef.current, { opacity: 0 });
			gsap.set(mobileMenuRef.current.querySelector(".menu-content"), {
				backgroundColor: "rgba(255, 255, 255, 0)",
				scale: 0.97,
				y: -10,
			});
		}
	}, []);

	const toggleMobileMenu = () => {
		if (!mobileMenuRef.current || !hamburgerRef.current) return;

		const menuContent = mobileMenuRef.current.querySelector(".menu-content");
		const tl = gsap.timeline();

		if (!isMenuOpen) {
			tl.to(mobileMenuRef.current, {
				opacity: 1,
				duration: 0.4,
				ease: "power2.out",
			})
				.to(
					menuContent,
					{
						backgroundColor: "rgba(255, 255, 255, 0.05)",
						scale: 1,
						y: 0,
						duration: 0.3,
					},
					"-=0.3",
				)
				.to(
					hamburgerRef.current.children[0],
					{ rotation: 45, y: 6, duration: 0.3 },
					"-=0.3",
				)
				.to(
					hamburgerRef.current.children[1],
					{ opacity: 0, duration: 0.2 },
					"-=0.3",
				)
				.to(
					hamburgerRef.current.children[2],
					{ rotation: -45, y: -6, duration: 0.3 },
					"-=0.3",
				);
			isMenuOpen = true;
		} else {
			tl.to(hamburgerRef.current.children[0], {
				rotation: 0,
				y: 0,
				duration: 0.3,
			})
				.to(
					hamburgerRef.current.children[1],
					{ opacity: 1, duration: 0.2 },
					"-=0.2",
				)
				.to(
					hamburgerRef.current.children[2],
					{ rotation: 0, y: 0, duration: 0.3 },
					"-=0.3",
				)
				.to(
					menuContent,
					{
						backgroundColor: "rgba(255, 255, 255, 0)",
						scale: 0.97,
						y: -10,
						duration: 0.2,
					},
					"-=0",
				)
				.to(
					mobileMenuRef.current,
					{ opacity: 0, duration: 0.3, ease: "power2.in" },
					"-=0.2",
				);
			isMenuOpen = false;
		}
	};

	return (
		<>
			<header className="pointer-events-none fixed left-4 right-4 md:left-0 md:right-0 top-4 z-50 flex justify-center">
				<nav
					ref={navRef}
					className="pointer-events-auto flex h-10 items-center gap-6 rounded-md border border-nocta-50/15 bg-nocta-50/5 px-4 pl-2 pr-2 text-sm text-nocta-50/80 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_8px_24px_rgba(0,0,0,0.4)] backdrop-blur-md w-full md:w-auto"
				>
					<button
						type="button"
						onClick={() => handleScrollTo("#home")}
						className="flex items-center gap-2 rounded-full px-2 py-1 text-nocta-50/90 hover:text-nocta-50 cursor-pointer"
					>
						<img
							src="/lunarbase.svg"
							alt="Lunarbase Logo"
							className="h-5 w-auto"
						/>
					</button>

					<span className="h-5 w-px bg-nocta-50/10 hidden md:block" />

					<ul ref={linksRef} className="hidden gap-6 md:flex">
						{navLinks.map((link) => (
							<li key={link.href}>
								<button
									type="button"
									onClick={() => handleScrollTo(link.href)}
									className="text-[13px] text-nocta-50/75 hover:text-nocta-50 transition-colors duration-300 cursor-pointer"
								>
									{link.label}
								</button>
							</li>
						))}
					</ul>

					<div className="flex-1" />

					<button
						type="button"
						ref={hamburgerRef}
						onClick={toggleMobileMenu}
						className="flex flex-col items-center justify-center w-6 h-6 md:hidden"
						aria-label="Toggle mobile menu"
					>
						<span className="block w-4 h-0.5 bg-nocta-50/75 mb-1"></span>
						<span className="block w-4 h-0.5 bg-nocta-50/75 mb-1"></span>
						<span className="block w-4 h-0.5 bg-nocta-50/75"></span>
					</button>

					<button
						type="button"
						onClick={() => handleScrollTo("#get-started")}
						className="hidden md:inline-flex items-center rounded-md border border-nocta-50/20 bg-nocta-50/90 px-3 py-1 text-[12px] font-medium text-black shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_4px_14px_rgba(0,0,0,0.35)] hover:bg-nocta-50 transition-colors duration-300 cursor-pointer"
					>
						Get Started
					</button>
				</nav>
			</header>

			<div
				ref={mobileMenuRef}
				className="fixed left-4 right-4 top-16 z-40 md:hidden overflow-hidden will-change-auto transform-gpu backdrop-blur-md"
			>
				<div className="menu-content rounded-md border border-nocta-50/15 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_8px_24px_rgba(0,0,0,0.4)]">
					<nav className="flex flex-col p-4">
						{navLinks.map((link) => (
							<button
								key={link.href}
								type="button"
								onClick={() => {
									handleScrollTo(link.href);
									toggleMobileMenu();
								}}
								className="text-sm text-nocta-50/90 hover:text-nocta-50 transition-colors duration-300 py-3 cursor-pointer w-fit"
							>
								{link.label}
							</button>
						))}

						<div className="mt-4 pt-4 border-t border-nocta-50/15">
							<button
								type="button"
								onClick={() => {
									toggleMobileMenu();
									handleScrollTo("#get-started");
								}}
								className="inline-flex items-center justify-center w-full rounded-md border border-nocta-50/20 bg-nocta-50/90 px-2 py-1 text-sm font-medium text-black shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_4px_14px_rgba(0,0,0,0.35)] hover:bg-nocta-50 transition-colors duration-300 cursor-pointer"
							>
								Get Started
							</button>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
}
