export default function StatCard({ value, label, accent = 'bg-white text-ink' }) {
  return (
    <div className={`rounded-[1.25rem] border border-gold/20 px-5 py-5 shadow-sm ${accent}`}>
      <p className="text-3xl font-semibold">{value}</p>
      <p className="mt-2 text-xs font-medium uppercase tracking-[0.24em] text-muted">{label}</p>
    </div>
  )
}