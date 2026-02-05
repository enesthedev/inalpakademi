# 🖋️ Typography & Serif Font Plan

> **Analiz Tarihi:** 2026-02-05
> **Hedef:** `kantakademi.com` tarzında, section'lar arası ve başlıklar için Serif font kullanarak modern/editorial bir tasarım oluşturmak.

## 📊 Analiz
Mevcut tasarımda sadece Sans-Serif (Geist) font kullanılmaktadır. Bu temiz ve modern dursa da, "premium" ve "eğitim/kurumsal" hissiyatı için Serif fontların stratejik kullanımı (Font Pairing) görsel zenginlik katar.

**Önerilen Font:** `Playfair Display` (Google Fonts)
*   **Neden?** Yüksek kontrastlı, okunabilirliği yüksek ve modern web tasarımlarında "display" font olarak çok popüler. "Premium" algısını destekler.

## 🗺️ Uygulama Planı

### 1. Font Entegrasyonu (`app/[locale]/layout.tsx`)
*   `next/font/google` üzerinden `Playfair_Display` import edilecek.
*   CSS değişkeni olarak tanımlanacak (`--font-playfair`).
*   `RootLayout` içerisinde `body` etiketine eklenecek.

### 2. Tailwind Konfigürasyonu (`app/globals.css`)
*   `@theme` bloğu içerisine `--font-serif` değişkeni eklenecek.
*   Bu sayede `font-serif` sınıfı Tailwind içinde aktif olacak.

```css
@theme inline {
  /* ... diğer tanımlar ... */
  --font-serif: var(--font-playfair); /* Yeni Serif Font */
}
```

### 3. Kullanım Alanları (Design System)
Serif font'un nerelerde kullanılacağı belirlenmeli:

| Alan | Font Tipi | Örnek Class |
|------|-----------|-------------|
| **Section Başlıkları** | Serif | `font-serif text-3xl md:text-5xl font-bold` |
| **Alıntılar (Blockquotes)** | Serif + Italic | `font-serif italic text-xl` |
| **Hero Manşeti** | Serif veya Sans (Tercihe göre) | `font-serif text-6xl` |
| **Normal Metinler** | Sans (Mevcut) | `font-sans` |

### 4. Bileşen Güncellemeleri
Aşağıdaki bileşenlerde başlıklar güncellenecek:
*   `HeroSection` -> Ana başlık
*   `TestimonialsSection` -> Kullanıcı yorumları veya bölüm başlığı
*   `StepsSection` -> Adım başlıkları
*   `ActiveCoursesSection` -> Ders isimleri? (Opsiyonel)

## ✅ Çıktılar
*   [ ] `layout.tsx` güncellendi (Font import).
*   [ ] `globals.css` güncellendi (Theme config).
*   [ ] `design.md` güncellendi (Typography kuralları).
*   [ ] Örnek bir bileşen üzerinde deneme yapıldı.
