import {
	CloudArrowUpIcon,
	DatabaseIcon,
	EnvelopeSimpleIcon,
	GearIcon,
	GlobeIcon,
	KeyIcon,
	MonitorIcon,
	ShieldCheckIcon,
} from "@phosphor-icons/react";
import Node from "./Node";

export default function ArchitectureGraph() {
	return (
		<div className="relative rounded-lg border border-nocta-50/10 bg-nocta-50/[0.025] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] backdrop-blur-md">
			<span
				aria-hidden
				className="pointer-events-none absolute -inset-px rounded-md bg-gradient-to-b to-transparent opacity-60"
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

			<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				<div className="md:col-span-3 arch-node">
					<Node
						title="Frontend"
						subtitle="React Admin Panel"
						chips={[
							"React 19.1.0",
							"TypeScript",
							"Nocta UI",
							"TanStack Router",
							"Zustand",
							"TanStack Query",
							"Tailwind CSS 4",
							"Vite 7.0.4",
						]}
						icon={<MonitorIcon size={16} />}
					/>
				</div>

				<div className="md:col-span-3 mt-4">
					<div className="relative flex items-center gap-2 text-[12px] text-nocta-50/60">
						<span className="h-px flex-1 bg-nocta-50/10" />
						<span className="relative">HTTPS/WSS</span>
						<span className="h-px flex-1 bg-nocta-50/10" />
					</div>
				</div>

				<div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
					<div className="arch-node">
						<Node
							title="API Server"
							subtitle="Axum Web Server"
							chips={[
								"Axum 0.8.4",
								"REST API",
								"WebSocket",
								"OpenAPI",
								"Rate Limiting",
							]}
							icon={<GlobeIcon size={16} />}
						/>
					</div>
					<div className="arch-node">
						<Node
							title="Security"
							subtitle="AuthN/AuthZ"
							chips={[
								"JWT",
								"Argon2id",
								"RBAC",
								"CSRF Protection",
								"XSS Prevention",
							]}
							icon={<ShieldCheckIcon size={16} />}
						/>
					</div>
					<div className="arch-node">
						<Node
							title="Services"
							subtitle="Domain Layer"
							chips={[
								"Collections",
								"Users",
								"Real-time Events",
								"Query Engine",
								"Schema Validation",
							]}
							icon={<GearIcon size={16} />}
						/>
					</div>
				</div>

				<div className="md:col-span-3 arch-node">
					<Node
						title="Database"
						subtitle="SQLCipher"
						chips={[
							"AES-256 Encryption",
							"Diesel ORM",
							"SQL Injection Prevention",
							"Schema Evolution",
							"Connection Pooling",
							"Automatic Backups",
						]}
						icon={<DatabaseIcon size={16} />}
					/>
				</div>

				<div className="md:col-span-3 mt-4">
					<div className="relative flex items-center gap-2 text-[12px] text-nocta-50/60">
						<span className="h-px flex-1 bg-nocta-50/10" />
						<span className="relative">External Integrations</span>
						<span className="h-px flex-1 bg-nocta-50/10" />
					</div>
				</div>

				<div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
					<div className="arch-node">
						<Node
							title="OAuth"
							subtitle="Social Auth"
							chips={["Google OAuth", "GitHub OAuth"]}
							icon={<KeyIcon size={16} />}
						/>
					</div>
					<div className="arch-node">
						<Node
							title="Storage"
							subtitle="S3 Compatible"
							chips={["File Upload", "Secure Storage"]}
							icon={<CloudArrowUpIcon size={16} />}
						/>
					</div>
					<div className="arch-node">
						<Node
							title="Email"
							subtitle="Transactional"
							chips={["Resend", "Verification"]}
							icon={<EnvelopeSimpleIcon size={16} />}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
