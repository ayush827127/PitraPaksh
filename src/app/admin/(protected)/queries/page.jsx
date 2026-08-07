import connectDB from '../../../../lib/db/connect'
import ContactQuery from '../../../../lib/models/ContactQuery'
import DeleteButton from '../../../../components/admin/DeleteButton'
import QueryStatusSelect from '../../../../components/admin/QueryStatusSelect'

export const dynamic = 'force-dynamic'

async function getQueries() {
  await connectDB()
  const queries = await ContactQuery.find().sort({ createdAt: -1 }).lean()
  return queries.map((query) => ({
    id: query._id.toString(),
    name: query.name,
    email: query.email,
    mobile: query.mobile,
    serviceInterest: query.serviceInterest,
    message: query.message,
    status: query.status,
    createdAt: query.createdAt,
  }))
}

export default async function AdminQueriesPage() {
  const queries = await getQueries()

  return (
    <div>
      <h1 className="text-2xl font-semibold text-ink">Contact queries</h1>
      <p className="mt-2 text-sm text-muted">Inquiries submitted through the public contact form.</p>

      <div className="mt-6 space-y-4">
        {queries.map((query) => (
          <div key={query.id} className="rounded-3xl border border-gold/20 bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-ink">{query.name}</p>
                <p className="text-xs text-muted">{query.email} · {query.mobile}</p>
                {query.serviceInterest ? (
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-saffron">{query.serviceInterest}</p>
                ) : null}
              </div>
              <div className="flex items-center gap-3">
                <QueryStatusSelect queryId={query.id} status={query.status} />
                <DeleteButton endpoint={`/api/admin/queries/${query.id}`} confirmMessage={`Delete inquiry from "${query.name}"?`} />
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted">{query.message}</p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-muted">
              {new Date(query.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
            </p>
          </div>
        ))}
        {queries.length === 0 ? (
          <div className="rounded-3xl border border-gold/20 bg-cream/60 p-8 text-center text-sm text-muted">
            No inquiries yet.
          </div>
        ) : null}
      </div>
    </div>
  )
}
