# 📋 Phase 4: Başvuru Yönetimi (CRUD)

> **Süre:** ~4-5 saat
> **Önkoşul:** Phase 1, 2 ve 3 tamamlanmış olmalı

## 🎯 Hedef
Başvuruları listeleme, filtreleme, detay görüntüleme ve durum güncelleme özelliklerini implement etmek.

## ✅ Görevler

### 4.1 Server Actions
- [ ] `app/actions/applications.ts` oluştur:

```typescript
"use server";

import { db } from "@/lib/db";
import { applications } from "@/lib/db/schema";
import { eq, ilike, or, and, desc, count } from "drizzle-orm";
import { z } from "zod";
import { revalidatePath } from "next/cache";

// Input Schemas
const GetApplicationsInputSchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(10),
  type: z.enum(["tutor", "student"]).optional(),
  status: z.enum(["pending", "approved", "rejected"]).optional(),
  search: z.string().optional(),
});

const UpdateStatusInputSchema = z.object({
  id: z.string().uuid(),
  status: z.enum(["pending", "approved", "rejected"]),
});

// Output Types
export type GetApplicationsInput = z.infer<typeof GetApplicationsInputSchema>;
export type UpdateStatusInput = z.infer<typeof UpdateStatusInputSchema>;

// Actions
export async function getApplications(input: GetApplicationsInput) {
  const validated = GetApplicationsInputSchema.parse(input);
  const { page, limit, type, status, search } = validated;
  const offset = (page - 1) * limit;

  const conditions = [];
  
  if (type) {
    conditions.push(eq(applications.type, type));
  }
  
  if (status) {
    conditions.push(eq(applications.status, status));
  }
  
  if (search) {
    conditions.push(
      or(
        ilike(applications.fullName, `%${search}%`),
        ilike(applications.email, `%${search}%`)
      )
    );
  }

  const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

  const [data, [{ total }]] = await Promise.all([
    db
      .select()
      .from(applications)
      .where(whereClause)
      .orderBy(desc(applications.createdAt))
      .limit(limit)
      .offset(offset),
    db
      .select({ total: count() })
      .from(applications)
      .where(whereClause),
  ]);

  return {
    data,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
}

export async function getApplicationById(id: string) {
  const validated = z.string().uuid().parse(id);
  
  const [application] = await db
    .select()
    .from(applications)
    .where(eq(applications.id, validated))
    .limit(1);

  return application ?? null;
}

export async function updateApplicationStatus(input: UpdateStatusInput) {
  const validated = UpdateStatusInputSchema.parse(input);
  
  await db
    .update(applications)
    .set({ 
      status: validated.status,
      updatedAt: new Date(),
    })
    .where(eq(applications.id, validated.id));

  revalidatePath("/panel/basvurular");
  return { success: true };
}
```

### 4.2 Başvuru Listesi Sayfası
- [ ] `app/[locale]/panel/basvurular/page.tsx` oluştur:

```typescript
import { getApplications } from "@/app/actions/applications";
import { ApplicationsTable } from "./components/applications-table";
import { ApplicationsToolbar } from "./components/applications-toolbar";

interface PageProps {
  searchParams: Promise<{
    page?: string;
    type?: string;
    status?: string;
    search?: string;
  }>;
}

export default async function ApplicationsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  
  const result = await getApplications({
    page: Number(params.page) || 1,
    limit: 10,
    type: params.type as "tutor" | "student" | undefined,
    status: params.status as "pending" | "approved" | "rejected" | undefined,
    search: params.search,
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Başvurular</h1>
      </div>
      <ApplicationsToolbar />
      <ApplicationsTable 
        data={result.data} 
        pagination={result.pagination} 
      />
    </div>
  );
}
```

### 4.3 Tablo Bileşeni
- [ ] `app/[locale]/panel/basvurular/components/applications-table.tsx` oluştur:

**Kolonlar:**
| Kolon | Açıklama |
|-------|----------|
| Ad Soyad | fullName |
| Email | email |
| Tip | type (Badge) |
| Durum | status (Badge + renk) |
| Tarih | createdAt (formatlanmış) |
| İşlemler | Detay, Onayla, Reddet butonları |

### 4.4 Toolbar Bileşeni
- [ ] `app/[locale]/panel/basvurular/components/applications-toolbar.tsx` oluştur:

**Özellikler:**
- Arama input'u (debounced)
- Tip filtresi (Select: Tümü, Eğitmen, Öğrenci)
- Durum filtresi (Select: Tümü, Bekleyen, Onaylanan, Reddedilen)
- Filtreleri temizle butonu

### 4.5 Detay Sayfası
- [ ] `app/[locale]/panel/basvurular/[id]/page.tsx` oluştur:

**İçerik:**
- Başvuru detayları (full information)
- Details JSON'ı görselleştirilmiş
- Durum değiştirme butonları
- Geri dön linki

### 4.6 Status Update Modal/Dialog
- [ ] `app/[locale]/panel/basvurular/components/status-update-dialog.tsx` oluştur:

**Özellikler:**
- Onay/Red seçimi
- İsteğe bağlı not alanı
- Confirm butonu

### 4.7 Pagination Bileşeni
- [ ] Mevcut UI bileşenlerini kullan veya yeni oluştur
- URL search params ile çalışmalı

---

## 📋 Çıktılar
- [x] Başvuru listesi sayfası çalışıyor
- [x] Filtreleme ve arama fonksiyonel
- [x] Pagination çalışıyor
- [x] Başvuru detay sayfası
- [x] Status güncelleme çalışıyor

## 🎨 UI/UX Notları

### Status Badge Renkleri
| Status | Renk |
|--------|------|
| pending | `bg-yellow-100 text-yellow-800` |
| approved | `bg-green-100 text-green-800` |
| rejected | `bg-red-100 text-red-800` |

### Type Badge Renkleri
| Type | Renk |
|------|------|
| tutor | `bg-purple-100 text-purple-800` |
| student | `bg-blue-100 text-blue-800` |

### Tablo Davranışı
- Hover: Satır highlight
- Click: Detay sayfasına yönlendir
- Loading: Skeleton loader
- Empty: "Başvuru bulunamadı" mesajı

## ⚠️ Dikkat Edilecekler
- URL state management (search params)
- Server-side filtering ve pagination
- Optimistic UI updates (status değişikliği)
- Error handling ve toast mesajları
