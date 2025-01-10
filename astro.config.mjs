// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  image: {
    domains: ["astro.build", "localhost:10068"],
    remotePatterns: [{ protocol: "http" }],
  }
});