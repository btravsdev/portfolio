import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const START_OPACITY = 0.25;
const END_OPACITY = 1;
const IGNORE = '.role-chip, .role-switcher, .role-switcher__menu';
const WORD_CLASS = 'copy-reveal-word';

let run = 0;
let timeline: gsap.core.Timeline | null = null;
const splits: SplitText[] = [];

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function clearCopyReveal() {
  run += 1;
  timeline?.kill();
  timeline = null;
  while (splits.length) {
    splits.pop()?.revert();
  }
}

function collectTargets(root: HTMLElement): HTMLElement[] {
  const out: HTMLElement[] = [];

  const visit = (parent: HTMLElement) => {
    for (const child of Array.from(parent.children)) {
      if (!(child instanceof HTMLElement)) continue;
      if (child.matches('.role-chip, .role-switcher')) {
        out.push(child);
        continue;
      }
      if (child.matches(`.${WORD_CLASS}`)) {
        out.push(child);
        continue;
      }
      if (child.matches('.role-switcher__menu')) continue;
      visit(child);
    }
  };

  visit(root);
  return out;
}

async function revealCopyElements() {
  clearCopyReveal();
  const id = run;

  const roots = [...document.querySelectorAll<HTMLElement>('[data-copy-reveal]')];
  if (!roots.length) return;

  if (prefersReducedMotion()) {
    roots.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  await document.fonts.ready;
  if (id !== run) return;

  timeline = gsap.timeline();

  for (const root of roots) {
    if (!root.isConnected) continue;

    const split = SplitText.create(root, {
      type: 'words',
      tag: 'span',
      wordsClass: WORD_CLASS,
      aria: 'none',
      ignore: IGNORE,
    });
    splits.push(split);

    const targets = collectTargets(root);
    if (!targets.length) {
      root.classList.add('is-revealed');
      continue;
    }

    gsap.set(root, { opacity: 1 });
    gsap.set(targets, { opacity: START_OPACITY });

    timeline.add(
      gsap.fromTo(
        targets,
        { opacity: START_OPACITY },
        {
          opacity: END_OPACITY,
          duration: 0.25,
          ease: 'power2.out',
          stagger: 0.1,
          delay: 0.25,
          onComplete() {
            root.classList.add('is-revealed');
            gsap.set(targets, { clearProps: 'opacity' });
          },
        },
      ),
      0,
    );
  }
}

export function initCopyReveal() {
  void revealCopyElements();
}

export function destroyCopyReveal() {
  clearCopyReveal();
}
