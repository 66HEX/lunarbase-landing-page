import CardTerminal from "./CardTerminal";

export default function Deck() {
	return (
		<div className="relative deck">
			<CardTerminal
				title="Build for Production"
				hint="Compile with embedded admin UI"
				commands={["cargo build --release"]}
			/>
			<CardTerminal
				title="Environment Config"
				hint="Required production settings"
				commands={["cp env.example .env", "# Set JWT_SECRET, SQLCIPHER_KEY etc."]}
			/>
			<CardTerminal
				title="Production Server"
				hint="Single binary with ACME support"
				commands={[
					"./lunarbase serve \\",
					"   --acme \\",
					"   --acme-domain your-domain.com \\",
					"   --acme-domain www.your-domain.com \\",
					"   --acme-email admin@your-domain.com \\",
					"   --acme-production \\",
					"   --acme-cache-dir /path/to/acme/cache \\",
					"   --enable-redirect"
				]}
			/>
		</div>
	);
}
