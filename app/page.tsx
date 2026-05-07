import Header from "@/components/home/Header"
import VideoSection from "@/components/home/VideoSection"
import Footer from "@/components/home/Footer"
import BentoGrid from "@/components/home/BentoGrid"
import TechnologyShowcase from "@/components/home/TechnologyShowcase"
import Features from "@/components/home/Features"
import HearingTestSection from "@/components/home/HearingTest"

export default function HomePage() {
  return (
    <main>
      <Header />
      <BentoGrid />
      <Features />
      <TechnologyShowcase />
      <HearingTestSection />
      <VideoSection />
      <Footer />
    </main>
  )
}