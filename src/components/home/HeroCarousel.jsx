'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ─────────────────────────────────────────────────────────────
// SLIDE DATA — swap image paths or update text anytime
// ─────────────────────────────────────────────────────────────
const slides = [
  {
    id:      1,
    image:   '/Hero_main_banner_478397efa5.webp',
    badge:   'Sacred Ancestral Services',
    heading: 'Pind Daan at\nGaya, Bihar',
    subtext: 'Perform the sacred Pind Daan ritual at the holy Falgu River and Vishnupad Temple — the most revered site for ancestral liberation.',
    cta:     { label: 'Book Pind Daan', href: '/services/pind-daan' },
  },
  {
    id:      2,
    image:   '/Web_Hero_3_88abdf752f.webp',
    badge:   'Ancestral Rituals',
    heading: 'Shraddh Karma\nCeremony',
    subtext: 'Connect with certified pandits for authentic Shraddh Karma rituals performed with complete Vedic procedures at sacred sites across India.',
    cta:     { label: 'Book Shraddh', href: '/services/shraddh-karma' },
  },
  // {
  //   id:      3,
  //   image:   '/Hero_banner_mweb_1_dd8746b435.webp',
  //   badge:   'Holy Immersion',
  //   heading: 'Tarpan &\nAsthi Visarjan',
  //   subtext: 'Offer sacred water to departed souls through Tarpan and immerse the ashes at the Ganges and other holy rivers with full ritual dignity.',
  //   cta:     { label: 'Book Tarpan', href: '/services/tarpan' },
  // },
  // {
  //   id:      4,
  //   image:   '/614505_65ab3e8940.webp',
  //   badge:   'Expert Pandits',
  //   heading: 'Pandit Booking\n& Consultation',
  //   subtext: 'Book experienced Vedic pandits for rituals at home or connect online for guidance on ancestral rites, Panchang, and spiritual ceremonies.',
  //   cta:     { label: 'Book a Pandit', href: '/services/pandit-booking' },
  // },
]

const AUTO_PLAY_MS = 5000

export default function HeroCarousel() {
  const [current, setCurrent]     = useState(0)
  const [paused, setPaused]       = useState(false)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((index) => {
    if (animating) return
    setAnimating(true)
    setCurrent(index)
    setTimeout(() => setAnimating(false), 600)
  }, [animating])

  const prev = useCallback(() => {
    goTo(current === 0 ? slides.length - 1 : current - 1)
  }, [current, goTo])

  const next = useCallback(() => {
    goTo(current === slides.length - 1 ? 0 : current + 1)
  }, [current, goTo])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, AUTO_PLAY_MS)
    return () => clearInterval(timer)
  }, [paused, next])

  const slide = slides[current]

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: 'calc(100vh - 100px)', minHeight: '520px', maxHeight: '800px' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Slide images ──────────────────────────────────── */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={s.image}
            alt={s.heading.replace('\n', ' ')}
            fill
            priority={i === 0}
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* ── Dark overlay for text readability ─────────────── */}
      <div className="absolute inset-0 bg-black/50" />

      {/* ── Bottom fade ────────────────────────────────────── */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/40 to-transparent" />

      {/* ── Slide content ──────────────────────────────────── */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div key={current} className="max-w-2xl animate-fadeIn">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 bg-gold/20 border border-gold/40 rounded-[--radius-btn] text-gold text-xs font-body tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
            {slide.badge}
          </span>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-semibold text-white leading-tight mb-5 whitespace-pre-line">
            {slide.heading}
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-white/75 font-body leading-relaxed mb-8 max-w-xl">
            {slide.subtext}
          </p>

          {/* CTA buttons — same token classes as rest of app */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={slide.cta.href}
              className="px-8 py-3 bg-saffron text-white text-sm font-body font-medium rounded-[--radius-btn] hover:bg-maroon transition-colors shadow-sm tracking-wide"
            >
              {slide.cta.label}
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 bg-white/10 border border-white/30 text-white text-sm font-body font-medium rounded-[--radius-btn] hover:bg-white/20 hover:border-gold/50 transition-colors tracking-wide backdrop-blur-sm"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>

      {/* ── Arrow buttons ──────────────────────────────────── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-saffron hover:border-saffron transition-colors backdrop-blur-sm flex items-center justify-center"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-saffron hover:border-saffron transition-colors backdrop-blur-sm flex items-center justify-center"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* ── Dot indicators ─────────────────────────────────── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-7 h-2 bg-gold'
                : 'w-2 h-2 bg-white/40 hover:bg-gold/60'
            }`}
          />
        ))}
      </div>

    </section>
  )
}
