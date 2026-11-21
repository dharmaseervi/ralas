"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/home/NavigationBar"
import Footer from "@/components/home/Footer"
import { BookAppointment } from "@/components/Bookappointment"

const faqCategories = [
  {
    heading: "Hearing Tests",
    questions: [
      {
        question: "How much does a hearing test cost in Bangalore?",
        answer: "At Ralas, your first consultation includes a complete hearing test and audiogram report at no charge. Follow-up tests and specialist evaluations are priced transparently — call or WhatsApp us at +91 6366-638452 for current pricing.",
      },
      {
        question: "What is a BERA test and how much does it cost?",
        answer: "BERA (Brainstem Evoked Response Audiometry) is used to test hearing in newborns, infants, and individuals who cannot respond to standard tone tests. It measures how the brain responds to sound. Contact us for pricing and to schedule a BERA test in Bangalore.",
      },
      {
        question: "What is an audiometry test?",
        answer: "Audiometry (or pure tone audiometry) is the standard clinical hearing test. You wear headphones and press a button each time you hear a tone at different frequencies and volumes. Results are plotted on an audiogram — a graph showing your hearing thresholds across pitches. The test takes about 20 minutes.",
      },
      {
        question: "How long does a hearing test take?",
        answer: "A full diagnostic evaluation at Ralas takes 30–45 minutes including the consultation. You'll receive a complete audiogram and a clear explanation of your results on the same visit.",
      },
      {
        question: "Is the hearing test painful or uncomfortable?",
        answer: "Not at all. Hearing tests are completely non-invasive. You wear headphones and press a button or raise your hand when you hear a tone. There are no injections, ear drops, or procedures of any kind.",
      },
      {
        question: "Do I need a referral for a hearing test?",
        answer: "No referral is needed. You can book directly — by phone, WhatsApp, or our online booking form. Walk-ins are welcome during clinic hours (Mon–Sat, 10 AM – 7:30 PM).",
      },
      {
        question: "What is tympanometry?",
        answer: "Tympanometry tests the health of your middle ear and eardrum. A small probe is placed at the entrance of the ear canal and air pressure is varied gently. It detects fluid behind the eardrum, perforation, or eustachian tube problems. The test takes about 5 minutes and is painless.",
      },
      {
        question: "What is OAE screening?",
        answer: "OAE (Otoacoustic Emission) screening measures the sounds produced by the inner ear (cochlea) in response to a click stimulus. It is ideal for newborns and young children. A tiny probe placed at the ear entrance measures these emissions — no response from the child is needed. Results are ready in minutes.",
      },
    ],
  },
  {
    heading: "Hearing Aids & Pricing",
    questions: [
      {
        question: "How much do hearing aids cost in Bangalore?",
        answer: "Hearing aid prices in Bangalore start from around ₹20,000 per unit for basic digital aids. Mid-range rechargeable devices typically range from ₹60,000–₹1,20,000 per unit. Premium models from Oticon, Signia, Widex, and Phonak can go up to ₹1,80,000+ per unit. All prices at Ralas include professional fitting, fine-tuning, and follow-up adjustments.",
      },
      {
        question: "What hearing aid brands are available at Ralas?",
        answer: "We stock and fit premium hearing aids from Oticon, Signia, Widex, Phonak, and ReSound. Our audiologists will recommend the most suitable brand and model based on your hearing profile, lifestyle, and budget.",
      },
      {
        question: "Can I try a hearing aid before buying?",
        answer: "Yes. After fitting, we schedule follow-up sessions to fine-tune the device in real-world environments. We want you to be completely satisfied before you commit. Speak to our audiologist about trial options during your consultation.",
      },
      {
        question: "What styles of hearing aids are available?",
        answer: "We fit all major styles: Behind-the-Ear (BTE), Receiver-in-Canal (RIC), In-the-Ear (ITE), In-the-Canal (ITC), Completely-in-Canal (CIC), and Invisible-in-Canal (IIC). The right style depends on your degree of hearing loss, ear anatomy, and lifestyle preferences.",
      },
      {
        question: "Are rechargeable hearing aids better?",
        answer: "Rechargeable hearing aids are convenient — no fiddling with tiny batteries. They charge overnight and typically last a full day on a single charge. They are ideal for older adults or those with dexterity challenges. We carry several rechargeable options from Oticon, Signia, and Widex.",
      },
    ],
  },
  {
    heading: "Speech Therapy",
    questions: [
      {
        question: "What is speech therapy and who needs it?",
        answer: "Speech-language therapy helps people of all ages with communication difficulties — delayed speech in children, stuttering, voice disorders, language processing issues, and communication challenges after a stroke or neurological event. Our therapists work with children as young as 18 months through to adults.",
      },
      {
        question: "How much does speech therapy cost in Bangalore?",
        answer: "Session pricing depends on the type and duration of therapy. Contact us at +91 6366-638452 for current rates. We also offer package plans for children requiring ongoing therapy.",
      },
      {
        question: "At what age should I bring my child for a speech assessment?",
        answer: "If your child is not saying single words by 12–15 months, two-word phrases by 24 months, or is difficult to understand by age 3, an early assessment is recommended. Early intervention significantly improves outcomes. Walk in or book an appointment — no referral needed.",
      },
      {
        question: "How many sessions will my child need?",
        answer: "Every child is different. Our therapist conducts a full assessment first and then recommends a therapy plan. Some children show marked improvement in 8–12 sessions; others with more complex needs may require longer support. We review progress regularly and adjust the plan accordingly.",
      },
    ],
  },
  {
    heading: "Tinnitus Treatment",
    questions: [
      {
        question: "What is tinnitus?",
        answer: "Tinnitus is the perception of sound (ringing, buzzing, hissing, or clicking) in the ears without an external source. It can be constant or intermittent, in one or both ears. It is not a disease itself but a symptom of an underlying condition such as hearing loss, ear infection, or noise exposure.",
      },
      {
        question: "Is tinnitus treatable?",
        answer: "Tinnitus cannot always be cured, but it can be effectively managed to the point where it no longer interferes with daily life. Treatment options include Tinnitus Retraining Therapy (TRT), sound therapy, hearing aids with built-in maskers, and counselling. Many patients experience significant relief within a few sessions.",
      },
      {
        question: "What is Tinnitus Retraining Therapy (TRT)?",
        answer: "TRT is a structured programme combining sound therapy with counselling to help the brain reclassify tinnitus as a neutral background sound — one the brain learns to filter out. It is one of the most evidence-based approaches to long-term tinnitus management.",
      },
    ],
  },
  {
    heading: "Children's Hearing",
    questions: [
      {
        question: "How do I know if my newborn has a hearing problem?",
        answer: "Signs include: not startling at loud sounds, not turning towards sounds by 3–4 months, not babbling by 6 months, delayed speech. We offer OAE newborn hearing screening, which takes just minutes and requires no response from the baby.",
      },
      {
        question: "Can children as young as infants be tested?",
        answer: "Yes. We test all ages from newborns upwards. For infants and very young children we use OAE screening and BERA testing, which require no active participation. For children 3 and older we use play audiometry — a fun, game-based version of the standard hearing test.",
      },
      {
        question: "My child keeps turning up the TV — should I be worried?",
        answer: "It's one of the most common early signs of hearing loss in children. Other signs include: not responding when called, asking people to repeat themselves, struggling in school, or speaking louder than expected. A quick hearing check at Ralas will give you clarity.",
      },
    ],
  },
  {
    heading: "Appointments & Location",
    questions: [
      {
        question: "Where is Ralas Hearing Clinic located?",
        answer: "We are at 2nd Floor, 121, 6th C Main Road, 4th Block, Jayanagar, Bengaluru – 560011. Easily accessible by BMTC bus, Metro (South End Circle station), and auto-rickshaw. Parking is available nearby.",
      },
      {
        question: "What are the clinic hours?",
        answer: "Monday to Saturday, 10:00 AM – 7:30 PM. We are closed on Sundays and national holidays. Walk-ins are welcome; booking in advance ensures minimal waiting time.",
      },
      {
        question: "Do you offer home visits?",
        answer: "Yes. For elderly patients or those with mobility challenges, our audiologists provide home visits across Bengaluru for hearing testing, hearing aid fitting, and follow-up care. Call or WhatsApp +91 6366-638452 to arrange.",
      },
      {
        question: "How do I book an appointment?",
        answer: "You can book online using the form on our website, call us at +91 6366-638452, or message us on WhatsApp. Walk-ins are also welcome during clinic hours.",
      },
    ],
  },
]

