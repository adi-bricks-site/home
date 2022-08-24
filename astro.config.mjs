import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind({
    config:{
      applyBaseStyles: false,
    }
  })]
});

// https://docs.astro.build/en/guides/integrations-guide/tailwind/