import CardTerminal from "./CardTerminal";

export default function Deck() {
	return (
		<div className="relative deck">
			<CardTerminal
				title="Backend"
				hint="Axum + SQLCipher"
				commands={["cargo run"]}
			/>
			<CardTerminal
				title="Admin Panel"
				hint="React + Nocta UI"
				commands={["cd admin-ui", "npm run dev"]}
			/>
			<CardTerminal
				title="S3 (optional)"
				hint="LocalStack"
				commands={["./start-with-localstack.sh"]}
			/>
		</div>
	);
}
