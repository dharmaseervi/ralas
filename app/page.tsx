import Features from '@/components/home/Features'
import VideoSection from '@/components/home/VideoSection'
import Footer from '@/components/home/Footer'
import Header from '@/components/home/header'
import AnimatedHearingAid from '@/components/home/HearingAnimation'
import HearingTest from '@/components/home/HearingTest'


export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <AnimatedHearingAid  />
      <Features />
      <HearingTest />
      <VideoSection />
      <Footer />
    </div>
  )
}

