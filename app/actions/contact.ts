"use server";

import { z } from "zod";

const ContactFormSchema = z.object({
  fullName: z.string().min(3, "Ad soyad en az 3 karakter olmalıdır"),
  role: z.enum(["student", "parent"]),
  phone: z
    .string()
    .min(10, "Geçerli bir telefon numarası giriniz")
    .regex(/^[0-9\s\-\+\(\)]+$/, "Geçerli bir telefon numarası giriniz"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz").optional(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

interface ActionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export async function submitContactForm(
  formData: ContactFormData,
): Promise<ActionResult> {
  const validationResult = ContactFormSchema.safeParse(formData);

  if (!validationResult.success) {
    return {
      success: false,
      message: "Form verilerinde hata var.",
      errors: validationResult.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    success: true,
    message: "Başvurunuz alındı! En kısa sürede sizinle iletişime geçeceğiz.",
  };
}
