'use client'

import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="mt-4 block w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-maroon hover:bg-white"
    >
      Log out
    </button>
  )
}
