import Link from 'next/link'
import { featuredServices } from '../../lib/data/siteData'
import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../ui/ServiceCard'

export default function FeaturedServicesSection() {
  return (
    <section className="bg-cream/40 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Curated sacred services"
            title="Featured ritual experiences"
            description="Every package is designed to bring clarity, dignity, and a premium level of coordination for pilgrims visiting Gaya."
          />
          <Link href="/services" className="hidden rounded-full border border-maroon/20 px-4 py-2 text-xs font-semibold text-maroon transition-colors hover:bg-maroon hover:text-white md:inline-flex">
            Explore all services
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} featured />
          ))}
        </div>
      </div>
    </section>
  )
}