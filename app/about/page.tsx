import FAQ from "@/components/home/FAQ"
import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/NavigationBar"
import ServiceHero from "@/components/home/ServiceheroSection"


const team = [
  { name: "Dr. Priya Sharma", role: "Chief Audiologist", qual: "M.Sc. Audiology, AIISH", spec: "Paediatric & adult hearing assessment", initials: "PS" },
  { name: "Dr. Rajan Menon", role: "Senior Audiologist", qual: "M.Sc. Audiology, MASLP", spec: "Hearing aid fitting & rehabilitation", initials: "RM" },
  { name: "Ms. Divya Rao", role: "Speech-Language Pathologist", qual: "M.Sc. SLP, AIISH", spec: "Paediatric speech & language therapy", initials: "DR" },
]

const stats = [
  { val: "1200+", label: "Patients served" },
  { val: "12 yrs", label: "Clinical experience" },
  { val: "4",      label: "Premium brands" },
  { val: "98%",    label: "Patient satisfaction" },
]

const faqs = [
  { question: "When was Ralas founded?", answer: "Ralas Hearing Clinic was established in 2012 in Jayanagar, Bengaluru. We have been serving the community for over 12 years, providing audiological care and speech therapy to patients of all ages." },
  { question: "Are your audiologists certified?", answer: "Yes. All our audiologists hold Master's degrees from the All India Institute of Speech and Hearing (AIISH), Mysore, and are registered with the Rehabilitation Council of India (RCI)." },
  { question: "Do you accept insurance?", answer: "We provide GST-compliant invoices that are accepted by most insurance providers. We recommend checking with your insurer before your appointment. We can also provide detailed clinical reports for reimbursement." },
  { question: "Do you offer home visits?", answer: "Yes. For elderly patients or those with mobility constraints, our audiologists offer home visit programmes across Bengaluru. Please call us to check availability in your area." },
  { question: "What brands do you carry?", answer: "We are authorised dealers for Oticon, Phonak, Signia, and Widex — four of the world's leading hearing aid manufacturers. All devices come with a manufacturer's warranty and our in-clinic after-care." },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <ServiceHero
        eyebrow="Our Story"
        title="Dedicated to better hearing"
        subtitle="Founded in 2012, Ralas is Bengaluru's trusted hearing clinic — combining clinical precision with compassionate, patient-first care."
        imageSrc="/images/clinic-interior.jpg"
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
                { val: "2012", lbl: "Founded" },
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
              src="/images/clinic-team.jpg"
              alt="Ralas clinic team"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: "var(--gold)" }} />
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10 md:mb-14">
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              Our Team
            </div>
            <h2
              className="font-light leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.15, color: "var(--forest)" }}
            >
              Meet the specialists
            </h2>
          </div>

          {/* Team cards — 1 col mobile, 3 col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(26,58,42,0.08)" }}>
            {team.map(({ name, role, qual, spec, initials }) => (
              <div
                key={name}
                className="p-8 md:p-10"
                style={{ background: "var(--white)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "var(--forest)" }}
                >
                  <span
                    className="text-xl font-light"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--gold-lt)" }}
                  >
                    {initials}
                  </span>
                </div>
                <div className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>{role}</div>
                <div
                  className="text-xl font-normal mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--forest)" }}
                >
                  {name}
                </div>
                <div className="text-xs font-light mb-3" style={{ color: "var(--text-lt)" }}>{qual}</div>
                <div
                  className="pt-4 text-sm font-light leading-relaxed"
                  style={{ borderTop: "0.5px solid rgba(26,58,42,0.1)", color: "var(--text-mid)" }}
                >
                  {spec}
                </div>
              </div>
            ))}
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

      <FAQ title="Questions about Ralas" questions={faqs} />
      <Footer />
    </>
  )
}