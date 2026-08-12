import HeroCarousel from '../components/home/HeroCarousel'
import TrustStats from '../components/home/TrustStats'
import FeaturedServicesSection from '../components/home/FeaturedServicesSection'
import HotelStayHighlight from '../components/home/HotelStayHighlight'
import WhyChooseUsSection from '../components/home/WhyChooseUsSection'
import ProcessSection from '../components/home/ProcessSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import LocationSection from '../components/home/LocationSection'
import BookingCTASection from '../components/home/BookingCTASection'

export const dynamic = 'force-dynamic'

export const metadata = {
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <main className="bg-white">
      <HeroCarousel />
      <TrustStats />
      <FeaturedServicesSection />
      <HotelStayHighlight />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <LocationSection />
      <BookingCTASection />
    </main>
  )
}
