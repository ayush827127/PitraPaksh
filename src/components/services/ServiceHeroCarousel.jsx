'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function ServiceHeroCarousel({ images, title }) {
  const slides = images && images.length > 0 ? images : []
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return undefined
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  if (slides.length === 0) return null

  const goTo = (next) => setIndex((next + slides.length) % slides.length)

  return (
    <div className="relative h-72 w-full overflow-hidden rounded-[1.75rem] border border-white/15 shadow-2xl sm:h-80 lg:h-96">
      {slides.map((src, slideIndex) => (
        <div
          key={`${src}-${slideIndex}`}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: slideIndex === index ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={`${title} photo ${slideIndex + 1}`}
            fill
            priority={slideIndex === 0}
            sizes="(min-width: 1024px) 550px, 100vw"
            className="object-cover"
          />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((src, dotIndex) => (
              <button
                key={`${src}-dot-${dotIndex}`}
                type="button"
                onClick={() => setIndex(dotIndex)}
                aria-label={`Go to photo ${dotIndex + 1}`}
                className={`h-1.5 rounded-full transition-all ${dotIndex === index ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`}
              />
            ))}
          </div>

          <span className="absolute right-4 top-4 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
            {index + 1} / {slides.length}
          </span>
        </>
      )}
    </div>
  )
}
