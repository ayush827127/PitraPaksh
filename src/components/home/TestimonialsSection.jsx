import { testimonials } from '../../lib/data/siteData'
import SectionHeading from '../ui/SectionHeading'

export default function TestimonialsSection() {
  return (
    <section className="bg-cream/40 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Pilgrim stories"
          title="What families and travelers appreciate most"
          description="Warm, consistent support, elegant planning, and heartfelt rituals are repeated across every review."
          align="center"
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-3xl border border-gold/20 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-1 text-saffron">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-ink">“{item.quote}”</p>
              <div className="mt-5 border-t border-gold/10 pt-4">
                <p className="text-sm font-semibold text-ink">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">{item.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}