# 🧩 Bileşen Karşılaştırması ve Geliştirme Analizi

Bu belge, `example/` dizinindeki referans tasarım ile mevcut `app/[locale]/components` yapısını karşılaştırarak eksikleri ve gelişim planını içerir.

## 📊 Karşılaştırma Özeti

| Bölüm | Mevcut Durum (Inalp) | Referans (Example) | Durum |
|-------|----------------------|--------------------|-------|
| **Header** | `Navbar`: Simple, transparent/sticky. | `Header`: Top bar (tel no), daha geniş layout. | 🟡 Geliştirilebilir |
| **Hero** | Gradient arka plan, 2 sütun (Text + Image). | Solid Navy Blue (#2F4B9A), Merkez odaklı, Avatar kanıtlı. | 🔴 Tasarım Farkı |
| **Stats** | 4 Kartlı Grid (Icon + Value). | `+8000 kullanıcı` (Hero içinde entegre). | 🟡 Birleştirilebilir |
| **Steps** | Yok (Features var). | Dark Section (#1E2A5A), Numaralı adımlar (1-2-3). | 🔴 Eksik |
| **Courses** | Yok. | "Aktif Dersler": Detaylı Ders Kartları (Tarih, Eğitmen, Konum). | 🔴 Eksik |
| **Stories** | Yok. | "Başarı Hikayelerimiz": Dikey Görsel Grid + Gradient Overlay. | 🔴 Eksik |
| **FAQ** | Yok. | Accordion yapısı. | 🔴 Eksik |
| **Reviews** | `Marquee`: Kayan yazı şeridi (User Request). | Masonry Grid: 3 sütunlu kart yapısı. | 🟢 Alternatifli |

## 🛠️ Tasarım & Semantic HTML İyileştirmeleri

Referans tasarımda kullanılan **Deep Blue / Navy** renk paleti ve **Kart Detayları** projenin "Premium Eğitim Platformu" algısını güçlendirmektedir.

### Renk Paleti Revizyonu
Mevcut Teal/Cyan tonları yerine referansın koyu mavi tonları ana renk yapılmalı:
*   Primary: `#2F4B9A` (Royal Blue)
*   Dark/Surface: `#1E2A5A` (Navy)
*   Accent: `#F59E0B` (Yellow/Gold - Yıldızlar için)

## 📅 Uygulama Planı (Fazlar)

### Phase 2.1: Tasarım Dili & Renk Güncellemesi
*   `globals.css`: Renk değişkenlerini referans tasarıma (`#2F4B9A`, `#1E2A5A`) göre güncelle.
*   `Button` bileşenlerini koyu mavi/gold uyumuna çek.

### Phase 2.2: Hero & Steps Dönüşümü
*   **HeroSection Revizyonu:**
    *   Arka planı koyu mavi yap.
    *   Metni merkeze al: "Sınavdan Korkuyor Musun?".
    *   Avatar Stack (Students) ve Yıldız ikonlarını ekle.
*   **StepsSection Eklemesi:**
    *   Koyu zeminli, büyük numaralı (1, 2, 3) adım bileşeni oluştur.

### Phase 2.3: Zengin İçerik Bileşenleri
*   **CourseCard Bileşeni:** Tarih, Saat, Konum ve Eğitmen bilgisini içeren detaylı kart tasarımı.
*   **SuccessStories Bileşeni:** `next/image` kullanan dikey poster kartları.
*   **FAQ Bileşeni:** Shadcn `Accordion` kullanılarak SSS bölümü.

### Phase 2.4: İnce Ayarlar
*   `Marquee` vs `Masonry` kararı: Kullanıcı Marquee istemişti, ancak "Yorumlar" sayfasında Masonry kullanılabilir. Ana sayfada Marquee kalabilir.
*   `Navbar` üstüne TopBar eklenebilir.
