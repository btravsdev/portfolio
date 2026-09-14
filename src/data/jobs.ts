export type Job = {
  id: string;
  title: string;
  company: string;
  dates: string;
  description: string;
  bulletPoints?: string[];
};

export const jobs: Job[] = [
  {
    id: 'notorious111',
    title: 'Developer',
    company: 'Notorious111',
    dates: 'August 2022–July 2026',
    description:
      'Built and maintained CMS-driven web applications for brands using modern front-end frameworks. Frequent collaboration with strategy, design, and development teams while owning complex features, API integrations, and long-term platform improvements.',
    bulletPoints: [
      "Drove <strong>$2M+ in incremental revenue</strong> in first year for Kawasaki Engines USA by collaborating on a data-driven A/B testing program.",
      "Achieved a <strong>12.5% conversion rate</strong> (outperforming the 3% industry benchmark) while in the role of the technical lead for the project.",
      "Built products within <strong>highly regulated sectors</strong>, including healthcare (Inova) and real estate (Engel & Völkers), adhering to strict compliance and within large API-driven integrations.",
      "Accelerated the development cycles and improved testing across Vue, React, and Astro projects through <strong>integrating AI workflows (Cursor/Claude)</strong>.",
    ],
  },
  {
    id: '88bp',
    title: 'Senior Developer',
    company: '88 Brand Partners',
    dates: 'May 2014–August 2022',
    description:
      "Built large CMS-driven sites, landing pages, interactive experiences, dashboards, internal tools, and digital advertising for clients across multiple industries. Contributed to backend maintenance while also serving as the agency's motion graphics lead.",
  },
  {
    id: 'ppp',
    title: 'Graphic Designer',
    company: 'Promotional Product Partners',
    dates: 'September 2005–May 2014',
    description:
      'Ran the entire creative department of the company. Expanded the digital offerings, which sparked my interest in pivoting to web development and digital.',
  },
];
