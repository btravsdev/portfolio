export type WorkVideo = {
  src: string;
  /** Accessible name: what the recording shows */
  alt: string;
  poster: string;
  /** WebVTT captions track (descriptive captions for silent screen recordings) */
  captionsSrc?: string;
  /** Short note clarifying this is an undirected silent recording of a live site */
  caption?: string;
};

export type WorkImage = {
  href: string;
  src: string;
  alt: string;
};

export type WorkItem = {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  link?: { href: string; label: string };
  highlight?: string;
  video: WorkVideo;
  images?: WorkImage[];
};

export const workItems: WorkItem[] = [
  {
    id: 'kmc-website',
    title: 'Kawasaki Engines USA',
    description:
      'Helped build and launch the Next.js and Sanity CMS platform before transitioning into the role of technical lead. Since launch, I’ve overseen the site’s continued evolution through feature development, CMS enhancements, API integrations, A/B testing, bug fixes, and long-term maintenance. It’s been especially rewarding to own and improve the platform over multiple years rather than simply launching it.',
    tags: ['Next.js', 'React', 'TypeScript', 'Sanity CMS', 'API'],
    link: { href: 'https://kawasakienginesusa.com/', label: 'kawasakienginesusa.com' },
    video: {
      src: '/video/kmc-web.mp4',
      alt: 'Silent screen recording of the Kawasaki Engines USA website',
      poster: '/video/kmc-web.jpg',
      captionsSrc: '/video/kmc-web-captions.vtt',
      caption:
        'Silent screen recording of the live site. Not a directed video—no audio or narration.',
    },
    images: [
      {
        href: 'https://kawasakienginesusa.com/engines/critical-power1',
        src: '/img/kmc-critical-power.jpg',
        alt: 'Special feature page for Kawasaki Engines',
      },
      {
        href: 'https://kawasakienginesusa.com/engines',
        src: '/img/kmc-engines.jpg',
        alt: 'Example engines page for Kawasaki Engines',
      },
    ],
  },
  {
    id: 'ev-website',
    title: 'Engel & Völkers Americas',
    description:
      'Front-end on this large-scale Next.js application, working with design, engineering, and back-end to integrate complex API data with a Contentful CMS. In addition to the scale, there were significant challenges to maintain privacy, accessibility and language compliance across different US states and international markets. Owned several key components and stayed on through enhancements and production support.',
    tags: ['Next.js', 'React', 'TypeScript', 'Contentful', 'API'],
    link: { href: 'https://www.evrealestate.com/', label: 'evrealestate.com' },
    video: {
      src: '/video/ev-home.mp4',
      alt: 'Silent screen recording of the Engel & Völkers Americas website',
      poster: '/video/ev-home.jpg',
      captionsSrc: '/video/ev-home-captions.vtt',
      caption:
        'Silent screen recording of the live site. Not a directed video—no audio or narration.',
    },
    images: [
      {
        href: 'https://www.evrealestate.com/en/shops-and-advisors/shop-locator?currentPage=1',
        src: '/img/ev-listings.jpg',
        alt: 'Listings page for Engel & Völkers Americas',
      },
      {
        href: 'https://www.evrealestate.com/en/lifestyle-properties/water',
        src: '/img/ev-property.jpg',
        alt: 'Example properties page for Engel & Völkers Americas',
      },
    ],
  },
  {
    id: 'notorious111',
    title: 'Notorious111',
    description:
      'Rather than treating the agency website as solely a marketing piece, we saw it as an opportunity to showcase modern front-end techniques. Built with Vue, Nuxt, and GSAP, the site combines thoughtful animation, performance, and responsive interactions while reflecting the agency’s creative identity.',
    tags: ['Vue', 'Nuxt', 'GSAP', 'Animation'],
    link: { href: 'https://notorious111.com/', label: 'notorious111.com' },
    video: {
      src: '/video/notorious111.mp4',
      alt: 'Silent screen recording of the Notorious111 website',
      poster: '/video/notorious111.jpg',
      captionsSrc: '/video/notorious111-captions.vtt',
      caption:
        'Silent screen recording of the live site. Not a directed video—no audio or narration.',
    },
    images: [
      {
        href: 'https://notorious111.com/case-studies/orioles',
        src: '/img/n111-orioles.jpg',
        alt: 'Case study for the Baltimore Orioles',
      },
      {
        href: 'https://notorious111.com/about',
        src: '/img/n111-about.jpg',
        alt: 'About page for Notorious 111',
      },
    ],
  },
];
