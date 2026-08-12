import { brand } from '../data/siteData'

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#organization`,
    name: brand.name,
    description: brand.description,
    url: siteUrl,
    telephone: brand.phone,
    email: brand.email,
    image: `${siteUrl}/Hero_main_banner_478397efa5.webp`,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vishnupad Temple Road',
      addressLocality: 'Gaya',
      addressRegion: 'Bihar',
      postalCode: '823001',
      addressCountry: 'IN',
    },
    sameAs: [brand.whatsapp],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: brand.name,
    publisher: { '@id': `${siteUrl}/#organization` },
  }
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  }
}

export function serviceSchema(service) {
  const price = String(service.price).replace(/[^0-9.]/g, '')
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    serviceType: service.category,
    provider: { '@id': `${siteUrl}/#organization` },
    areaServed: {
      '@type': 'City',
      name: 'Gaya',
    },
    url: `${siteUrl}/services/${service.slug}`,
    image: `${siteUrl}${service.image}`,
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `${siteUrl}/services/${service.slug}`,
    },
  }
}

export function articleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${siteUrl}${post.image}`,
    datePublished: post.createdAt,
    dateModified: post.updatedAt || post.createdAt,
    author: { '@type': 'Organization', name: brand.name },
    publisher: { '@id': `${siteUrl}/#organization` },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  }
}

export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
