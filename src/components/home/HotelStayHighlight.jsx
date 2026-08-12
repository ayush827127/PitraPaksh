import Link from 'next/link'

export default function HotelStayHighlight() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-5 rounded-[1.75rem] bg-linear-to-br from-maroon to-saffron px-6 py-8 text-center text-white shadow-lg sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15 text-3xl">🏨</span>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">Good to know</p>
            <h2 className="mt-1 text-xl font-semibold sm:text-2xl">Need a place to stay? We can arrange it.</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/85">
              Contact our team and we&apos;ll help you book a comfortable hotel with good facilities near the temple for your family.
            </p>
          </div>
        </div>
        <Link
          href="/contact"
          className="shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-maroon transition-transform hover:scale-105"
        >
          Contact us
        </Link>
      </div>
    </section>
  )
}
