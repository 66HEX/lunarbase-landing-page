# LunarBase Architecture

LunarBase is a security-first database management platform built with a modern, scalable architecture that combines Rust's performance with React's flexibility. This document outlines the comprehensive architecture design and technical implementation details.

## Architecture Overview

LunarBase follows a three-tier architecture pattern with clear separation of concerns:

- **Presentation Layer**: React-based admin interface with Nocta UI components
- **Application Layer**: Rust backend with Axum web framework
- **Data Layer**: SQLCipher encrypted database with comprehensive security

## Backend Architecture (Rust)

### Core Framework Stack

- **Axum 0.8.4**: High-performance async web framework providing the HTTP server foundation
- **Diesel 2.2.11**: Type-safe ORM with compile-time query validation ensuring database safety
- **SQLCipher**: Encrypted embedded database with AES-256 transparent encryption
- **Tokio**: Async runtime powering all concurrent operations

### Security Layer

#### Authentication & Authorization
- **Argon2id Password Hashing**: Memory-hard function with 65536 memory, 4 iterations, 2 parallelism
- **Password Pepper Protection**: Server-side secret salt defending against rainbow table attacks
- **Dual-Token JWT System**: 
  - Short-lived access tokens (15 minutes)
  - Secure refresh tokens (7 days)
- **HttpOnly Cookies**: Secure, SameSite=Lax configuration with path restrictions
- **Token Blacklisting**: Comprehensive system for immediate session revocation
- **Brute Force Protection**: Account lockout after 5 failed attempts
- **Rate Limiting**: 1000 requests per 5 minutes per IP
- **Timing Attack Protection**: Consistent response delays

#### Permission System
- **Multi-level Access Control**: Collections, records, and field-level permissions
- **Role-based Hierarchy**: User/admin distinction with custom overrides
- **Ownership-based Permissions**: Automatic owner privilege assignment
- **Real-time Validation**: Permission checks for WebSocket connections
- **Admin Self-protection**: Mechanisms preventing accidental privilege removal

#### Data Protection
- **Database Encryption at Rest**: SQLCipher AES-256 encryption
- **SQL Injection Prevention**: Parameterized queries and input validation
- **CSRF Protection**: SameSite cookie policies
- **XSS Prevention**: HttpOnly storage and input sanitization
- **Schema Validation**: Protection against malicious structure modifications
- **Audit Trails**: Comprehensive operation logging

### Core Services

#### Collection Management Service
- **Dynamic Schema System**: Support for Text, Number, Boolean, Date, Email, URL, JSON, File, Relation fields
- **Real-time Schema Evolution**: Automatic table creation and validation
- **Advanced Field Validation**: Min/max constraints, regex patterns, enum values
- **System Field Protection**: Reserved fields (created_at, updated_at) protection

#### Query Engine
- **Advanced Filtering**: Comprehensive operators (eq, ne, gt, gte, lt, lte, like, in, null checks)
- **Multi-field Sorting**: Ascending/descending directions
- **Full-text Search**: Performance-optimized search across record fields
- **Efficient Pagination**: Offset/limit support for large datasets
- **Schema-aware Validation**: Query safety and field checking

#### WebSocket System
- **Connection Management**: Authenticated and anonymous connections with UUID assignment
- **Subscription Architecture**: Collections, records, and custom query subscriptions
- **Event Emission**: Automatic CRUD event emission with before/after data
- **Permission-based Filtering**: Users receive only authorized data
- **Admin Broadcasting**: System-wide notification capabilities

#### User Management Service
- **CRUD Operations**: Complete user lifecycle management with admin controls
- **Advanced Filtering**: Email, username, verification status filtering
- **Account Management**: Lock/unlock capabilities
- **Role Assignment**: Dynamic permission inheritance
- **Self-protection**: Prevention of admin self-deletion

#### Monitoring & Observability
- **Prometheus Integration**: Comprehensive metrics collection
- **Performance Monitoring**: HTTP requests, WebSocket connections, database operations
- **Custom Dashboard**: Live statistics and health indicators
- **Activity Logging**: Detailed audit trails with pagination
- **Resource Tracking**: Memory and connection pool monitoring

### External Integrations

- **OAuth Providers**: Google and GitHub authentication
- **Resend Email Service**: Reliable verification email delivery
- **S3 File Storage**: Secure file upload capabilities
- **OpenAPI Documentation**: Automatic API documentation with utoipa

## Frontend Architecture (TypeScript/React)

### Core Framework Stack

- **React 19.1.0**: Latest React with concurrent features and improved performance
- **TypeScript**: Full type safety across the application
- **Vite 7.0.4**: Lightning-fast build tool with Hot Module Replacement

### State Management

