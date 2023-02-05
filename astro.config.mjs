import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  // Enable Svelte to support Svelte components.
  integrations: [svelte()],
  // github-pages
  site: "https://mi-saka10032.github.io",
  base: "/personal-resume",
});
