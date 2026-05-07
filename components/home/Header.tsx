"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, MapPin, Clock, ChevronLeft, ChevronRight, Menu, X } from "lucide-react"
import { BookAppointment } from "../Bookappointment"

const slides = [
  {
    image: "/images/feature-comfort.jpg",
    eyebrow: "Advanced Audiological Care",
    title: ["Hear the World", "with Clarity"],
    titleItalic: "Clarity",
    subtitle: "Cutting-edge hearing aids and personalised audiological care — crafted for your unique hearing profile and lifestyle.",
    cta: "Book a Consultation",
    ctaLink: "/contact",
    secondaryCta: "View Hearing Aids",
    secondaryLink: "/hearing-aids",
  },
  {
    image: "/images/feature-connectivity.jpg",
    eyebrow: "Speech & Language Therapy",
    title: ["Find Your", "Voice Again"],
    titleItalic: "Voice",
    subtitle: "Personalised speech therapy sessions designed to restore confidence and communication for all ages.",
    cta: "Speech Therapy",
    ctaLink: "/speech-therapy",
    secondaryCta: "Meet Our Team",
    secondaryLink: "/about",
  },
  {
    image: "/images/feature-sound.jpg",
    eyebrow: "Diagnostic Services",
    title: ["Comprehensive", "Hearing Tests"],
    titleItalic: "Hearing",
    subtitle: "State-of-the-art audiometric evaluations for every stage of life — precise, thorough, and compassionate.",
    cta: "Book a Test",
    ctaLink: "/hearing-tests",
    secondaryCta: "Learn More",
    secondaryLink: "/hearing-tests",
  },
]

const stripItems = [
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" width={13} height={13}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>),
    title: "Same-Day", sub: "Appointments available",
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" width={13} height={13}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>),
    title: "All Ages", sub: "Children to elderly",
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" width={13} height={13}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>),
    title: "Expert Audiologists", sub: "12+ years of care",
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" width={13} height={13}><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>),
    title: "GST Billing", sub: "Insurance-friendly",
  },
]

