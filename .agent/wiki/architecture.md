# 🏗️ Proje Mimarisi

**Inalp**, modern web teknolojileri ve proxy-chain mimarisi üzerine kurulu, kullanıcı odaklı bir eğitim platformudur.

## 🛠️ Teknoloji Stack'i

| Kategori | Teknoloji | Notlar |
|----------|-----------|----------|
| **Framework** | Next.js 16 (App Router) | Server Components öncelikli |
| **Runtime** | Bun | Paket yönetimi ve çalıştırma |
| **Dil** | TypeScript | Strict mode aktif |
| **Stil** | Tailwind CSS v4 | **Mavi tonlar** ve Preply tasarım sistemi |
| **UI** | Radix UI / Shadcn UI | Erişilebilirlik odaklı |
| **Form Yönetimi** | Formik | Type-safe form yönetimi |
| **Validasyon** | Zod | Şema tabanlı doğrulama |
| **Routing & i18n** | next-intl | **Proxy Chain** üzerinden sadece rota lokalizasyonu |
| **Middleware** | Proxy Chain Pattern | `lib/proxy-chain` ile modüler middleware yönetimi |
| **Veritabanı** | Supabase (PostgreSQL) | Auth ve Data |

## 📁 Proje Yapısı

```
inalp/
├── AGENT.md                   # Agent Root Configuration
├── .agent/                    # Spec, Design, Tasks
├── app/
│   ├── [locale]/              # i18n Routing Kökü
│   │   ├── layout.tsx         # Root Layout (NextIntlClientProvider)
│   │   ├── page.tsx           # Landing Page
│   │   ├── basvuru/           # Başvuru Formları
│   ├── components/
│   │   └── ui/                # Temel UI Elemanları (Shadcn/Radix)
│   ├── proxies/               # Middleware Proxy'leri (Auth, i18n vb.)
│   ├── routes.ts              # Rota Sabitleri
│   └── globals.css            # Tailwind v4 Theme Config
├── lib/
│   ├── i18n/                  # Routing ve Pathnames konfigürasyonu
│   └── proxy-chain/           # Middleware Zincir Altyapısı
└── public/                    # Statik dosyalar
```

## 🔐 Middleware & Proxy Chain

Projede merkezi bir `middleware.ts` yerine, `lib/proxy-chain` altında kurgulanan ve `app/proxies` altında tanımlanan modüler proxy yapıları kullanılır.

**Aktif Proxy'ler:**
1.  **with18n**: `next-intl` middleware entegrasyonu.
2.  *(Eklenecek)* **withAuth**: Supabase session kontrolü.

## 🎨 Tasarım Prensipleri

1.  **Global Tema:** Renkler ve fontlar `app/globals.css` içindeki `@theme` bloğunda yönetilir.
2.  **Mavi Tonlar:** Güven ve profesyonellik algısı için mavi ağırlıklı palet kullanılır.