function AccordionSection({ heading, questions }: { heading: string; questions: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div style={{ maxWidth: "760px", margin: "0 auto", paddingBottom: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "40px 0 16px" }}>
        <span style={{ width: "24px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
        <span style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--gold)", fontWeight: 500 }}>
          {heading}
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" as const, gap: "2px" }}>
        {questions.map((item, i) => (
          <div
            key={i}
            style={{ background: "var(--white)", border: "0.5px solid var(--border-strong)", overflow: "hidden" }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 24px",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left" as const,
                gap: "16px",
              }}
            >
              <span style={{ fontSize: "15px", fontWeight: 400, color: "var(--forest)", lineHeight: 1.4 }}>
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === i ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                style={{ flexShrink: 0 }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" width={18} height={18}>
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ padding: "0 24px 22px", borderTop: "0.5px solid var(--border)" }}>
                    <p style={{ fontSize: "14px", fontWeight: 300, color: "var(--text-mid)", lineHeight: 1.75, paddingTop: "16px" }}>
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function FAQContent() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "var(--cream)", padding: "80px 24px 48px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "10.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <span style={{ width: "24px", height: "1px", background: "var(--gold)" }} />
            Support
            <span style={{ width: "24px", height: "1px", background: "var(--gold)" }} />
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,5vw,56px)", fontWeight: 300, color: "var(--forest)", lineHeight: 1.15, marginBottom: "16px" }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: "15px", fontWeight: 300, color: "var(--text-mid)", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto" }}>
            Answers to common questions about hearing tests, hearing aids, speech therapy, tinnitus, and appointments at Ralas Hearing Clinic, Jayanagar, Bengaluru.
          </p>
        </div>
      </section>

      {/* FAQ accordion by category */}
      <section style={{ background: "var(--cream)", padding: "0 24px 80px" }}>
        {faqCategories.map(({ heading, questions }) => (
          <AccordionSection key={heading} heading={heading} questions={questions} />
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: "var(--forest)", padding: "64px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 300, color: "#fff", lineHeight: 1.2, marginBottom: "16px" }}>
            Still have questions?
          </h2>
          <p style={{ fontSize: "14px", fontWeight: 300, color: "rgba(255,255,255,0.65)", marginBottom: "32px" }}>
            Call or WhatsApp us at +91 6366-638452 — Mon to Sat, 10 AM to 7:30 PM. Walk-ins welcome.
          </p>
          <BookAppointment />
        </div>
      </section>

      <Footer />
    </>
  )
}
