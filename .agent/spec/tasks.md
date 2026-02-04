# ✅ Bekleyen İşler ve Yol Haritası

## 📌 Phase 1: Kurulum & Temel Altyapı
- [x] Temiz, güncel mimari (Next 16, Proxy Chain).

## ✅ Phase 2: Tasarım Revizyonu (Example Referanslı) - TAMAMLANDI

> **Amaç:** `example/` dizinindeki "Deep Blue" premium dizaynı uygulamak.

- [x] **Renk & Stil Güncellemesi**
    - [x] `globals.css`: Primary `oklch(0.40 0.12 260)` (Deep Blue), Secondary `oklch(0.25 0.10 260)` (Navy).
    - [x] `surface` ve `surface-alt` arka plan renkleri eklendi.
    - [x] Accent Gold (`oklch(0.75 0.18 85)`) yıldızlar için.

- [x] **Hero Section Dönüşümü**
    - [x] Center-aligned layout.
    - [x] Solid Primary arka plan.
    - [x] Avatar Stack + Yıldızlar rating göstergesi.

- [x] **Yeni Bölümler (Tamamlandı)**
    - [x] `components/sections/steps-section.tsx`: Koyu zeminli, 3 adımlı süreç.
    - [x] `components/sections/active-courses-section.tsx`: Detaylı ders kartları (Tarih, Eğitmen, Konum).
    - [x] `components/sections/success-stories-section.tsx`: Görsel ağırlıklı başarı hikayeleri.
    - [x] `components/sections/faq-section.tsx`: Sıkça Sorulan Sorular (Accordion).

- [x] **Server Actions (Zod Validated)**
    - [x] `actions/courses.ts`
    - [x] `actions/success-stories.ts`
    - [x] `actions/faq.ts`

- [x] **Mock Data (JSON)**
    - [x] `data/courses.json`
    - [x] `data/success-stories.json`
    - [x] `data/faq.json`

## 🗓️ Phase 3: Başvuru Formları
- [ ] Formik + Zod altyapısı ile çok adımlı formlar.
- [ ] Eğitmen Başvuru Formu (`/basvuru/egitmen`)
- [ ] Öğrenci Başvuru Formu (`/basvuru/ogrenci`)
