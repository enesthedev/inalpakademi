"use server";

import fs from "fs/promises";
import path from "path";
import { z } from "zod";

const SettingsSchema = z.object({
  phone: z.object({
    number: z.string(),
    display: z.string(),
    whatsapp: z.string(),
  }),
  social: z.object({
    instagram: z.string(),
    twitter: z.string(),
    linkedin: z.string(),
  }),
});

export type Settings = z.infer<typeof SettingsSchema>;

export async function getSettings(): Promise<Settings> {
  try {
    const filePath = path.join(process.cwd(), "data", "settings.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    const parsedData = JSON.parse(jsonData);
    const validatedData = SettingsSchema.parse(parsedData);
    return validatedData;
  } catch (error) {
    console.error("Failed to load settings:", error);
    return {
      phone: {
        number: "+905338115961",
        display: "+90 533 811 5961",
        whatsapp: "905338115961",
      },
      social: {
        instagram: "",
        twitter: "",
        linkedin: "",
      },
    };
  }
}
