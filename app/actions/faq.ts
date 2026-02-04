"use server";

import fs from "fs/promises";
import path from "path";
import { z } from "zod";

const FaqItemSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
});

export type FaqItem = z.infer<typeof FaqItemSchema>;

const FaqListSchema = z.array(FaqItemSchema);

export async function getFaqItems(): Promise<FaqItem[]> {
  try {
    const filePath = path.join(process.cwd(), "data", "faq.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    const parsedData = JSON.parse(jsonData);
    const validatedData = FaqListSchema.parse(parsedData);
    return validatedData;
  } catch (error) {
    console.error("Failed to load FAQ items:", error);
    return [];
  }
}
