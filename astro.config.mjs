import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://btravs.com',
  output: 'static',
  integrations: [sitemap()],
  redirects: {
    '/': '/is-a-developer',
  },
  vite: {
    optimizeDeps: {
      include: ['gsap', 'gsap/DrawSVGPlugin', 'gsap/MorphSVGPlugin'],
    },
  },
});
