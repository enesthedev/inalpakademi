# Inalp Agent Configuration

> **Son Güncelleme:** 2026-02-04
> **Versiyon:** 2.0.0
> **Konum:** `AGENT.md` (Root)

Bu dosya, yapay zeka agent'ının davranışını yönlendiren temel yapılandırma ve referans dosyasıdır. Proje bağlamı ve kuralları `.agent/` dizini altında modüler olarak tutulmaktadır.

## 🎯 Proje Özeti
**Inalp**, [Preply](https://preply.com/) benzeri modern bir eğitim platformudur. Mavi tonlarının hakim olduğu, kullanıcı dostu ve premium bir tasarıma sahiptir.

**Temel Özellikler:**
*   **Dizayn:** Preply baz alınarak oluşturulacak, mavi tonlar hakim.
*   **İçerik:**
    *   Modern bir ana sayfa ([Referans Tasarım](https://v0-egitim-website-design.vercel.app/))
    *   İki adet kapsamlı başvuru formu.
*   **Teknik:** `next-intl` (Sadece rota lokalizasyonu için), Next.js, Tailwind CSS.

## 📂 Bağlam Yapısı (.agent/)

| Dizin/Dosya | Açıklama |
|-------------|----------|
| `spec/requirement.md` | Proje gereksinimleri, kullanıcı hikayeleri ve hedefler |
| `spec/design.md` | UI/UX kuralları, renk paleti, bileşen hiyerarşisi ve form yapıları |
| `spec/tasks.md` | Bekleyen işler (TODO), güncel çalışma planı |
| `wiki/architecture.md` | Teknoloji stack'i, mimari kararlar (Auth, i18n), klasör yapısı |
| `plans/` | Gelistirme fazları ve detaylı analizler |
| `links/resources.md` | Tasarım referansları ve kaynaklar |

## 📜 Komutlar

```bash
# Development
bun run dev

# Build
bun run build

# Lint
bun run lint
```

## 📌 Kodlama Standartları

1. **Dosya Adlandırma:** kebab-case (örn: `application-form.tsx`)
2. **Component Adlandırma:** PascalCase (örn: `ApplicationForm`)
3. **Tek Bileşen Kuralı:** Her dosya SADECE BİR React bileşeni (export default) içermelidir. Aynı dosyada birden fazla bileşen tanımlanmamalıdır.
4. **Veri Güvenliği (Don't Trust Client):** Client'tan gelen verilere asla güvenilmemeli, Server Action'larda Zod ile mutlaka validasyon yapılmalıdır.
5. **Tip Güvenliği (Models):** Server Action'lar ve API döngüleri, mock veri dahi olsa mutlaka tanımlı bir Model/Interface üzerinden tip güvenli olmalıdır.
6. **Mock Veri Yönetimi:** Mock veriler (.ts/.tsx) kod dosyaları içinde hardcoded OLMAMALI. Veriler `data/` klasöründe JSON formatında tutulmalı ve oradan okunmalıdır.
7. **Dil:** Türkçe UI metinleri, İngilizce kod/yorumlar
8. **Stil:** `Tailwind CSS` + `index.css` (Global değişkenler).
9. **Import Sırası:**
   - React/Next.js
   - External packages
   - Internal modules (@ alias)
   - Relative imports
10. **Component Yapısı:**
   - Props interface
   - Component function
   - Helper functions
11. **Server Actions:** `"use server"` direktifi ile.
12. **Client Components:** `"use client"` direktifi ile.
13. **Yorum Satırı:** Kod içerisinde yorum satırı BULUNMAMALI (Karmaşık mantıklar hariç).

## 🔄 Güncelleme Geçmişi

| Tarih | Değişiklik |
|-------|------------|
| 2026-02-04 | Inalp projesi başlatıldı. Agent konfigürasyonu Preply ve yeni tasarım gereksinimlerine göre güncellendi. |
| 2026-02-04 | Phase 1 & 2 tamamlandı: Formik/Zod kuruldu, globals.css güncellendi, Landing Page oluşturuldu. |
| 2026-02-04 | Kodlama standartları güncellendi: Tek bileşen kuralı, Mock veri yönetimi (JSON), Server Action tiplemeleri ve Don't Trust Client prensipleri eklendi. |

