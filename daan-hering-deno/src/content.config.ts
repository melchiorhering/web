import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders"; // Not available with legacy API

const meta = defineCollection({
  loader: file("src/content/meta.json"),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.string(),
    charset: z.string(),
    ldJson: z.object({
      "@context": z.string().url(),
      "@type": z.string(),
      name: z.string(),
      description: z.string(),
      url: z.string().url(),
      logo: z.string(),
      contactPoint: z.object({
        "@type": z.string(),
        email: z.string().email(),
        contactType: z.string(),
      }),
      sameAs: z.array(z.string().url()),
    }),
  }),
});

// export const landingContent = defineCollection({
//   loader: glob({ pattern: "**/[^_]*.json", base: "./src/content" }),
//   schema: z.object({
//     meta: z.object({
//       title: z.string(),
//       description: z.string(),
//       lang: z.string(),
//       charset: z.string(),
//       ldJson: z.object({
//         "@context": z.string().url(),
//         "@type": z.string(),
//         name: z.string(),
//         description: z.string(),
//         url: z.string().url(),
//         logo: z.string(),
//         contactPoint: z.object({
//           "@type": z.string(),
//           email: z.string().email(),
//           contactType: z.string(),
//         }),
//         sameAs: z.array(z.string().url()),
//       }),
//     }),
//     header: z.object({
//       sectionId: z.optional(z.string()),
//       logo: z.string(),
//       logoImage: z.string(),
//       menuIcon: z.string(),
//       links: z.array(
//         z.object({
//           label: z.string(),
//           href: z.string(),
//         }),
//       ),
//     }),
//     hero: z.object({
//       sectionId: z.optional(z.string()),
//       title: z.string(),
//       highlightedTitle: z.string(),
//       dividerIcon: z.string(),
//       subTitle: z.string(),
//       primaryCta: z.string(),
//       secondaryCta: z.string(),
//       downwardArrowText: z.string(),
//       backgroundImageSrc: z.string(),
//     }),
//     services: z.object({
//       sectionId: z.optional(z.string()),
//       title: z.string(),
//       services: z.array(
//         z.object({
//           title: z.string(),
//           icon: z.string(),
//           description: z.string(),
//         }),
//       ),
//     }),
//     footer: z.object({
//       logo: z.string(),
//       description: z.string(),
//       links: z.array(
//         z.object({
//           label: z.string(),
//           href: z.string(),
//         }),
//       ),
//       socials: z.array(
//         z.object({
//           icon: z.string(),
//           href: z.string(),
//         }),
//       ),
//     }),
//   }),
// });

export const collection = { meta };
