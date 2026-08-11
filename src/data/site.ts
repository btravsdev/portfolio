export const siteConfig = {
  url: 'https://btravs.com',
  name: 'Brian Travers',
  siteName: 'btravs.com',
  email: 'holler@briantravers.com',
  telephone: '+1-773-726-3263',
  jobTitle: 'Front-End Engineer',
  alternateNames: ['btravs', 'Brian Travers'],
  description:
    'Brian Travers is a Chicago-based front-end engineer with a graphic design background and 10+ years of agency experience building modern, CMS-driven web applications.',
  locale: 'en_US',
  language: 'en',
  /** Default social share / OG image (absolute path on site) */
  defaultImage: '/img/og-developer.jpg',
  defaultImageAlt: 'Brian Travers, front-end engineer based in Chicago',
  address: {
    addressLocality: 'Chicago',
    addressRegion: 'IL',
    addressCountry: 'US',
  },
  sameAs: [
    'https://github.com/btravsdev',
    'https://codepen.io/btravs',
    'https://www.linkedin.com/in/btravs/',
  ] as const,
  knowsAbout: [
    'Front-end engineering',
    'HTML',
    'CSS',
    'SCSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Vue',
    'Nuxt',
    'Astro',
    'Sanity CMS',
    'Contentful',
    'WordPress',
    'GSAP',
    'Motion graphics',
    'Graphic design',
    'Web accessibility',
    'SEO',
  ] as const,
  alumniOf: {
    name: "Saint Mary's University of Minnesota",
    url: 'https://www.smumn.edu/',
  },
} as const;

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  /** Open Graph type */
  ogType?: 'website' | 'profile';
  image?: string;
  imageAlt?: string;
  /** Extra JSON-LD graph nodes for this page */
  jsonLd?: Record<string, unknown>[];
};

export const pageSeo = {
  developer: {
    title: 'Brian Travers — Front-End Engineer in Chicago',
    description:
      'Portfolio of Brian Travers, a Chicago-based front-end engineer specializing in React, Next.js, Vue, Nuxt, Astro, and CMS-driven web applications. Selected work for Kawasaki Engines, Engel & Völkers, and Notorious111.',
    path: '/is-a-developer',
    ogType: 'profile' as const,
    image: '/img/og-developer.jpg',
    imageAlt: 'Brian Travers — Front-End Engineer in Chicago',
  },
  designer: {
    title: 'Brian Travers — Designer in Chicago',
    description:
      'Graphic design and branding work by Brian Travers, a Chicago-based designer and front-end engineer. Logo and identity examples including Continental Youth Championships, Mercy Home, and Tread 365.',
    path: '/is-a-designer',
    ogType: 'profile' as const,
    image: '/img/og-designer.jpg',
    imageAlt: 'Brian Travers — Designer in Chicago',
  },
  deejay: {
    title: 'Brian Travers — Deejay in Chicago',
    description:
      'Brian Travers is a Chicago-based deejay with 20+ years of experience for weddings, bars, parties, and community events. Sample playlist and booking info.',
    path: '/is-a-deejay',
    ogType: 'profile' as const,
    image: '/img/og-deejay.jpg',
    imageAlt: 'Brian Travers — Deejay in Chicago',
  },
  motion: {
    title: 'Brian Travers — Motion Graphics',
    description:
      'Motion graphics reel by Brian Travers, former motion graphics lead at 88 Brand Partners. After Effects and animation work for brand and agency clients.',
    path: '/does-motion-graphic-designer',
    ogType: 'profile' as const,
    image: '/img/og-motion.jpg',
    imageAlt: 'Brian Travers — Motion Graphics',
  },
} as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  const base = siteConfig.url.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}
