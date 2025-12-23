# System Architecture

## High-Level Overview

```
┌─────────────────────────────────────────────────────────────┐
│                         Internet                             │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    SSL/TLS (Let's Encrypt)                   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    Nginx (Reverse Proxy)                     │
│  - Port 80/443                                               │
│  - SSL termination                                           │
│  - Static file serving                                       │
│  - Gzip compression                                          │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    PM2 (Process Manager)                     │
│  - Auto-restart                                              │
│  - Load balancing                                            │
│  - Monitoring                                                │
│  - Log management                                            │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                  Next.js Application                         │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              Frontend (React)                       │    │
│  │  - Server Components                                │    │
│  │  - Client Components                                │    │
│  │  - Tailwind CSS                                     │    │
│  │  - Shadcn/ui                                        │    │
│  └─────────────────────────────────────────────────────┘    │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              API Routes                             │    │
│  │  - /api/leads (POST)                                │    │
│  │  - Input validation (Zod)                           │    │
│  │  - Rate limiting                                    │    │
│  └─────────────────────────────────────────────────────┘    │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    Prisma ORM                                │
│  - Type-safe queries                                         │
│  - Schema management                                         │
│  - Migrations                                                │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    MySQL Database                            │
│  - Leads table                                               │
│  - User data                                                 │
└─────────────────────────────────────────────────────────────┘
```

## Component Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         app/                                 │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  layout.tsx (Root Layout)                            │   │
│  │  - Metadata                                          │   │
│  │  - Global styles                                     │   │
│  │  - Font configuration                                │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  page.tsx (Home Page)                                │   │
│  │  ├─ Header                                           │   │
│  │  ├─ Hero                                             │   │
│  │  ├─ Stats                                            │   │
│  │  ├─ Services                                         │   │
│  │  ├─ Process                                          │   │
│  │  ├─ CaseStudies                                      │   │
│  │  ├─ ContactForm                                      │   │
│  │  └─ Footer                                           │   │
│  └──────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  api/                                                │   │
│  │  └─ leads/                                           │   │
│  │     └─ route.ts (POST handler)                       │   │
│  │        ├─ Validation (Zod)                           │   │
│  │        ├─ Rate limiting                              │   │
│  │        ├─ Database insert (Prisma)                   │   │
│  │        └─ Response                                   │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow

### Form Submission Flow

```
User fills form
      │
      ▼
Client-side validation
      │
      ▼
POST /api/leads
      │
      ▼
Server-side validation (Zod)
      │
      ├─ Invalid ──► 400 Error
      │
      ▼
Rate limit check
      │
      ├─ Exceeded ──► 429 Error
      │
      ▼
Prisma ORM
      │
      ▼
MySQL Database
      │
      ▼
Success response
      │
      ▼
User sees confirmation
```

## Technology Stack Layers

```
┌─────────────────────────────────────────────────────────────┐
│                    Presentation Layer                        │
│  - React Components                                          │
│  - Tailwind CSS                                              │
│  - Shadcn/ui                                                 │
│  - TypeScript                                                │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    Application Layer                         │
│  - Next.js 14 (App Router)                                   │
│  - Server Components                                         │
│  - Client Components                                         │
│  - API Routes                                                │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    Business Logic Layer                      │
│  - Form validation (Zod)                                     │
│  - Rate limiting                                             │
│  - Data transformation                                       │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    Data Access Layer                         │
│  - Prisma ORM                                                │
│  - Type-safe queries                                         │
│  - Connection pooling                                        │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    Database Layer                            │
│  - MySQL                                                     │
│  - Leads table                                               │
└─────────────────────────────────────────────────────────────┘
```

## Deployment Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Hostinger VPS                             │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │  Nginx (Port 80/443)                               │     │
│  │  - Reverse proxy to Node.js                        │     │
│  │  - SSL termination                                 │     │
│  │  - Static file caching                             │     │
│  └────────────────────────────────────────────────────┘     │
│                         │                                    │
│                         ▼                                    │
│  ┌────────────────────────────────────────────────────┐     │
│  │  PM2                                               │     │
│  │  - Manages Node.js process                         │     │
│  │  - Auto-restart on crash                           │     │
│  │  - Log rotation                                    │     │
│  └────────────────────────────────────────────────────┘     │
│                         │                                    │
│                         ▼                                    │
│  ┌────────────────────────────────────────────────────┐     │
│  │  Node.js (Port 3000)                               │     │
│  │  - Next.js application                             │     │
│  │  - API routes                                      │     │
│  └────────────────────────────────────────────────────┘     │
│                         │                                    │
│                         ▼                                    │
│  ┌────────────────────────────────────────────────────┐     │
│  │  MySQL (Port 3306)                                 │     │
│  │  - Database server                                 │     │
│  │  - Leads data                                      │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## File System Structure

