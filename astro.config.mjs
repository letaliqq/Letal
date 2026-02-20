import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  site: 'https://github.com/letaliqq',
  base: '/letaliqq',
  output: 'static',
  adapter: netlify({
    imageCDN: true,
    cacheOnDemandPages: true,
    devFeatures: {
      images: true,
      environmentVariables: true,
    }
  }),
  vite: {
    plugins: [tailwindcss()]
  }
  // Sin experimental.fonts
});