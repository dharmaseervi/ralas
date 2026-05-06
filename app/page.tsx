import Features from '@/components/home/Features'
import VideoSection from '@/components/home/VideoSection'

import AnimatedHearingAid from '@/components/home/HearingAnimation'
import HearingTest from '@/components/home/HearingTest'
import Header from '@/components/home/Header'
import BentoGrid from '@/components/BentoGrid'
import Footer from '@/components/home/Footer'



export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <AnimatedHearingAid  />
      <BentoGrid />
      <Features />
      <HearingTest />
      <VideoSection />
      <Footer />
    </div>
  )
}

