# 🔐 Phase 2: Authentication Sistemi

> **Süre:** ~2-3 saat
> **Önkoşul:** Phase 1 tamamlanmış olmalı

## 🎯 Hedef
Admin paneline erişimi korumak için basit ama güvenli bir authentication sistemi kurmak.

## ✅ Görevler

### 2.1 Auth Stratejisi Seçimi
**Önerilen:** Başlangıç için basit environment variable tabanlı auth (MVP için yeterli)

**Alternatifler:**
- NextAuth.js (daha gelişmiş, OAuth desteği)
- Supabase Auth
- Clerk

### 2.2 Basit Auth Implementasyonu

#### Admin Credentials (MVP)
- [ ] `.env.local` dosyasına ekle:
```env
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=<bcrypt hash>
```

#### Session Yönetimi
- [ ] `lib/auth/index.ts` oluştur:

```typescript
import { cookies } from "next/headers";
import { z } from "zod";

const SESSION_COOKIE_NAME = "admin_session";
const SESSION_SECRET = process.env.SESSION_SECRET!;

export const LoginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export type LoginInput = z.infer<typeof LoginSchema>;

export async function createSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, SESSION_SECRET, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24, // 24 saat
  });
}

export async function validateSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE_NAME);
  return session?.value === SESSION_SECRET;
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}
```

### 2.3 Auth Server Actions
- [ ] `app/actions/auth.ts` oluştur:

```typescript
"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { LoginSchema, createSession, destroySession } from "@/lib/auth";

export async function login(formData: FormData) {
  const rawData = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  const parsed = LoginSchema.safeParse(rawData);
  if (!parsed.success) {
    return { error: "Geçersiz giriş bilgileri" };
  }

  const { username, password } = parsed.data;

  const isValidUsername = username === process.env.ADMIN_USERNAME;
  const isValidPassword = await bcrypt.compare(
    password,
    process.env.ADMIN_PASSWORD_HASH!
  );

  if (!isValidUsername || !isValidPassword) {
    return { error: "Kullanıcı adı veya şifre hatalı" };
  }

  await createSession();
  redirect("/tr/panel");
}

export async function logout() {
  await destroySession();
  redirect("/tr");
}
```

### 2.4 Auth Proxy (Middleware)
- [ ] `app/proxies/with-auth.ts` oluştur:

```typescript
import { NextRequest, NextResponse } from "next/server";
import { validateSession } from "@/lib/auth";
import { createProxy } from "@/lib/proxy-chain";

const PROTECTED_ROUTES = ["/panel"];
const LOGIN_ROUTE = "/giris";

export const withAuth = createProxy(async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  
  const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
    pathname.includes(route)
  );

  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  const isAuthenticated = await validateSession();

  if (!isAuthenticated) {
    const loginUrl = new URL(LOGIN_ROUTE, request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
});
```

### 2.5 Login Sayfası
- [ ] `app/[locale]/giris/page.tsx` oluştur:

```typescript
import { LoginForm } from "./components/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
```

- [ ] `app/[locale]/giris/components/login-form.tsx` oluştur (Client Component)

### 2.6 Bağımlılıklar
- [ ] bcryptjs paketini yükle:
```bash
bun add bcryptjs
bun add -D @types/bcryptjs
```

---

## 📋 Çıktılar
- [x] Admin giriş sayfası çalışır durumda
- [x] Session bazlı authentication aktif
- [x] Panel rotaları korumalı
- [x] Logout fonksiyonu çalışıyor

## ⚠️ Dikkat Edilecekler
- Password hash'i hiçbir zaman plain text olarak saklanmamalı
- Production'da SESSION_SECRET güçlü ve rastgele olmalı
- HTTPS zorunlu olmalı (Vercel bunu otomatik sağlar)

## 🚀 Gelecek İyileştirmeler
- [ ] NextAuth.js entegrasyonu (OAuth, multiple providers)
- [ ] Admin kullanıcı tablosu (veritabanında)
- [ ] Password reset fonksiyonu
- [ ] 2FA desteği
