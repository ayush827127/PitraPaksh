import connectDB from '../../../../lib/db/connect'
import Order from '../../../../lib/models/Order'
import '../../../../lib/models/User'

export const dynamic = 'force-dynamic'

const statusStyles = {
  pending: 'bg-amber-50 text-amber-700 border-amber-200',
  paid: 'bg-green-50 text-green-700 border-green-200',
  failed: 'bg-red-50 text-red-700 border-red-200',
}

async function getOrders() {
  await connectDB()
  const orders = await Order.find()
    .sort({ createdAt: -1 })
    .populate('userId', 'name email')
    .lean()

  return orders.map((order) => ({
    id: order._id.toString(),
    user: order.userId ? { name: order.userId.name, email: order.userId.email } : null,
    serviceTitle: order.serviceTitle,
    amount: order.amount,
    currency: order.currency,
    status: order.status,
    razorpayOrderId: order.razorpayOrderId,
    razorpayPaymentId: order.razorpayPaymentId,
    createdAt: order.createdAt,
  }))
}

export default async function AdminPaymentsPage() {
  const orders = await getOrders()
  const totalRevenue = orders.filter((o) => o.status === 'paid').reduce((sum, o) => sum + o.amount, 0)

  return (
    <div>
      <h1 className="text-2xl font-semibold text-ink">Payments</h1>
      <p className="mt-2 text-sm text-muted">All bookings and their payment status across every logged-in user.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-3xl border border-gold/20 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Total orders</p>
          <p className="mt-2 text-2xl font-semibold text-maroon">{orders.length}</p>
        </div>
        <div className="rounded-3xl border border-gold/20 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Paid</p>
          <p className="mt-2 text-2xl font-semibold text-maroon">{orders.filter((o) => o.status === 'paid').length}</p>
        </div>
        <div className="rounded-3xl border border-gold/20 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Revenue (paid)</p>
          <p className="mt-2 text-2xl font-semibold text-maroon">₹{totalRevenue.toLocaleString('en-IN')}</p>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto rounded-3xl border border-gold/20 bg-white shadow-sm">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-cream/60 text-xs uppercase tracking-[0.15em] text-muted">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Service</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Razorpay order / payment ID</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-gold/10">
                <td className="px-4 py-3 text-muted">
                  {new Date(order.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                </td>
                <td className="px-4 py-3">
                  {order.user ? (
                    <>
                      <p className="font-medium text-ink">{order.user.name}</p>
                      <p className="text-xs text-muted">{order.user.email}</p>
                    </>
                  ) : (
                    <span className="text-xs text-muted">Unknown user</span>
                  )}
                </td>
                <td className="px-4 py-3 text-ink">{order.serviceTitle}</td>
                <td className="px-4 py-3 font-medium text-ink">
                  {order.currency} {order.amount.toLocaleString('en-IN')}
                </td>
                <td className="px-4 py-3">
                  <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${statusStyles[order.status] ?? ''}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3 font-mono text-xs text-muted">
                  <p className="truncate">{order.razorpayOrderId}</p>
                  <p className="truncate">{order.razorpayPaymentId ?? '—'}</p>
                </td>
              </tr>
            ))}
            {orders.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-muted">
                  No payments yet.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  )
}
