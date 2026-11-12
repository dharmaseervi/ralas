// app/about/page.tsx
import FAQ from "@/components/home/FAQ"
import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/NavigationBar"
import ServiceHero from "@/components/home/ServiceheroSection"

export const metadata = {
  title: "About Us | Ralas Hearing Clinic, Jayanagar Bengaluru",
  description: "Founded in 2023, Ralas Hearing Clinic is Bengaluru's trusted specialist clinic. RCI-registered audiologists providing hearing care and speech therapy for all ages.",
  alternates: { canonical: "https://ralasclinic.com/about" },
  openGraph: {
    title: "About Ralas Hearing Clinic — Dedicated to Better Hearing",
    description: "Founded in 2023 in Jayanagar, Bengaluru. RCI-registered audiologists.",
    url: "https://ralasclinic.com/about",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Ralas Hearing Clinic team" }],
  },
}

const stats = [
  { val: "1200+", label: "Patients served" },
  { val: "2023", label: "Year founded" },
  { val: "4", label: "Premium brands" },
  { val: "RCI Reg.", label: "Certified audiologists" },
]

const faqs = [
  { question: "When was Ralas founded?", answer: "Ralas Hearing Clinic was established in 2023 in Jayanagar, Bengaluru. We provide audiological care and speech therapy to patients of all ages." },
  { question: "Are your audiologists certified?", answer: "Yes. All our audiologists hold Master's degrees from the All India Institute of Speech and Hearing (AIISH), Mysore, and are registered with the Rehabilitation Council of India (RCI)." },
  { question: "Do you accept insurance?", answer: "We provide GST-compliant invoices that are accepted by most insurance providers. We recommend checking with your insurer before your appointment. We can also provide detailed clinical reports for reimbursement." },
  { question: "Do you offer home visits?", answer: "Yes. For elderly patients or those with mobility constraints, our audiologists offer home visit programmes across Bengaluru. Please call us to check availability in your area." },
  { question: "What brands do you carry?", answer: "We are authorised dealers for Oticon, Signia, Widex, and ReSound — world-leading hearing aid manufacturers. All devices come with a manufacturer's warranty and our in-clinic after-care." },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <ServiceHero
        eyebrow="Our Story"
        title="Dedicated to better hearing"
        subtitle="Founded in 2023, Ralas is Bengaluru's trusted hearing clinic — combining clinical precision with compassionate, patient-first care."
        imageSrc="https://lh3.googleusercontent.com/p/AF1QipNXNZrBhsjFJqQxgaTYNVZxzfkpLOS5lQv3-hed=s680-w680-h510-rw"
      />

      {/* ── Mission ── */}
      <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--white)" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Text */}
          <div>
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              Our Mission
            </div>
            <h2
              className="font-light leading-tight mb-5"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.15, color: "var(--forest)" }}
            >
              Hearing care that<br />puts people first
            </h2>
            <p className="text-sm md:text-base font-light leading-relaxed mb-4" style={{ color: "var(--text-mid)" }}>
              At Ralas, we believe that better hearing transforms lives. Our mission is to provide every patient — from toddlers to the elderly — with precise audiological diagnosis, the right technology, and the ongoing support they need to thrive.
            </p>
            <p className="text-sm md:text-base font-light leading-relaxed mb-8" style={{ color: "var(--text-mid)" }}>
              We are not a retail chain. We are a specialist clinic where every appointment is unhurried, every recommendation is unbiased, and every device is fitted and followed up with the care it deserves.
            </p>
            <div className="flex flex-wrap gap-6 md:gap-8">
              {[
                { val: "2023", lbl: "Founded" },
                { val: "Jayanagar", lbl: "Location" },
                { val: "RCI Reg.", lbl: "Certified" },
              ].map(({ val, lbl }) => (
                <div key={lbl}>
                  <div
                    className="font-light leading-none"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px,3vw,28px)", color: "var(--forest)" }}
                  >
                    {val}
                  </div>
                  <div className="text-xs tracking-widest uppercase mt-1" style={{ color: "var(--text-lt)" }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className="relative overflow-hidden w-full"
            style={{ height: "clamp(260px,40vw,480px)", background: "var(--cream-dk)" }}
          >
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipMvdMAJh5VvbAZhGL9Jg4RlcFN_Dh6btL5f4c24=s680-w680-h510-rw"
              alt="Ralas clinic team"
              className="w-full h-full object-cover border border-[var(--gold)] rounded-lg "
            />
            <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: "var(--gold)" }} />
          </div>
        </div>
      </section>

      {/* ── Stats bar — 2×2 on mobile, 4 col on desktop ── */}
      <section style={{ background: "var(--forest)" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map(({ val, label }, i) => (
            <div
              key={label}
              className="px-6 py-10 md:px-10 md:py-12"
              style={{
                borderRight: (i % 2 === 0) ? "0.5px solid rgba(255,255,255,0.1)" : "none",
                borderBottom: i < 2 ? "0.5px solid rgba(255,255,255,0.1)" : "none",
              }}
            >
              <div
                className="font-light leading-none mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,52px)", color: "var(--gold)" }}
              >
                {val}
              </div>
              <div className="text-xs font-light tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
            <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
            Our Team
          </div>
          <h2
            className="font-light mb-10"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.15, color: "var(--forest)" }}
          >
            The people behind<br />your care
          </h2>
          <div
            className="flex flex-col items-center justify-center gap-6 py-16 px-8"
            style={{ background: "var(--white)", border: "0.5px solid rgba(26,58,42,0.1)" }}
          >
            <img
              src="/ralas.png"
              alt="Ralas Hearing Clinic"
              className="w-32 h-32 object-contain"
            />
            <p className="text-sm md:text-base font-light leading-relaxed text-center max-w-lg" style={{ color: "var(--text-mid)" }}>
              Our clinic is staffed by RCI-registered audiologists and speech-language pathologists trained at leading institutions. Every member of our team is committed to patient-first, evidence-based hearing care.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--gold)" }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-lt)" }}>Jayanagar, Bengaluru — Est. 2023</span>
            </div>
          </div>
        </div>
      </section>

      <FAQ title="Questions about Ralas" questions={faqs} />
      <Footer />
    </>
  )
}