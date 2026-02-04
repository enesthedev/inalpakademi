---
description: Uygulamada yapılan değişiklikleri analiz edip dökümantasyonu güncelleme
---

# Değişiklik Analizi Workflow'u

Bu workflow, uygulamada yapılan değişiklikleri analiz eder, olası sorunları tespit eder ve ilgili dökümantasyonu günceller.

## 1. Değişiklikleri Tespit Et

// turbo
1. `git status` veya `git diff --stat` komutunu çalıştırarak hangi dosyaların değiştiğini tespit et.
2. Değişen dosyaları kategorilere ayır:
   - **UI/Bileşen:** `components/`, `app/[locale]/` altındaki `.tsx` dosyaları
   - **Stil:** `globals.css`, Tailwind konfigürasyonu
   - **Altyapı:** `proxy.ts`, `lib/`, `next.config.ts`, `package.json`
   - **i18n:** `lib/i18n/`, `messages/`
   - **Form/Validasyon:** `validations/`, Formik/Zod şemaları

## 2. Değişiklikleri Analiz Et

// turbo
3. Değişen dosyaları oku ve ne tür değişiklikler yapıldığını anla.
4. Her değişiklik için şu kontrolleri yap:
   - **Import Kontrolü:** Kullanılmayan importlar var mı?
   - **Tip Güvenliği:** TypeScript hataları var mı?
   - **Stil Tutarlılığı:** Tailwind class'ları globals.css ile uyumlu mu?
   - **Kodlama Standartları:** `AGENT.md` içindeki standartlara uyuluyor mu?
   - **Bağımlılıklar:** Yeni paket eklendi mi? `package.json` güncellendi mi?

## 3. Olası Sorunları Raporla

5. Tespit edilen her sorun için şu bilgileri hazırla:
   - **Dosya:** Hangi dosyada?
   - **Satır:** Hangi satırda (mümkünse)?
   - **Sorun:** Ne tür bir sorun?
   - **Öneri:** Nasıl çözülebilir?

6. Sorunları kullanıcıya raporla ve düzeltme önerileri sun.

## 4. Dökümantasyonu Güncelle

7. Yapılan değişikliklere göre ilgili dosyaları güncelle:

   **UI/Bileşen Değişiklikleri için:**
   - `.agent/spec/design.md` → Yeni bileşenler veya UI değişiklikleri ekle.

   **Altyapı/Stack Değişiklikleri için:**
   - `.agent/wiki/architecture.md` → Yeni paketler, yapısal değişiklikler.

   **Görev Tamamlama için:**
   - `.agent/spec/tasks.md` → Tamamlanan görevleri `[x]` olarak işaretle.

   **Yeni Görev/Sorun Tespiti için:**
   - `.agent/spec/tasks.md` → Yeni görev veya bilinen sorun ekle.

   **Tüm Önemli Değişiklikler için:**
   - `AGENT.md` → "Güncelleme Geçmişi" tablosuna yeni satır ekle.
   - `AGENT.md` → "Son Güncelleme" tarihini bugüne güncelle.

## 5. Özet Rapor

8. Kullanıcıya kısa bir özet sun:
   - Değişen dosya sayısı
   - Tespit edilen sorun sayısı
   - Güncellenen döküman sayısı

## Güncelleme Formatı

`AGENT.md` > Güncelleme Geçmişi:

```markdown
| Tarih | Değişiklik |
|-------|------------|
| YYYY-MM-DD | Yapılan değişikliğin kısa açıklaması |
```

## Örnek Kullanım

Kullanıcı: `/analyze-changes` veya "Değişiklikleri analiz et"
Agent: Bu workflow'u çalıştırır.
