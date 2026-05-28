import { services } from '../../lib/data/siteData'
import SectionHeading from '../../components/ui/SectionHeading'
import ServiceCard from '../../components/ui/ServiceCard'

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <section className="bg-linear-to-br from-cream to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full bg-maroon/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-maroon">Service catalogue</p>
              <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">Ritual services crafted with calm structure and sacred detail.</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                Explore a curated set of ceremonial offerings, priest support, and guided planning built around real pilgrim needs in Gaya.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-gold/20 bg-white p-5 shadow-sm">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-cream p-4">
                  <p className="text-2xl font-semibold text-maroon">{services.length}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-muted">service packages</p>
                </div>
                <div className="rounded-2xl bg-cream p-4">
                  <p className="text-2xl font-semibold text-maroon">24/7</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-muted">planning support</p>
                </div>
                <div className="rounded-2xl bg-maroon p-4 text-white sm:col-span-2">
                  <p className="text-sm font-semibold">Upcoming booking windows</p>
                  <p className="mt-2 text-xs leading-6 text-white/80">Sacred dates, family ceremonial slots, and guided consultation support are arranged through a premium booking workflow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Browse offerings"
          title="Every ritual package is intentionally structured"
          description="From high-touch temple ceremonies to remote consultation, each package is designed for future admin updates and easy content expansion."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </main>
  )
}