import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://letaliqq.github.io',
  base: '/Letal',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});