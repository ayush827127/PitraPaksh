import LocationMap from '../ui/LocationMap'

export default function LocationSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 text-center">
        <p className="inline-flex rounded-full bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-saffron">
          Visit us in Gaya
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-ink">Find us near Vishnupad Temple</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted">
          Walk-ins, pilgrimage groups, and pre-booked families are all welcome. Get directions straight to our location.
        </p>
      </div>
      <LocationMap />
    </section>
  )
}
