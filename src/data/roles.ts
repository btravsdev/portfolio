export const roles = {
  developer: {
    id: 'developer',
    path: '/is-a-developer',
    label: 'front-end engineer',
    title: 'Brian Travers is a front-end engineer',
    blurb:
      ' with a background in graphic design and 10+ years of agency experience building modern, CMS-driven web applications.',
    note: undefined,
  },
  designer: {
    id: 'designer',
    path: '/is-a-designer',
    label: 'designer',
    title: 'Brian Travers is a designer',
    blurb:
      '. Graphic design is an important element to my career as a front-end engineer, so occasionally I like to take on work specifically doing design to keep those skills sharp. Below are some examples of that work.',
    note: undefined,
  },
  motion: {
    id: 'motion',
    path: '/does-motion-graphic-designer',
    label: 'motion graphic designer',
    title: 'Brian Travers also does motion graphics',
    blurb:
      'with a with enough knowledge of Adobe Premiere and After Effects to be dangerous.',
    note: undefined,
  },
  deejay: {
    id: 'deejay',
    path: '/is-a-deejay',
    label: 'deejay',
    title: 'Brian Travers is a deejay',
    blurb:
      ", with over 20 years experience doing a variety of events, including bars, weddings, block parties, grade school dances, high school proms, ring dances, office holiday parties, birthday parties, christenings, communions, St. Patrick's day parades, back-yard parties.",
    note: undefined,
  },
} as const;

export type RoleId = keyof typeof roles;

export const roleList = Object.values(roles);
