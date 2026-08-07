import connectDB from '../../../../lib/db/connect'
import User from '../../../../lib/models/User'

export const dynamic = 'force-dynamic'

async function getUsers() {
  await connectDB()
  const users = await User.find().sort({ createdAt: -1 }).lean()
  return users.map((user) => ({
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role,
    isVerified: user.isVerified,
    createdAt: user.createdAt,
  }))
}

export default async function AdminUsersPage() {
  const users = await getUsers()

  return (
    <div>
      <h1 className="text-2xl font-semibold text-ink">Users</h1>
      <p className="mt-2 text-sm text-muted">Everyone registered on the site, via Google or email/password.</p>

      <div className="mt-6 overflow-x-auto rounded-3xl border border-gold/20 bg-white shadow-sm">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-cream/60 text-xs uppercase tracking-[0.15em] text-muted">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Joined</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t border-gold/10">
                <td className="px-4 py-3 font-medium text-ink">{user.name}</td>
                <td className="px-4 py-3 text-muted">{user.email}</td>
                <td className="px-4 py-3 text-muted">{user.phone ?? '—'}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-maroon/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-maroon">
                    {user.role}
                  </span>
                </td>
                <td className="px-4 py-3 text-muted">
                  {new Date(user.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                </td>
              </tr>
            ))}
            {users.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-muted">
                  No users yet.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  )
}
