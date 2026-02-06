"use server";

import fs from "fs/promises";
import path from "path";
import { z } from "zod";

const TutorSchema = z.object({
  id: z.string(),
  name: z.string(),
  rank: z.string(),
  university: z.string(),
  city: z.string(),
  mode: z.enum(["online", "face_to_face", "both"]),
  photo: z.string(),
});

export type Tutor = z.infer<typeof TutorSchema>;

const TutorsListSchema = z.object({
  tutors: z.array(TutorSchema),
});

export async function getTutors(): Promise<Tutor[]> {
  try {
    const filePath = path.join(process.cwd(), "data", "tutors.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    const parsedData = JSON.parse(jsonData);
    const validatedData = TutorsListSchema.parse(parsedData);
    return validatedData.tutors;
  } catch (error) {
    console.error("Failed to load tutors:", error);
    return [];
  }
}
