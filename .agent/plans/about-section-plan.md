# 📋 "İnalp Akademi Nedir?" Bölümü Ekleme Planı

> **Oluşturulma Tarihi:** 2026-02-06
> **Hedef:** Referans tasarımdaki "İnalp Akademi Nedir" bölümünü mevcut Landing Page'e uyarlayarak Eğitmenler section'ının üstüne eklemek.

---

## 📊 Bölüm Analizi (Beklenen Yapı)

### Genel Özellikler
- **Konum:** Steps Section ile Tutors Section arasında
- **Düzen:** Split layout (Sol: Görsel/İllüstrasyon, Sağ: İçerik)
- **Amaç:** Platformun ne olduğunu ve sağladığı değeri açıklamak

### İçerik Yapısı (Önerilen)
1. **Başlık:** "İnalp Akademi Nedir?"
2. **Alt Başlık/Açıklama:** Platformun kısa tanımı (1-2 cümle)
3. **Özellik Listesi:** 3-4 anahtar özellik (ikonlu)
   - Birebir Ders Deneyimi
   - Derece Yapmış Eğitmenler
   - Kişiselleştirilmiş Ders Planı
   - Esnek Zamanlama

### Görsel Öğeler
- Sol tarafta: İllüstrasyon veya öğrenci/eğitmen görseli
- İkon seti: `lucide-react` (Users, GraduationCap, Calendar, Target vb.)

---

## 🎨 Tasarım Detayları

### Renk Şeması
- Arka Plan: `bg-muted/30` veya `bg-background` (nötr)
- Başlık: `text-foreground` + `text-primary` vurgu
- İkonlar: `text-primary`
- Açıklama: `text-muted-foreground`

### Boyutlandırma (Mevcut Sisteme Uyumlu)
- Section padding: `py-16 lg:py-24`
- Başlık: `text-2xl sm:text-3xl lg:text-4xl`
- Açıklama: `text-base`
- İkon Container: `w-12 h-12`

### Layout
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   ┌──────────────────┐    ┌──────────────────────────────┐  │
│   │                  │    │  İnalp Akademi Nedir?        │  │
│   │                  │    │                              │  │
│   │    [İllüstrasyon │    │  Kısa açıklama paragrafı...  │  │
│   │     veya         │    │                              │  │
│   │     Görsel]      │    │  ✓ Özellik 1                 │  │
│   │                  │    │  ✓ Özellik 2                 │  │
│   │                  │    │  ✓ Özellik 3                 │  │
│   │                  │    │  ✓ Özellik 4                 │  │
│   └──────────────────┘    └──────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 Uygulama Adımları

### Adım 1: Bileşen Oluşturma
- **Dosya:** `app/[locale]/(public)/components/sections/about-section.tsx`
- **Yapı:**
  - Sol: `next/image` ile placeholder veya illüstrasyon
  - Sağ: Başlık + Açıklama + Özellik Grid'i

### Adım 2: Özellik Listesi Yapısı
```tsx
const features = [
  {
    icon: Users,
    title: "Birebir Ders",
    description: "Kişiye özel odaklanmış eğitim deneyimi"
  },
  // ...
];
```

### Adım 3: Sayfa Entegrasyonu
- **Dosya:** `app/[locale]/(public)/page.tsx`
- **Konum:** `<StepsSection />` sonrası, `<TutorsSection />` öncesi

### Adım 4: Görsel Ekleme (Opsiyonel)
- İllüstrasyon için `generate_image` kullanılabilir
- Veya placeholder gradient/pattern ile başlanabilir

---

## 📝 Örnek İçerik Önerisi

### Başlık
> İnalp Akademi **Nedir?**

### Açıklama
> Türkiye'nin en iyi tıp fakültelerinde derece yapmış öğrencilerden birebir ders alabileceğiniz online eğitim platformu.

### Özellikler
| İkon | Başlık | Açıklama |
|------|--------|----------|
| Users | Birebir Dersler | Yalnızca siz ve eğitmeniniz |
| GraduationCap | Uzman Eğitmenler | Başarı kanıtlanmış mentörler |
| Calendar | Esnek Program | Size uygun saatlerde dersler |
| Target | Hedef Odaklı | Sınava özel strateji ve içerik |

---

## ✅ Checklist
- [x] `about-section.tsx` bileşeni oluşturuldu
- [x] Özellik listesi ve ikonlar tanımlandı
- [x] Split layout (responsive) uygulandı
- [x] `page.tsx`'e entegre edildi
- [ ] Görsel/illüstrasyon eklendi (placeholder mevcut)
