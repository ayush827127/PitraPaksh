import Image from 'next/image'
import { blogPosts } from '../../lib/data/siteData'
import SectionHeading from '../../components/ui/SectionHeading'

export default function BlogPage() {
  return (
    <main className="bg-white">
      <section className="bg-linear-to-br from-maroon to-saffron px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
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
            <article key={post.slug} className="overflow-hidden rounded-[1.6rem] border border-gold/20 bg-white shadow-sm">
              <Image src={post.image} alt={post.title} width={800} height={600} className="h-40 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-maroon/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-maroon">{post.category}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted">{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-xl font-semibold text-ink">{post.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}