import Link from "next/link"
import NavigationBar from "@/components/home/NavigationBar"
import Footer from "@/components/home/Footer"
import { BookAppointment } from "@/components/Bookappointment"

export const metadata = {
  title: "Our Services — Hearing Tests, Aids, Speech Therapy & Tinnitus",
  description: "Ralas Hearing Clinic offers comprehensive audiological services in Jayanagar, Bengaluru: hearing tests, hearing aids, speech therapy, tinnitus treatment, and home visits.",
}

const services = [
  {
    num: "01",
    tag: "Diagnostic",
    title: "Hearing Tests",
    href: "/hearing-tests",
    desc: "Comprehensive audiometric evaluations for every age — from newborns to seniors. Our soundproofed booths and calibrated equipment deliver precise, clinical-grade audiograms on the same day as your appointment.",
    highlights: ["Pure-tone audiometry", "Speech audiometry", "Tympanometry", "Same-day audiogram report", "Free on first visit"],
    cta: "Book a Hearing Test",
  },
  {
    num: "02",
    tag: "Devices",
    title: "Hearing Aids",
    href: "/hearing-aids",
    desc: "India's top hearing aid brands — Oticon, Signia, Widex, ReSound and Starkey — fitted precisely to your audiogram by our certified audiologists. Discreet styles from behind-the-ear to completely-in-canal.",
    highlights: ["Oticon, Signia, Widex, ReSound", "BTE, RIC, ITE, ITC, CIC styles", "Rechargeable & Bluetooth options", "Manufacturer warranty included", "RCI-certified audiologist"],
    cta: "Explore Hearing Aids",
  },
  {
    num: "03",
    tag: "Rehabilitation",
    title: "Speech Therapy",
    href: "/speech-therapy",
    desc: "Evidence-based speech and language therapy for children and adults. Our on-site speech-language pathologist works with articulation delays, stuttering, language disorders, voice conditions, and post-stroke rehabilitation.",
    highlights: ["Child & adult therapy", "Articulation & fluency", "Post-stroke rehabilitation", "Language development", "Individualised care plans"],
    cta: "Learn More",
  },
  {
    num: "04",
    tag: "Treatment",
    title: "Tinnitus Treatment",
    href: "/tinnitus-treatment",
    desc: "Personalised tinnitus management combining sound therapy, counselling, and — where appropriate — hearing aids with built-in tinnitus maskers. Many patients report substantial relief within weeks of beginning treatment.",
    highlights: ["Tinnitus assessment", "Sound therapy (TRT)", "Hearing aid maskers", "Counselling support", "Long-term management plan"],
    cta: "Learn More",
  },
  {
    num: "05",
    tag: "Outreach",
    title: "Home Visits",
    href: "/home-visits",
    desc: "For elderly patients or those with mobility challenges, our audiologists bring clinical-quality hearing care to your doorstep. Home visits cover hearing assessments, device fitting, cleaning, and follow-up adjustments.",
    highlights: ["Across Bengaluru", "Hearing tests at home", "Device fitting & adjustment", "Cleaning & maintenance", "By appointment"],
    cta: "Request a Home Visit",
  },
]

export default function ServicesPage() {
  return (
    <>
      <NavigationBar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-14 md:pb-20 px-5 md:px-12" style={{ background: "var(--forest)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2.5 mb-4 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
            <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
            What We Offer
          </div>
          <h1
            className="font-light text-white leading-tight mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,5vw,64px)", lineHeight: 1.1 }}
          >
            Complete audiological<br />care under one roof
          </h1>
          <p className="text-sm md:text-base font-light leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
            From diagnostic hearing tests to premium hearing aid fitting, speech therapy, and tinnitus management — Ralas offers everything you need for better hearing and communication.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-14 md:py-20 px-5 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col gap-px" style={{ background: "rgba(26,58,42,0.07)" }}>
          {services.map(({ num, tag, title, href, desc, highlights, cta }) => (
            <div
              key={num}
              className="grid grid-cols-1 md:grid-cols-12 gap-0"
              style={{ background: "var(--white)" }}
            >
              {/* Left — number + tag */}
              <div
                className="md:col-span-2 flex md:flex-col justify-between md:justify-start gap-3 px-6 md:px-8 py-6 md:py-10"
                style={{ background: "var(--cream)", borderBottom: "0.5px solid rgba(26,58,42,0.07)" }}
              >
                <div
                  className="font-light leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", color: "rgba(26,58,42,0.18)" }}
                >
                  {num}
                </div>
                <div className="text-xs tracking-widest uppercase" style={{ color: "var(--gold)" }}>
                  {tag}
                </div>
              </div>

              {/* Centre — main content */}
              <div className="md:col-span-7 px-6 md:px-10 py-8 md:py-10" style={{ borderLeft: "0.5px solid rgba(26,58,42,0.07)" }}>
                <h2
                  className="font-normal leading-snug mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px,3vw,30px)", color: "var(--forest)" }}
                >
                  {title}
                </h2>
                <p className="text-sm font-light leading-relaxed mb-6" style={{ color: "var(--text-mid)" }}>
                  {desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs font-light px-3 py-1.5 tracking-wide"
                      style={{ background: "var(--cream)", border: "0.5px solid rgba(26,58,42,0.12)", color: "var(--text-mid)" }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — CTA */}
              <div
                className="md:col-span-3 flex flex-col justify-center items-start md:items-center px-6 md:px-8 py-6 md:py-10 gap-3"
                style={{ borderLeft: "0.5px solid rgba(26,58,42,0.07)" }}
              >
                <Link
                  href={href}
                  className="text-xs font-medium tracking-widest uppercase px-6 py-3 no-underline transition-colors whitespace-nowrap"
                  style={{ background: "var(--gold)", color: "var(--forest)", textDecoration: "none" }}
                >
                  {cta}
                </Link>
                <BookAppointment variant="outline" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 md:py-20 px-5 md:px-12" style={{ background: "var(--forest)" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2
              className="font-light text-white mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(24px,3.5vw,36px)" }}
            >
              Not sure which service you need?
            </h2>
            <p className="text-sm font-light" style={{ color: "rgba(255,255,255,0.55)" }}>
              Book a free consultation and our audiologist will assess your situation and recommend the right care path.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <BookAppointment />
            <a
              href="tel:+916366638452"
              className="text-xs tracking-widest uppercase pb-0.5 no-underline"
              style={{ color: "rgba(255,255,255,0.65)", borderBottom: "1px solid rgba(255,255,255,0.3)", textDecoration: "none" }}
            >
              Call us →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
