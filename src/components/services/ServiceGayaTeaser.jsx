import Link from 'next/link'

export default function ServiceGayaTeaser() {
  return (
    <article className="rounded-3xl border border-gold/20 bg-linear-to-br from-cream to-white p-5">
      <h2 className="text-xl font-semibold text-ink">Why Gaya, and how to get here</h2>
      <p className="mt-3 text-sm leading-6 text-muted">
        Hindu tradition holds Gaya as the one place where Pind Daan offers lasting peace to one&apos;s ancestors without needing to be repeated — a belief rooted in the legends of Vishnu&apos;s blessing at Vishnupad Temple and Sita&apos;s rite on the banks of the Falgu River.
      </p>
      <p className="mt-3 text-sm leading-6 text-muted">
        <strong className="text-ink">Getting here:</strong> Gaya has its own airport (~7 km from the temple) and Gaya Junction, a major rail station on the Delhi–Kolkata line. Patna is the nearest alternative airport (~100 km / 2–2.5 hrs by road).
      </p>
      <Link href="/about#gaya-story" className="mt-3 inline-block text-sm font-semibold text-maroon hover:underline">
        Read the full story & travel guide →
      </Link>
    </article>
  )
}
