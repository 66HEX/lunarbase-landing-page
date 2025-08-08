import { useLenis } from "@/components/ui/LenisContext";

const footerLinks = {
	product: [
		{ href: "#features", label: "Features" },
		{ href: "#architecture", label: "Architecture" },
		{ href: "#admin-interface", label: "Admin Interface" },
		{ href: "#get-started", label: "Get Started" },
	]
};

export default function Footer() {

	return (
		<footer className="relative mt-24 border-t border-nocta-50/10 bg-nocta-900/50">
			<div
				className="pointer-events-none absolute inset-x-0 -top-px h-px opacity-60"
				style={{
					background:
						"linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
				}}
			/>
			<div className="relative">
				<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
					<div className="grid grid-cols-1 gap-10 md:grid-cols-4">
						<div className="md:col-span-3">
							<a href="#home" className="inline-flex items-center gap-2">
								<img
							src="/lunarbase.svg"
							alt="Lunarbase"
							className="h-6 w-auto"
						/>
								<span className="sr-only">Lunarbase</span>
							</a>
							<p className="mt-4 max-w-xs text-sm text-nocta-50/70">
								Secure, modern admin stack with React, Axum and SQLCipher. Built
								for speed and safety.
							</p>
						</div>

						<FooterColumn title="Product" links={footerLinks.product} />

					</div>

					<div className="mt-10 h-px w-full bg-nocta-50/10" />

					<div className="mt-6 flex flex-col items-start justify-between gap-4 text-xs text-nocta-50/60 md:flex-row">
						<p>© {new Date().getFullYear()} Lunarbase. All rights reserved.</p>
					</div>
				</div>

				<span
					aria-hidden
					className="pointer-events-none absolute inset-x-0 bottom-0 h-24 opacity-40"
					style={{
						maskImage:
							"radial-gradient(110% 100% at 50% 100%, black 30%, transparent 70%)",
						WebkitMaskImage:
							"radial-gradient(110% 100% at 50% 100%, black 30%, transparent 70%)",
						background:
							"linear-gradient(to top, rgba(255,255,255,0.06), transparent)",
					}}
				/>
			</div>
		</footer>
	);
}

type LinkItem = { href: string; label: string };

function FooterColumn({ title, links }: { title: string; links: LinkItem[] }) {
	const { scrollTo: lenisScrollTo } = useLenis();

	const handleScrollTo = (id: string) => {
		lenisScrollTo(id);
	};
	return (
		<div>
			<h3 className="text-sm font-medium text-nocta-50/90">{title}</h3>
			<ul className="mt-3 space-y-2">
				{links.map((l) => (
					<li key={l.href}>
						<a
							href={l.href}
							onClick={() => handleScrollTo(l.href)}
							className="text-[13px] text-nocta-50/70 hover:text-nocta-50 transition-colors duration-300 cursor-pointer"
						>
							{l.label}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
