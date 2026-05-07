import { BookAppointment } from "@/components/Bookappointment"
import FAQ from "@/components/home/FAQ"
import Footer from "@/components/home/Footer"
import Navbar from "@/components/home/NavigationBar"
import ServiceHero from "@/components/home/ServiceheroSection"


const conditions = ["Stuttering & fluency", "Articulation disorders", "Voice disorders", "Language delay", "Post-stroke aphasia", "Autism spectrum", "Swallowing (dysphagia)", "Cleft palate speech", "Selective mutism", "Cognitive-communication"]

const ageGroups = [
  {
    group: "Children (2–12 years)",
    dark: false,
    points: [
      { title: "Early intervention", desc: "The earlier therapy starts, the better the outcomes. We work with children as young as 18 months." },
      { title: "Play-based sessions", desc: "All paediatric sessions use age-appropriate play techniques that keep children engaged and motivated." },
      { title: "Parent involvement", desc: "We train parents to carry over therapy goals at home — a crucial part of rapid progress." },
      { title: "School coordination", desc: "We liaise with teachers and school counsellors to support children in educational settings." },
    ],
  },
  {
    group: "Adults (13+ years)",
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

      {/* ── Conditions ── */}
      <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--white)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              Conditions Treated
            </div>
            <h2
              className="font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 300, color: "var(--forest)" }}
            >
              We treat a wide range<br />of communication disorders
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {conditions.map((c) => (
              <div
                key={c}
                className="text-sm font-light px-4 py-2"
                style={{ background: "var(--cream)", border: "0.5px solid rgba(26,58,42,0.12)", color: "var(--text-mid)" }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Age groups — 1 col mobile, 2 col desktop ── */}
      <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10 md:mb-14">
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              Our Approach
            </div>
            <h2
              className="font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 300, color: "var(--forest)" }}
            >
              Tailored to every stage of life
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(26,58,42,0.08)" }}>
            {ageGroups.map(({ group, dark, points }) => (
              <div
                key={group}
                className="p-8 md:p-10"
                style={{
                  background: dark ? "var(--forest)" : "var(--cream)",
                  border: dark ? "none" : "0.5px solid rgba(26,58,42,0.08)",
                }}
              >
                <div
                  className="font-light mb-8"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px,3vw,26px)", color: dark ? "white" : "var(--forest)" }}
                >
                  {group}
                </div>
                <div className="flex flex-col gap-5">
                  {points.map(({ title, desc }) => (
                    <div key={title} className="flex gap-4 items-start">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                        style={{ background: "var(--gold)" }}
                      />
                      <div>
                        <div
                          className="text-sm font-medium mb-1"
                          style={{ color: dark ? "white" : "var(--forest)" }}
                        >
                          {title}
                        </div>
                        <div
                          className="text-sm font-light leading-relaxed"
                          style={{ color: dark ? "rgba(255,255,255,0.58)" : "var(--text-mid)" }}
                        >
                          {desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Session process — 2 col mobile, 4 col desktop ── */}
      <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--forest)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10 md:mb-14">
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              How It Works
            </div>
            <h2
              className="font-light text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 300 }}
            >
              Your therapy journey
            </h2>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            {steps.map(({ num, title, desc }) => (
              <div
                key={num}
                className="p-6 md:p-8"
                style={{ background: "var(--forest)" }}
              >
                <div
                  className="font-light leading-none mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,48px)", color: "rgba(201,168,76,0.25)" }}
                >
                  {num}
                </div>
                <div className="text-sm font-medium text-white mb-2">{title}</div>
                <div className="text-xs font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <BookAppointment />
          </div>
        </div>
      </section>

      <FAQ title="Speech therapy questions" questions={faqs} />
      <Footer />
    </>
  )
}