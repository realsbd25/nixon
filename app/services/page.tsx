import ServicesSection from '@/components/ServicesSection'
import ScrollProgress from '@/components/ScrollProgress'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black">
      <ScrollProgress />
      <ServicesSection />
    </main>
  )
}
