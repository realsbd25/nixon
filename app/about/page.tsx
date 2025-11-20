import AboutSection from '@/components/AboutSection'
import ScrollProgress from '@/components/ScrollProgress'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <ScrollProgress />
      <AboutSection />
    </main>
  )
}
