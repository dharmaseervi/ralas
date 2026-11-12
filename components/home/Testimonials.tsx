"use client"

import { motion } from "framer-motion"

const platforms = [
  {
    name: "Google",
    href: "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x3bae152b5f787543:0x32fcd6ff153aaa20",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
    action: "Read Reviews",
  },
]

export default function Testimonials() {
  return (
    <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--forest)" }}>
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-6 items-end"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              Patient Reviews
            </div>
            <h2
              className="font-light text-white leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px,4vw,52px)", lineHeight: 1.15 }}
            >
              Hear from our<br />patients directly
            </h2>
          </div>
          <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            We let our patients speak for themselves. Read genuine reviews on Google, written by real patients at their own discretion.
          </p>
        </motion.div>

        {/* Review platform cards */}
        <div className="grid grid-cols-1 gap-px mb-10" style={{ background: "rgba(255,255,255,0.07)" }}>
          {platforms.map(({ name, href, icon, action }, i) => (
            <motion.a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col justify-between gap-6 p-8 md:p-12 no-underline group"
              style={{ background: "var(--forest)", textDecoration: "none" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.07)", border: "0.5px solid rgba(255,255,255,0.12)" }}
                >
                  {icon}
                </div>
                <span
                  className="text-base font-light tracking-wide text-white"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px" }}
                >
                  {name}
                </span>
              </div>

              <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                Find us on Google Maps and read what patients have shared about their experience at Ralas Hearing Clinic.
              </p>

              <div className="flex items-center gap-2 text-xs tracking-widest uppercase group-hover:gap-3 transition-all" style={{ color: "var(--gold)" }}>
                {action}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={13} height={13}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Leave a review CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 md:p-8"
          style={{ border: "0.5px solid rgba(255,255,255,0.1)" }}
        >
          <div>
            <div
              className="font-normal text-white mb-1"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(17px,2.5vw,20px)" }}
            >
              Had a good experience?
            </div>
            <p className="text-xs font-light" style={{ color: "rgba(255,255,255,0.4)" }}>
              A review helps other patients find the right hearing care.
            </p>
          </div>
          <a
            href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x3bae152b5f787543:0x32fcd6ff153aaa20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium tracking-widest uppercase px-6 py-3.5 no-underline flex-shrink-0 whitespace-nowrap"
            style={{ background: "var(--gold)", color: "var(--forest)", textDecoration: "none" }}
          >
            Leave a Google Review →
          </a>
        </motion.div>

      </div>
    </section>
  )
}
