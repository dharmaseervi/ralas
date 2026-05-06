import Navbar from "@/components/home/navbar"
import ServiceHero from "@/components/home/servicehero"
import FAQ from "@/components/home/FAQ"
import Footer from "@/components/home/Footer"
import { BookAppointment } from "@/components/Bookappointment"

const symptoms = ["Ringing or buzzing in ears", "Hissing or whistling sounds", "Clicking or pulsing sounds", "Sound only you can hear", "Worse in quiet environments", "Difficulty sleeping", "Concentration problems", "Anxiety or distress from sound"]

const causes = [
  { title: "Noise exposure", desc: "Prolonged exposure to loud sounds — concerts, machinery, earphones at high volume — is the most common cause." },
  { title: "Age-related loss", desc: "As hearing deteriorates with age, the brain may compensate by generating its own sounds." },
  { title: "Medication", desc: "Certain antibiotics, diuretics, and high doses of aspirin can trigger or worsen tinnitus." },
  { title: "Stress & anxiety", desc: "Psychological stress does not cause tinnitus but significantly worsens the perceived severity." },
]

const treatments = [
  {
    title: "Sound Therapy",
    tag: "First line",
    desc: "Uses external sounds (white noise, nature sounds, notched music) to partially mask or distract the brain from tinnitus signals. Delivered via a dedicated sound generator or hearing aids with built-in tinnitus programmes.",
    outcomes: ["Reduces perceived loudness", "Improves sleep quality", "Effective for 60–70% of patients"],
  },
  {
    title: "Tinnitus Retraining Therapy (TRT)",
    tag: "Gold standard",
    desc: "A structured programme combining sound therapy with directive counselling. Aims to habituate the brain to the tinnitus signal so it is no longer perceived as threatening — and eventually becomes background noise.",
    outcomes: ["Long-term habituation", "Reduces emotional distress", "18–24 month programme"],
  },
  {
    title: "Hearing Aids with Tinnitus Features",
    tag: "Device-based",
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

      {/* What is tinnitus */}
      <section style={{ background: "var(--white)", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          <div>
            <div style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "24px", height: "1px", background: "var(--gold)", display: "block" }} />
              Understanding Tinnitus
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 300, color: "var(--forest)", marginBottom: "24px" }}>What is tinnitus?</h2>
            <p style={{ fontSize: "15px", fontWeight: 300, color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "20px" }}>
              Tinnitus is the perception of sound — ringing, buzzing, hissing, or clicking — in the absence of an external source. It affects approximately 10–15% of adults and can range from mildly annoying to severely debilitating.
            </p>
            <p style={{ fontSize: "15px", fontWeight: 300, color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "36px" }}>
              While tinnitus itself is a symptom rather than a disease, it is often linked to hearing loss, noise exposure, or other conditions. An audiological assessment is the essential first step.
            </p>
            <BookAppointment />
          </div>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 400, color: "var(--forest)", marginBottom: "20px" }}>Common symptoms</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {symptoms.map((s) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", background: "var(--cream)", border: "0.5px solid rgba(26,58,42,0.08)" }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
                  <span style={{ fontSize: "13.5px", fontWeight: 300, color: "var(--text-mid)" }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment options */}
      <section style={{ background: "var(--cream)", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "56px" }}>
            <div style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "24px", height: "1px", background: "var(--gold)", display: "block" }} />
              Treatment Options
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 300, color: "var(--forest)" }}>Evidence-based approaches</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2px" }}>
            {treatments.map(({ title, tag, desc, outcomes }) => (
              <div key={title} style={{ background: "var(--white)", padding: "40px 32px", border: "0.5px solid rgba(26,58,42,0.08)" }}>
                <div style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "10px" }}>{tag}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "21px", fontWeight: 400, color: "var(--forest)", marginBottom: "14px", lineHeight: 1.25 }}>{title}</div>
                <p style={{ fontSize: "13px", fontWeight: 300, color: "var(--text-mid)", lineHeight: 1.7, marginBottom: "24px" }}>{desc}</p>
                <div style={{ paddingTop: "20px", borderTop: "0.5px solid rgba(26,58,42,0.1)" }}>
                  <div style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-lt)", marginBottom: "10px" }}>Outcomes</div>
                  {outcomes.map((o) => (
                    <div key={o} style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "8px" }}>
                      <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--gold)", flexShrink: 0, marginTop: "6px" }} />
                      <span style={{ fontSize: "12.5px", fontWeight: 300, color: "var(--text-mid)" }}>{o}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Causes */}
      <section style={{ background: "var(--forest)", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "56px" }}>
            <div style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "24px", height: "1px", background: "var(--gold)", display: "block" }} />
              Common Causes
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 300, color: "white" }}>What triggers tinnitus?</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {causes.map(({ title, desc }) => (
              <div key={title} style={{ background: "var(--forest)", padding: "32px 28px" }}>
                <div style={{ width: "36px", height: "36px", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "50%", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold)" }} />
                </div>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "white", marginBottom: "10px" }}>{title}</div>
                <div style={{ fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>{desc}</div>
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