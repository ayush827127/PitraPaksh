import { homeStats } from '../../lib/data/siteData'
import StatCard from '../ui/StatCard'

export default function TrustStats() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {homeStats.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} accent={stat.accent} />
        ))}
      </div>
    </section>
  )
}