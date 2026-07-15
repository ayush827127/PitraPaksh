import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPostBySlug, getAllBlogPosts } from '../../../lib/data/blogRepo'
import HeroBackgroundImage from '../../../components/ui/HeroBackgroundImage'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Article not found | PitraPaksh',
    }
  }

  return {
    title: `${post.title} | PitraPaksh`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const allPosts = await getAllBlogPosts()
  const related = allPosts.filter((item) => item.slug !== post.slug).slice(0, 2)

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-linear-to-br from-maroon to-saffron px-4 py-16 text-white sm:px-6 lg:px-8">
        <HeroBackgroundImage src={post.image} alt={post.title} />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Link href="/blog" className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70 hover:text-white">
            ← Back to guides
          </Link>
          <p className="mt-4 inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-cream">{post.category}</p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-5xl">{post.title}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">{post.excerpt}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/60">{post.readTime}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[1.75rem] border border-gold/20">
          <Image src={post.image} alt={post.title} width={1200} height={675} className="h-72 w-full object-cover sm:h-96" />
        </div>

        <article className="mt-8 space-y-5">
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-sm leading-7 text-muted sm:text-base">
              {paragraph}
            </p>
          ))}
        </article>

        {post.takeaways?.length ? (
          <div className="mt-8 rounded-3xl border border-gold/20 bg-cream/60 p-5">
            <h2 className="text-lg font-semibold text-ink">Key takeaways</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {post.takeaways.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-saffron" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-8 rounded-3xl border border-gold/20 bg-white p-5 shadow-sm">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-saffron">Plan your visit</p>
          <h2 className="mt-2 text-xl font-semibold text-ink">Ready to book guided ritual support?</h2>
          <p className="mt-2 text-sm text-muted">Our team can coordinate priests, temple logistics, and travel details tailored to your family's needs.</p>
          <Link href="/services" className="mt-4 inline-flex rounded-full bg-maroon px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-saffron">
            Browse Services
          </Link>
        </div>
      </section>

      {related.length ? (
        <section className="bg-cream/40 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-saffron">Continue reading</p>
                <h2 className="mt-2 text-2xl font-semibold text-ink">More guides</h2>
              </div>
              <Link href="/blog" className="rounded-full border border-maroon/20 px-4 py-2 text-xs font-semibold text-maroon">View all articles</Link>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {related.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`} className="rounded-3xl border border-gold/20 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1">
                  <Image src={item.image} alt={item.title} width={800} height={600} className="h-32 w-full rounded-2xl object-cover" />
                  <p className="mt-3 text-sm font-semibold text-ink">{item.title}</p>
                  <p className="mt-2 text-xs leading-6 text-muted">{item.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  )
}
