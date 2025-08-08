# Hero & Value Proposition

LunarBase is a security-first database management platform that blends Rust’s performance with React’s flexibility. It delivers reliable, real-time data operations through an intuitive admin interface built entirely with the proprietary Nocta UI component library. Security isn’t a feature—it's the foundation—while developer experience and modern workflows remain first-class.

Core value:

- Security-first from authentication to data integrity
- Real-time synchronization without compromising safety
- Flexible schemas with powerful, validated queries
- Intuitive, accessible admin crafted with Nocta UI
- Enterprise-grade monitoring and integrations out of the box

# Security at the Core

Security is built into every layer of LunarBase. From password hashing to permission checks and encrypted storage, each component is designed to protect your data against modern threats.

Highlights:

- Advanced Authentication & Authorization:
  - Argon2id password hashing (65536 memory, 4 iterations, 2 parallelism)
  - Server-side password pepper for rainbow-table resistance
  - Dual-token JWT: 15-minute access, 7-day refresh
  - HttpOnly, secure cookies with SameSite=Lax and scoped paths
  - Immediate session revocation via token blacklisting
  - Brute-force protection with lockout after 5 failed attempts
  - IP-based rate limiting (1000 requests / 5 min)
  - Consistent timing responses to mitigate timing attacks
- Granular Permission System:
  - Role-based access with user/admin and per-resource overrides
  - Ownership-aware permissions for safer defaults
  - Real-time permission validation for WebSocket streams
  - Admin self-protection to prevent accidental privilege loss
- Data Protection & Integrity:
  - AES-256 at-rest encryption via SQLCipher
  - Parameterized queries and validation to prevent SQL injection
  - CSRF and XSS protections with safe cookie handling and sanitization
  - Schema validation and audit trails for accountable changes

# Real-time & Architecture

LunarBase is engineered for secure, real-time operations at scale. The Rust backend ensures high performance and memory safety, while the React frontend delivers responsive, accessible interfaces.

- Real-time WebSocket system with authenticated or anonymous clients
- Subscription-based architecture for collections, records, and custom queries
- Automatic CRUD event broadcasting with before/after payloads
- Permission-filtered streams so users only receive what they’re authorized to see
- Scalable Rust core (Axum, Tokio) optimized for concurrency and low-latency I/O
- Transparent SQLCipher integration for encrypted storage without sacrificing speed
- Prometheus metrics for deep operational visibility

# Nocta UI Admin Interface

The LunarBase admin panel is powered by Nocta UI—our proprietary, TypeScript-native component library designed for speed, accessibility, and control.

- Copy-paste component philosophy for total customization
- WCAG 2.1 AA compliance with full keyboard and screen reader support
- First-class dark mode with system detection and manual override
- Tailwind CSS 4 integration and ergonomic APIs with strong typings
- Thoughtful design system: Charcoal OKLCH palette, TomatoGrotesk typography
- Mobile-first responsive layouts, optimized for real-world workflows

# Features & Integrations

Everything you need to securely manage data, users, and operations—plus integrations that fit modern stacks.

Core features:

- Dynamic Collection Management:
  - Flexible schemas: Text, Number, Boolean, Date, Email, URL, JSON, File, Relation
  - Real-time schema evolution with automatic table handling
  - Advanced field validation (min/max, regex, enums)
  - System field protection for `created_at`, `updated_at`, and reserved keys
- Intelligent Query Engine:
  - Rich filtering (eq, ne, gt, gte, lt, lte, like, in, null checks)
  - Multi-field sorting, efficient pagination, and full-text search
  - Schema-aware validation to ensure safe, reliable queries
- Real-time WebSocket:
  - Subscriptions per collection/record/query
  - Auth-aware event emission with granular filtering
  - Admin broadcast tools for system-wide notifications
- Comprehensive User Management:
  - Admin-only CRUD, advanced filtering, and account lock controls
  - Role assignment with dynamic permission inheritance
  - Self-protection: safeguards against admin self-deletion
- Enterprise Monitoring:
  - Prometheus metrics for HTTP, WebSocket, and DB operations
  - Custom dashboard with live stats, health indicators, and activity logs
  - Resource usage tracking for memory and connection pools
- External Integrations:
  - OAuth with Google and GitHub
  - Resend for reliable email delivery
  - S3-compatible file storage with secure uploads

# Quick Start & Documentation

Get up and running in minutes with a streamlined developer experience and auto-generated API docs.

Quick start:

1. Start the backend:
   ```
   cargo run
   ```
2. In a separate terminal, start the admin interface:
   ```
   cd admin-ui
   npm run dev
   ```

Defaults:

- Backend: `http://localhost:3000`
- API docs: `http://localhost:3000/docs`
- Admin UI: `http://localhost:5173`

Documentation:

- OpenAPI generated with `utoipa` for consistent, discoverable endpoints
- TypeScript-first patterns and examples
- Clear, security-forward guides for authentication, permissions, and real-time usage

Technology stack:

- Backend: Rust, `axum`, `diesel`, `SQLCipher`, `tokio-tungstenite`, `Prometheus`, `JWT`, `Argon2`
- Frontend: React, `TanStack Router`, `Zustand`, `TanStack Query`, `Tailwind CSS 4`, `Vite`

LunarBase brings secure, real-time database management together with a refined developer experience—powered end-to-end by Nocta UI.
