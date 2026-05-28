import HeroCarousel from '../components/home/HeroCarousel'
import TrustStats from '../components/home/TrustStats'
import FeaturedServicesSection from '../components/home/FeaturedServicesSection'
import WhyChooseUsSection from '../components/home/WhyChooseUsSection'
import ProcessSection from '../components/home/ProcessSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import BookingCTASection from '../components/home/BookingCTASection'

export default function Home() {
  return (
    <main className="bg-white">
      <HeroCarousel />
      <TrustStats />
      <FeaturedServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <BookingCTASection />
    </main>
  )
}
