# 🏗️ Proje Mimarisi

**Inalp**, modern web teknolojileri ve proxy-chain mimarisi üzerine kurulu, kullanıcı odaklı bir eğitim platformudur.

## 🛠️ Teknoloji Stack'i

| Kategori | Teknoloji | Notlar |
|----------|-----------|--------|
| **Framework** | Next.js 16 (App Router) | Server Components öncelikli |
| **Runtime** | Bun | Paket yönetimi ve çalıştırma |
| **Dil** | TypeScript | Strict mode aktif |
| **Stil** | Tailwind CSS v4 | **Mavi tonlar** ve Preply tasarım sistemi |
| **UI** | Radix UI / Shadcn UI | Erişilebilirlik odaklı |
| **Form Yönetimi** | Formik | Type-safe form yönetimi |
| **Validasyon** | Zod | Şema tabanlı doğrulama |
| **Routing & i18n** | next-intl | **Proxy Chain** üzerinden sadece rota lokalizasyonu |
| **Middleware** | Proxy Chain Pattern | `lib/proxy-chain` ile modüler middleware yönetimi |
| **Veritabanı** | Neon PostgreSQL | Serverless PostgreSQL (Vercel entegrasyonu) |
| **ORM** | Drizzle ORM | Type-safe veritabanı işlemleri |
| **Auth** | Session-based | Cookie tabanlı basit auth (MVP) |

## 📁 Proje Yapısı

```
inalp/
├── AGENT.md                   # Agent Root Configuration
├── .agent/                    # Spec, Design, Tasks, Plans
├── app/
│   ├── [locale]/              # i18n Routing Kökü
│   │   ├── layout.tsx         # Root Layout (NextIntlClientProvider)
│   │   ├── page.tsx           # Landing Page
│   │   ├── basvuru/           # Başvuru Formları
│   │   │   ├── egitmen/       # Eğitmen başvuru formu
│   │   │   └── ogrenci/       # Öğrenci başvuru formu
│   │   ├── panel/             # Admin Panel
│   │   │   ├── layout.tsx     # Panel layout (sidebar, header)
│   │   │   ├── page.tsx       # Dashboard
│   │   │   └── basvurular/    # Başvuru yönetimi
│   │   └── giris/             # Admin login
│   ├── actions/               # Server Actions
│   ├── components/
│   │   └── ui/                # Temel UI Elemanları (Shadcn/Radix)
│   ├── proxies/               # Middleware Proxy'leri (Auth, i18n vb.)
│   ├── routes.ts              # Rota Sabitleri
│   └── globals.css            # Tailwind v4 Theme Config
├── data/                      # JSON mock data files
├── lib/
│   ├── auth/                  # Authentication utilities
│   ├── db/                    # Database (Drizzle)
│   │   ├── index.ts           # Neon connection
│   │   ├── schema.ts          # Table definitions
│   │   └── migrations/        # Drizzle migrations
│   ├── i18n/                  # Routing ve Pathnames konfigürasyonu
│   └── proxy-chain/           # Middleware Zincir Altyapısı
├── types/                     # TypeScript type definitions
└── public/                    # Statik dosyalar
```

## 🔐 Middleware & Proxy Chain

Projede merkezi bir `middleware.ts` yerine, `lib/proxy-chain` altında kurgulanan ve `app/proxies` altında tanımlanan modüler proxy yapıları kullanılır.

**Aktif Proxy'ler:**
1.  **with18n**: `next-intl` middleware entegrasyonu.
2.  **withAuth**: Panel rotaları için session kontrolü.

## 🎨 Tasarım Prensipleri

1.  **Global Tema:** Renkler ve fontlar `app/globals.css` içindeki `@theme` bloğunda yönetilir.
2.  **Mavi Tonlar:** Güven ve profesyonellik algısı için mavi ağırlıklı palet kullanılır.

## 📊 Veritabanı Mimarisi

### Bağlantı
- **Provider:** Vercel Neon (Serverless PostgreSQL)
- **ORM:** Drizzle ORM (type-safe queries)
- **Connection:** HTTP-based (serverless uyumlu)

### Tablolar
- `applications` - Başvuru kayıtları

## 🔒 Güvenlik

1. **Server Actions:** Tüm veritabanı işlemleri server-side
2. **Zod Validation:** Client verisi her zaman validate edilir
3. **Session Auth:** Cookie-based authentication
4. **Protected Routes:** `/panel/*` rotaları auth korumalı

