import Navbar from "@/components/home/Navbar"
import ServiceHero from "@/components/home/ServiceHero"

import FAQ from "@/components/home/FAQ"
import Footer from "@/components/home/Footer"
import { BookAppointment } from "@/components/Bookappointment"
import HearingTestSection from "@/components/home/HearingTest"

const testTypes = [
  { tag: "Standard", title: "Pure Tone Audiometry", desc: "The core hearing test. You'll hear tones at different frequencies and volumes through headphones and indicate when you can hear them. Results are plotted on an audiogram.", duration: "20 min" },
  { tag: "Speech", title: "Speech Discrimination", desc: "Measures how well you understand spoken words at different volumes. This helps determine whether hearing aids or other interventions will benefit you.", duration: "15 min" },
  { tag: "Pressure", title: "Tympanometry", desc: "Tests the health of the middle ear and eardrum by measuring how the eardrum moves in response to air pressure changes. Detects fluid or perforation.", duration: "5 min" },
  { tag: "Screening", title: "OAE Screening", desc: "Otoacoustic emission screening — ideal for newborns and young children who can't respond to tone tests. A probe in the ear measures the inner ear's response to sound.", duration: "10 min" },
]

const ageGroups = [
  {
    group: "Children (0–12)",
    signs: ["Delayed speech or language development", "Doesn't respond to their name", "Turns up the TV volume frequently", "Struggles in noisy classrooms", "Failed newborn hearing screen"],
    note: "Hearing loss in children can significantly impact speech and learning. Early detection is critical.",
  },
  {
    group: "Adults (13–60)",
    signs: ["Asking people to repeat themselves", "Difficulty hearing on the phone", "Missing parts of conversations in groups", "Tinnitus (ringing in ears)", "Difficulty hearing high-pitched sounds"],
    note: "Adults should get a baseline hearing test and repeat every 3–5 years, or sooner if problems arise.",
  },
  {
    group: "Elderly (60+)",
    signs: ["Withdrawing from social situations", "Difficulty hearing in background noise", "Mishearing words frequently", "Family members commenting on hearing", "TV or radio volume very high"],
    note: "Age-related hearing loss (presbycusis) affects 1 in 3 people over 65. A test takes 30 minutes.",
  },
]

const faqs = [
  { question: "How long does a hearing test take?", answer: "A full diagnostic evaluation typically takes 30–45 minutes including the consultation. We'll explain your results clearly and answer all questions on the same visit." },
  { question: "Is the test painful or uncomfortable?", answer: "Not at all. Hearing tests are completely non-invasive. You'll wear headphones and either press a button or raise your hand when you hear a tone." },
  { question: "Do I need a referral?", answer: "No referral is needed. You can book directly with us by phone, WhatsApp, or our online booking form." },
  { question: "What should I bring to the appointment?", answer: "Just yourself. If you currently wear hearing aids, bring them along. If you have any previous audiograms or ENT reports, those are helpful but not required." },
  { question: "How much does a hearing test cost?", answer: "Please call or WhatsApp us for current pricing. First consultations include the hearing test and audiogram report. GST invoices are provided." },
  { question: "Can children be tested?", answer: "Yes. We test all ages including newborns using OAE screening. For children under 4, we use play audiometry techniques that make the test engaging and stress-free." },
]

export default function HearingTestsPage() {
  return (
    <>
      <Navbar />
      <ServiceHero
        eyebrow="Diagnostic Services"
        title="Comprehensive hearing tests"
        subtitle="State-of-the-art audiometric evaluations for every stage of life. Walk in for a test — your audiogram and consultation are ready the same day."
        imageSrc="/images/hearing-test-hero.jpg"
      />

      {/* Test types */}
      <section style={{ background: "var(--white)", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "end" }}>
            <div>
              <div style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ width: "24px", height: "1px", background: "var(--gold)", display: "block" }} />
                What's Included
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 300, color: "var(--forest)" }}>Four tests, one visit</h2>
            </div>
            <p style={{ fontSize: "15px", fontWeight: 300, color: "var(--text-mid)", lineHeight: 1.75 }}>
              A full diagnostic evaluation at Ralas covers all four core tests. You leave with a complete audiogram and a clear explanation of your results.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "2px" }}>
            {testTypes.map(({ tag, title, desc, duration }) => (
              <div key={title} style={{ background: "var(--cream)", padding: "36px 32px", border: "0.5px solid rgba(26,58,42,0.08)", display: "flex", gap: "24px" }}>
                <div style={{ width: "48px", height: "48px", border: "1px solid rgba(26,58,42,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}><path d="M12 2a5 5 0 0 1 5 5c0 3-2 5-4 7C12 15 11 16 11 16s-1-1-2-2C7 12 5 10 5 7a5 5 0 0 1 7-4.58V7" /><circle cx="12" cy="7" r="1.5" /></svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <div>
                      <div style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "4px" }}>{tag}</div>
                      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 400, color: "var(--forest)" }}>{title}</div>
                    </div>
                    <div style={{ fontSize: "11px", color: "var(--text-lt)", whiteSpace: "nowrap", marginLeft: "16px", paddingTop: "2px" }}>{duration}</div>
                  </div>
                  <p style={{ fontSize: "13px", fontWeight: 300, color: "var(--text-mid)", lineHeight: 1.65 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HearingTestSection />

      {/* Who should get tested */}
      <section style={{ background: "var(--white)", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
              <span style={{ width: "24px", height: "1px", background: "var(--gold)" }} />
              Warning Signs
              <span style={{ width: "24px", height: "1px", background: "var(--gold)" }} />
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 300, color: "var(--forest)" }}>Who should get tested?</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2px" }}>
            {ageGroups.map(({ group, signs, note }) => (
              <div key={group} style={{ background: "var(--cream)", padding: "40px 32px", border: "0.5px solid rgba(26,58,42,0.08)" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 400, color: "var(--forest)", marginBottom: "24px" }}>{group}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
                  {signs.map((s) => (
                    <div key={s} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--gold)", flexShrink: 0, marginTop: "6px" }} />
                      <span style={{ fontSize: "13px", fontWeight: 300, color: "var(--text-mid)", lineHeight: 1.6 }}>{s}</span>
                    </div>
                  ))}
                </div>
                <div style={{ paddingTop: "16px", borderTop: "0.5px solid rgba(26,58,42,0.1)", fontSize: "12.5px", fontWeight: 300, color: "var(--text-lt)", lineHeight: 1.6 }}>{note}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <BookAppointment />
          </div>
        </div>
      </section>

      <FAQ title="Hearing test questions" questions={faqs} />
      <Footer />
    </>
  )
}