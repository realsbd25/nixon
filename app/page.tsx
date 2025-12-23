import HeroSection from '@/components/HeroSection'
import ScrollProgress from '@/components/ScrollProgress'
import AboutPreview from '@/components/AboutPreview'
import ServicesPreview from '@/components/ServicesPreview'
import PortfolioPreview from '@/components/PortfolioPreview'
import ContactPreview from '@/components/ContactPreview'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <ScrollProgress />
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <PortfolioPreview />
      {/* <ContactPreview /> */}
    </main>
  )
}
