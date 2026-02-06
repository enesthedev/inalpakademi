# Inalp Agent Configuration

> **Last Updated:** 2026-02-06
> **Version:** 2.1.0
> **Location:** `AGENT.md` (Root)

This file is the main configuration and reference document that guides the AI agent's behavior. Project context and rules are maintained modularly under the `.agent/` directory.

## 🎯 Project Summary
**Inalp** is a modern education platform similar to [Preply](https://preply.com/). It features a user-friendly, premium design dominated by blue tones.

**Key Features:**
*   **Design:** Based on Preply, blue tones dominate.
*   **Content:**
    *   Modern landing page ([Reference Design](https://v0-egitim-website-design.vercel.app/))
    *   Two comprehensive application forms.
*   **Technical:** `next-intl` (Route localization only), Next.js, Tailwind CSS.

## 📂 Context Structure (.agent/)

| Directory/File | Description |
|----------------|-------------|
| `spec/requirement.md` | Project requirements, user stories, and goals |
| `spec/design.md` | UI/UX guidelines, color palette, component hierarchy, and form structures |
| `spec/tasks.md` | Pending tasks (TODO), current work plan |
| `wiki/architecture.md` | Technology stack, architectural decisions (Auth, i18n), folder structure |
| `plans/` | Development phases and detailed analyses |
| `links/resources.md` | Design references and resources |

## 📜 Commands

```bash
# Development
bun run dev

# Build
bun run build

# Lint
bun run lint
```

## 📌 Coding Standards

1. **File Naming:** kebab-case (e.g., `application-form.tsx`)
2. **Component Naming:** PascalCase (e.g., `ApplicationForm`)
3. **Single Component Rule:** Each file should contain ONLY ONE React component (export default). Multiple components should not be defined in the same file.
4. **Data Security (Don't Trust Client):** Never trust data from the client; always validate with Zod in Server Actions.
5. **Type Safety (Models):** Server Actions and API responses must be type-safe through defined Models/Interfaces, even for mock data.
6. **Mock Data Management:** Mock data should NOT be hardcoded in code files (.ts/.tsx). Data should be stored in JSON format in the `data/` folder and read from there.
7. **Language:** Turkish UI texts, English code/comments
8. **Styling:** `Tailwind CSS` + `globals.css` (Global variables).
9. **Import Order:**
   - React/Next.js
   - External packages
   - Internal modules (@ alias)
   - Relative imports
10. **Component Structure:**
   - Props interface
   - Component function
   - Helper functions
11. **Server Actions:** With `"use server"` directive.
12. **Client Components:** With `"use client"` directive.
13. **Comments:** Comments should NOT be present in code (except for complex logic).

## 🔄 Update History

| Date | Change |
|------|--------|
| 2026-02-06 | Implemented Steps section redesign (3-step cards with icons), Universities Marquee (circular logos), and Tutors Carousel (embla-carousel with ratings/student count). |
| 2026-02-06 | UI improvements: Updated testimonials card styling, adjusted hero section height, fixed Marquee Tailwind v4 syntax. |
| 2026-02-05 | Implemented Public Layout Restructure: Created `(public)` group, added `tutors.json`, simplified sections. |
| 2026-02-05 | Created Public Layout Restructure Plan (5 phases) - see `.agent/plans/public-layout-restructure.md` |
| 2026-02-05 | Translated all documentation to English. Updated project structure and component inventory. |
| 2026-02-04 | Inalp project started. Agent configuration updated according to Preply and new design requirements. |
| 2026-02-04 | Phase 1 & 2 completed: Formik/Zod installed, globals.css updated, Landing Page created. |
| 2026-02-04 | Coding standards updated: Single component rule, Mock data management (JSON), Server Action typing, and Don't Trust Client principles added. |
| 2026-02-04 | Admin Panel analysis completed: 5-phase development plan created (Neon PostgreSQL, Auth, Layout, CRUD, Form Integration). |
