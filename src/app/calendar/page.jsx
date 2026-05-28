import { ritualCalendar, services } from '../../lib/data/siteData'
import SectionHeading from '../../components/ui/SectionHeading'

const calendarDays = [
  'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun',
]

const monthCells = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

export default function CalendarPage() {
  return (
    <main className="bg-white">
      <section className="bg-linear-to-br from-maroon to-saffron px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-cream">Calendar & planning</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Sacred date planning with premium guidance.</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">Use this calendar view as a structured planning hub for ritual windows, service availability, and thoughtful booking preparation.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.75rem] border border-gold/20 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-saffron">June 2026 overview</p>
                <h2 className="mt-2 text-2xl font-semibold text-ink">Highlighted sacred windows</h2>
              </div>
              <span className="rounded-full bg-maroon/5 px-3 py-1 text-[10px] font-semibold text-maroon">Preview</span>
            </div>

            <div className="mt-5 grid grid-cols-7 gap-2 text-center text-xs font-semibold text-muted">
              {calendarDays.map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-7 gap-2">
              {monthCells.map((day) => (
                <div key={day} className={`rounded-xl border p-2 text-xs ${day <= 5 ? 'border-gold/20 bg-cream/60 text-muted' : 'border-saffron/30 bg-white text-ink'}`}>
                  <div className="font-semibold">{day}</div>
                  {day === 28 || day === 2 || day === 11 || day === 16 ? <div className="mt-2 rounded-full bg-maroon px-1 py-0.5 text-[9px] text-white">Peak</div> : null}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-gold/20 bg-cream/60 p-5">
              <SectionHeading
                eyebrow="Planning highlights"
                title="Recommended sacred windows"
                description="Use these sample milestones to structure reminders, consultations, and ceremonial bookings."
              />
            </div>

            <div className="space-y-3">
              {ritualCalendar.map((item) => (
                <div key={item.day} className={`rounded-[1.25rem] border p-4 ${item.mood}`}>
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
      </section>

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