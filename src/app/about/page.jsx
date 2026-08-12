import Link from 'next/link'
import { brand, services, gayaStory, pindDaanBenefits, travelToGaya } from '../../lib/data/siteData'
import SectionHeading from '../../components/ui/SectionHeading'
import HeroBackgroundImage from '../../components/ui/HeroBackgroundImage'

export const metadata = {
  title: `About ${brand.name}`,
  description: `Learn about ${brand.name}, a trusted ritual planning team offering Pind Daan, Shraddh Karma, Tarpan, and pandit booking support in Gaya, Bihar.`,
  alternates: { canonical: '/about' },
  openGraph: {
    title: `About ${brand.name}`,
    description: `Learn about ${brand.name}, a trusted ritual planning team offering sacred puja services in Gaya, Bihar.`,
    url: '/about',
  },
}

const values = [
  { title: 'Sacred timing', description: 'We help pilgrims understand meaningful ritual windows and plan around them with confidence.' },
  { title: 'Local coordination', description: 'Temple access, priest matching, and travel support are structured through calm, trusted planning.' },
  { title: 'Premium care', description: 'Every interaction is designed to feel respectful, polished, and easy to navigate.' },
]

const team = [
  { name: 'Dr. Amitesh Rao', role: 'Spiritual Operations Lead', bio: 'Brings deep experience in ritual planning and temple coordination throughout Bihar.' },
  { name: 'Meera Banerjee', role: 'Guest Support Curator', bio: 'Specializes in client care, itinerary support, and transparent communication for visiting families.' },
  { name: 'Sanjay Singh', role: 'Pandit Relations Associate', bio: 'Coordinates trusted priest matching and sacred timeline support across Gaya rituals.' },
]

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-linear-to-br from-maroon to-saffron px-4 py-16 text-white sm:px-6 lg:px-8">
        <HeroBackgroundImage src="/about.png" alt={`About ${brand.name}`} />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-cream">
                About {brand.name}
              </p>
              <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">A premium spiritual portal rooted in Gaya’s sacred rituals.</h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80">
                {brand.name} helps families and pilgrims plan meaningful ancestral rituals with clarity, dignity, and refined guidance. Every offering is built around trust, local insight, and calm service.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/services" className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-maroon">View services</Link>
                <Link href="/contact" className="rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white">Contact concierge</Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-3xl font-semibold">12+</p>
                <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/70">years of pilgrimage guidance</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-3xl font-semibold">6</p>
                <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/70">sacred service categories</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5 backdrop-blur-sm sm:col-span-2">
                <p className="text-3xl font-semibold">24/7</p>
                <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/70">support for itinerary, booking, and local coordination</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gaya-story" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Gaya"
          title="The sacred story behind Pind Daan at Gaya"
          description="Passed down through generations, these are the traditions that make Gaya one of the most significant sites in Hindu dharma for honoring one's ancestors."
          align="center"
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {gayaStory.map((item) => (
            <article key={item.title} className="rounded-3xl border border-gold/20 bg-cream/60 p-5">
              <p className="text-sm font-semibold text-ink">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream/40 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Traditional beliefs"
            title="Why families choose to perform Pind Daan"
            description="These are benefits held within Hindu tradition and passed down through dharmic teaching, shared here in that spirit."
            align="center"
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pindDaanBenefits.map((benefit) => (
              <article key={benefit.title} className="rounded-3xl border border-gold/20 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-maroon">{benefit.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Grounded in faith, built for meaningful planning."
              description="We don’t view ritual booking as a transaction. We treat it as a deeply human journey where timing, respect, and local trust matter most."
            />
          </div>

          <div className="grid gap-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-3xl border border-gold/20 bg-cream/60 p-5">
                <p className="text-sm font-semibold text-ink">{value.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream/40 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Meet the team"
            title="Compassionate guides behind every sacred booking"
            description="A calm, human-led operations team keeps every trip well coordinated and deeply respectful."
            align="center"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="rounded-3xl border border-gold/20 bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-maroon text-lg font-semibold text-white">{member.name.charAt(0)}</div>
                <h3 className="mt-4 text-lg font-semibold text-ink">{member.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.24em] text-saffron">{member.role}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Plan your journey"
          title="How to reach Gaya"
          description="Whether you're flying in, taking the train, or driving from a nearby city, here's how families typically make their way to Gaya."
          align="center"
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {travelToGaya.map((option) => (
            <article key={option.mode} className="rounded-3xl border border-gold/20 bg-cream/60 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-saffron">{option.mode}</p>
              <p className="mt-2 text-lg font-semibold text-ink">{option.title}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{option.description}</p>
              <p className="mt-3 rounded-2xl bg-white p-3 text-xs leading-6 text-maroon">💡 {option.tip}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-gold/20 bg-white p-5 text-center">
          <p className="text-sm leading-6 text-muted">
            Not sure how to plan your route? Our concierge team can help coordinate airport or station pickup once your service is booked — just{' '}
            <Link href="/contact" className="font-semibold text-maroon hover:underline">reach out to us</Link>{' '}
            with your travel dates.
          </p>
        </div>

        <div className="mt-4 rounded-3xl border border-gold/20 bg-cream/60 p-5 text-center">
          <p className="text-sm leading-6 text-muted">
            🏨 Need a place to stay? Contact our team and we can arrange a hotel with good facilities near the temple for your family.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-4xl bg-maroon px-6 py-8 text-white">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">Service coverage</p>
              <h2 className="mt-3 text-2xl font-semibold">A curated portfolio built for local rituals, remote planning, and future expansion.</h2>
              <p className="mt-2 text-sm text-white/75">Current offerings include {services.length} sacred service experiences, all structured for future admin updates and content scaling.</p>
            </div>
            <Link href="/contact" className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-maroon">Plan a consultation</Link>
          </div>
        </div>
      </section>
    </main>
  )
}