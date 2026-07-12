'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import AuthModal from '../auth/AuthModal'

const serviceLinks = [
  { label: 'Pind Daan', href: '/services/pind-daan' },
  { label: 'Shraddh Karma', href: '/services/shraddh-karma' },
  { label: 'Tarpan', href: '/services/tarpan' },
  { label: 'Asthi Visarjan', href: '/services/asthi-visarjan' },
  { label: 'Pandit Booking', href: '/services/pandit-booking' },
  { label: 'Online Consultation', href: '/services/online-consultation' },
]

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Calendar', href: '/calendar' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [profileMobileOpen, setProfileMobileOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const [authTab, setAuthTab] = useState('login')
  const { data: session, status } = useSession()
  const isLoggedIn = status === 'authenticated'
  const profileRef = useRef(null)

  function openAuth(tab = 'login') {
    setAuthTab(tab)
    setAuthOpen(true)
    setMobileOpen(false)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50">

      {/* Top contact bar */}
      <div className="bg-maroon text-cream/90 text-xs font-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4">
          <span className="hidden sm:block tracking-wide">
            ॐ Trusted Pind Daan & Shraddh Services — Gaya, Bihar
          </span>
          <div className="flex items-center gap-5 ml-auto">
            <a href="tel:+919999999999" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              +91 99999 99999
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-white border-b-2 border-gold shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-full bg-saffron flex items-center justify-center shrink-0">
              <span className="text-white text-lg leading-none" style={{ fontFamily: 'serif' }}>ॐ</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-heading font-semibold text-maroon">PitraPaksh</span>
              <span className="text-[10px] font-body text-saffron tracking-widest uppercase">Gaya Puja Services</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 1).map(link => (
              <Link key={link.href} href={link.href} className="px-3 py-2 text-sm font-body text-ink hover:text-saffron transition-colors rounded-md hover:bg-cream">
                {link.label}
              </Link>
            ))}

            <Link href="/about" className="px-3 py-2 text-sm font-body text-ink hover:text-saffron transition-colors rounded-md hover:bg-cream">
              About
            </Link>

            {/* Services dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-body text-ink hover:text-saffron transition-colors rounded-md hover:bg-cream">
                Services
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-card shadow-xl border border-gold/30 py-1.5 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/services" className="flex items-center gap-2 px-4 py-2.5 text-xs font-body text-saffron font-semibold uppercase tracking-widest border-b border-gold/20 hover:bg-cream transition-colors">
                  View All Services →
                </Link>
                {serviceLinks.map(s => (
                  <Link key={s.href} href={s.href} className="block px-4 py-2 text-sm font-body text-ink hover:bg-cream hover:text-saffron transition-colors">
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(2).map(link => (
              <Link key={link.href} href={link.href} className="px-3 py-2 text-sm font-body text-ink hover:text-saffron transition-colors rounded-md hover:bg-cream">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-2">
            {isLoggedIn ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setProfileOpen((open) => !open)}
                  className="flex items-center gap-2 px-3 py-1.5 bg-cream rounded-[--radius-btn] border border-gold/30 hover:border-saffron transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-saffron flex items-center justify-center text-white text-xs font-body font-semibold">
                    {session.user.name?.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-body text-ink max-w-30 truncate">{session.user.name}</span>
                  <svg className={`w-3.5 h-3.5 text-muted transition-transform duration-200 ${profileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {profileOpen && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-card shadow-xl border border-gold/30 py-1.5 z-50">
                    <div className="px-4 py-3 border-b border-gold/20">
                      <p className="text-sm font-body font-semibold text-ink truncate">{session.user.name}</p>
                      <p className="mt-0.5 text-xs font-body text-muted truncate">{session.user.email}</p>
                    </div>
                    <Link
                      href="/account/orders"
                      onClick={() => setProfileOpen(false)}
                      className="block px-4 py-2.5 text-sm font-body text-ink hover:bg-cream hover:text-saffron transition-colors"
                    >
                      My Orders
                    </Link>
                    <button
                      onClick={() => {
                        setProfileOpen(false)
                        signOut({ callbackUrl: '/' })
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm font-body text-maroon hover:bg-cream transition-colors border-t border-gold/20 mt-1"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button onClick={() => openAuth('login')} className="px-4 py-2 text-sm font-body text-ink border border-gold/40 rounded-[--radius-btn] hover:border-saffron hover:text-saffron transition-colors">
                Login
              </button>
            )}
            <Link href="/services" className="px-5 py-2 bg-saffron text-white text-sm font-body font-medium rounded-[--radius-btn] hover:bg-maroon transition-colors shadow-sm">
              Book Now
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 text-ink rounded-md hover:bg-cream transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gold/20 px-4 pb-5 pt-2 flex flex-col shadow-lg">
          {[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }].map(link => (
            <Link key={link.href} href={link.href} className="py-3 text-sm font-body text-ink hover:text-saffron border-b border-cream transition-colors" onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}

          <div className="border-b border-cream">
            <button className="w-full flex items-center justify-between py-3 text-sm font-body text-ink hover:text-saffron transition-colors" onClick={() => setServicesOpen(!servicesOpen)}>
              Services
              <svg className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="pb-2 pl-3 flex flex-col">
                {serviceLinks.map(s => (
                  <Link key={s.href} href={s.href} className="py-2 text-sm font-body text-muted hover:text-saffron transition-colors" onClick={() => setMobileOpen(false)}>
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[{ label: 'Calendar', href: '/calendar' }, { label: 'Gallery', href: '/gallery' }, { label: 'Blog', href: '/blog' }, { label: 'FAQ', href: '/faq' }, { label: 'Contact', href: '/contact' }].map(link => (
            <Link key={link.href} href={link.href} className="py-3 text-sm font-body text-ink hover:text-saffron border-b border-cream transition-colors" onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}

          {isLoggedIn && (
            <div className="border-b border-cream">
              <button
                className="w-full flex items-center justify-between py-3 text-sm font-body text-ink hover:text-saffron transition-colors"
                onClick={() => setProfileMobileOpen((open) => !open)}
              >
                <span className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-saffron flex items-center justify-center text-white text-xs font-semibold">
                    {session.user.name?.charAt(0).toUpperCase()}
                  </span>
                  {session.user.name}
                </span>
                <svg className={`w-3.5 h-3.5 transition-transform ${profileMobileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {profileMobileOpen && (
                <div className="pb-3 pl-9 flex flex-col gap-1">
                  <p className="py-1 text-xs font-body text-muted truncate">{session.user.email}</p>
                  <Link
                    href="/account/orders"
                    className="py-2 text-sm font-body text-muted hover:text-saffron transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    My Orders
                  </Link>
                  <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="py-2 text-left text-sm font-body text-maroon"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          <div className="flex items-center gap-3 pt-4">
            {!isLoggedIn && (
              <button onClick={() => openAuth('login')} className="flex-1 text-center py-2.5 text-sm font-body text-ink border border-gold/40 rounded-[--radius-btn] hover:border-saffron hover:text-saffron transition-colors">
                Login
              </button>
            )}
            <Link href="/services" className="flex-1 text-center py-2.5 bg-saffron text-white text-sm font-body font-medium rounded-[--radius-btn] hover:bg-maroon transition-colors" onClick={() => setMobileOpen(false)}>
              Book Now
            </Link>
          </div>
        </div>
      )}

      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} defaultTab={authTab} />
    </header>
  )
}
