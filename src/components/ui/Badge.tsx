export default function Badge(props: { text: string; icon?: React.ReactNode }) {
	return (
		<div className="inline-flex items-center rounded-full border border-nocta-50/15 bg-nocta-50/5 px-3 py-1 gap-2 text-xs text-nocta-50/70 backdrop-blur relative">
			<div>{props.icon}</div>
			<span className="">{props.text}</span>
		</div>
	);
}
