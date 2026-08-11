import Link from 'next/link'
import { ritualCalendar } from '../../lib/data/siteData'

const steps = [
  { title: 'Choose your ritual', description: 'Browse sacred services, compare timing, and pick the right experience for your family.', step: '01' },
  { title: 'Book with confidence', description: 'Share details, choose travel support, and confirm availability with guided coordination.', step: '02' },
  { title: 'Attend with ease', description: 'Receive a polished itinerary, priest support, and on-ground contact during the ceremony.', step: '03' },
]

export default function ProcessSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="inline-flex rounded-full bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-saffron">
              The ritual journey
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-ink">A simple, respectful booking process from planning to presence.</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Every journey is broken into clear steps so pilgrims can focus on the sacred experience while the logistics remain beautifully handled.
            </p>

            <div className="mt-6 space-y-3">
              {steps.map((step) => (
                <div key={step.step} className="rounded-[1.25rem] border border-gold/20 bg-cream/60 p-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-maroon px-3 py-1 text-[10px] font-bold text-white">{step.step}</span>
                    <p className="text-sm font-semibold text-ink">{step.title}</p>
                  </div>
                  <p className="mt-2 text-xs leading-6 text-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-gold/20 bg-linear-to-br from-cream to-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-saffron">Sacred date planning</p>
                <h3 className="mt-2 text-2xl font-semibold text-ink">Upcoming planning windows</h3>
              </div>
              <Link
                href="/calendar"
                className="rounded-full bg-maroon/10 px-3 py-1 text-[10px] font-semibold text-maroon transition-colors hover:bg-maroon/20"
              >
                Smart calendar
              </Link>
            </div>

            <div className="mt-5 grid gap-3">
              {ritualCalendar.map((item) => (
                <div key={item.day} className={`rounded-2xl border p-4 ${item.mood}`}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold">{item.day}</p>
                      <p className="mt-1 text-xs opacity-80">{item.note}</p>
                    </div>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em]">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}