```
/var/www/dataarklabs/
├── .next/                    # Built application
├── app/                      # Next.js app directory
├── components/               # React components
├── lib/                      # Utilities
├── prisma/                   # Database schema
├── public/                   # Static files
├── node_modules/             # Dependencies
├── .env                      # Environment variables
├── package.json              # Dependencies
├── ecosystem.config.js       # PM2 configuration
└── next.config.js            # Next.js configuration
```

## Security Layers

```
┌─────────────────────────────────────────────────────────────┐
│  Layer 1: Network Security                                   │
│  - Firewall (UFW)                                            │
│  - SSL/TLS encryption                                        │
│  - DDoS protection (Hostinger)                               │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  Layer 2: Application Security                               │
│  - Rate limiting (5 requests/hour per IP)                    │
│  - Input validation (Zod)                                    │
│  - XSS protection (React)                                    │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  Layer 3: Database Security                                  │
│  - SQL injection prevention (Prisma)                         │
│  - Parameterized queries                                     │
│  - Connection encryption                                     │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  Layer 4: Data Security                                      │
│  - Environment variables                                     │
│  - Secure password storage                                   │
│  - Regular backups                                           │
└─────────────────────────────────────────────────────────────┘
```

## Monitoring & Logging

```
┌─────────────────────────────────────────────────────────────┐
│                    Application Logs                          │
│  - PM2 logs                                                  │
│  - Console.log output                                        │
│  - Error tracking                                            │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    Server Logs                               │
│  - Nginx access logs                                         │
│  - Nginx error logs                                          │
│  - System logs                                               │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    Database Logs                             │
│  - MySQL query logs                                          │
│  - Slow query logs                                           │
│  - Error logs                                                │
└─────────────────────────────────────────────────────────────┘
```

## Scaling Strategy

### Current Setup (Single Server)
```
Internet → Nginx → PM2 → Next.js → MySQL
```

### Future Scaling Options

#### Option 1: Vertical Scaling
```
Upgrade VPS resources:
- More CPU cores
- More RAM
- Faster disk (SSD)
```

#### Option 2: Horizontal Scaling
```
                    ┌─ Next.js Instance 1
Load Balancer ──────┼─ Next.js Instance 2
                    └─ Next.js Instance 3
                              │
                              ▼
                        MySQL Database
```

#### Option 3: Microservices
```
Frontend (Next.js) ──┐
                     ├─► API Gateway ──► Database
Admin Dashboard ─────┘
```

## Performance Optimization

```
┌─────────────────────────────────────────────────────────────┐
│  Browser                                                     │
│  - Code splitting                                            │
│  - Lazy loading                                              │
│  - Image optimization                                        │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  CDN (Optional)                                              │
│  - Static asset caching                                      │
│  - Global distribution                                       │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  Nginx                                                       │
│  - Gzip compression                                          │
│  - Static file caching                                       │
│  - HTTP/2                                                    │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  Next.js                                                     │
│  - Server-side rendering                                     │
│  - Static generation                                         │
│  - API route optimization                                    │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  Database                                                    │
│  - Connection pooling                                        │
│  - Query optimization                                        │
│  - Indexing                                                  │
└─────────────────────────────────────────────────────────────┘
```

## Backup Strategy

```
┌─────────────────────────────────────────────────────────────┐
│  Daily Backups                                               │
│  - Database dump (mysqldump)                                 │
│  - Application files (tar)                                   │
│  - Environment variables                                     │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  Storage                                                     │
│  - Local: /backups/                                          │
│  - Remote: Cloud storage (optional)                          │
│  - Retention: 30 days                                        │
└─────────────────────────────────────────────────────────────┘
```

## CI/CD Pipeline (Optional)

```
Developer pushes code
      │
      ▼
GitHub Repository
      │
      ▼
GitHub Actions
      │
      ├─ Run tests
      ├─ Build application
      └─ Deploy to server
      │
      ▼
Hostinger VPS
      │
      ├─ Pull latest code
      ├─ Install dependencies
      ├─ Build application
      └─ Restart PM2
      │
      ▼
Live Website
```

## Key Design Decisions

1. **Next.js App Router**: Modern, performant, better DX
2. **TypeScript**: Type safety, better tooling
3. **Prisma ORM**: Type-safe database access
4. **Tailwind CSS**: Utility-first, fast development
5. **PM2**: Reliable process management
6. **Nginx**: Battle-tested reverse proxy
7. **MySQL**: Existing database, proven reliability

## Future Enhancements

- [ ] Admin dashboard in Next.js
- [ ] Email notifications
- [ ] Analytics integration
- [ ] A/B testing
- [ ] Multi-language support
- [ ] Advanced form features
- [ ] CRM integration
- [ ] Automated testing
- [ ] Performance monitoring
- [ ] Error tracking (Sentry)