export default function Header() {
  const [current, setCurrent] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), [])
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length)

  useEffect(() => {
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [next])

  return (
    <header className="relative">

      {/* ── TOP BAR — fixed at very top, desktop only ── */}
      <div
        className="hidden md:flex fixed top-0 left-0 right-0 z-[110] items-center justify-between px-12 py-2 text-xs tracking-widest"
        style={{ background: "var(--forest)", color: "#B8CDB4" }}
      >
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <Clock size={12} /> Mon – Sat: 10:00 AM – 7:30 PM
          </span>
          <span className="w-px h-3" style={{ background: "rgba(255,255,255,.15)" }} />
          <span className="flex items-center gap-1.5">
            <MapPin size={12} />
            <Link href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x3bae152b5f787543:0x32fcd6ff153aaa20"
              style={{ color: "inherit", textDecoration: "none" }}>
              2nd Floor, 121, 6th C Main Rd, Jayanagar, Bengaluru – 560011
            </Link>
          </span>
        </div>
        <span className="flex items-center gap-1.5">
          <Phone size={12} />
          <a href="tel:+916366638452" style={{ color: "inherit", textDecoration: "none" }}>
            +91 6366-638452
          </a>
        </span>
      </div>

      {/* ── MAIN NAV ── */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
        className="fixed left-0 right-0 z-[100] flex items-center justify-between h-16 md:h-[72px] px-5 md:px-12 transition-all duration-300"
        style={{
          top: scrolled ? 0 : "36px",
          background: scrolled ? "rgba(250,247,242,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "0.5px solid rgba(26,58,42,0.12)" : "none",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" style={{ textDecoration: "none" }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300"
            style={{ border: `1.5px solid ${scrolled ? "var(--forest)" : "rgba(255,255,255,0.6)"}` }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke={scrolled ? "var(--forest)" : "white"} strokeWidth="1.5" width={16} height={16}>
              <path d="M12 2a7 7 0 0 1 7 7c0 4-3 7-5 9.5C12.5 20 12 21 12 21s-.5-1-2-2.5C8 16 5 13 5 9a7 7 0 0 1 7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </motion.div>
          <span
            className="text-xl md:text-2xl font-semibold tracking-wide transition-colors duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: scrolled ? "var(--forest)" : "white" }}
          >
            Ralas
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-1">
          {["Services", "Hearing Aids", "About", "Resources", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="px-3.5 py-2 text-xs tracking-widest uppercase transition-colors duration-200 hover:opacity-70"
              style={{
                color: scrolled ? "var(--text-mid)" : "rgba(255,255,255,0.85)",
                textDecoration: "none",
              }}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Hide on mobile — shown inside drawer */}
          <div className="hidden sm:block">
            <BookAppointment />
          </div>
          <button
            className="lg:hidden p-1 bg-transparent border-none cursor-pointer"
            onClick={() => setMobileOpen(true)}
            style={{ color: scrolled ? "var(--text)" : "white" }}
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-[300] w-[300px] flex flex-col p-7"
              style={{ background: "var(--white)" }}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-xl font-semibold tracking-wide"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--forest)" }}>
                  Ralas
                </span>
                <button onClick={() => setMobileOpen(false)} className="bg-transparent border-none cursor-pointer p-1">
                  <X size={20} color="var(--text-mid)" />
                </button>
              </div>

              <nav className="flex-1 flex flex-col gap-1 overflow-y-auto">
                {[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services" },
                  { label: "Hearing Tests", href: "/hearing-tests", indent: true },
                  { label: "Speech Therapy", href: "/speech-therapy", indent: true },
                  { label: "Hearing Aids", href: "/hearing-aids", indent: true },
                  { label: "Tinnitus Treatment", href: "/tinnitus-treatment", indent: true },
                  { label: "About", href: "/about" },
                  { label: "Resources", href: "/resources" },
                  { label: "Contact", href: "/contact" },
                ].map(({ label, href, indent }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`block no-underline transition-colors ${
                      indent
                        ? "py-1.5 pl-4 text-sm font-light"
                        : "py-2.5 text-base font-normal border-b"
                    }`}
                    style={{
                      color: indent ? "var(--text-lt)" : "var(--forest)",
                      textDecoration: "none",
                      borderColor: "var(--border)",
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              <div className="pt-6 border-t" style={{ borderColor: "var(--border)" }}>
                <div className="flex flex-col gap-3 mb-5">
                  <a href="tel:+916366638452"
                    className="flex items-center gap-2.5 text-sm no-underline"
                    style={{ color: "var(--text-mid)", textDecoration: "none" }}>
                    <Phone size={14} color="var(--gold)" /> +91 6366-638452
                  </a>
                  <span className="flex items-center gap-2.5 text-sm" style={{ color: "var(--text-mid)" }}>
                    <Clock size={14} color="var(--gold)" /> Mon–Sat, 10 AM – 7:30 PM
                  </span>
                </div>
                <BookAppointment fullWidth />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── HERO CAROUSEL ── */}
      <div className="relative overflow-hidden" style={{ height: "100svh", minHeight: "600px", background: "var(--forest-deep)" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.65 }}
            className="absolute inset-0"
          >
            {/* BG */}
            <motion.div
              initial={{ scale: 1.06 }} animate={{ scale: 1 }}
              transition={{ duration: 7, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[current].image})`, opacity: 0.45 }}
            />
            {/* Overlay */}
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(110deg, rgba(10,25,15,0.88) 0%, rgba(10,25,15,0.35) 60%, transparent 100%)" }} />

            {/* Hero content */}
            <div className="relative h-full flex items-center px-5 md:px-12">
              <div className="w-full max-w-xl">

                {/* Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                  className="flex items-center gap-2.5 mb-4 text-xs tracking-[0.22em] uppercase"
                  style={{ color: "var(--gold)" }}
                >
                  <span className="block w-7 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
                  {slides[current].eyebrow}
                </motion.div>

                {/* H1 */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                  className="font-light text-white leading-tight mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 6vw, 72px)", lineHeight: 1.1 }}
                >
                  {slides[current].title[0]}<br />
                  <em className="italic" style={{ color: "var(--gold-lt)" }}>{slides[current].title[1]}</em>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                  className="text-sm md:text-base font-light leading-relaxed mb-8 max-w-md"
                  style={{ color: "rgba(255,255,255,0.72)" }}
                >
                  {slides[current].subtitle}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Link
                    href={slides[current].ctaLink}
                    className="inline-block text-xs font-medium tracking-widest uppercase px-6 py-3.5 no-underline transition-colors"
                    style={{ background: "var(--gold)", color: "var(--forest)", textDecoration: "none" }}
                  >
                    {slides[current].cta}
                  </Link>
                  {/* Hide secondary CTA on very small screens */}
                  <Link
                    href={slides[current].secondaryLink}
                    className="hidden sm:inline text-xs tracking-widest uppercase pb-0.5 no-underline transition-colors"
                    style={{ color: "rgba(255,255,255,0.7)", borderBottom: "1px solid rgba(255,255,255,0.3)", textDecoration: "none" }}
                  >
                    {slides[current].secondaryCta} →
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right service panel — desktop only */}
        <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-0.5 z-10">
          {[
            { label: "Service", title: "Hearing Tests", href: "/hearing-tests" },
            { label: "Service", title: "Speech Therapy", href: "/speech-therapy" },
            { label: "Service", title: "Tinnitus Care", href: "/tinnitus-treatment" },
          ].map(({ label, title, href }) => (
            <Link key={title} href={href}
              className="block text-right px-5 py-3.5 min-w-[160px] no-underline transition-colors hover:bg-white/10"
              style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(10px)", border: "0.5px solid rgba(255,255,255,0.15)", textDecoration: "none" }}
            >
              <div className="text-xs tracking-widest uppercase mb-0.5" style={{ color: "var(--gold)" }}>{label}</div>
              <div className="text-sm font-light text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{title}</div>
            </Link>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-24 left-5 md:left-12 flex gap-2 items-center z-10">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className="h-1.5 border-none cursor-pointer p-0 transition-all duration-300"
              style={{
                width: current === i ? "22px" : "6px",
                borderRadius: current === i ? "3px" : "50%",
                background: current === i ? "var(--gold)" : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <div className="absolute bottom-[86px] flex gap-2 z-10 left-5 md:left-12 ml-16 md:ml-20">
          <button onClick={prev}
            className="w-8 h-8 flex items-center justify-center cursor-pointer transition-colors hover:bg-white/20"
            style={{ background: "rgba(255,255,255,0.1)", border: "0.5px solid rgba(255,255,255,0.25)", color: "white" }}>
            <ChevronLeft size={15} />
          </button>
          <button onClick={next}
            className="w-8 h-8 flex items-center justify-center cursor-pointer transition-colors hover:bg-white/20"
            style={{ background: "rgba(255,255,255,0.1)", border: "0.5px solid rgba(255,255,255,0.25)", color: "white" }}>
            <ChevronRight size={15} />
          </button>
        </div>

        {/* Counter — desktop only */}
        <div className="hidden md:block absolute bottom-24 right-12 text-xs tracking-widest font-light z-10"
          style={{ color: "rgba(255,255,255,0.4)" }}>
          <strong className="font-normal text-white">0{current + 1}</strong> / 0{slides.length}
        </div>

        {/* Bottom strip — 2 col on mobile, 4 col on desktop */}
        <div className="absolute bottom-0 left-0 right-0 z-10 grid grid-cols-2 md:grid-cols-4"
          style={{ background: "rgba(10,20,14,0.9)", backdropFilter: "blur(8px)", borderTop: "0.5px solid rgba(201,168,76,0.2)" }}>
          {stripItems.map(({ icon, title, sub }, i) => (
            <div key={title}
              className="flex items-center gap-3 px-4 md:px-6 py-4 md:py-0 md:h-[76px] cursor-pointer hover:bg-white/5 transition-colors"
              style={{ borderRight: i !== 1 && i !== 3 ? "0.5px solid rgba(255,255,255,0.08)" : "none" }}
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ border: "1px solid rgba(201,168,76,0.35)" }}>
                {icon}
              </div>
              <div>
                <div className="text-xs font-medium text-white mb-0.5">{title}</div>
                <div className="text-xs font-light" style={{ color: "rgba(255,255,255,0.45)" }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}