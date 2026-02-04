# 📝 Phase 5: Başvuru Form Entegrasyonu

> **Süre:** ~2-3 saat
> **Önkoşul:** Phase 1 tamamlanmış olmalı (veritabanı hazır)

## 🎯 Hedef
Landing page'deki başvuru formlarını veritabanına kaydetmek için server action'ları implement etmek.

## ✅ Görevler

### 5.1 Form Submit Action
- [ ] `app/actions/submit-application.ts` oluştur:

```typescript
"use server";

import { db } from "@/lib/db";
import { applications } from "@/lib/db/schema";
import { z } from "zod";

// Base schema
const BaseApplicationSchema = z.object({
  fullName: z.string().min(2, "Ad en az 2 karakter olmalı").max(255),
  email: z.string().email("Geçerli bir email adresi girin"),
  phone: z.string().optional(),
});

// Tutor specific
const TutorDetailsSchema = z.object({
  expertise: z.string().min(1, "Uzmanlık alanı gerekli"),
  experience: z.number().min(0, "Deneyim yılı geçersiz"),
  about: z.string().optional(),
  availability: z.array(z.string()).optional(),
});

// Student specific
const StudentDetailsSchema = z.object({
  targetSubject: z.string().min(1, "Hedef ders gerekli"),
  level: z.enum(["beginner", "intermediate", "advanced"]),
  goals: z.string().optional(),
});

// Combined schemas
const TutorApplicationSchema = BaseApplicationSchema.extend({
  type: z.literal("tutor"),
  details: TutorDetailsSchema,
});

const StudentApplicationSchema = BaseApplicationSchema.extend({
  type: z.literal("student"),
  details: StudentDetailsSchema,
});

const ApplicationInputSchema = z.discriminatedUnion("type", [
  TutorApplicationSchema,
  StudentApplicationSchema,
]);

export type ApplicationInput = z.infer<typeof ApplicationInputSchema>;

export async function submitApplication(input: ApplicationInput) {
  const validated = ApplicationInputSchema.safeParse(input);
  
  if (!validated.success) {
    return {
      success: false,
      error: "Geçersiz form verisi",
      fieldErrors: validated.error.flatten().fieldErrors,
    };
  }

  try {
    const { type, fullName, email, phone, details } = validated.data;
    
    await db.insert(applications).values({
      type,
      fullName,
      email,
      phone: phone ?? null,
      details: JSON.stringify(details),
      status: "pending",
    });

    return {
      success: true,
      message: "Başvurunuz başarıyla alındı!",
    };
  } catch (error) {
    console.error("Application submission error:", error);
    return {
      success: false,
      error: "Başvuru gönderilirken bir hata oluştu",
    };
  }
}
```

### 5.2 Eğitmen Başvuru Formu
- [ ] `app/[locale]/basvuru/egitmen/page.tsx` oluştur
- [ ] Multi-step form yapısı:
  1. Kişisel Bilgiler (Ad, Email, Telefon)
  2. Profesyonel Bilgiler (Uzmanlık, Deneyim, Hakkında)
  3. Müsaitlik ve Onay

### 5.3 Öğrenci Başvuru Formu
- [ ] `app/[locale]/basvuru/ogrenci/page.tsx` oluştur
- [ ] Multi-step form yapısı:
  1. Kişisel Bilgiler (Ad, Email, Telefon)
  2. Eğitim Bilgileri (Hedef Ders, Seviye, Hedefler)
  3. Onay

### 5.4 Form Bileşenleri
- [ ] `app/[locale]/basvuru/components/form-step.tsx` - Step wrapper
- [ ] `app/[locale]/basvuru/components/progress-bar.tsx` - İlerleme çubuğu
- [ ] `app/[locale]/basvuru/components/form-navigation.tsx` - İleri/Geri butonları

### 5.5 Success/Error States
- [ ] `app/[locale]/basvuru/components/success-message.tsx`
- [ ] Toast notification entegrasyonu

---

## 📋 Çıktılar
- [x] Eğitmen başvuru formu çalışıyor
- [x] Öğrenci başvuru formu çalışıyor
- [x] Formlar veritabanına kaydediliyor
- [x] Validation hataları gösteriliyor
- [x] Başarı mesajı gösteriliyor

## 🔒 Güvenlik Notları

### Rate Limiting (Opsiyonel)
```typescript
import { headers } from "next/headers";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 h"),
  analytics: true,
});

// Action içinde
const headersList = await headers();
const ip = headersList.get("x-forwarded-for") ?? "127.0.0.1";
const { success } = await ratelimit.limit(ip);

if (!success) {
  return { error: "Çok fazla başvuru. Lütfen daha sonra tekrar deneyin." };
}
```

### Spam Koruması
- Honeypot field ekle (hidden input)
- Email doğrulama (format check)
- Minimum süre kontrolü (form çok hızlı doldurulamaz)

## ⚠️ Dikkat Edilecekler
- Form state client-side yönetilmeli (Formik)
- Validasyon hem client hem server tarafında
- Loading state'leri (submit button disabled)
- Error handling detaylı olmalı
