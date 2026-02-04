# 🚀 Phase 1: Veritabanı Kurulumu

> **Süre:** ~2-3 saat
> **Öncelik:** Kritik (Diğer fazlar buna bağımlı)

## 🎯 Hedef
Vercel Neon PostgreSQL bağlantısını kurmak ve Applications tablosunu oluşturmak.

## ✅ Görevler

### 1.1 Neon PostgreSQL Kurulumu
- [ ] Vercel Dashboard'da Neon database oluştur
- [ ] Connection string'i `.env.local` dosyasına ekle
- [ ] `.env.example` dosyasını güncelle

```env
DATABASE_URL=postgresql://...
```

### 1.2 Drizzle ORM Kurulumu
- [ ] Paketleri yükle:
```bash
bun add drizzle-orm @neondatabase/serverless
bun add -D drizzle-kit
```

- [ ] `drizzle.config.ts` dosyası oluştur:
```typescript
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./lib/db/schema.ts",
  out: "./lib/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

### 1.3 Veritabanı Şeması
- [ ] `lib/db/schema.ts` oluştur:

```typescript
import { pgTable, uuid, varchar, text, timestamp, pgEnum } from "drizzle-orm/pg-core";

export const applicationTypeEnum = pgEnum("application_type", ["tutor", "student"]);
export const applicationStatusEnum = pgEnum("application_status", ["pending", "approved", "rejected"]);

export const applications = pgTable("applications", {
  id: uuid("id").defaultRandom().primaryKey(),
  type: applicationTypeEnum("type").notNull(),
  status: applicationStatusEnum("status").notNull().default("pending"),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  details: text("details"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
```

### 1.4 Database Client
- [ ] `lib/db/index.ts` oluştur:

```typescript
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
```

### 1.5 Migration
- [ ] package.json'a script ekle:
```json
{
  "scripts": {
    "db:generate": "drizzle-kit generate",
    "db:push": "drizzle-kit push",
    "db:studio": "drizzle-kit studio"
  }
}
```

- [ ] Migration'ı çalıştır:
```bash
bun run db:push
```

### 1.6 Types
- [ ] `types/application.ts` oluştur:

```typescript
import { z } from "zod";

export const ApplicationTypeSchema = z.enum(["tutor", "student"]);
export const ApplicationStatusSchema = z.enum(["pending", "approved", "rejected"]);

export const ApplicationSchema = z.object({
  id: z.string().uuid(),
  type: ApplicationTypeSchema,
  status: ApplicationStatusSchema,
  fullName: z.string().min(2).max(255),
  email: z.string().email(),
  phone: z.string().optional(),
  details: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Application = z.infer<typeof ApplicationSchema>;
export type ApplicationType = z.infer<typeof ApplicationTypeSchema>;
export type ApplicationStatus = z.infer<typeof ApplicationStatusSchema>;
```

---

## 📋 Çıktılar
- [x] Neon PostgreSQL bağlantısı aktif
- [x] Drizzle ORM kurulu ve yapılandırılmış
- [x] Applications tablosu veritabanında mevcut
- [x] Type-safe Application modeli hazır

## ⚠️ Dikkat Edilecekler
- `.env.local` dosyası git'e eklenmemeli
- DATABASE_URL production'da Vercel env variables'dan alınmalı
