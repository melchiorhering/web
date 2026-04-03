// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/projects" }),
  schema: z.object({
    // If path is "en/bank-simpel.json", id becomes "en/bank-simpel"
    title: z.string(),
    description: z.string(),
    completionYear: z.number(),
    isFeatured: z.boolean().default(false),

    coverImage: z.string().url().optional(),
    gallery: z.array(z.string().url()).optional(),
  }),
});

export const collections = { projects };
