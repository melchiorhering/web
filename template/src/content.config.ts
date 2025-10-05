import { defineCollection, z } from "astro:content";

const heroConfig = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      button: z.object({
        text: z.string(),
        href: z.string(),
      }),
      heroImage: z.object({
        src: image(),
        alt: z.string(),
      }),
      bauhausPipes: z.array(
        z.object({
          length: z.string(),
          colorIndex: z.number(),
        }),
      ),
    }),
});

const workConfig = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Add the new field for the background image
      cover: z.object({ src: image(), alt: z.string() }),
      // The existing entries array
      entries: z.array(
        z.object({
          alt: z.string(),
          image: image(),
        }),
      ),
    }),
});

const footerConfig = defineCollection({
  type: "data", // Use 'data' for JSON/YAML files
  schema: z.object({
    tagline: z.string(),
    linkGroups: z.array(
      z.object({
        title: z.string(),
        links: z.array(
          z.object({
            text: z.string(),
            href: z.string().url(),
          }),
        ),
      }),
    ),
    socialLinks: z.array(
      z.object({
        iconName: z.string(), // e.g., "mdi:github"
        href: z.string().url(),
      }),
    ),
    copyrightText: z.string(),
  }),
});

export const collections = {
  hero: heroConfig,
  work: workConfig,
  footer: footerConfig,
};
