"use server";

import fs from "fs/promises";
import path from "path";
import { z } from "zod";

const UniversitySchema = z.object({
  id: z.string(),
  name: z.string(),
  logo: z.string(),
});

export type University = z.infer<typeof UniversitySchema>;

const UniversitiesListSchema = z.array(UniversitySchema);

export async function getUniversities(): Promise<University[]> {
  try {
    const filePath = path.join(process.cwd(), "data", "universities.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    const parsedData = JSON.parse(jsonData);
    const validatedData = UniversitiesListSchema.parse(parsedData);
    return validatedData;
  } catch (error) {
    console.error("Failed to load universities:", error);
    return [];
  }
}
