import { generateMetadata } from "@/lib/seo"
export const metadata = generateMetadata("faq")
import FAQ from "@/components/home/FAQ"
import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/NavigationBar"
import Link from "next/link"

const faqs = [
  {
    question: "How do I book an appointment?",
    answer: "You can book through our online booking form, call us at +91 6366 638452, or send a WhatsApp message. We confirm all appointments within 2 hours.",
  },
  {
    question: "Do I need a doctor's referral to visit the clinic?",
    answer: "No referral is needed. You can book directly with us for hearing tests, hearing aid fittings, speech therapy, and consultations.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Just yourself. If you have previous audiograms or ENT reports, bring those — but they are not required. If you currently wear hearing aids, bring them along.",
  },
  {
    question: "How much does a hearing test cost?",
    answer: "Please call or WhatsApp us for current pricing. First consultations include the hearing test and audiogram report. GST invoices are issued for all services.",
  },
  {
    question: "Do you offer home visits?",
    answer: "Yes. We offer home visits for hearing tests, hearing aid fittings, speech therapy, and follow-up consultations across most of Bengaluru. Book at least 48 hours in advance.",
  },
  {
    question: "What hearing aid brands do you carry?",
    answer: "We fit and service hearing aids from Oticon, Signia, Widex, Starkey, and ReSound. We recommend the right brand and model based on your audiogram and lifestyle.",
  },
  {
    question: "Is there a trial period for hearing aids?",
    answer: "We offer an adjustment period after fitting. If you are not satisfied with the sound quality or comfort, our audiologist will re-programme, exchange, or escalate to the manufacturer within the warranty period.",
  },
  {
    question: "Do you service hearing aids from other clinics?",
    answer: "Yes. We service and repair hearing aids from all major brands, regardless of where they were originally purchased. Contact us for a service appointment.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, UPI, credit and debit cards, and net banking. EMI options are available on select hearing aid models.",
  },
  {
    question: "What are your clinic hours?",
    answer: "We are open Monday to Saturday, 10:00 AM – 7:30 PM. We are closed on Sundays and public holidays. Home visits are available by appointment.",
  },
]

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <section className="py-14 md:py-20 px-5 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-[800px] mx-auto">
          <div className="mb-10">
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              Support
            </div>
            <h1
              className="font-light mb-3"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,5vw,52px)", color: "var(--forest)" }}
            >
              Frequently asked questions
            </h1>
            <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>
              Can&apos;t find what you&apos;re looking for?{" "}
              <Link href="/contact" style={{ color: "var(--forest)", borderBottom: "1px solid rgba(26,58,42,0.3)" }}>
                Contact us
              </Link>{" "}
              or call <a href="tel:+916366638452" style={{ color: "var(--forest)", borderBottom: "1px solid rgba(26,58,42,0.3)" }}>+91 6366 638452</a>.
            </p>
          </div>
        </div>
      </section>
      <FAQ title="" questions={faqs} />
      <Footer />
    </>
  )
}
