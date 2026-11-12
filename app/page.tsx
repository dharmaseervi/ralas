import Header from "@/components/home/Header"
import TrustBar from "@/components/home/TrustBar"
import HowItWorks from "@/components/home/HowItWorks"
import BentoGrid from "@/components/home/BentoGrid"
import Testimonials from "@/components/home/Testimonials"
import TechnologyShowcase from "@/components/home/TechnologyShowcase"
import Features from "@/components/home/Features"
import HearingTestSection from "@/components/home/HearingTest"
import FAQ from "@/components/home/FAQ"
import VideoSection from "@/components/home/VideoSection"
import Footer from "@/components/home/Footer"

export const metadata = {
  title: "Ralas Hearing Clinic — Hearing Aids & Audiology, Bengaluru",
  description: "Ralas Hearing Clinic in Jayanagar, Bengaluru offers hearing tests, hearing aids (Oticon, Signia, Widex, ReSound), speech therapy, and tinnitus treatment. Free first consultation.",
  alternates: { canonical: "https://ralasclinic.com" },
  openGraph: {
    title: "Ralas Hearing Clinic — Hearing Aids & Audiology, Bengaluru",
    description: "Expert audiological care in Jayanagar, Bengaluru. Free first consultation.",
    url: "https://ralasclinic.com",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Ralas Hearing Clinic Bengaluru" }],
  },
}

const faqItems = [
  {
    question: "How do I know if I need a hearing test?",
    answer:
      "Common signs include asking people to repeat themselves, difficulty following conversations in noisy places, turning up the TV louder than others, missing doorbell or phone sounds, or a ringing in your ears. If you experience any of these, a free hearing screening at Ralas can give you clarity — no referral needed.",
  },
  {
    question: "What happens during a hearing test at Ralas?",
    answer:
      "Your appointment takes about 60 minutes. Our audiologist starts with a detailed case history, then performs a visual inspection of your ear canals. You'll then enter our soundproofed booth for a pure-tone audiometry test using calibrated headphones. By the end, you'll have a full audiogram and a clear explanation of your results.",
  },
  {
    question: "How much do hearing aids cost in Bengaluru?",
    answer:
      "Hearing aid prices vary widely depending on the technology level and style. At Ralas, devices start from approximately ₹25,000 per unit for basic digital aids, up to ₹1,80,000+ for premium rechargeable models from Oticon, Signia, Widex, or ReSound. All prices include professional fitting and follow-up adjustments. We provide GST-compliant invoices for insurance claims.",
  },
  {
    question: "Can I try a hearing aid before purchasing?",
    answer:
      "Yes. After fitting, our audiologist schedules follow-up adjustments to ensure your hearing aid is performing optimally in your daily environments — at work, in restaurants, at family gatherings. Contact us any time if the sound needs re-tuning.",
  },
  {
    question: "Do you offer home visits?",
    answer:
      "Yes. For elderly patients or those with mobility challenges, our audiologists provide home visit services across Bengaluru. This includes hearing testing, device fitting, and follow-up care. Please call or WhatsApp us at +91 6366-638452 to arrange a home visit.",
  },
  {
    question: "Do you treat tinnitus (ringing in the ears)?",
    answer:
      "Yes. Our audiologists offer a structured tinnitus assessment followed by a personalised management plan. Treatment options include sound therapy, tinnitus retraining therapy (TRT), and in some cases, hearing aids with built-in tinnitus maskers. Many patients see significant relief within a few sessions.",
  },
]

export default function HomePage() {
  return (
    <main>
      <Header />
      <TrustBar />
      <HowItWorks />
      <BentoGrid />
      <Testimonials />
      <TechnologyShowcase />
      <Features />
      <HearingTestSection />
      <FAQ
        title="Common Questions"
        subtitle="Everything you need to know before your first visit."
        questions={faqItems}
      />
      <VideoSection />
      <Footer />
    </main>
  )
}
