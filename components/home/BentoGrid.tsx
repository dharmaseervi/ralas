"use client"

import { motion } from "framer-motion"

const cards = [
  {
    colClass: "md:col-span-8",
    variant: "light",
    num: "01",
    tag: "BrainHearing™ Platform",
    title: "Hearing aids that think like your brain",
    desc: "Our partnered devices leverage neural-network processing with 12M trained sound scenes, delivering 50% better speech clarity in noisy environments.",
    stats: [
      { val: "50%", lbl: "better clarity" },
      { val: "0.5ms", lbl: "response time" },
      { val: "30h", lbl: "battery life" },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}>
        <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    colClass: "md:col-span-4",
    variant: "dark",
    num: "02",
    tag: "Free Assessment",
    title: "Comprehensive hearing test on first visit",
    desc: "Walk in for a no-obligation audiometric evaluation. Get your personalised audiogram the same day.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}>
        <circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    colClass: "md:col-span-4",
    variant: "light",
    num: "03",
    tag: "In-Home Service",
    title: "We come to you",
    desc: "For elderly patients or those with mobility constraints, our audiologists offer home visit programmes across Bengaluru.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    colClass: "md:col-span-4",
    variant: "gold",
    num: "04",
    tag: "Satisfaction Guarantee",
    title: "30-day trial, no questions asked",
    desc: "Not happy? Return within 30 days for a full refund. We believe in the product — and in you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    colClass: "md:col-span-4",
    variant: "light",
    num: "05",
    tag: "Speech Therapy",
    title: "Dedicated speech-language pathologist on-site",
    desc: "From childhood articulation delays to post-stroke rehabilitation — personalised, evidence-based therapy.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    colClass: "md:col-span-4",
    variant: "stat",
    num: "06",
    statVal: "1200+",
    statLbl: "Patients served",
  },
]

const variantStyles: Record<string, React.CSSProperties> = {
  light: { background: "var(--white)", border: "0.5px solid rgba(26,58,42,0.1)" },
  dark:  { background: "var(--forest)" },
  gold:  { background: "var(--gold)" },
  stat:  { background: "var(--white)", border: "0.5px solid rgba(26,58,42,0.1)" },
}

export default function BentoGrid() {
  return (
    <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--cream)" }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-lg"
      >
        <div className="section-label">Why Ralas</div>
        <h2 className="section-h2">Audiological care<br />redefined</h2>
        <p className="section-sub mt-3">
          Combining clinical precision with a deeply human approach to hearing health.
        </p>
      </motion.div>

      {/* Grid — 1 col stacked on mobile, 12-col bento on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.07 }}
            whileHover={{ y: -3, boxShadow: "0 12px 40px rgba(26,58,42,0.1)" }}
            className={`${card.colClass} relative overflow-hidden transition-all duration-300 p-7 md:p-9 ${
              card.variant === "stat" ? "flex flex-col items-center justify-center text-center min-h-[160px]" : ""
            }`}
            style={variantStyles[card.variant]}
          >
            {/* Background number */}
            {card.num && (
              <div
                className="absolute top-4 right-5 text-[64px] md:text-[72px] font-light leading-none select-none pointer-events-none"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: card.variant === "dark"
                    ? "rgba(255,255,255,0.07)"
                    : card.variant === "gold"
                    ? "rgba(26,58,42,0.12)"
                    : "rgba(26,58,42,0.06)",
                }}
              >
                {card.num}
              </div>
            )}

            {card.variant === "stat" ? (
              <>
                <div
                  className="font-light leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(44px,6vw,64px)", color: "var(--forest)" }}
                >
                  {card.statVal}
                </div>
                <div className="text-xs tracking-widest uppercase mt-2" style={{ color: "var(--text-lt)" }}>
                  {card.statLbl}
                </div>
              </>
            ) : (
              <>
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
                  style={{ border: `1px solid ${card.variant === "dark" ? "rgba(255,255,255,0.2)" : "rgba(26,58,42,0.15)"}` }}
                >
                  {card.icon}
                </div>

                {/* Tag */}
                <div
                  className="text-xs tracking-widest uppercase mb-2.5"
                  style={{
                    color: card.variant === "dark"
                      ? "var(--gold-lt)"
                      : card.variant === "gold"
                      ? "rgba(26,58,42,0.6)"
                      : "var(--gold)",
                  }}
                >
                  {card.tag}
                </div>

                {/* Title */}
                <div
                  className="text-xl font-normal leading-snug mb-2.5"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: card.variant === "dark" ? "white" : "var(--forest)",
                  }}
                >
                  {card.title}
                </div>

                {/* Desc */}
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{
                    color: card.variant === "dark"
                      ? "rgba(255,255,255,0.65)"
                      : card.variant === "gold"
                      ? "rgba(26,58,42,0.75)"
                      : "var(--text-mid)",
                  }}
                >
                  {card.desc}
                </p>

                {/* Stats row — card 0 only */}
                {card.stats && (
                  <div className="flex flex-wrap gap-6 md:gap-8 mt-6">
                    {card.stats.map(({ val, lbl }) => (
                      <div key={lbl}>
                        <div
                          className="font-light leading-none"
                          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,4vw,44px)", color: "var(--forest)" }}
                        >
                          {val}
                        </div>
                        <div className="text-xs tracking-widest uppercase mt-1" style={{ color: "var(--text-lt)" }}>
                          {lbl}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}