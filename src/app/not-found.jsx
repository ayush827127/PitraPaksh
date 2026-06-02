import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-cream/40 px-4">
      <div className="max-w-xl rounded-4xl border border-gold/20 bg-white p-8 text-center shadow-sm">
        <p className="inline-flex rounded-full bg-maroon/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-maroon">Page not found</p>
        <h1 className="mt-4 text-4xl font-semibold text-ink">We couldn’t find that sacred page.</h1>
        <p className="mt-3 text-sm leading-7 text-muted">The page may have moved, or it hasn’t been added to the site yet. Return to the main ritual hub to continue exploring.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/" className="rounded-full bg-maroon px-4 py-2 text-xs font-semibold text-white">Back home</Link>
          <Link href="/services" className="rounded-full border border-maroon/20 px-4 py-2 text-xs font-semibold text-maroon">Browse services</Link>
        </div>
      </div>
    </main>
  )
}