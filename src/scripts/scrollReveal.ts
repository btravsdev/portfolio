import { gsap } from 'gsap';

const SELECTOR = 'main.site-main > .section';

let observer: IntersectionObserver | null = null;

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function revealSection(section: HTMLElement) {
  section.removeAttribute('inert');
  section.removeAttribute('data-reveal-pending');

  gsap.to(section, {
    opacity: 1,
    filter: 'blur(0px)',
    duration: 1.25,
    ease: 'power2.out',
    overwrite: 'auto',
  });
}

export function initScrollReveal() {
  observer?.disconnect();
  observer = null;

  const sections = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
  if (!sections.length) return;

  if (prefersReducedMotion()) {
    sections.forEach((section) => {
      section.removeAttribute('inert');
      section.removeAttribute('data-reveal-pending');
    });
    gsap.set(sections, { clearProps: 'opacity,filter' });
    return;
  }

  sections.forEach((section) => {
    gsap.set(section, { opacity: 0, filter: 'blur(10px)' });
    // Prevent keyboard focus into content that isn't visible yet
    section.setAttribute('inert', '');
    section.setAttribute('data-reveal-pending', '');
  });

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const section = entry.target as HTMLElement;
        observer?.unobserve(section);
        revealSection(section);
      }
    },
    {
      root: null,
      rootMargin: '0px 0px -15% 0px',
      threshold: 0,
    },
  );

  for (const section of sections) {
    observer.observe(section);
  }
}
