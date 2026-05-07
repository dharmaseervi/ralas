import FAQ from "@/components/home/FAQ"
import Footer from "@/components/home/Footer"
import { BookAppointment } from "@/components/Bookappointment"
import Navbar from "@/components/home/NavigationBar"
import ServiceHero from "@/components/home/ServiceheroSection"


const symptoms = ["Ringing or buzzing in ears", "Hissing or whistling sounds", "Clicking or pulsing sounds", "Sound only you can hear", "Worse in quiet environments", "Difficulty sleeping", "Concentration problems", "Anxiety or distress from sound"]

const causes = [
  { title: "Noise exposure", desc: "Prolonged exposure to loud sounds — concerts, machinery, earphones at high volume — is the most common cause." },
  { title: "Age-related loss", desc: "As hearing deteriorates with age, the brain may compensate by generating its own sounds." },
  { title: "Medication", desc: "Certain antibiotics, diuretics, and high doses of aspirin can trigger or worsen tinnitus." },
  { title: "Stress & anxiety", desc: "Psychological stress does not cause tinnitus but significantly worsens the perceived severity." },
]

const treatments = [
  {
    title: "Sound Therapy", tag: "First line",
    desc: "Uses external sounds (white noise, nature sounds, notched music) to partially mask or distract the brain from tinnitus signals. Delivered via a dedicated sound generator or hearing aids with built-in tinnitus programmes.",
    outcomes: ["Reduces perceived loudness", "Improves sleep quality", "Effective for 60–70% of patients"],
  },
  {
    title: "Tinnitus Retraining Therapy (TRT)", tag: "Gold standard",
    desc: "A structured programme combining sound therapy with directive counselling. Aims to habituate the brain to the tinnitus signal so it is no longer perceived as threatening — and eventually becomes background noise.",
    outcomes: ["Long-term habituation", "Reduces emotional distress", "18–24 month programme"],
  },
  {
    title: "Hearing Aids with Tinnitus Features", tag: "Device-based",
    desc: "For patients with co-existing hearing loss (most tinnitus patients), modern hearing aids amplify real sounds and simultaneously play masking sounds. Brands like Signia and Widex have dedicated tinnitus programmes.",
    outcomes: ["Addresses underlying hearing loss", "Built-in masking sounds", "Daily wearable solution"],
  },
]

const faqs = [
  { question: "Is tinnitus curable?", answer: "There is currently no universal cure for tinnitus. However, effective management is possible — most patients achieve significant relief through sound therapy, TRT, or hearing aids. The goal is habituation: the brain learns to filter out the sound so it no longer causes distress." },
  { question: "Can tinnitus get worse over time?", answer: "Tinnitus can fluctuate. Stress, lack of sleep, and further noise exposure can worsen it temporarily. With proper management and lifestyle adjustments, many patients find it becomes less bothersome over time." },
  { question: "Do I need a hearing test if I have tinnitus?", answer: "Yes. Tinnitus and hearing loss frequently co-exist, and a hearing test is the first step in designing the right treatment plan. It also rules out any underlying medical causes that may need ENT attention." },
  { question: "How long does TRT take?", answer: "Tinnitus Retraining Therapy is a structured 18–24 month programme. However, many patients report meaningful improvement within the first 3–6 months. Consistency with the sound therapy component is key." },
  { question: "Will hearing aids help my tinnitus?", answer: "For patients with both tinnitus and hearing loss, hearing aids are often highly effective. By amplifying ambient sounds, they reduce the contrast that makes tinnitus more noticeable. Modern devices also include dedicated tinnitus masking programmes." },
]

export default function TinnitusPage() {
  return (
    <>
      <Navbar />
      <ServiceHero
        eyebrow="Tinnitus Management"
        title="Quiet the noise, reclaim your life"
        subtitle="Advanced tinnitus management combining sound therapy, TRT, and hearing device solutions — personalised to your experience and severity."
        imageSrc="/images/tinnitus-hero.jpg"
      />

      {/* ── What is tinnitus — stacks on mobile ── */}
      <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--white)" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left */}
          <div>
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              Understanding Tinnitus
            </div>
            <h2
              className="font-light mb-5"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 300, color: "var(--forest)" }}
            >
              What is tinnitus?
            </h2>
            <p className="text-sm md:text-base font-light leading-relaxed mb-4" style={{ color: "var(--text-mid)" }}>
              Tinnitus is the perception of sound — ringing, buzzing, hissing, or clicking — in the absence of an external source. It affects approximately 10–15% of adults and can range from mildly annoying to severely debilitating.
            </p>
            <p className="text-sm md:text-base font-light leading-relaxed mb-8" style={{ color: "var(--text-mid)" }}>
              While tinnitus itself is a symptom rather than a disease, it is often linked to hearing loss, noise exposure, or other conditions. An audiological assessment is the essential first step.
            </p>
            <BookAppointment />
          </div>

          {/* Right — symptoms */}
          <div>
            <div
              className="font-normal mb-5"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "var(--forest)" }}
            >
              Common symptoms
            </div>
            <div className="flex flex-col gap-2">
              {symptoms.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-3 px-4 py-3"
                  style={{ background: "var(--cream)", border: "0.5px solid rgba(26,58,42,0.08)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--gold)" }} />
                  <span className="text-sm font-light" style={{ color: "var(--text-mid)" }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Treatment options — 1 col mobile, 3 col desktop ── */}
      <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10 md:mb-14">
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              Treatment Options
            </div>
            <h2
              className="font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 300, color: "var(--forest)" }}
            >
              Evidence-based approaches
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(26,58,42,0.08)" }}>
            {treatments.map(({ title, tag, desc, outcomes }) => (
              <div key={title} className="p-7 md:p-9" style={{ background: "var(--white)" }}>
                <div className="text-xs tracking-widest uppercase mb-2.5" style={{ color: "var(--gold)" }}>{tag}</div>
                <div
                  className="font-normal leading-snug mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "21px", color: "var(--forest)" }}
                >
                  {title}
                </div>
                <p className="text-sm font-light leading-relaxed mb-5" style={{ color: "var(--text-mid)" }}>{desc}</p>
                <div className="pt-4" style={{ borderTop: "0.5px solid rgba(26,58,42,0.1)" }}>
                  <div className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--text-lt)" }}>Outcomes</div>
                  <div className="flex flex-col gap-2">
                    {outcomes.map((o) => (
                      <div key={o} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: "var(--gold)" }} />
                        <span className="text-xs font-light" style={{ color: "var(--text-mid)" }}>{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Causes — 2 col mobile, 4 col desktop ── */}
      <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--forest)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-10 md:mb-14">
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              Common Causes
            </div>
            <h2
              className="font-light text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 300 }}
            >
              What triggers tinnitus?
            </h2>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            {causes.map(({ title, desc }) => (
              <div key={title} className="p-6 md:p-7" style={{ background: "var(--forest)" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center mb-5"
                  style={{ border: "1px solid rgba(201,168,76,0.3)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--gold)" }} />
                </div>
                <div className="text-sm font-medium text-white mb-2">{title}</div>
                <div className="text-xs font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ title="Tinnitus questions" questions={faqs} />
      <Footer />
    </>
  )
}