import { brand } from '../../lib/data/siteData'
import HeroBackgroundImage from '../../components/ui/HeroBackgroundImage'

const supportChannels = [
  { label: 'Phone', value: brand.phone, detail: 'Call for booking support and ceremonial guidance.' },
  { label: 'Email', value: brand.email, detail: 'Send itinerary questions, group planning notes, and consultation requests.' },
  { label: 'WhatsApp', value: 'Open chat', detail: 'Instant support for sacred-day availability and travel coordination.' },
]

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-linear-to-br from-maroon to-saffron px-4 py-16 text-white sm:px-6 lg:px-8">
        <HeroBackgroundImage src="/contact.png" alt="Contact concierge" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-cream">Contact concierge</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Speak with a pilgrimage planning specialist.</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">From booking support to spiritual coordination, the contact experience is built for clear communication, human guidance, and future CRM or admin integration.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-3">
            {supportChannels.map((channel) => (
              <article key={channel.label} className="rounded-3xl border border-gold/20 bg-cream/60 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-saffron">{channel.label}</p>
                <p className="mt-2 text-lg font-semibold text-ink">{channel.value}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{channel.detail}</p>
              </article>
            ))}

            <div className="rounded-3xl border border-gold/20 bg-white p-5">
              <p className="text-sm font-semibold text-ink">Service area</p>
              <p className="mt-2 text-sm leading-6 text-muted">{brand.location}</p>
              <div className="mt-4 rounded-2xl bg-maroon p-4 text-white">
                <p className="text-xs uppercase tracking-[0.24em] text-gold">Planning support</p>
                <p className="mt-2 text-sm leading-6 text-white/80">Local host coordination, date support, and curated ritual guidance are available for every booking journey.</p>
              </div>
            </div>
          </div>

          <form className="rounded-[1.75rem] border border-gold/20 bg-white p-5 shadow-sm">
            <div className="grid gap-3 md:grid-cols-2">
              <label className="text-sm font-medium text-ink">
                Name
                <input type="text" className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm" placeholder="Your name" />
              </label>
              <label className="text-sm font-medium text-ink">
                Mobile
                <input type="tel" className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm" placeholder="Your number" />
              </label>
            </div>

            <label className="mt-3 block text-sm font-medium text-ink">
              Email
              <input type="email" className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm" placeholder="you@example.com" />
            </label>

            <label className="mt-3 block text-sm font-medium text-ink">
              Service interest
              <select className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm">
                <option>Pind Daan</option>
                <option>Shraddh Karma</option>
                <option>Tarpan</option>
                <option>Asthi Visarjan</option>
                <option>Pandit Booking</option>
                <option>Online Consultation</option>
              </select>
            </label>

            <label className="mt-3 block text-sm font-medium text-ink">
              Message
              <textarea rows="5" className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm" placeholder="Tell us about your ritual planning needs." />
            </label>

            <button className="mt-4 w-full rounded-full bg-maroon px-4 py-2.5 text-sm font-semibold text-white">Send inquiry</button>
          </form>
        </div>
      </section>
    </main>
  )
}