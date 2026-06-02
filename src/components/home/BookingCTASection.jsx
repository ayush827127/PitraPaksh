import Link from 'next/link'

export default function BookingCTASection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-4xl bg-linear-to-r from-maroon to-saffron p-px">
        <div className="rounded-[calc(2rem-1px)] bg-white/95 p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-saffron">
                Ready to plan your sacred visit?
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-ink">Book a premium ritual experience with curated support.</h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                Connect with approved pandits, compare ritual packages, and move through your journey with calm, guided certainty.
              </p>
            </div>

            <div className="rounded-3xl bg-cream p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-maroon">Popular package</p>
                  <p className="mt-2 text-2xl font-semibold text-ink">Pind Daan + Local Support</p>
                </div>
                <span className="rounded-full bg-saffron px-3 py-1 text-[10px] font-bold text-white">Most booked</span>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm text-ink">
                <span>Starting from</span>
                <span className="text-xl font-semibold text-maroon">₹12,500</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/services" className="rounded-full bg-maroon px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-saffron">
                  Browse services
                </Link>
                <Link href="/contact" className="rounded-full border border-maroon/20 px-4 py-2 text-xs font-semibold text-maroon transition-colors hover:bg-maroon hover:text-white">
                  Talk to support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}