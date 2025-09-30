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

const woodWork = defineCollection({
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

export const collections = {
  hero: heroConfig,
  "wood-work": woodWork,
};
