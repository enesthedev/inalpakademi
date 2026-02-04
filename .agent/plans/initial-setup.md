# 🏗️ Inalp Başlangıç ve Tasarım Planı

Bu plan, tamamlanan altyapı çalışmalarının üzerine **Tasarım Sistemi** ve **Ana Sayfa** geliştirmelerini hedefler.

---

## ✅ Tamamlanan Adımlar

### 1. Paket Kurulumları
```bash
bun add formik zod
```
**Durum:** ✅ Tamamlandı

### 2. Global Stil & Tema (Tailwind v4)

**Dosya:** `app/globals.css`

Yapılan değişiklikler:
*   Renk paleti Preply tarzı Teal/Cyan mavilerine (hue ~200) güncellendi.
*   Yeni semantic renkler eklendi:
    *   `--surface`: Hafif mavi arka plan alanları için.
    *   `--warning`: Uyarı rengi (Sarı/Turuncu tonu).
    *   `--success`: Başarı rengi (Yeşil tonu).
*   Light ve Dark mode renkleri tutarlı hale getirildi.

**Durum:** ✅ Tamamlandı

### 3. UI Bileşen Kontrolü

Mevcut Shadcn bileşenleri (`Button`, `Input`, `Card`) zaten `rounded-4xl` ve `rounded-2xl` ile yuvarlatılmış köşelere sahip.
Ek düzenleme gerekmedi.

**Durum:** ✅ Tamamlandı

### 4. Ana Sayfa (Landing Page) Geliştirmesi

**Dosya:** `app/[locale]/page.tsx`

Oluşturulan bileşenler:
1.  **Navbar:** Sticky, scroll ile arka plan değişimi, mobil menü.
2.  **Hero Section:** Gradient arka plan, başlık, CTA butonları, istatistik kartları.
3.  **Stats Section:** 4 adet istatistik kartı.
4.  **Features Section:** 4 adet özellik kartı.
5.  **CTA Section:** Full-width gradient call-to-action.
6.  **Footer:** 4 sütunlu footer.

**Durum:** ✅ Tamamlandı

---

## 📋 Sonraki Adımlar (Phase 3)

### Form Altyapısı

Formik ve Zod için reusable komponentler oluşturulacak:

*   `components/form/formik-input.tsx`
*   `components/form/formik-select.tsx`
*   `components/form/formik-textarea.tsx`

### Başvuru Rotaları

*   `app/[locale]/basvuru/egitmen/page.tsx`
*   `app/[locale]/basvuru/ogrenci/page.tsx`
