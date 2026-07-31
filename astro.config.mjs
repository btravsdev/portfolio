import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  redirects: {
    '/': '/is-a-developer',
  },
  vite: {
    optimizeDeps: {
      include: ['gsap', 'gsap/DrawSVGPlugin', 'gsap/MorphSVGPlugin'],
    },
  },
});
