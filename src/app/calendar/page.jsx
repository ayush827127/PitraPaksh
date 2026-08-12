import { services } from '../../lib/data/siteData'
import SectionHeading from '../../components/ui/SectionHeading'
import HeroBackgroundImage from '../../components/ui/HeroBackgroundImage'
import RitualCalendarWidget from '../../components/calendar/RitualCalendarWidget'
import { getAllCalendarEvents } from '../../lib/data/calendarRepo'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Sacred Date Calendar & Planning',
  description: 'Plan ahead with a structured calendar of ritual windows, Pitru Paksha dates, and service availability for Gaya puja bookings.',
  alternates: { canonical: '/calendar' },
  openGraph: {
    title: 'Sacred Date Calendar & Planning | PitraPaksh',
    description: 'Plan ahead with a structured calendar of ritual windows, Pitru Paksha dates, and service availability.',
    url: '/calendar',
  },
}

export default async function CalendarPage() {
  const events = await getAllCalendarEvents()

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-linear-to-br from-maroon to-saffron px-4 py-16 text-white sm:px-6 lg:px-8">
        <HeroBackgroundImage src="/calendar.png" alt="Calendar & planning" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-cream">Calendar & planning</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Sacred date planning with premium guidance.</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">Use this calendar view as a structured planning hub for ritual windows, service availability, and thoughtful booking preparation.</p>
        </div>
      </section>

      <RitualCalendarWidget events={events} />

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Availability by service"
          title="Support for multiple ritual types"
          description="Typical demand is grouped around temple rituals, family ceremonies, expert priest booking, and online consultation support."
        />

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="rounded-3xl border border-gold/20 bg-white p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-saffron">{service.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{service.title}</h3>
              <p className="mt-2 text-xs leading-6 text-muted">Typical turn-around {service.duration}. Flexible planning based on sacred windows and local coordination.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}