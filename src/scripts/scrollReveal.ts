import { gsap } from 'gsap';

let observer: IntersectionObserver | null = null;

const HIDDEN = { opacity: 0, filter: 'blur(8px)', y: 18 };
const SHOW = {
  opacity: 1,
  filter: 'blur(0px)',
  y: 0,
  duration: 0.75,
  ease: 'power2.out',
};

const TRIGGER_TYPES = new Set([
  'clients',
  'work-item',
  'skill-sets',
  'experience-item',
  'hdr-line',
]);

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function showImmediately(elements: Element[]) {
  gsap.set(elements, { clearProps: 'opacity,filter,transform' });
  elements.forEach((el) => {
    if (el instanceof HTMLElement) {
      el.style.setProperty('--section-line', '1');
      el.removeAttribute('inert');
      el.removeAttribute('data-reveal-pending');
    }
  });
}

function revealClients(root: HTMLElement) {
  const items = root.querySelectorAll<HTMLElement>('[data-reveal="client"]');
  gsap.to(items, { ...SHOW, stagger: 0.08 });
}

function revealWorkItem(article: HTMLElement) {
  article.removeAttribute('inert');

  const video = article.querySelector<HTMLElement>('[data-reveal="work-video"]');
  const imageLinks = article.querySelectorAll<HTMLElement>('[data-reveal="work-image"]');
  const imagesWrap = article.querySelector<HTMLElement>('[data-reveal="work-images"]');
  const content = article.querySelector<HTMLElement>('[data-reveal="work-content"]');

  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  if (video) tl.to(video, { ...SHOW }, 0);

  if (imageLinks.length) {
    // Ensure wrapper is visible; stagger individual images
    if (imagesWrap) gsap.set(imagesWrap, { clearProps: 'opacity,filter,transform' });
    tl.to(imageLinks, { ...SHOW, stagger: 0.05 }, '-=0.5');
  } else if (imagesWrap) {
    tl.to(imagesWrap, { ...SHOW }, '-=0.5');
  }

  if (content) tl.to(content, { ...SHOW }, '-=0.5');
}

function revealSkillSets(root: HTMLElement) {
  const sets = root.querySelectorAll<HTMLElement>('[data-reveal="skill-set"]');
  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  sets.forEach((set, index) => {
    const at = index === 0 ? 0 : '-=0.7';
    tl.to(set, { ...SHOW, duration: 0.55 }, at);

    const skills = set.querySelectorAll<HTMLElement>('.skill-list li, .skill-icon');
    if (skills.length) {
      gsap.set(skills, HIDDEN);
      tl.to(skills, { ...SHOW, duration: 0.45, stagger: 0.05 }, '-=0.25');
    }
  });
}

function revealExperienceItem(item: HTMLElement) {
  item.removeAttribute('inert');

  const parts = item.querySelectorAll<HTMLElement>(
    '.experience-item__header, .experience-item__title, .experience-item__description, .experience-item__extra',
  );

  if (parts.length) {
    gsap.set(item, { clearProps: 'opacity,filter,transform' });
    gsap.set(parts, HIDDEN);
    gsap.to(parts, { ...SHOW, stagger: 0.05 });
    return;
  }

  gsap.to(item, SHOW);
}

function revealHdrLine(hdr: HTMLElement) {
  gsap.fromTo(
    hdr,
    { '--section-line': 0 },
    { '--section-line': 1, duration: 0.9, ease: 'power2.inOut' },
  );
}

function runReveal(el: HTMLElement) {
  if (el.dataset.revealPending === 'done') return;
  el.dataset.revealPending = 'done';

  switch (el.dataset.reveal) {
    case 'clients':
      revealClients(el);
      break;
    case 'work-item':
      revealWorkItem(el);
      break;
    case 'skill-sets':
      revealSkillSets(el);
      break;
    case 'experience-item':
      revealExperienceItem(el);
      break;
    case 'hdr-line':
      revealHdrLine(el);
      break;
    default:
      gsap.to(el, SHOW);
  }
}

export function initScrollReveal() {
  observer?.disconnect();
  observer = null;

  const triggers = Array.from(
    document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-reveal-pending="done"])'),
  ).filter((el) => TRIGGER_TYPES.has(el.dataset.reveal ?? ''));

  if (!triggers.length) return;

  if (prefersReducedMotion()) {
    const allParts = document.querySelectorAll<HTMLElement>('[data-reveal]');
    showImmediately([...triggers, ...allParts]);
    document.querySelectorAll<HTMLElement>('.section-hdr').forEach((hdr) => {
      hdr.style.setProperty('--section-line', '1');
    });
    return;
  }

  document.querySelectorAll<HTMLElement>('[data-reveal="client"]').forEach((el) => {
    gsap.set(el, HIDDEN);
  });
  document.querySelectorAll<HTMLElement>('[data-reveal="skill-set"]').forEach((el) => {
    gsap.set(el, HIDDEN);
  });
  document.querySelectorAll<HTMLElement>('[data-reveal="experience-item"]').forEach((el) => {
    gsap.set(el, HIDDEN);
    el.setAttribute('inert', '');
  });
  document.querySelectorAll<HTMLElement>('[data-reveal="work-item"]').forEach((article) => {
    article.setAttribute('inert', '');
    article
      .querySelectorAll<HTMLElement>(
        '[data-reveal="work-video"], [data-reveal="work-images"], [data-reveal="work-image"], [data-reveal="work-content"]',
      )
      .forEach((part) => gsap.set(part, HIDDEN));
  });
  document.querySelectorAll<HTMLElement>('[data-reveal="hdr-line"]').forEach((hdr) => {
    hdr.style.setProperty('--section-line', '0');
  });

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        observer?.unobserve(el);
        runReveal(el);
      }
    },
    {
      root: null,
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.15,
    },
  );

  for (const el of triggers) {
    observer.observe(el);
  }
}
