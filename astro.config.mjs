// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/**
 * GitHub Pages deployment config.
 *
 * The site is served as the organization page:
 *   https://trex-ai-lab.github.io/
 */
const SITE = "https://trex-ai-lab.github.io";
const BASE = "/";

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "ignore",
  integrations: [sitemap()],
});
