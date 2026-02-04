# 🎨 Phase 3: Panel Layout ve Dashboard

> **Süre:** ~3-4 saat
> **Önkoşul:** Phase 1 ve 2 tamamlanmış olmalı

## 🎯 Hedef
Admin paneli için profesyonel bir layout ve özet dashboard sayfası oluşturmak.

## ✅ Görevler

### 3.1 Panel Layout Yapısı
- [ ] `app/[locale]/panel/layout.tsx` oluştur:

```typescript
import { validateSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { PanelSidebar } from "./components/panel-sidebar";
import { PanelHeader } from "./components/panel-header";

interface PanelLayoutProps {
  children: React.ReactNode;
}

export default async function PanelLayout({ children }: PanelLayoutProps) {
  const isAuthenticated = await validateSession();
  
  if (!isAuthenticated) {
    redirect("/tr/giris");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PanelSidebar />
      <div className="lg:pl-64">
        <PanelHeader />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
```

### 3.2 Sidebar Bileşeni
- [ ] `app/[locale]/panel/components/panel-sidebar.tsx` oluştur:

**İçerik:**
- Logo
- Navigation Links:
  - Dashboard (özet)
  - Başvurular
  - Ayarlar (opsiyonel)
- Logout butonu

**Stil Gereksinimleri:**
- Fixed position (sol taraf)
- Genişlik: 256px (lg:w-64)
- Koyu tema (dark sidebar) veya açık tema
- Hover efektleri
- Aktif sayfa vurgusu

### 3.3 Header Bileşeni
- [ ] `app/[locale]/panel/components/panel-header.tsx` oluştur:

**İçerik:**
- Breadcrumb (opsiyonel)
- Sayfa başlığı
- User avatar/dropdown
- Bildirimler (opsiyonel)

### 3.4 Dashboard Sayfası
- [ ] `app/[locale]/panel/page.tsx` oluştur:

**İstatistik Kartları:**
| Kart | Değer |
|------|-------|
| Toplam Başvuru | COUNT(*) |
| Bekleyen | WHERE status = 'pending' |
| Onaylanan | WHERE status = 'approved' |
| Reddedilen | WHERE status = 'rejected' |

- [ ] `app/[locale]/panel/components/stats-card.tsx` oluştur:

```typescript
interface StatsCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}
```

### 3.5 Dashboard Server Actions
- [ ] `app/actions/dashboard.ts` oluştur:

```typescript
"use server";

import { db } from "@/lib/db";
import { applications } from "@/lib/db/schema";
import { count, eq } from "drizzle-orm";
import { z } from "zod";

const DashboardStatsSchema = z.object({
  total: z.number(),
  pending: z.number(),
  approved: z.number(),
  rejected: z.number(),
});

export type DashboardStats = z.infer<typeof DashboardStatsSchema>;

export async function getDashboardStats(): Promise<DashboardStats> {
  const [totalResult] = await db.select({ count: count() }).from(applications);
  const [pendingResult] = await db
    .select({ count: count() })
    .from(applications)
    .where(eq(applications.status, "pending"));
  const [approvedResult] = await db
    .select({ count: count() })
    .from(applications)
    .where(eq(applications.status, "approved"));
  const [rejectedResult] = await db
    .select({ count: count() })
    .from(applications)
    .where(eq(applications.status, "rejected"));

  return DashboardStatsSchema.parse({
    total: totalResult.count,
    pending: pendingResult.count,
    approved: approvedResult.count,
    rejected: rejectedResult.count,
  });
}
```

### 3.6 Son Başvurular Tablosu (Mini)
- [ ] Dashboard'da son 5 başvuruyu gösteren küçük bir tablo

---

## 📋 Çıktılar
- [x] Responsive panel layout
- [x] Çalışan sidebar navigation
- [x] İstatistik kartları
- [x] Son başvurular önizlemesi

## 🎨 Tasarım Notları

### Renk Paleti (Panel için)
- **Background:** `bg-gray-50` veya `bg-slate-50`
- **Sidebar:** `bg-slate-900` (dark) veya `bg-white` (light)
- **Cards:** `bg-white` + `shadow-sm`
- **Accent:** Mevcut mavi tema ile uyumlu

### Responsive Davranış
- **Mobile:** Hamburger menu ile sidebar toggle
- **Tablet:** Collapsed sidebar (icon only)
- **Desktop:** Full sidebar

## ⚠️ Dikkat Edilecekler
- Sidebar ve header ayrı dosyalarda olmalı (tek bileşen kuralı)
- Dashboard istatistikleri server component'ta fetch edilmeli
- Loading state'leri için skeleton kullanılmalı
