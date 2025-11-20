import PortfolioSection from '@/components/PortfolioSection'
import ScrollProgress from '@/components/ScrollProgress'

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black">
      <ScrollProgress />
      <PortfolioSection />
    </main>
  )
}
