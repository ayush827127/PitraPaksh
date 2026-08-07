import { brand } from '../../lib/data/siteData'
import HeroBackgroundImage from '../../components/ui/HeroBackgroundImage'
import ContactForm from '../../components/contact/ContactForm'

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

          <ContactForm />
        </div>
      </section>
    </main>
  )
}