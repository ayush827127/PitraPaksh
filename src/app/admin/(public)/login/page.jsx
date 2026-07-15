'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const router = useRouter()
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Login failed')
      }

      router.push('/admin')
      router.refresh()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-cream/40 px-4">
      <div className="w-full max-w-sm rounded-[1.75rem] border border-gold/20 bg-white p-8 shadow-sm">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-saffron">PitraPaksh</p>
        <h1 className="mt-2 text-2xl font-semibold text-ink">Admin sign in</h1>
        <p className="mt-2 text-sm text-muted">Manage blog articles, the ritual calendar, and payment records.</p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <label className="text-sm font-medium text-ink">
            Username
            <input
              type="text"
              required
              autoComplete="username"
              value={form.username}
              onChange={(e) => setForm((f) => ({ ...f, username: e.target.value }))}
              className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-sm font-medium text-ink">
            Password
            <input
              type="password"
              required
              autoComplete="current-password"
              value={form.password}
              onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
              className="mt-1 w-full rounded-xl border border-gold/30 px-3 py-2 text-sm"
            />
          </label>

          {error ? (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-full bg-maroon px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-saffron disabled:opacity-60"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </main>
  )
}
