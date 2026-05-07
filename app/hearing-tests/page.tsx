import FAQ from "@/components/home/FAQ"
import Footer from "@/components/home/Footer"
import { BookAppointment } from "@/components/Bookappointment"
import HearingTestSection from "@/components/home/HearingTest"
import ServiceHero from "@/components/home/ServiceheroSection"
import Navbar from "@/components/home/NavigationBar"


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

      {/* ── Test types ── */}
      <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--white)" }}>
        <div className="max-w-[1200px] mx-auto">

          {/* Section header — stacks on mobile */}
          <div className="mb-10 md:mb-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-end">
            <div>
              <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
                <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
                What's Included
              </div>
              <h2
                className="font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 300, color: "var(--forest)" }}
              >
                Four tests, one visit
              </h2>
            </div>
            <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>
              A full diagnostic evaluation at Ralas covers all four core tests. You leave with a complete audiogram and a clear explanation of your results.
            </p>
          </div>

          {/* Test cards — 1 col mobile, 2 col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(26,58,42,0.08)" }}>
            {testTypes.map(({ tag, title, desc, duration }) => (
              <div
                key={title}
                className="flex gap-4 md:gap-6 p-6 md:p-8"
                style={{ background: "var(--cream)" }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ border: "1px solid rgba(26,58,42,0.15)" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}>
                    <path d="M12 2a5 5 0 0 1 5 5c0 3-2 5-4 7C12 15 11 16 11 16s-1-1-2-2C7 12 5 10 5 7a5 5 0 0 1 7-4.58V7" />
                    <circle cx="12" cy="7" r="1.5" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-3 mb-2">
                    <div>
                      <div className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>{tag}</div>
                      <div
                        className="font-normal leading-snug"
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "var(--forest)" }}
                      >
                        {title}
                      </div>
                    </div>
                    <div className="text-xs flex-shrink-0 pt-0.5" style={{ color: "var(--text-lt)" }}>{duration}</div>
                  </div>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HearingTestSection />

      {/* ── Who should get tested ── */}
      <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--white)" }}>
        <div className="max-w-[1200px] mx-auto">

          <div className="text-center mb-10 md:mb-14">
            <div className="flex items-center justify-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px" style={{ background: "var(--gold)" }} />
              Warning Signs
              <span className="block w-6 h-px" style={{ background: "var(--gold)" }} />
            </div>
            <h2
              className="font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 300, color: "var(--forest)" }}
            >
              Who should get tested?
            </h2>
          </div>

          {/* Age group cards — 1 col mobile, 3 col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(26,58,42,0.08)" }}>
            {ageGroups.map(({ group, signs, note }) => (
              <div key={group} className="p-7 md:p-8" style={{ background: "var(--cream)" }}>
                <div
                  className="font-normal mb-5"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", color: "var(--forest)" }}
                >
                  {group}
                </div>
                <div className="flex flex-col gap-2.5 mb-5">
                  {signs.map((s) => (
                    <div key={s} className="flex items-start gap-2.5">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                        style={{ background: "var(--gold)" }}
                      />
                      <span className="text-sm font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>{s}</span>
                    </div>
                  ))}
                </div>
                <div
                  className="pt-4 text-xs font-light leading-relaxed"
                  style={{ borderTop: "0.5px solid rgba(26,58,42,0.1)", color: "var(--text-lt)" }}
                >
                  {note}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-12">
            <BookAppointment />
          </div>
        </div>
      </section>

      <FAQ title="Hearing test questions" questions={faqs} />
      <Footer />
    </>
  )
}