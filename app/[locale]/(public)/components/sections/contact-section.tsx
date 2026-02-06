"use client";

import { useState } from "react";
import { useFormik } from "formik";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { submitContactForm } from "@/app/actions/contact";
import { MessageCircle, Send, CheckCircle2 } from "lucide-react";

interface FormValues {
  fullName: string;
  role: "student" | "parent" | "";
  phone: string;
  email: string;
}

const validate = (values: FormValues) => {
  const errors: Partial<Record<keyof FormValues, string>> = {};

  if (!values.fullName) {
    errors.fullName = "Ad soyad gereklidir";
  } else if (values.fullName.length < 3) {
    errors.fullName = "Ad soyad en az 3 karakter olmalıdır";
  }

  if (!values.role) {
    errors.role = "Lütfen bir seçim yapınız";
  }

  if (!values.phone) {
    errors.phone = "Telefon numarası gereklidir";
  } else if (
    !/^[0-9\s\-\+\(\)]+$/.test(values.phone) ||
    values.phone.length < 10
  ) {
    errors.phone = "Geçerli bir telefon numarası giriniz";
  }

  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = "Geçerli bir e-posta adresi giriniz";
  }

  return errors;
};

const WHATSAPP_NUMBER = "905338115961";

export function ContactSection() {
  const [isSuccess, setIsSuccess] = useState(false);

  const formik = useFormik<FormValues>({
    initialValues: {
      fullName: "",
      role: "",
      phone: "",
      email: "",
    },
    validate,
    onSubmit: async (values) => {
      const result = await submitContactForm({
        fullName: values.fullName,
        role: values.role as "student" | "parent",
        phone: values.phone,
        email: values.email || undefined,
      });

      if (result.success) {
        setIsSuccess(true);
      }
    },
  });

  const getWhatsAppLink = () => {
    const hasFormData = formik.values.fullName && formik.values.role;

    if (!hasFormData) {
      const message = encodeURIComponent(
        "Merhaba, İnalp Akademi hakkında sorularım var.",
      );
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    }

    const roleText = formik.values.role === "parent" ? "veliyim" : "öğrenciyim";
    const message = encodeURIComponent(
      `Merhaba, ben ${formik.values.fullName}, ${roleText} ve İnalp hakkında bilgi almak istiyorum.`,
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  if (isSuccess) {
    return (
      <section id="iletisim" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Teşekkürler!
            </h2>
            <p className="text-muted-foreground">
              Başvurunuz alındı. En kısa sürede sizinle iletişime geçeceğiz.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="iletisim" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              İletişime <span className="text-primary">Geçelim</span>
            </h2>
            <p className="text-base text-muted-foreground">
              Sorularınız veya başvuru için bize ulaşın.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="bg-muted/30 rounded-2xl p-6 sm:p-8 border border-border/50">
              <form onSubmit={formik.handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Ad Soyad</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Adınız Soyadınız"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                  />
                  {formik.touched.fullName && formik.errors.fullName && (
                    <p className="text-xs text-red-500">
                      {formik.errors.fullName}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Kimsiniz?</Label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="role"
                        value="student"
                        onChange={formik.handleChange}
                        checked={formik.values.role === "student"}
                        className="w-4 h-4 text-primary"
                      />
                      <span className="text-sm">Öğrenci</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="role"
                        value="parent"
                        onChange={formik.handleChange}
                        checked={formik.values.role === "parent"}
                        className="w-4 h-4 text-primary"
                      />
                      <span className="text-sm">Veli</span>
                    </label>
                  </div>
                  {formik.touched.role && formik.errors.role && (
                    <p className="text-xs text-red-500">{formik.errors.role}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon Numarası</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="05XX XXX XX XX"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-xs text-red-500">
                      {formik.errors.phone}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    E-Posta{" "}
                    <span className="text-muted-foreground">(Opsiyonel)</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ornek@mail.com"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-xs text-red-500">
                      {formik.errors.email}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full h-12"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? (
                    "Gönderiliyor..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Gönder
                    </>
                  )}
                </Button>
              </form>
            </div>

            <div className="flex flex-col justify-center items-center text-center space-y-6 p-6">
              <div className="space-y-2">
                <p className="text-lg font-medium text-foreground">
                  ya da hızlıca WhatsApp ile ulaşın
                </p>
                <p className="text-sm text-muted-foreground">
                  Formu doldurduysanız bilgileriniz mesaja otomatik eklenecek.
                </p>
              </div>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp ile İletişime Geç
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
