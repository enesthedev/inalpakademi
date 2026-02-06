# 🎨 Design and UI System

Inalp has a design language focused on trust and professionalism, reflecting the [Preply](https://preply.com/) aesthetic.

## 🎨 Color Palette (Blue Tones)

The project is based on blue tones defined in `globals.css`.
*   **Primary:** Trustworthy dark blue (Preply Blue).
*   **Secondary:** Light blue / Sky blue (For highlights and backgrounds).
*   **Accent:** Orange or yellow (For CTA buttons - Optional/Preply style).
*   **Neutral:** White, Gray, and Black tones (For text and cards).

## 🧩 UI Components

### Core Components
All components should give a "Premium" feel and have rounded corners (rounded-lg or rounded-xl).

*   **Buttons:**
    *   `default`: Solid Primary Blue background, White text.
    *   `outline`: Blue border, Blue text, Transparent background.
    *   `ghost`: Transparent background, Blue text on hover.
*   **Cards:**
    *   Light shadowing (shadow-md or shadow-lg).
    *   White background, border-gray-100.
    *   Hover state with lift effect (transform -translate-y-1).
*   **Inputs:**
    *   Wide and spacious input areas.
    *   Blue border ring on focus state.

### Page Structures

#### 1. Landing Page
*   **Navbar:** Logo (Left), Menu (Center), "Login" / "Join Us" Buttons (Right). Sticky position.
*   **Hero:**
    *   Left: Engaging headline + Subtitle + Application Buttons.
    *   Right: Happy student/tutor images (Hero Image).
*   **Grid Section:** Card structure introducing services and features.

#### 2. Application Forms (Multi-step)
Forms should have a clean, step-by-step structure that doesn't distract the user.

*   **Layout:** Central form container, progress bar at top.
*   **Steps:**
    1.  **Personal Information:** First Name, Last Name, Email, Phone.
    2.  **Details:**
        *   *Tutor:* Area of expertise, Years of experience, CV upload.
        *   *Student:* Target course, Level, Goals.
    3.  **Confirmation/Summary:** Review of entered information.

## 📦 Database Schema

### Neon PostgreSQL + Drizzle ORM

### Applications Table
| Field | Type | Description |
|-------|------|-------------|
| `id` | UUID | Primary key (auto-generated) |
| `type` | enum | 'tutor', 'student' |
| `status` | enum | 'pending', 'approved', 'rejected' |
| `full_name` | varchar(255) | Full Name |
| `email` | varchar(255) | Contact email |
| `phone` | varchar(50)? | Phone (optional) |
| `details` | text (JSON) | Detailed data varying by form type |
| `created_at` | timestamp | Application date |
| `updated_at` | timestamp | Last update |

### Enum Definitions
```sql
CREATE TYPE application_type AS ENUM ('tutor', 'student');
CREATE TYPE application_status AS ENUM ('pending', 'approved', 'rejected');
```

## 🔐 Admin Panel

### Access
- **URL:** `/panel`
- **Auth:** Session-based authentication
- **Protected Routes:** `/panel/*`

### Page Structure
| Route | Description |
|-------|-------------|
| `/panel` | Dashboard (statistics) |
| `/panel/basvurular` | Application list |
| `/panel/basvurular/[id]` | Application detail |
| `/giris` | Admin login page |

### Layout
- **Sidebar:** Fixed navigation on the left
- **Header:** Breadcrumb and user info at top
- **Main:** Page content

## 🧱 Current Landing Page Sections

The landing page currently includes the following implemented sections:

| Section | File | Description |
|---------|------|-------------|
| Hero | Inline in `page.tsx` | Main banner with headline and CTAs (Static) |
| Universities Marquee | `universities-marquee.tsx` | Scrolling university logos from `universities.json` (Dynamic) |
| Steps | `steps-section.tsx` | 3-step cards with icons (Static) |
| Tutors | `tutors-section.tsx` | Carousel with tutor cards, ratings, and student count from `tutors.json` (Dynamic) |
| Testimonials | `testimonials-section.tsx` | User reviews marquee from `testimonials.json` (Dynamic) |
| FAQ | `faq-section.tsx` | Accordion FAQ from `faq.json` (Dynamic) |
| CTA | `cta-section.tsx` | Final call-to-action section (Static) |
