"use server";

import fs from "fs/promises";
import path from "path";
import { z } from "zod";

const SuccessStorySchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  image: z.string(),
});

export type SuccessStory = z.infer<typeof SuccessStorySchema>;

const SuccessStoriesListSchema = z.array(SuccessStorySchema);

export async function getSuccessStories(): Promise<SuccessStory[]> {
  try {
    const filePath = path.join(process.cwd(), "data", "success-stories.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    const parsedData = JSON.parse(jsonData);
    const validatedData = SuccessStoriesListSchema.parse(parsedData);
    return validatedData;
  } catch (error) {
    console.error("Failed to load success stories:", error);
    return [];
  }
}
