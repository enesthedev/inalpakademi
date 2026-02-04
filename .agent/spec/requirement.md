# 🎯 Proje Gereksinimleri

**Inalp**, [Preply](https://preply.com/) modelini baz alan, eğitmenler ve öğrenciler için modern bir online eğitim platformudur.

## 🚀 Temel Hedefler

1.  **Premium Kullanıcı Deneyimi:** Mavi tonların hakim olduğu, güven veren ve modern bir arayüz (Preply estetiği).
2.  **Yüksek Dönüşüm:** Etkileyici bir ana sayfa ve optimize edilmiş başvuru süreçleri.
3.  **Kolay Erişim:** `next-intl` ile yönetilen lokalize rotalar.

## 📋 Özellikler

### 1. Ana Sayfa (Landing Page)
*   **Referans:** [v0 Eğitim Website Tasarımı](https://v0-egitim-website-design.vercel.app/)
*   **Bileşenler:**
    *   **Hero Section:** Çarpıcı manşet, dinamik görseller, temiz CTA butonları.
    *   **İstatistikler/Güven:** Platformun başarısını gösteren sayılar (Öğrenci sayısı, Eğitmen sayısı vb.).
    *   **Öne Çıkanlar:** Platformun avantajlarını anlatan ızgara (grid) yapısı.
    *   **Testimonials (Referanslar):** Kullanıcı yorumları.
    *   **Footer:** Preply benzeri geniş ve bilgilendirici alt bilgi alanı.

### 2. Başvuru Formları
İki farklı kullanıcı grubu için özelleştirilmiş başvuru süreçleri:

#### A. Eğitmen Başvuru Formu
*   Eğitmenlerin uzmanlık alanlarını, deneyimlerini ve müsaitliklerini belirttikleri detaylı form.
*   Çok adımlı (Multi-step) yapı olabilir.

#### B. Öğrenci/Kurum Başvuru Formu
*   Eğitim almak isteyenlerin ihtiyaçlarını belirttikleri form.
*   Daha hızlı ve pratik başvuru süreci.

### 3. Teknik Gereksinimler
*   **Lokalizasyon:** Sadece rota yapılandırması için `next-intl` kullanılacak. İçerik çevirisi öncelikli değil (veya statik).
*   **Tasarım Dili:** "Mavili tonlar" (Blue Tones). `tailwind.config.ts` ve `globals.css` bu temaya uygun olmalı.
