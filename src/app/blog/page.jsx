import Image from 'next/image'
import Link from 'next/link'
import { getAllBlogPosts } from '../../lib/data/blogRepo'
import SectionHeading from '../../components/ui/SectionHeading'
import HeroBackgroundImage from '../../components/ui/HeroBackgroundImage'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Guides & Insights',
  description: 'Practical guides on ritual timing, Pind Daan preparation, Vishnupad Temple visits, and sacred travel planning for pilgrims visiting Gaya.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Guides & Insights | PitraPaksh',
    description: 'Practical guides on ritual timing, Pind Daan preparation, and sacred travel planning for pilgrims visiting Gaya.',
    url: '/blog',
  },
}

export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts()

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-linear-to-br from-maroon to-saffron px-4 py-16 text-white sm:px-6 lg:px-8">
        <HeroBackgroundImage src="/blog.png" alt="Guides & insights" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-cream">Guides & insights</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Helpful rituals, preparation notes, and sacred travel guides.</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">Every blog layout is ready for editorial updates, content blocks, and future blog management without structure changes.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Editorial library"
          title="Content designed to support pilgrims and improve search visibility"
          description="Topics cover sacred timing, travel preparation, temple expectations, and spiritual guidance for ritual planning."
        />

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="overflow-hidden rounded-[1.6rem] border border-gold/20 bg-white shadow-sm transition-transform hover:-translate-y-1"
            >
              <Image src={post.image} alt={post.title} width={800} height={600} className="h-40 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-maroon/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-maroon">{post.category}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted">{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-xl font-semibold text-ink">{post.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}