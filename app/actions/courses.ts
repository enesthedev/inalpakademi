"use server";

import fs from "fs/promises";
import path from "path";
import { z } from "zod";

const InstructorSchema = z.object({
  name: z.string(),
  title: z.string(),
});

const CourseSchema = z.object({
  id: z.string(),
  title: z.string(),
  date: z.string(),
  time: z.string(),
  location: z.string(),
  type: z.enum(["face-to-face", "online"]),
  instructor: InstructorSchema,
});

export type Course = z.infer<typeof CourseSchema>;

const CoursesListSchema = z.array(CourseSchema);

export async function getCourses(): Promise<Course[]> {
  try {
    const filePath = path.join(process.cwd(), "data", "courses.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    const parsedData = JSON.parse(jsonData);
    const validatedData = CoursesListSchema.parse(parsedData);
    return validatedData;
  } catch (error) {
    console.error("Failed to load courses:", error);
    return [];
  }
}
