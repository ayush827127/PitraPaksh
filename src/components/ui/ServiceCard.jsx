import Image from 'next/image'
import Link from 'next/link'

export default function ServiceCard({ service, featured = false }) {
  return (
    <article className={`group relative overflow-hidden rounded-3xl border border-gold/20 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${featured ? 'ring-1 ring-saffron/40' : ''}`}>
      <div className="p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-saffron">{service.category}</p>
            <h3 className="mt-3 text-xl font-semibold text-ink">{service.title}</h3>
          </div>
          <span className="rounded-full bg-maroon/5 px-3 py-1 text-[10px] font-semibold text-maroon">{service.duration}</span>
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl border border-cream bg-cream">
          <Image src={service.image} alt={service.title} width={800} height={500} className="h-36 w-full object-cover" />
        </div>

        <p className="mt-4 text-sm leading-6 text-muted">{service.summary}</p>

        <ul className="mt-4 space-y-2 text-sm text-ink">
          {service.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-saffron" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center justify-between border-t border-gold/10 pt-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Starting from</p>
            <p className="mt-1 text-2xl font-semibold text-maroon">{service.price}</p>
          </div>
          <Link href={`/services/${service.slug}`} className="rounded-full bg-maroon px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-saffron">
            View details
          </Link>
        </div>
      </div>
    </article>
  )
}