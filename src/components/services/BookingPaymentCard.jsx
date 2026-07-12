'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import AuthModal from '../auth/AuthModal'

function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true)
      return
    }
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

export default function BookingPaymentCard({ service }) {
  const { status: sessionStatus } = useSession()
  const isLoggedIn = sessionStatus === 'authenticated'
  const [authOpen, setAuthOpen] = useState(false)

  const [form, setForm] = useState({ date: '', name: '', mobile: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')

  const amount = Number(String(service.price).replace(/[^0-9.]/g, ''))

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handlePay = async () => {
    if (!form.date || !form.name || !form.mobile) {
      setStatus('error')
      setMessage('Please fill in date, name, and mobile number before proceeding.')
      return
    }

    setStatus('loading')
    setMessage('')

    const scriptLoaded = await loadRazorpayScript()
    if (!scriptLoaded) {
      setStatus('error')
      setMessage('Could not load Razorpay checkout. Check your connection and try again.')
      return
    }

    try {
      const orderResponse = await fetch('/api/payment/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          serviceSlug: service.slug,
          serviceTitle: service.title,
          date: form.date,
          name: form.name,
          mobile: form.mobile,
        }),
      })

      const orderData = await orderResponse.json()
      if (!orderResponse.ok) {
        throw new Error(orderData.error || 'Unable to create order')
      }

      const razorpay = new window.Razorpay({
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        order_id: orderData.orderId,
        name: 'PitraPaksh',
        description: service.title,
        prefill: {
          name: form.name,
          contact: form.mobile,
        },
        notes: {
          preferredDate: form.date,
        },
        theme: { color: '#7a1f2b' },
        handler: async (response) => {
          setStatus('loading')
          try {
            const verifyResponse = await fetch('/api/payment/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(response),
            })
            const verifyData = await verifyResponse.json()

            if (verifyData.verified) {
              setStatus('success')
              setMessage(`Payment successful! Reference: ${verifyData.paymentId}`)
            } else {
              setStatus('error')
              setMessage('Payment could not be verified. Please contact support with your payment ID.')
            }
          } catch {
            setStatus('error')
            setMessage('Payment verification failed. Please contact support.')
          }
        },
        modal: {
          ondismiss: () => {
            setStatus('idle')
          },
        },
      })

      razorpay.on('payment.failed', () => {
        setStatus('error')
        setMessage('Payment failed. Please try again.')
      })

      razorpay.open()
    } catch (error) {
      setStatus('error')
      setMessage(error.message || 'Something went wrong. Please try again.')
    }
  }

  if (sessionStatus === 'loading') {
    return (
      <div className="mt-5">
        <div className="h-10 w-full animate-pulse rounded-xl bg-white/60" />
      </div>
    )
  }

  if (!isLoggedIn) {
    return (
      <div className="mt-5 space-y-2">
        <p className="text-xs text-muted">Please log in to book this service and track your order.</p>
        <button
          type="button"
          onClick={() => setAuthOpen(true)}
          className="w-full rounded-full bg-maroon px-4 py-2 text-sm font-semibold text-white"
        >
          Login to Book
        </button>
        <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} defaultTab="login" />
      </div>
    )
  }

  return (
    <div className="mt-5 space-y-2">
      <input
        type="date"
        value={form.date}
        onChange={handleChange('date')}
        className="w-full rounded-xl border border-gold/30 px-3 py-2 text-sm"
      />
      <input
        type="text"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange('name')}
        className="w-full rounded-xl border border-gold/30 px-3 py-2 text-sm"
      />
      <input
        type="tel"
        placeholder="Mobile number"
        value={form.mobile}
        onChange={handleChange('mobile')}
        className="w-full rounded-xl border border-gold/30 px-3 py-2 text-sm"
      />
      <button
        type="button"
        onClick={handlePay}
        disabled={status === 'loading'}
        className="w-full rounded-full bg-maroon px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
      >
        {status === 'loading' ? 'Processing…' : `Pay ${service.price} & Book Now`}
      </button>
      {message ? (
        <p className={`text-xs ${status === 'success' ? 'text-green-700' : 'text-red-600'}`}>{message}</p>
      ) : null}
      {status === 'success' ? (
        <Link
          href="/account/orders"
          className="block w-full rounded-full border border-maroon/30 px-4 py-2 text-center text-sm font-semibold text-maroon hover:bg-maroon hover:text-white transition-colors"
        >
          View My Orders
        </Link>
      ) : null}
      <p className="text-center text-[10px] uppercase tracking-[0.2em] text-muted">Test mode — no real payment is processed</p>
    </div>
  )
}
