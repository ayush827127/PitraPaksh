import { siteUrl } from '../lib/seo/jsonld'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/account', '/api'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
