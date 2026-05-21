import Header from "@/components/home/Header"
import VideoSection from "@/components/home/VideoSection"
import Footer from "@/components/home/Footer"
import BentoGrid from "@/components/home/BentoGrid"
import TechnologyShowcase from "@/components/home/TechnologyShowcase"
import Features from "@/components/home/Features"
import HearingTestSection from "@/components/home/HearingTest"
export const metadata = {
  title: "Ralas Hearing Clinic — Hearing Aids & Audiology, Bengaluru",
  description: "Ralas Hearing Clinic in Jayanagar, Bengaluru offers hearing tests, hearing aids (Oticon, Phonak, Signia, Widex), speech therapy, and tinnitus treatment. Free first consultation.",
  alternates: { canonical: "https://ralasclinic.com" },
  openGraph: {
    title: "Ralas Hearing Clinic — Hearing Aids & Audiology, Bengaluru",
    description: "Expert audiological care in Jayanagar, Bengaluru. Free first consultation.",
    url: "https://ralasclinic.com",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Ralas Hearing Clinic Bengaluru" }],
  },
}
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