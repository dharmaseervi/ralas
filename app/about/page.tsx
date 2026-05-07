
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
  { val: "4", label: "Premium brands" },
  { val: "98%", label: "Patient satisfaction" },
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
        title="Dedicated to better hearing"
        subtitle="Founded in 2012, Ralas is Bengaluru's trusted hearing clinic — combining clinical precision with compassionate, patient-first care."
        imageSrc="/images/clinic-interior.jpg"
      />

      {/* Mission section */}
      <section style={{ background: "var(--white)", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "24px", height: "1px", background: "var(--gold)", display: "block" }} />
              Our Mission
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 300, lineHeight: 1.15, color: "var(--forest)", marginBottom: "24px" }}>
              Hearing care that<br />puts people first
            </h2>
            <p style={{ fontSize: "15px", fontWeight: 300, color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "20px" }}>
              At Ralas, we believe that better hearing transforms lives. Our mission is to provide every patient — from toddlers to the elderly — with precise audiological diagnosis, the right technology, and the ongoing support they need to thrive.
            </p>
            <p style={{ fontSize: "15px", fontWeight: 300, color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "36px" }}>
              We are not a retail chain. We are a specialist clinic where every appointment is unhurried, every recommendation is unbiased, and every device is fitted and followed up with the care it deserves.
            </p>
            <div style={{ display: "flex", gap: "32px" }}>
              {[{ val: "2012", lbl: "Founded" }, { val: "Jayanagar", lbl: "Location" }, { val: "RCI Reg.", lbl: "Certified" }].map(({ val, lbl }) => (
                <div key={lbl}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 300, color: "var(--forest)", lineHeight: 1 }}>{val}</div>
                  <div style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-lt)", marginTop: "4px" }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative", height: "480px", background: "var(--cream-dk)", overflow: "hidden" }}>
            <img src="/images/clinic-team.jpg" alt="Ralas clinic team" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "var(--gold)" }} />
          </div>
        </div>
      </section>

      {/* Team section */}
      <section style={{ background: "var(--cream)", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "56px" }}>
            <div style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "24px", height: "1px", background: "var(--gold)", display: "block" }} />
              Our Team
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 300, lineHeight: 1.15, color: "var(--forest)" }}>
              Meet the specialists
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2px" }}>
            {team.map(({ name, role, qual, spec, initials }) => (
              <div key={name} style={{ background: "var(--white)", padding: "40px 32px", border: "0.5px solid rgba(26,58,42,0.08)" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "var(--forest)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 300, color: "var(--gold-lt)" }}>{initials}</span>
                </div>
                <div style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "8px" }}>{role}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 400, color: "var(--forest)", marginBottom: "8px" }}>{name}</div>
                <div style={{ fontSize: "12.5px", fontWeight: 300, color: "var(--text-lt)", marginBottom: "12px" }}>{qual}</div>
                <div style={{ paddingTop: "16px", borderTop: "0.5px solid rgba(26,58,42,0.1)", fontSize: "13px", fontWeight: 300, color: "var(--text-mid)", lineHeight: 1.6 }}>{spec}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: "var(--forest)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
          {stats.map(({ val, label }, i) => (
            <div key={label} style={{ padding: "48px 40px", borderRight: i < stats.length - 1 ? "0.5px solid rgba(255,255,255,0.1)" : "none" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "52px", fontWeight: 300, color: "var(--gold)", lineHeight: 1, marginBottom: "8px" }}>{val}</div>
              <div style={{ fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <FAQ title="Questions about Ralas" questions={faqs} />
      <Footer />
    </>
  )
}