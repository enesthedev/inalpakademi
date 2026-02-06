# 🏗️ Project Architecture

**Inalp** is a user-focused education platform built on modern web technologies and proxy-chain architecture.

## 🛠️ Technology Stack

| Category | Technology | Notes |
|----------|------------|-------|
| **Framework** | Next.js 16 (App Router) | Server Components priority |
| **Runtime** | Bun | Package management and execution |
| **Language** | TypeScript | Strict mode enabled |
| **Styling** | Tailwind CSS v4 | **Blue tones** and Preply design system |
| **UI** | Radix UI / Shadcn UI | Accessibility focused |
| **Form Management** | Formik | Type-safe form management |
| **Validation** | Zod | Schema-based validation |
| **Routing & i18n** | next-intl | Route localization only via **Proxy Chain** |
| **Middleware** | Proxy Chain Pattern | Modular middleware management via `lib/proxy-chain` |
| **Database** | Neon PostgreSQL | Serverless PostgreSQL (Vercel integration) |
| **ORM** | Drizzle ORM | Type-safe database operations |
| **Auth** | Session-based | Cookie-based simple auth (MVP) |

## 📁 Project Structure

```
inalp/
├── AGENT.md                   # Agent Root Configuration
├── .agent/                    # Spec, Design, Tasks, Plans
│   ├── spec/                  # Requirements, design, tasks
│   ├── wiki/                  # Architecture documentation
│   ├── workflows/             # Automation workflows
│   └── links/                 # Resources and references
├── app/
│   ├── [locale]/              # i18n Routing Root
│   │   ├── layout.tsx         # Root Layout (NextIntlClientProvider)
│   │   ├── page.tsx           # Landing Page
│   │   ├── components/        # Page-specific components
│   │   │   ├── navbar.tsx     # Navigation bar
│   │   │   ├── footer.tsx     # Footer component
│   │   │   └── sections/      # Landing page sections
│   │   │       ├── hero-section.tsx
│   │   │       ├── stats-section.tsx
│   │   │       ├── features-section.tsx
│   │   │       ├── steps-section.tsx
│   │   │       ├── active-courses-section.tsx
│   │   │       ├── success-stories-section.tsx
│   │   │       ├── testimonials-section.tsx
│   │   │       ├── faq-section.tsx
│   │   │       └── cta-section.tsx
│   │   ├── basvuru/           # Application Forms
│   │   │   ├── egitmen/       # Tutor application form
│   │   │   └── ogrenci/       # Student application form
│   │   ├── panel/             # Admin Panel
│   │   │   ├── layout.tsx     # Panel layout (sidebar, header)
│   │   │   ├── page.tsx       # Dashboard
│   │   │   └── basvurular/    # Application management
│   │   └── giris/             # Admin login
│   ├── actions/               # Server Actions
│   │   ├── courses.ts         # Course data actions
│   │   ├── faq.ts             # FAQ data actions
│   │   ├── success-stories.ts # Success stories actions
│   │   └── testimonials.ts    # Testimonials actions
│   ├── components/
│   │   └── ui/                # Core UI Elements (Shadcn/Radix)
│   ├── proxies/               # Middleware Proxies (Auth, i18n, etc.)
│   ├── routes.ts              # Route Constants
│   ├── utils/                 # Utility functions
│   └── globals.css            # Tailwind v4 Theme Config
├── data/                      # JSON mock data files
│   ├── courses.json           # Course data
│   ├── faq.json               # FAQ data
│   ├── success-stories.json   # Success stories data
│   ├── testimonials.json      # Testimonials data
│   └── settings.json          # Global app configuration (phone, social)
├── lib/
│   ├── i18n/                  # Routing and Pathnames configuration
│   └── proxy-chain/           # Middleware Chain Infrastructure
├── types/                     # TypeScript type definitions
└── public/                    # Static files
```

## 🔐 Middleware & Proxy Chain

Instead of a centralized `middleware.ts`, the project uses modular proxy structures built under `lib/proxy-chain` and defined in `app/proxies`.

**Active Proxies:**
1.  **with18n**: `next-intl` middleware integration.
2.  **withAuth**: Session control for panel routes.

## 🎨 Design Principles

1.  **Global Theme:** Colors and fonts are managed in the `@theme` block within `app/globals.css`.
2.  **Blue Tones:** Blue-heavy palette is used for perception of trust and professionalism.

## 📊 Database Architecture

### Connection
- **Provider:** Vercel Neon (Serverless PostgreSQL)
- **ORM:** Drizzle ORM (type-safe queries)
- **Connection:** HTTP-based (serverless compatible)

### Tables
- `applications` - Application records

## 🔒 Security

1. **Server Actions:** All database operations are server-side
2. **Zod Validation:** Client data is always validated
3. **Session Auth:** Cookie-based authentication
4. **Protected Routes:** `/panel/*` routes are auth protected

## 📦 Data Flow Pattern

```
Client Request
    ↓
Server Action (app/actions/*.ts)
    ↓
Zod Validation (Schema-based)
    ↓
JSON Data (data/*.json)
    ↓
Type-safe Response
    ↓
React Server Component
```

This pattern ensures type safety and data integrity while keeping mock data separate from component code.
