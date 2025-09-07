"use client";

import { Check, PlayIcon, TerminalIcon } from "@phosphor-icons/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useRef, useState } from "react";

gsap.registerPlugin(SplitText);

export default function CardTerminal({
	title,
	hint,
	commands,
}: {
	title: string;
	hint: string;
	commands: string[];
	style?: string;
}) {
	const btnRef = useRef<HTMLButtonElement | null>(null);
	const labelRef = useRef<HTMLSpanElement | null>(null);
	const [copied, setCopied] = useState(false);

	const handleRun = async () => {
		try {
			await navigator.clipboard?.writeText(commands.join("\n"));

			if (btnRef.current) {
				gsap.fromTo(
					btnRef.current,
					{ backgroundColor: "rgba(16,185,129,0.12)" },
					{
						backgroundColor: "rgba(255,255,255,0.03)",
						duration: 0.6,
						ease: "power2.out",
					},
				);
			}

			setCopied(true);

			gsap.fromTo(
				labelRef.current,
				{ y: 6, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.35, ease: "power2.out" },
			);

			setTimeout(() => {
				if (labelRef.current) {
					gsap.to(labelRef.current, {
						y: -6,
						opacity: 0,
						duration: 0.25,
						ease: "power2.in",
						onComplete: () => {
							setCopied(false);
							gsap.set(labelRef.current, { clearProps: "all" });
						},
					});
				} else {
					setCopied(false);
				}
			}, 1500);
		} catch (e) {
			console.error("Clipboard copy failed", e);
		}
	};

	return (
		<div className="relative mb-3 rounded-md bg-[#171717] backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.10)_inset,0_10px_30px_-18px_rgba(0,0,0,0.35)] ">
			<div className="flex items-center justify-between border-b border-nocta-50/10 px-3 py-2">
				<div className="flex items-center gap-2 text-nocta-50/85">
					<TerminalIcon size={14} />
					<span className="text-[12px] font-medium">{title}</span>
					<span className="text-[11px] text-nocta-50/60 hidden md:block">• {hint}</span>
				</div>
				<button
					ref={btnRef}
					type="button"
					className={`inline-flex items-center gap-1 rounded-sm border border-nocta-50/15 bg-nocta-50/5 px-2 py-1 text-[11px] transition-colors duration-300 ${
						copied ? "text-green-500" : "text-green-600/70 hover:text-green-600"
					}`}
					onClick={handleRun}
					title={copied ? "Copied" : "Copy"}
					disabled={copied}
				>
					{copied ? <Check size={12} /> : <PlayIcon size={12} />}
					<span ref={labelRef} className="inline-block">
						{copied ? "Copied" : "Run"}
					</span>
				</button>
			</div>
			<pre className="overflow-auto px-3 py-2 text-[12px] leading-relaxed text-nocta-50/90">
				<code>{commands.join("\n")}</code>
			</pre>
			<span
				aria-hidden
				className="pointer-events-none absolute inset-0 rounded-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
			/>
		</div>
	);
}
