import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { brand, getServiceBySlug, services } from '../../../lib/data/siteData'
import ServiceGayaTeaser from '../../../components/services/ServiceGayaTeaser'
import BookingPaymentCard from '../../../components/services/BookingPaymentCard'
import ServiceHeroCarousel from '../../../components/services/ServiceHeroCarousel'

const trustPoints = [
  'Verified & experienced pandits',
  '2,400+ rituals guided',
  'Flexible cancellation',
]

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: 'Service not found | PitraPaksh',
    }
  }

  return {
    title: `${service.title} | PitraPaksh`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3)

  return (
    <main className="bg-white">
      <section className="bg-linear-to-br from-maroon to-saffron px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-cream">{service.category}</p>
              <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{service.title}</h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/85">{service.description}</p>

              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/85">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/20 text-[10px]">✓</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-maroon">{service.price}</div>
                <div className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white">{service.duration}</div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#booking" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-maroon transition-colors hover:bg-cream">
                  Book This Puja
                </a>
                <a
                  href={`tel:${brand.phone.replace(/\s+/g, '')}`}
                  className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Call Now
                </a>
              </div>
            </div>

            <ServiceHeroCarousel images={service.gallery ?? [service.image]} title={service.title} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <article className="rounded-3xl border border-gold/20 bg-cream/60 p-5">
              <h2 className="text-xl font-semibold text-ink">What’s included</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {service.inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-saffron" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-gold/20 bg-white p-5">
              <h2 className="text-xl font-semibold text-ink">Ceremony flow</h2>
              <ol className="mt-4 space-y-3 text-sm text-muted">
                {service.process.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-maroon text-[10px] font-bold text-white">{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </article>

            <article className="rounded-3xl border border-gold/20 bg-white p-5">
              <h2 className="text-xl font-semibold text-ink">Who this fits best</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.idealFor.map((item) => (
                  <span key={item} className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-maroon">{item}</span>
                ))}
              </div>
            </article>

            <ServiceGayaTeaser />
          </div>

          <aside id="booking" className="scroll-mt-24 rounded-[1.75rem] border border-gold/20 bg-white p-5 shadow-sm">
            <div className="rounded-3xl bg-cream p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-saffron">Booking preview</p>
              <h2 className="mt-2 text-2xl font-semibold text-ink">Planning preview</h2>
              <p className="mt-2 text-sm text-muted">Choose a preferred date, share family details, and request guided coordination. The booking interface is structured for future admin-driven pricing and availability updates.</p>

              <div className="mt-5 space-y-3 text-sm">
                <div className="rounded-2xl bg-white px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">Starting from</p>
                  <p className="mt-1 text-xl font-semibold text-maroon">{service.price}</p>
                </div>
                <div className="rounded-2xl bg-white px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">Service window</p>
                  <p className="mt-1 font-medium text-ink">{service.duration}</p>
                </div>
                <div className="rounded-2xl bg-white px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">Travel base</p>
                  <p className="mt-1 font-medium text-ink">{service.startingPoint}</p>
                </div>
              </div>

              <BookingPaymentCard service={service} />
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-cream/40 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-saffron">Related rituals</p>
              <h2 className="mt-2 text-2xl font-semibold text-ink">Other sacred support options</h2>
            </div>
            <Link href="/services" className="rounded-full border border-maroon/20 px-4 py-2 text-xs font-semibold text-maroon">View all services</Link>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/services/${item.slug}`} className="rounded-3xl border border-gold/20 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1">
                <Image src={item.image} alt={item.title} width={800} height={600} className="h-32 w-full rounded-2xl object-cover" />
                <p className="mt-3 text-sm font-semibold text-ink">{item.title}</p>
                <p className="mt-2 text-xs leading-6 text-muted">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}