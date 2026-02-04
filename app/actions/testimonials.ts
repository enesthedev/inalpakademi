"use server";

import fs from "fs/promises";
import path from "path";
import { z } from "zod";

// Define the schema for a single testimonial
const TestimonialSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  avatar: z.string(),
  content: z.string(),
  rating: z.number().min(1).max(5),
});

// Infer the type from the schema
export type Testimonial = z.infer<typeof TestimonialSchema>;

// Define the schema for the array of testimonials
const TestimonialsListSchema = z.array(TestimonialSchema);

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    // Construct the path to the JSON file
    const filePath = path.join(process.cwd(), "data", "testimonials.json");

    // Read the file asynchronously
    const jsonData = await fs.readFile(filePath, "utf-8");

    // Parse the JSON data
    const parsedData = JSON.parse(jsonData);

    // Validate the data using Zod
    const validatedData = TestimonialsListSchema.parse(parsedData);

    // Simulate network delay if needed (optional)
    // await new Promise((resolve) => setTimeout(resolve, 100));

    return validatedData;
  } catch (error) {
    console.error("Failed to load testimonials:", error);
    // Return empty array or throw error depending on requirements
    return [];
  }
}
