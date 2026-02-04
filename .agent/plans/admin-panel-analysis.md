# 🎯 Yönetim Paneli Analizi

> **Oluşturulma Tarihi:** 2026-02-04
> **Hedef:** Vercel Neon PostgreSQL ile form başvurularını yönetebilen bir admin paneli

## 📊 Mevcut Durum Analizi

### Proje Stack'i
| Teknoloji | Versiyon/Not |
|-----------|--------------|
| Framework | Next.js 16 (App Router) |
| Runtime | Bun |
| UI | Tailwind CSS v4 + Shadcn UI |
| Form | Formik + Zod |
| i18n | next-intl (rota lokalizasyonu) |
| Auth | *Henüz yok* |
| Database | *Supabase planlanmış, Neon'a geçilecek* |

### Mevcut Form Yapısı
Design.md'de tanımlı `Applications` tablosu:

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

### Eksik Bileşenler
1. **Database Bağlantısı:** Neon PostgreSQL entegrasyonu yok
2. **Auth Sistemi:** Admin girişi için auth gerekli
3. **Admin Layout:** Panel için ayrı bir layout yok
4. **CRUD Actions:** Başvuru okuma/güncelleme server action'ları yok
5. **Data Table:** Başvuruları listelemek için tablo bileşeni yok

---

## 🎯 Panel Gereksinimleri

### Fonksiyonel Gereksinimler
1. **Başvuru Listesi:** Tüm başvuruları tablo formatında görüntüleme
2. **Filtreleme:** Tip (tutor/student) ve status (pending/approved/rejected) bazında filtreleme
3. **Arama:** İsim ve email'e göre arama
4. **Detay Görüntüleme:** Başvurunun tüm detaylarını modal veya ayrı sayfada görme
5. **Status Güncelleme:** Başvuru durumunu değiştirme (pending → approved/rejected)
6. **Pagination:** Sayfalama desteği

### Teknik Gereksinimler
1. **Neon PostgreSQL:** Drizzle ORM veya Prisma ile bağlantı
2. **Authentication:** Sadece admin kullanıcıları için erişim (başlangıçta basit)
3. **Server Actions:** Tüm veritabanı işlemleri server action üzerinden
4. **Type Safety:** Zod şemaları ile tip güvenliği
5. **Responsive:** Mobil uyumlu panel tasarımı

---

## 📁 Önerilen Klasör Yapısı

```
app/
├── [locale]/
│   └── panel/                    # Admin Panel Kökü
│       ├── layout.tsx            # Panel Layout (Sidebar, Header)
│       ├── page.tsx              # Dashboard/Özet
│       ├── basvurular/           # Başvuru Yönetimi
│       │   ├── page.tsx          # Başvuru Listesi
│       │   └── [id]/
│       │       └── page.tsx      # Başvuru Detay
│       └── components/           # Panel-specific components
│           ├── sidebar.tsx
│           ├── header.tsx
│           └── applications-table.tsx
├── actions/
│   └── applications.ts           # CRUD Server Actions
lib/
├── db/
│   ├── index.ts                  # Neon bağlantı
│   ├── schema.ts                 # Drizzle şema tanımları
│   └── queries/
│       └── applications.ts       # Sorgu fonksiyonları
types/
└── application.ts                # Application type/interface
```

---

## 🔒 Güvenlik Notları

1. **Don't Trust Client:** Tüm form verileri server-side Zod ile validate edilmeli
2. **Auth Middleware:** Panel rotaları auth koruması altında olmalı
3. **CSRF Protection:** Next.js Server Actions otomatik CSRF koruması sağlar
4. **Rate Limiting:** Başvuru form'unda rate limiting düşünülmeli
