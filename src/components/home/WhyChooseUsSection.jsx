const values = [
  {
    title: 'Verified priest network',
    description: 'Access carefully screened pandits, local guides, and ritual coordinators with trusted support for each booking.',
  },
  {
    title: 'Premium planning support',
    description: 'From sacred date guidance to itinerary support, every stage is explained with care and structure.',
  },
  {
    title: 'Concierge-level communication',
    description: 'Stay updated with confirmation, timing reminders, and on-ground assistance throughout the pilgrimage.',
  },
  {
    title: 'Flexible, future-ready booking',
    description: 'The platform is built to scale into broader content, pricing, media, and admin-managed operations later.',
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="rounded-[1.75rem] border border-gold/20 bg-white p-6 shadow-sm">
          <p className="inline-flex rounded-full bg-maroon/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-maroon">
            Why pilgrims trust us
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-ink">A calm, premium ritual experience designed for sacred journeys.</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            We combine spiritual clarity, local expertise, and elegant booking workflows so every pilgrimage feels guided, respectful, and easy to manage.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {values.map((item) => (
              <div key={item.title} className="rounded-2xl bg-cream/80 p-4">
                <p className="text-sm font-semibold text-ink">{item.title}</p>
                <p className="mt-2 text-xs leading-6 text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          <div className="rounded-[1.75rem] bg-linear-to-br from-maroon to-saffron p-6 text-white">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">Guided promise</p>
            <h3 className="mt-3 text-2xl font-semibold">Trust-first rituals, tailored assistance, and meaningful support.</h3>
            <p className="mt-3 text-sm leading-6 text-white/80">
              From first inquiry to final ceremony, every interaction is designed for clarity, accessibility, and dignified service.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-3xl border border-gold/20 bg-white p-5">
              <p className="text-sm font-semibold text-ink">Local expertise</p>
              <p className="mt-2 text-xs leading-6 text-muted">Grounded in Gaya-specific temple practices, local access, and sacred-time awareness.</p>
            </div>
            <div className="rounded-3xl border border-gold/20 bg-white p-5">
              <p className="text-sm font-semibold text-ink">Premium experience</p>
              <p className="mt-2 text-xs leading-6 text-muted">Elegant booking journeys, refined messaging, and beautifully structured content modules.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}