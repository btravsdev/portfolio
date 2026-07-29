export const roles = {
  developer: {
    id: 'developer',
    path: '/is-a-developer',
    label: 'full-stack developer',
    title: 'Brian Travers is a full-stack developer',
    blurb:
      ', former graphic designer and agency veteran with 10+ years of experience shaping brands, type, and visual systems.',
  },
  designer: {
    id: 'designer',
    path: '/is-a-designer',
    label: 'designer',
    title: 'Brian Travers is a designer',
    blurb:
      '. Graphic design is an important element to my career as a front-end developer, so occasionally I like to take on work specifically doing design to keep those skills sharp.  Below are some examples of that work.',
  },
  deejay: {
    id: 'deejay',
    path: '/is-a-deejay',
    label: 'deejay',
    title: 'Brian Travers is a deejay',
    blurb:
      ", with over 20 years experience doing a variety of events, including bars, weddings, block parties, grade school dances, high school proms, ring dances, office holiday parties, birthday parties, christenings, communions, St. Patrick's day parades, back-yard parties.",
  },
} as const;

export type RoleId = keyof typeof roles;

export const roleList = Object.values(roles);
