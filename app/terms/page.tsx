// app/terms/page.tsx
import { generateMetadata } from "@/lib/seo"
export const metadata = generateMetadata("terms")
import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/NavigationBar"

import Link from "next/link"

const sections = [
  {
    title: "Appointment Terms",
    items: [
      { heading: "Booking Confirmation", body: "Appointments are confirmed only after our team contacts you to verify the slot. An appointment request submitted online or via WhatsApp is not a confirmed booking until you receive confirmation from our staff." },
      { heading: "Cancellation Policy", body: "We request at least 24 hours notice for cancellations or rescheduling. Repeated last-minute cancellations may affect your ability to book preferred time slots." },
      { heading: "Late Arrivals", body: "If you arrive more than 15 minutes late, we may need to shorten or reschedule your appointment to avoid affecting other patients. Please call us if you are running late." },
      { heading: "No-Show Policy", body: "Patients who do not attend a confirmed appointment without notice will be asked to pre-pay for future bookings." },
    ],
  },
  {
    title: "Services and Pricing",
    items: [
      { heading: "Service Fees", body: "Consultation fees are payable at the time of service. Current pricing is available by contacting the clinic. Prices are subject to change without notice." },
      { heading: "Hearing Aid Purchases", body: "All hearing aid purchases include the device, professional fitting, and one follow-up session. Additional follow-up visits beyond what is included in your package are charged separately." },
      { heading: "30-Day Trial", body: "Hearing aids purchased from Ralas Hearing Clinic come with a 30-day satisfaction guarantee. Devices must be returned in their original condition within 30 days of fitting for a full refund. The trial period begins on the date of fitting, not the date of purchase." },
      { heading: "GST and Invoicing", body: "All services and products attract applicable GST. GST-compliant invoices are provided for all transactions. Ralas Hearing Clinic is a registered GST entity." },
    ],
  },
  {
    title: "Clinical Disclaimer",
    items: [
      { heading: "Medical Advice", body: "The information provided on this website is for general informational purposes only and does not constitute medical advice. Always consult a qualified audiologist or medical professional for diagnosis and treatment." },
      { heading: "Online Hearing Screener", body: "Any online hearing screening tools on this website are for indicative purposes only. They are not diagnostic tools and cannot replace a clinical audiometric evaluation." },
      { heading: "Referrals", body: "Where our audiologists identify a condition requiring medical intervention beyond audiological care, we will refer you to an appropriate ENT or other specialist. We do not take responsibility for the outcomes of third-party medical care." },
    ],
  },
  {
    title: "Intellectual Property",
    items: [
      { heading: "Website Content", body: "All content on ralasclinic.com — including text, images, logos, and design — is the property of Ralas Hearing Clinic. You may not reproduce, distribute, or commercially exploit any content without prior written permission." },
      { heading: "Trademarks", body: "Brand names referenced on this website (including Oticon, Phonak, Signia, Widex) are the property of their respective owners. Their mention does not imply endorsement of Ralas Hearing Clinic by those brands." },
    ],
  },
  {
    title: "Limitation of Liability",
    items: [
      { heading: "Website Use", body: "While we make every effort to keep information on this website accurate and up to date, we make no warranties about the completeness or accuracy of website content. We are not liable for any loss arising from reliance on website information." },
      { heading: "Service Outcomes", body: "Audiological outcomes vary between individuals. We do not guarantee specific results from hearing aids or therapy. Our team will always recommend the most appropriate evidence-based treatment for your specific condition." },
    ],
  },
  {
    title: "Governing Law",
    items: [
      { heading: "Jurisdiction", body: "These terms are governed by the laws of India and the state of Karnataka. Any disputes shall be subject to the jurisdiction of the courts in Bengaluru." },
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-16 md:py-20 px-5 md:px-12" style={{ background: "var(--forest)" }}>
        <div className="max-w-[800px] mx-auto">
          <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
            <span className="block w-6 h-px" style={{ background: "var(--gold)" }} />
            Legal
          </div>
          <h1 className="font-light text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(34px,5vw,56px)", lineHeight: 1.1 }}>
            Terms of Use
          </h1>
          <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Last updated: January 2025. By using our website or services, you agree to these terms.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 md:py-20 px-5 md:px-12" style={{ background: "var(--white)" }}>
        <div className="max-w-[800px] mx-auto">
          <p className="text-sm font-light leading-relaxed mb-10" style={{ color: "var(--text-mid)" }}>
            Please read these terms carefully before using our services or website. By accessing ralasclinic.com or booking an appointment, you agree to be bound by these terms. If you do not agree, please do not use our services.
          </p>

          <div className="flex flex-col gap-12">
            {sections.map(({ title, items }) => (
              <div key={title}>
                <h2 className="font-light mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px,3vw,30px)", color: "var(--forest)" }}>
                  {title}
                </h2>
                <div className="flex flex-col gap-5">
                  {items.map(({ heading, body }) => (
                    <div key={heading} className="pl-4" style={{ borderLeft: "2px solid var(--gold)" }}>
                      <div className="text-sm font-medium mb-1.5" style={{ color: "var(--forest)" }}>{heading}</div>
                      <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t" style={{ borderColor: "rgba(26,58,42,0.1)" }}>
            <p className="text-xs font-light leading-relaxed mb-4" style={{ color: "var(--text-lt)" }}>
              We reserve the right to update these terms at any time. Continued use of our website or services after changes are posted constitutes acceptance of the updated terms. For questions, contact us at{" "}
              <a href="tel:+916366638452" style={{ color: "var(--forest)" }}>+91 6366-638452</a>.
            </p>
            <p className="text-xs font-light" style={{ color: "var(--text-lt)" }}>
              See also: <Link href="/privacy" style={{ color: "var(--forest)" }}>Privacy Policy</Link> · <Link href="/accessibility" style={{ color: "var(--forest)" }}>Accessibility Statement</Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}