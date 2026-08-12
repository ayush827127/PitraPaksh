import { faqItems } from '../../lib/data/siteData'
import FAQAccordion from '../../components/faq/FAQAccordion'
import HeroBackgroundImage from '../../components/ui/HeroBackgroundImage'
import JsonLd from '../../components/seo/JsonLd'
import { faqSchema } from '../../lib/seo/jsonld'

export const metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers to common questions about booking rituals, sacred dates, payment options, and temple coordination for Gaya puja services.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'Frequently Asked Questions | PitraPaksh',
    description: 'Answers to common questions about booking rituals, sacred dates, payment options, and temple coordination.',
    url: '/faq',
  },
}

export default function FAQPage() {
  return (
    <main className="bg-white">
      <JsonLd data={faqSchema(faqItems)} />
      <section className="relative overflow-hidden bg-linear-to-br from-maroon to-saffron px-4 py-16 text-white sm:px-6 lg:px-8">
        <HeroBackgroundImage src="/faq.png" alt="Frequently asked questions" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-cream">Frequently asked questions</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Quick answers for sacred booking, dates, and support.</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">Everything is structured to stay easy to update and organized, with content ready for future knowledge base or admin-managed FAQ expansion.</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-gold/20 bg-cream/60 p-5">
          <FAQAccordion items={faqItems} />
        </div>
      </section>
    </main>
  )
}