# ✅ Bekleyen İşler ve Yol Haritası

## 📌 Phase 1: Kurulum & Temel Altyapı

- [x] **Proje Temizliği & Hazırlık**
    - [x] Eski bileşenlerin ve dosyaların temizlenmesi.
    - [x] `AGENT.md` ve `.agent` yapısının kurgulanması.

- [x] **Core Mimari Kurulumu**
    - [x] `next.config.ts` ve `package.json` kontrolü (Next 16).
    - [x] `middleware.ts` yerine Proxy Chain yapısının kurulması (`lib/proxy-chain`, `proxy.ts`).
    - [x] `next-intl` entegrasyonu (Routing only).

- [x] **Paket Kurulumları**
    - [x] `formik` ve `zod` paketlerinin kurulması.

- [x] **UI & Tasarım Sistemi (Tailwind v4)**
    - [x] `globals.css`: Preply mavisi tonlarının (hue 200 - Teal/Cyan) tanımlanması.
    - [x] Semantic renkler eklendi: `surface`, `warning`, `success`.

## ✅ Phase 2: Landing Page (Ana Sayfa) - TAMAMLANDI

- [x] **Navbar**
    - [x] Sticky, scroll ile arka plan değişimi.
    - [x] Logo, Navigasyon linkleri, Auth butonları.
    - [x] Mobil menü desteği.

- [x] **Hero Section**
    - [x] Başlık: "Hayalinizdeki Eğitimi Keşfedin".
    - [x] Gradient arka plan, dekoratif blur efektleri.
    - [x] CTA: "Hemen Başla" ve "Eğitmen Ol" butonları.

- [x] **Stats Section**
    - [x] 4 adet istatistik kartı (Öğrenci, Eğitmen, Kategori, Memnuniyet).

- [x] **Features Section**
    - [x] 4 adet özellik kartı.

- [x] **CTA Section**
    - [x] Gradient arka plan üzerinde call-to-action.

- [x] **Footer**
    - [x] 4 sütunlu yapı (Logo, Platform, Destek, Yasal).

## 🗓️ Phase 3: Başvuru Formları (Formik + Zod)

- [ ] **Form Bileşenleri**
    - [ ] `components/form/formik-input.tsx` wrapper.
    - [ ] `components/form/formik-select.tsx` wrapper.
    - [ ] Multi-step form state yönetimi.

- [ ] **Eğitmen Başvuru Formu (`/basvuru/egitmen`)**
    - [ ] Rotanın oluşturulması.
    - [ ] Adım 1: Kimlik & İletişim.
    - [ ] Adım 2: Uzmanlık & Deneyim.
    - [ ] Adım 3: CV Yükleme & Özet.

- [ ] **Öğrenci Başvuru Formu (`/basvuru/ogrenci`)**
    - [ ] Rotanın oluşturulması.
    - [ ] Adım 1: İletişim.
    - [ ] Adım 2: Eğitim Hedefleri & Tercihler.

## ℹ️ Notlar
*   **Next-intl:** Sadece routing için kullanılıyor.
*   **Formlar:** Formik + Zod zorunlu.