- **TanStack Router 1.128.0**: Type-safe routing with automatic code splitting
- **Zustand 5.0.6**: Lightweight state management for local state
- **TanStack Query 5.83.0**: Server state management with intelligent caching

### UI Architecture - Nocta UI

#### Design Philosophy
- **Copy-paste Components**: Direct project integration for complete customization control
- **WCAG 2.1 AA Compliance**: Full accessibility with keyboard navigation and screen reader support
- **Dark Mode First**: Automatic system detection with manual override
- **TypeScript Native**: Intuitive APIs with comprehensive type safety
- **Performance Optimized**: Minimal complexity, maximum efficiency

#### Component Ecosystem
- **Form Elements**: Button, Input, Textarea, Checkbox, Select, Switch with validation
- **Layout Components**: Card, Sheet, Dialog, Tabs, Table, Breadcrumb
- **Feedback Systems**: Alert, Badge, Toast, Spinner, Progress, Tooltip
- **Interactive Elements**: Popover and context-aware components

#### Design System
- **Charcoal Color Palette**: OKLCH color space implementation
- **TomatoGrotesk Typography**: Consistent, professional appearance
- **Mobile-first Responsive**: Adaptive layouts for all screen sizes
- **Tailwind CSS 4.1.11**: Utility-first styling with custom configuration

## Data Flow Architecture

### Request Lifecycle

1. **Client Request**: React frontend initiates API call
2. **Authentication**: JWT token validation and permission checking
3. **Rate Limiting**: Request throttling and abuse prevention
4. **Route Handling**: Axum router processes the request
5. **Business Logic**: Service layer processes the operation
6. **Database Access**: Diesel ORM executes type-safe queries
7. **Response**: JSON response with appropriate status codes

### Real-time Data Flow

1. **WebSocket Connection**: Client establishes authenticated connection
2. **Subscription Management**: Client subscribes to specific data streams
3. **Event Generation**: Backend generates events for data changes
4. **Permission Filtering**: Events filtered based on user permissions
5. **Event Broadcast**: Authorized events sent to subscribed clients
6. **Client Update**: Frontend updates UI with real-time data

## Security Architecture

### Defense in Depth

LunarBase implements multiple security layers:

1. **Network Security**: HTTPS, secure cookies, CORS policies
2. **Authentication Security**: Multi-factor authentication, secure session management
3. **Authorization Security**: Granular permissions, role-based access control
4. **Data Security**: Encryption at rest, secure data transmission
5. **Application Security**: Input validation, SQL injection prevention
6. **Monitoring Security**: Audit logging, intrusion detection

### Threat Mitigation

- **Brute Force Attacks**: Account lockout and rate limiting
- **Session Hijacking**: Secure cookie configuration and token rotation
- **SQL Injection**: Parameterized queries and input validation
- **XSS Attacks**: Content Security Policy and input sanitization
- **CSRF Attacks**: SameSite cookies and token validation
- **Data Breaches**: Encryption at rest and access logging

## Performance Architecture

### Backend Performance

- **Async Processing**: Tokio runtime for concurrent request handling
- **Connection Pooling**: Efficient database connection management
- **Query Optimization**: Diesel ORM with compile-time query validation
- **Caching Strategy**: In-memory caching for frequently accessed data
- **Resource Management**: Memory-efficient data structures

### Frontend Performance

- **Code Splitting**: Automatic route-based code splitting with TanStack Router
- **State Optimization**: Efficient state management with Zustand
- **Query Caching**: Intelligent server state caching with TanStack Query
- **Component Optimization**: Performance-optimized Nocta UI components
- **Bundle Optimization**: Vite build optimization and tree shaking

## Scalability Considerations

### Horizontal Scaling

- **Stateless Design**: Backend services designed for horizontal scaling
- **Database Scaling**: SQLCipher with potential for read replicas
- **Load Balancing**: Support for multiple backend instances
- **CDN Integration**: Static asset distribution

### Vertical Scaling

- **Resource Efficiency**: Rust's memory safety and performance
- **Connection Management**: Efficient WebSocket connection handling
- **Query Optimization**: Database query performance tuning
- **Caching Strategies**: Multi-level caching implementation

## Development Architecture

### Development Workflow

- **Type Safety**: End-to-end TypeScript coverage
- **API Documentation**: Automatic OpenAPI generation
- **Testing Strategy**: Comprehensive test coverage with Rust and TypeScript
- **Development Tools**: Hot reload, debugging, and profiling tools

### Deployment Architecture

- **Container Support**: Docker containerization for consistent deployment
- **Environment Configuration**: Flexible configuration management
- **Health Checks**: Application health monitoring and reporting
- **Graceful Shutdown**: Proper resource cleanup on termination

---

This architecture provides a robust foundation for secure, scalable, and maintainable database management while delivering exceptional performance and user experience through the Nocta UI component library.