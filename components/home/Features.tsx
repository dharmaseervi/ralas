"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Waves, Zap, Bluetooth, Ear, Volume2 } from "lucide-react"
import Link from "next/link"

const features = [
  {
    Icon: BrainCircuit,
    tag: "Signal Processing",
    title: "Smart background noise reduction",
    description: "Modern hearing aids from Oticon, Signia and Widex process sound in real time, reducing background noise while preserving the speech you want to hear.",
    specs: ["Background noise filtering", "Speech enhancement", "Auto environment detection", "Real-time processing"],
  },
  {
    Icon: Waves,
    tag: "360° Awareness",
    title: "Full soundscape awareness",
    description: "Premium devices scan your surroundings continuously, automatically adjusting their programmes to suit restaurants, streets, meetings and quiet rooms.",
    specs: ["Auto programme switching", "Directional microphones", "Wind noise reduction", "Situational adaptation"],
  },
  {
    Icon: Zap,
    tag: "Comfort",
    title: "All-day comfort and battery life",
    description: "Rechargeable hearing aids from leading brands offer a full day of wear on a single charge — no disposable batteries required.",
    specs: ["Rechargeable models available", "Disposable battery options", "Lightweight designs", "BTE, RIC, ITE styles"],
  },
  {
    Icon: Bluetooth,
    tag: "Connectivity",
    title: "Wireless streaming and control",
    description: "Many modern hearing aids connect directly to smartphones, allowing you to stream calls and music and adjust settings from an app.",
    specs: ["iOS & Android compatible", "Direct audio streaming", "Volume control via app", "TV streamer compatible"],
  },
  {
    Icon: Ear,
    tag: "Clinical Fitting",
    title: "Fitted to your exact audiogram",
    description: "Every device we fit is calibrated to your personal audiogram by our certified audiologist. We include follow-up adjustments until the sound is right for you.",
    specs: ["Audiogram-matched fitting", "RCI-certified audiologist", "Free follow-up visits", "GST invoice included"],
  },
  {
    Icon: Volume2,
    tag: "Speech Clarity",
    title: "Clearer speech in difficult situations",
    description: "High-end hearing aids include dedicated modes for crowded spaces, loud restaurants and group conversations — helping you stay engaged.",
    specs: ["Crowd listening mode", "Wind suppression", "Surround sound balance", "Manual boost option"],
  },
]

export default function Features() {
  return (
    <section
      className="py-14 md:py-24 px-5 md:px-12 relative overflow-hidden"
      style={{ background: "var(--forest)" }}
    >
      {/* Bg texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.06) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.03) 0%, transparent 50%)" }}
      />

      <div className="max-w-[1200px] mx-auto relative">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-end"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              Modern Hearing Aids
            </div>
            <h2
              className="font-light text-white leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px,4vw,52px)", lineHeight: 1.15 }}
            >
              What today&apos;s hearing<br />aids can do for you
            </h2>
          </div>
          <div>
            <p className="text-sm md:text-base font-light leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.58)" }}>
              The latest devices from Oticon, Signia, Widex and ReSound are a far cry from the hearing aids of the past — smaller, smarter, and fitted precisely to your audiogram.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--gold)" }} />
              <span className="text-xs tracking-wider" style={{ color: "rgba(255,255,255,0.32)" }}>
                All devices come with manufacturer warranty · In-clinic follow-up included
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Feature grid ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-px"
          style={{ gap: "1px", background: "rgba(255,255,255,0.06)" }}
        >
          {features.map(({ Icon, tag, title, description, specs }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="p-7 md:p-8 relative overflow-hidden"
              style={{ background: "var(--forest)" }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
            >
              {/* Gold left border on hover */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.22 }}
                className="absolute top-0 left-0 bottom-0 w-0.5"
                style={{ background: "var(--gold)", transformOrigin: "top" }}
              />

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-6"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <Icon size={17} color="rgba(255,255,255,0.75)" strokeWidth={1.5} />
              </div>

              {/* Tag */}
              <div className="text-xs tracking-widest uppercase mb-2 opacity-80" style={{ color: "var(--gold)" }}>
                {tag}
              </div>

              {/* Title */}
              <h3
                className="font-normal text-white mb-2.5 leading-snug"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "19px" }}
              >
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm font-light leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
                {description}
              </p>

              {/* Spec pills */}
              <div className="flex flex-wrap gap-1.5">
                {specs.map((spec) => (
                  <span
                    key={spec}
                    className="text-xs font-light px-2.5 py-1 tracking-wider"
                    style={{ color: "rgba(255,255,255,0.4)", border: "0.5px solid rgba(255,255,255,0.1)" }}
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 px-6 md:px-12 py-8"
          style={{ background: "var(--gold)" }}
        >
          <div>
            <div
              className="font-normal mb-1"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(18px,3vw,22px)", color: "var(--forest)" }}
            >
              Want to try a hearing aid before you buy?
            </div>
            <p className="text-sm font-light" style={{ color: "rgba(26,58,42,0.65)" }}>
              Free demo · No obligation · Jayanagar clinic, Bengaluru
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className="text-xs font-medium tracking-widest uppercase px-6 py-3 no-underline whitespace-nowrap text-white"
              style={{ background: "var(--forest)", textDecoration: "none" }}
            >
              Book Free Demo
            </Link>
            <Link
              href="/hearing-aids"
              className="hidden sm:inline text-xs tracking-widest uppercase font-normal whitespace-nowrap no-underline pb-0.5"
              style={{ color: "var(--forest)", borderBottom: "1px solid rgba(26,58,42,0.4)", textDecoration: "none" }}
            >
              View all aids →
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
