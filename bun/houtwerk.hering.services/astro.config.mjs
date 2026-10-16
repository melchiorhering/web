// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://houtwerk.hering.services",
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
    // domains: ["your-bucket-name.s3.eu-central-1.amazonaws.com"],
    // Or for something like Supabase: ["abcdefgh.supabase.co"]
  },
  server: {
    open: "/nl",
  },
});
