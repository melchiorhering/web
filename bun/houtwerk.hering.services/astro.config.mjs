// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon({
      iconDir: "src/assets/icons", // Tell astro-icon to look for icons here
    }),
    sitemap(),
  ],
  image: {
    domains: ["your-bucket-name.s3.eu-central-1.amazonaws.com"],
    // Or for something like Supabase: ["abcdefgh.supabase.co"]
  },
  server: {
    open: "/nl",
  },
});
