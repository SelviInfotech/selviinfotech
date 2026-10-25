import { sameAs, site } from "@/lib/site";

const address = {
  "@type": "PostalAddress",
  addressLocality: site.locality,
  addressRegion: site.region,
  addressCountry: site.country,
};

export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        alternateName: site.shortName,
        url: `${site.url}/`,
        logo: `${site.url}/logo.png`,
        image: `${site.url}/og.png`,
        email: site.email,
        telephone: site.phoneTel,
        description: site.description,
        address,
        identifier: {
          "@type": "PropertyValue",
          propertyID: "Udyam",
          value: site.udyam,
        },
        sameAs: [...sameAs],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: `${site.url}/`,
        name: site.name,
        alternateName: site.shortName,
        description: site.description,
        inLanguage: "en-IN",
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${site.url}/#localbusiness`,
        name: site.name,
        url: `${site.url}/`,
        image: `${site.url}/og.png`,
        logo: `${site.url}/logo.png`,
        telephone: site.phoneTel,
        email: site.email,
        description: site.description,
        address,
        parentOrganization: { "@id": `${site.url}/#organization` },
        areaServed: [
          { "@type": "City", name: "Chennai" },
          { "@type": "State", name: "Tamil Nadu" },
          { "@type": "Country", name: "India" },
        ],
        sameAs: [...sameAs],
        identifier: {
          "@type": "PropertyValue",
          propertyID: "Udyam",
          value: site.udyam,
        },
      },
    ],
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1"),
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: `${site.url}${item.path}` } : {}),
    })),
  };
}
