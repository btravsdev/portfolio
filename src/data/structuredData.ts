import { siteConfig, absoluteUrl, type PageSeo } from './site';

const personId = absoluteUrl('/#person');
const websiteId = absoluteUrl('/#website');
const orgId = absoluteUrl('/#organization');

export function personSchema() {
  return {
    '@type': 'Person',
    '@id': personId,
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.defaultImage),
    email: siteConfig.email,
    telephone: siteConfig.telephone,
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    alternateName: [...siteConfig.alternateNames],
    sameAs: [...siteConfig.sameAs],
    knowsAbout: [...siteConfig.knowsAbout],
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: siteConfig.alumniOf.name,
      url: siteConfig.alumniOf.url,
    },
    nationality: {
      '@type': 'Country',
      name: 'United States',
    },
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    url: siteConfig.url,
    name: siteConfig.siteName,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { '@id': personId },
    author: { '@id': personId },
    copyrightHolder: { '@id': personId },
  };
}

export function professionalServiceSchema() {
  return {
    '@type': 'ProfessionalService',
    '@id': orgId,
    name: `${siteConfig.name} — Front-End Engineering`,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.defaultImage),
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.telephone,
    areaServed: [
      {
        '@type': 'City',
        name: 'Chicago',
      },
      {
        '@type': 'Country',
        name: 'United States',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    founder: { '@id': personId },
    employee: { '@id': personId },
    sameAs: [...siteConfig.sameAs],
    knowsAbout: [...siteConfig.knowsAbout],
  };
}

export function profilePageSchema(page: Pick<PageSeo, 'title' | 'description' | 'path'>) {
  const pageUrl = absoluteUrl(page.path);
  return {
    '@type': 'ProfilePage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': websiteId },
    about: { '@id': personId },
    mainEntity: { '@id': personId },
    inLanguage: siteConfig.language,
    author: { '@id': personId },
    breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
  };
}

export function breadcrumbSchema(page: Pick<PageSeo, 'title' | 'path'>) {
  const pageUrl = absoluteUrl(page.path);
  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: absoluteUrl('/is-a-developer'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: page.title,
        item: pageUrl,
      },
    ],
  };
}

export function workItemListSchema() {
  const items = [
    {
      name: 'Notorious111',
      url: 'https://notorious111.com/',
      description:
        'Agency website built with Vue, Nuxt, and GSAP featuring animation, performance, and responsive interactions.',
    },
    {
      name: 'Engel & Völkers Americas',
      url: 'https://www.evrealestate.com/',
      description:
        'Large-scale Next.js front-end with Contentful CMS and complex API integrations.',
    },
    {
      name: 'Kawasaki Engines USA',
      url: 'https://kawasakienginesusa.com/',
      description:
        'Next.js and Sanity CMS platform with ongoing technical leadership, features, and A/B testing.',
    },
  ];

  return {
    '@type': 'ItemList',
    '@id': absoluteUrl('/is-a-developer#work'),
    name: 'Selected Work',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: item.name,
        url: item.url,
        description: item.description,
        author: { '@id': personId },
        creator: { '@id': personId },
      },
    })),
  };
}

export function buildJsonLdGraph(page: PageSeo, extras: Record<string, unknown>[] = []) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      personSchema(),
      websiteSchema(),
      professionalServiceSchema(),
      profilePageSchema(page),
      breadcrumbSchema(page),
      ...extras,
    ],
  };
}
