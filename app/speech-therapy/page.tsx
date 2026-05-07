
import { BookAppointment } from "@/components/Bookappointment"
import FAQ from "@/components/home/FAQ"
import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/Navbar"
import ServiceHero from "@/components/home/ServiceHero"


const conditions = ["Stuttering & fluency", "Articulation disorders", "Voice disorders", "Language delay", "Post-stroke aphasia", "Autism spectrum", "Swallowing (dysphagia)", "Cleft palate speech", "Selective mutism", "Cognitive-communication"]

const ageGroups = [
  {
    group: "Children (2–12 years)",
    color: "var(--cream)",
    points: [
      { title: "Early intervention", desc: "The earlier therapy starts, the better the outcomes. We work with children as young as 18 months." },
      { title: "Play-based sessions", desc: "All paediatric sessions use age-appropriate play techniques that keep children engaged and motivated." },
      { title: "Parent involvement", desc: "We train parents to carry over therapy goals at home — a crucial part of rapid progress." },
      { title: "School coordination", desc: "We liaise with teachers and school counsellors to support children in educational settings." },
    ],
  },
  {
    group: "Adults (13+ years)",
    color: "var(--forest)",
    dark: true,
    points: [
      { title: "Post-stroke rehab", desc: "We work with stroke and brain injury survivors to regain speech and language function." },
      { title: "Voice therapy", desc: "For teachers, singers, and professionals who rely on their voice — and for voice disorders at any level." },
      { title: "Accent modification", desc: "For professionals looking to improve clarity and confidence in English communication." },
      { title: "Cognitive-communication", desc: "Memory, attention, and reasoning skills for patients with neurological conditions." },
    ],
  },
]

const steps = [
  { num: "01", title: "Initial assessment", desc: "60-minute session to evaluate speech, language, voice, and fluency. A detailed report is provided." },
  { num: "02", title: "Therapy plan", desc: "A personalised goal-based plan is created, with frequency and estimated duration discussed with the family." },
  { num: "03", title: "Therapy sessions", desc: "30–45 minute sessions (individual or group). Frequency: typically 2–3 per week depending on the condition." },
  { num: "04", title: "Progress review", desc: "Formal review every 8–10 sessions. Goals are updated and the plan adjusted based on progress." },
]

const faqs = [
  { question: "At what age can my child start speech therapy?", answer: "We work with children from 18 months. The earlier intervention starts, the more effective it tends to be. If you have any concerns about your child's communication development, it is always better to seek an assessment early." },
  { question: "How many sessions will my child need?", answer: "This varies significantly depending on the condition, severity, and the child's individual progress. After the initial assessment, we will give you a realistic estimate. Many children show meaningful improvement within 3–6 months of regular therapy." },
  { question: "Can speech therapy help adults after a stroke?", answer: "Yes. Post-stroke aphasia is one of the conditions we treat regularly. Recovery timelines vary, but early intensive therapy has been shown to significantly improve outcomes. We work with the patient's neurologist and family as part of a holistic approach." },
  { question: "Do sessions happen in person only?", answer: "We offer both in-clinic sessions and home visits for patients who cannot travel. Online therapy sessions are also available for follow-up and maintenance sessions." },
  { question: "Is a doctor's referral needed?", answer: "No referral is required for speech therapy. You can book an assessment directly. If we feel a medical review is needed (e.g. for structural causes of speech difficulties), we will advise accordingly." },
]

export default function SpeechTherapyPage() {
  return (
    <>
      <Navbar />
      <ServiceHero
        eyebrow="Speech & Language Therapy"
        title="Find your voice, again"
        subtitle="Personalised speech and language therapy for children and adults — evidence-based, compassionate, and goal-driven from day one."
        imageSrc="/images/speech-therapy-hero.jpg"
      />

      {/* Conditions */}
      <section style={{ background: "var(--white)", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <div style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "24px", height: "1px", background: "var(--gold)", display: "block" }} />
              Conditions Treated
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 300, color: "var(--forest)", marginBottom: "16px" }}>We treat a wide range<br />of communication disorders</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {conditions.map((c) => (
              <div key={c} style={{ background: "var(--cream)", border: "0.5px solid rgba(26,58,42,0.12)", padding: "10px 18px", fontSize: "13.5px", fontWeight: 300, color: "var(--text-mid)" }}>{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Age groups */}
      <section style={{ background: "var(--cream)", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "56px" }}>
            <div style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "24px", height: "1px", background: "var(--gold)", display: "block" }} />
              Our Approach
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 300, color: "var(--forest)" }}>Tailored to every stage of life</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
            {ageGroups.map(({ group, color, dark, points }) => (
              <div key={group} style={{ background: color, padding: "48px 40px", border: dark ? "none" : "0.5px solid rgba(26,58,42,0.08)" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", fontWeight: 300, color: dark ? "white" : "var(--forest)", marginBottom: "32px" }}>{group}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  {points.map(({ title, desc }) => (
                    <div key={title} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold)", flexShrink: 0, marginTop: "7px" }} />
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: 500, color: dark ? "white" : "var(--forest)", marginBottom: "4px" }}>{title}</div>
                        <div style={{ fontSize: "13px", fontWeight: 300, color: dark ? "rgba(255,255,255,0.58)" : "var(--text-mid)", lineHeight: 1.65 }}>{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session process */}
      <section style={{ background: "var(--forest)", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "56px" }}>
            <div style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "24px", height: "1px", background: "var(--gold)", display: "block" }} />
              How It Works
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 300, color: "white" }}>Your therapy journey</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "rgba(255,255,255,0.05)" }}>
            {steps.map(({ num, title, desc }) => (
              <div key={num} style={{ background: "var(--forest)", padding: "36px 28px" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "48px", fontWeight: 300, color: "rgba(201,168,76,0.25)", lineHeight: 1, marginBottom: "16px" }}>{num}</div>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "white", marginBottom: "10px" }}>{title}</div>
                <div style={{ fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>{desc}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "48px" }}>
            <BookAppointment />
          </div>
        </div>
      </section>

      <FAQ title="Speech therapy questions" questions={faqs} />
      <Footer />
    </>
  )
}