import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.DEV
    ? "http://localhost:4321"
    : "https://timmerman.daanhering.nl",
  integrations: [tailwindcss(), sitemap(), robotsTxt()],
});
