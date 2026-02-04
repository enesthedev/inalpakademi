# 🎨 Tasarım ve UI Sistemi

Inalp, [Preply](https://preply.com/) estetiğini yansıtan, güven ve profesyonellik odaklı bir tasarım diline sahiptir.

## 🎨 Renk Paleti (Mavi Tonları)

Proje `globals.css` içerisinde tanımlı mavi tonlarını temel alır.
*   **Primary:** Güven veren koyu mavi (Preply Blue).
*   **Secondary:** Açık mavi / Gök mavisi (Vurgular ve arka planlar için).
*   **Accent:** Turuncu veya sarı (CTA butonları için - Opsiyonel/Preply tarzı).
*   **Neutral:** Beyaz, Gri ve Siyah tonları (Metinler ve kartlar).

## 🧩 UI Bileşenleri

### Temel Bileşenler
Tüm bileşenler "Premium" hissi vermeli ve yuvarlatılmış köşelere (rounded-lg veya rounded-xl) sahip olmalıdır.

*   **Buttons:**
    *   `default`: Solid Primary Blue background, White text.
    *   `outline`: Blue border, Blue text, Transparent background.
    *   `ghost`: Transparent background, Blue text on hover.
*   **Cards:**
    *   Hafif gölgelendirme (shadow-md veya shadow-lg).
    *   Beyaz arka plan, border-gray-100.
    *   Hover durumunda yukarı kalkma efekti (transform -translate-y-1).
*   **Inputs:**
    *   Geniş ve ferah input alanları.
    *   Focus durumunda mavi border ring.

### Sayfa Yapıları

#### 1. Ana Sayfa (Landing)
*   **Navbar:** Logo (Sol), Menü (Orta), "Giriş Yap" / "Bize Katıl" Butonları (Sağ). Sticky position.
*   **Hero:**
    *   Sol: İlgi çekici başlık + Alt başlık + Başvuru Butonları.
    *   Sağ: Mutlu öğrenci/eğitmen görselleri (Hero Image).
*   **Grid Section:** Hizmetleri ve özellikleri tanıtan kart yapısı.

#### 2. Başvuru Formları (Multi-step)
Formlar, kullanıcının odağını dağıtmayacak şekilde sade ve adım adım ilerleyen bir yapıda olmalıdır.

*   **Layout:** Merkezi form container, ilerleme çubuğu (progress bar) üstte.
*   **Adımlar:**
    1.  **Kişisel Bilgiler:** Ad, Soyad, Email, Telefon.
    2.  **Detaylar:**
        *   *Eğitmen:* Uzmanlık alanı, Deneyim yılı, CV yükleme.
        *   *Öğrenci:* Hedeflenen ders, Seviye, Hedefler.
    3.  **Onay/Özet:** Girilen bilgilerin kontrolü.

## 📦 Veritabanı Şeması (Önerilen)

*Mevcut Supabase yapısı üzerine:*

### Applications Tablosu
| Alan | Tip | Açıklama |
|------|-----|----------|
| `id` | UUID | Primary key |
| `type` | enum | 'tutor', 'student' |
| `status` | enum | 'pending', 'approved', 'rejected' |
| `full_name` | string | Ad Soyad |
| `email` | string | İletişim e-postası |
| `phone` | string? | Telefon |
| `details` | jsonb | Form tipine göre değişen detaylı veriler |
| `created_at` | timestamp | Başvuru tarihi |
