export const roles = {
  developer: {
    id: 'developer',
    path: '/is-a-developer',
    label: 'front-end engineer',
    title: 'Brian Travers is a front-end engineer',
    heroIntro:
      'with 12+ years of agency experience and a graphic-design background, I build accessible, responsive, maintainable digital applications.',
    note: undefined,
  },
  designer: {
    id: 'designer',
    path: '/is-a-designer',
    label: 'designer',
    title: 'Brian Travers is a designer',
    heroIntro:
      'with a career rooted in graphic design and front-end engineering, I take on selective design work to keep those skills sharp and bring a strong visual point of view to digital products.',
    note: undefined,
  },
  motion: {
    id: 'motion',
    path: '/does-motion-graphics',
    label: 'motion graphic designer',
    title: 'Brian Travers also does motion graphics',
    heroIntro:
      "with enough knowledge of Adobe Premiere and After Effects to be dangerous.",
    note: undefined,
  },
  deejay: {
    id: 'deejay',
    path: '/is-a-deejay',
    label: 'deejay',
    title: 'Brian Travers is a deejay',
    heroIntro:
      "with 20+ years of experience across weddings, bars, block parties, school dances, office parties, and everything in between, I help craft the soundtrack for your event.",
    note: undefined,
  },
} as const;

export type RoleId = keyof typeof roles;

export const roleList = Object.values(roles);

export const heroIntrosByPath = Object.fromEntries(
  roleList.map((role) => [role.path, role.heroIntro]),
) as Record<string, string>;
