export type Job = {
  id: string;
  title: string;
  company: string;
  dates: string;
  description: string;
};

export const jobs: Job[] = [
  {
    id: 'notorious111',
    title: 'Developer',
    company: 'Notorious111',
    dates: 'August 2022–July 2026',
    description:
      'Built and maintained CMS-driven web applications for enterprise and consumer brands using modern front-end frameworks. Collaborated across strategy, design, and development teams while owning complex features, API integrations, and long-term platform improvements.',
  },
  {
    id: '88bp',
    title: 'Web Developer, Senior Developer',
    company: '88 Brand Partners',
    dates: 'May 2014–August 2022',
    description:
      'Built responsive marketing websites, interactive experiences, and custom digital applications while helping establish front-end architecture and serving as the agency’s motion graphics lead.',
  },
  {
    id: 'ppp',
    title: 'Graphic Designer',
    company: 'Promotional Product Partners',
    dates: 'September 2005–May 2014',
    description:
      'Led the company’s graphics department while expanding its digital presence through website development and online marketing. This role sparked a transition from graphic design into front-end development and laid the foundation for a career focused on building digital products.',
  },
];
