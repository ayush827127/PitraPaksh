import { redirect } from 'next/navigation'
import Link from 'next/link'
import { isAdminAuthenticated } from '../../../lib/adminGuard'
import LogoutButton from '../../../components/admin/LogoutButton'

export const metadata = {
  robots: { index: false, follow: false, nocache: true },
}

const navItems = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/blog', label: 'Blog posts' },
  { href: '/admin/calendar', label: 'Ritual calendar' },
  { href: '/admin/queries', label: 'Contact queries' },
  { href: '/admin/users', label: 'Users' },
  { href: '/admin/payments', label: 'Payments' },
]

export default async function AdminLayout({ children }) {
  const authed = await isAdminAuthenticated()
  if (!authed) {
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-cream/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:px-8">
        <aside className="w-full shrink-0 lg:w-56">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-saffron">Admin panel</p>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-3 py-2 text-sm font-medium text-ink hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LogoutButton />
        </aside>
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  )
}
