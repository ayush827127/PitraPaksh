import { services } from '../lib/data/siteData'
import { getAllBlogPosts } from '../lib/data/blogRepo'
import { siteUrl } from '../lib/seo/jsonld'

export default async function sitemap() {
  const now = new Date()

  const staticRoutes = [
    { path: '/', changeFrequency: 'weekly', priority: 1 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/services', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/faq', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/gallery', changeFrequency: 'monthly', priority: 0.5 },
    { path: '/calendar', changeFrequency: 'daily', priority: 0.7 },
  ].map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const serviceRoutes = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  let blogRoutes = []
  try {
    const posts = await getAllBlogPosts()
    blogRoutes = posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : now,
      changeFrequency: 'monthly',
      priority: 0.6,
    }))
  } catch (error) {
    console.error('[sitemap] Failed to load blog posts:', error.message)
  }

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes]
}
