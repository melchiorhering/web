import { defineCollection, z } from "astro:content";

// Define the schema for the header configuration
const headerConfig = defineCollection({
  type: "data", // Use 'data' for a single JSON/YAML file
  schema: ({ image }) =>
    z.object({
      logo: image().optional(),
      brandName: z.string(),
      navLinks: z.array(
        z.object({
          name: z.string(),
          path: z.string(),
        }),
      ),
      contactButton: z
        .object({
          text: z.string(),
          path: z.string(),
        })
        .optional(),
    }),
});

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
  type: "data",
  schema: ({ image }) =>
    z.object({
      // Add the image helper here
      logo: image().optional(), // Make the logo field an optional image
      linkGroups: z
        .array(
          z.object({
            title: z.string(),
            links: z.array(
              z.object({
                text: z.string(),
                href: z.string().url(),
              }),
            ),
          }),
        )
        .optional(),
      copyrightText: z.string().optional(),
    }),
});
export const collections = {
  header: headerConfig,
  hero: heroConfig,
  work: workConfig,
  footer: footerConfig,
};
