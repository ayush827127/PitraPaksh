import Image from 'next/image'
import { galleryItems } from '../../lib/data/siteData'
import SectionHeading from '../../components/ui/SectionHeading'
import HeroBackgroundImage from '../../components/ui/HeroBackgroundImage'

export default function GalleryPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-linear-to-br from-saffron to-maroon px-4 py-16 text-white sm:px-6 lg:px-8">
        <HeroBackgroundImage src="/gallery.png" alt="Gallery & visual story" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-cream">Gallery & visual story</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">A warm visual journey through sacred moments and guided rituals.</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">Placeholder imagery is arranged in a way that can later be replaced with real temple, ritual, and hospitality photography without changing the layout structure.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Curated gallery"
          title="Selected ritual and pilgrimage moments"
          description="Every asset is stored as content-ready media, ensuring the gallery remains easy to refresh and scale later."
        />

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[1.6rem] border border-gold/20 bg-white shadow-sm">
              <Image src={item.image} alt={item.title} width={800} height={600} className="h-44 w-full object-cover" />
              <div className="p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-saffron">{item.category}</p>
                <h2 className="mt-2 text-lg font-semibold text-ink">{item.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}