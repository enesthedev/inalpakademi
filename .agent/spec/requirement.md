# 🎯 Project Requirements

**Inalp** is a modern online education platform based on the [Preply](https://preply.com/) model, designed for tutors and students.

## 🚀 Core Goals

1.  **Premium User Experience:** A modern, trustworthy interface dominated by blue tones (Preply aesthetic).
2.  **High Conversion:** An impressive landing page and optimized application processes.
3.  **Easy Access:** Localized routes managed via `next-intl`.

## 📋 Features

### 1. Landing Page
*   **Reference:** [v0 Education Website Design](https://v0-egitim-website-design.vercel.app/)
*   **Components:**
    *   **Hero Section:** Striking headline, dynamic visuals, clean CTA buttons.
    *   **Statistics/Trust:** Numbers showing platform success (Student count, Tutor count, etc.).
    *   **Highlights:** Grid structure explaining platform advantages.
    *   **Testimonials:** User reviews and feedback.
    *   **Footer:** Wide and informative footer area similar to Preply.

### 2. Application Forms
Customized application processes for two different user groups:

#### A. Tutor Application Form
*   Detailed form where tutors specify their expertise, experience, and availability.
*   May have a multi-step structure.

#### B. Student/Institution Application Form
*   Form where those seeking education specify their needs.
*   Faster and more practical application process.

### 3. Technical Requirements
*   **Localization:** `next-intl` will be used for route configuration only. Content translation is not a priority (or static).
*   **Design Language:** "Blue Tones". `tailwind.config.ts` and `globals.css` must conform to this theme.
