export default function MiniCode({ lines }: { lines: string[] }) {
	return (
		<pre className="overflow-auto rounded-md border border-nocta-50/10 bg-nocta-50/[0.025] p-2 text-[12px] leading-relaxed text-nocta-50/90 max-w-70 md:max-w-54 xl:max-w-88">
			<code>{lines.join("\n")}</code>
		</pre>
	);
}
