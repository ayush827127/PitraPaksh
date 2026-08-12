import Link from 'next/link'
import { redirect } from 'next/navigation'
import { auth } from '../../../auth'
import connectDB from '../../../lib/db/connect'
import Order from '../../../lib/models/Order'

export const metadata = {
  title: 'My Orders',
  robots: { index: false, follow: false },
}

const statusStyles = {
  pending: 'bg-amber-50 text-amber-700 border-amber-200',
  paid: 'bg-green-50 text-green-700 border-green-200',
  failed: 'bg-red-50 text-red-700 border-red-200',
}

export default async function MyOrdersPage() {
  const session = await auth()
  if (!session?.user?.id) {
    redirect('/')
  }

  await connectDB()
  const orders = await Order.find({ userId: session.user.id })
    .sort({ createdAt: -1 })
    .lean()

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-saffron">Account</p>
        <h1 className="mt-2 text-3xl font-semibold text-ink">My Orders</h1>
        <p className="mt-2 text-sm text-muted">Track the status of every service you&apos;ve booked.</p>
      </div>

      {orders.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-gold/20 bg-cream/60 p-8 text-center">
          <p className="text-sm text-muted">You haven&apos;t booked any services yet.</p>
          <Link
            href="/services"
            className="mt-4 inline-block rounded-full bg-saffron px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-maroon"
          >
            Browse Services
          </Link>
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {orders.map((order) => (
            <div key={order._id.toString()} className="rounded-3xl border border-gold/20 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-lg font-semibold text-ink">{order.serviceTitle}</p>
                  <p className="mt-1 text-xs text-muted">
                    Preferred date:{' '}
                    {new Date(order.preferredDate).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${statusStyles[order.status] ?? ''}`}
                >
                  {order.status}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted">Amount</p>
                  <p className="mt-1 font-medium text-ink">₹{order.amount}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted">Booked on</p>
                  <p className="mt-1 font-medium text-ink">
                    {new Date(order.createdAt).toLocaleDateString('en-IN')}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted">Order ID</p>
                  <p className="mt-1 truncate font-mono text-xs text-ink">{order.razorpayOrderId}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted">Payment ID</p>
                  <p className="mt-1 truncate font-mono text-xs text-ink">{order.razorpayPaymentId ?? '—'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
