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
    subtitle:
      "Cutting-edge hearing aids and personalised audiological care — crafted for your unique hearing profile and lifestyle.",
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
    subtitle:
      "Personalised speech therapy sessions designed to restore confidence and communication for all ages.",
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
    subtitle:
      "State-of-the-art audiometric evaluations for every stage of life — precise, thorough, and compassionate.",
    cta: "Book a Test",
    ctaLink: "/hearing-tests",
    secondaryCta: "Learn More",
    secondaryLink: "/hearing-tests",
  },
]

const stripItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" width={13} height={13}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Same-Day",
    sub: "Appointments available",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" width={13} height={13}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "All Ages",
    sub: "Children to elderly",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" width={13} height={13}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Expert Audiologists",
    sub: "12+ years of care",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" width={13} height={13}>
        <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
    title: "GST Billing",
    sub: "Insurance-friendly",
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
      {/* ── TOP BAR ── */}
      <div
        style={{
          background: "var(--forest)",
          color: "#B8CDB4",
          fontSize: "11.5px",
          letterSpacing: "0.06em",
          padding: "7px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <Clock size={12} />
            Mon – Sat: 10:00 AM – 7:30 PM
          </span>
          <span style={{ width: "1px", height: "12px", background: "rgba(255,255,255,.15)" }} />
          <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <MapPin size={12} />
            <Link
              href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x3bae152b5f787543:0x32fcd6ff153aaa20"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              2nd Floor, 121, 6th C Main Rd, Jayanagar, Bengaluru – 560011
            </Link>
          </span>
        </div>
        <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
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
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(250,247,242,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "0.5px solid rgba(26,58,42,0.12)" : "none",
          padding: "0 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
          transition: "background 0.35s ease, border-color 0.35s ease",
          marginTop: scrolled ? 0 : "36px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "11px", textDecoration: "none" }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              width: "36px",
              height: "36px",
              border: `1.5px solid ${scrolled ? "var(--forest)" : "rgba(255,255,255,0.6)"}`,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "border-color 0.3s",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke={scrolled ? "var(--forest)" : "white"} strokeWidth="1.5" width={16} height={16}>
              <path d="M12 2a7 7 0 0 1 7 7c0 4-3 7-5 9.5C12.5 20 12 21 12 21s-.5-1-2-2.5C8 16 5 13 5 9a7 7 0 0 1 7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </motion.div>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "22px",
              fontWeight: 600,
              color: scrolled ? "var(--forest)" : "white",
              letterSpacing: "0.05em",
              transition: "color 0.3s",
            }}
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
              className="nav-link-item"
              style={{
                fontSize: "13px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: scrolled ? "var(--text-mid)" : "rgba(255,255,255,0.85)",
                textDecoration: "none",
                padding: "8px 14px",
                position: "relative",
                transition: "color 0.2s",
              }}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <BookAppointment />
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(true)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: scrolled ? "var(--text)" : "white",
              padding: "4px",
            }}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.4)",
                zIndex: 200,
              }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "300px",
                background: "var(--white)",
                zIndex: 300,
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 600, color: "var(--forest)" }}>
                  Ralas
                </span>
                <button onClick={() => setMobileOpen(false)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                  <X size={20} color="var(--text-mid)" />
                </button>
              </div>

              <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
                {[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services", sub: true },
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
                    style={{
                      display: "block",
                      padding: `${indent ? "6px" : "10px"} 0 ${indent ? "6px" : "10px"} ${indent ? "16px" : "0"}`,
                      fontSize: indent ? "13px" : "15px",
                      fontWeight: indent ? 300 : 400,
                      color: indent ? "var(--text-lt)" : "var(--forest)",
                      textDecoration: "none",
                      borderBottom: indent ? "none" : "0.5px solid var(--border)",
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              <div style={{ paddingTop: "28px", borderTop: "0.5px solid var(--border)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
                  <a href="tel:+916366638452" style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "var(--text-mid)", textDecoration: "none" }}>
                    <Phone size={14} color="var(--gold)" /> +91 6366-638452
                  </a>
                  <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "var(--text-mid)" }}>
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
      <div style={{ position: "relative", height: "100vh", minHeight: "600px", background: "var(--forest-deep)", overflow: "hidden" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65 }}
            style={{ position: "absolute", inset: 0 }}
          >
            {/* Background */}
            <motion.div
              initial={{ scale: 1.06 }}
              animate={{ scale: 1 }}
              transition={{ duration: 7, ease: "easeOut" }}
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${slides[current].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.45,
              }}
            />
            {/* Overlay */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(10,25,15,0.88) 0%, rgba(10,25,15,0.35) 60%, transparent 100%)" }} />

            {/* Content */}
            <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "center", padding: "0 48px" }}>
              <div style={{ maxWidth: "580px" }}>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "18px", display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <span style={{ width: "28px", height: "1px", background: "var(--gold)", display: "block" }} />
                  {slides[current].eyebrow}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(42px, 5.5vw, 72px)", fontWeight: 300, color: "white", lineHeight: 1.1, marginBottom: "20px" }}
                >
                  {slides[current].title[0]}
                  <br />
                  <em style={{ fontStyle: "italic", color: "var(--gold-lt)" }}>{slides[current].title[1]}</em>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  style={{ fontSize: "16px", fontWeight: 300, color: "rgba(255,255,255,0.72)", lineHeight: 1.7, marginBottom: "36px", maxWidth: "440px" }}
                >
                  {slides[current].subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42 }}
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <Link
                    href={slides[current].ctaLink}
                    style={{
                      background: "var(--gold)",
                      color: "var(--forest)",
                      fontSize: "12px",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "14px 32px",
                      textDecoration: "none",
                      transition: "background 0.2s",
                      display: "inline-block",
                    }}
                  >
                    {slides[current].cta}
                  </Link>
                  <Link
                    href={slides[current].secondaryLink}
                    style={{
                      fontSize: "12px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(255,255,255,0.3)",
                      paddingBottom: "2px",
                      transition: "color 0.2s",
                    }}
                  >
                    {slides[current].secondaryCta} →
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right service panel */}
        <div style={{ position: "absolute", right: "48px", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "2px", zIndex: 10 }} className="hidden lg:flex">
          {[
            { label: "Service", title: "Hearing Tests", href: "/hearing-tests" },
            { label: "Service", title: "Speech Therapy", href: "/speech-therapy" },
            { label: "Service", title: "Tinnitus Care", href: "/tinnitus-treatment" },
          ].map(({ label, title, href }) => (
            <Link
              key={title}
              href={href}
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(10px)",
                border: "0.5px solid rgba(255,255,255,0.15)",
                padding: "14px 20px",
                textDecoration: "none",
                textAlign: "right",
                minWidth: "170px",
                transition: "background 0.2s",
              }}
            >
              <div style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "3px" }}>{label}</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "14px", color: "white", fontWeight: 400 }}>{title}</div>
            </Link>
          ))}
        </div>

        {/* Dots */}
        <div style={{ position: "absolute", bottom: "96px", left: "48px", display: "flex", gap: "8px", alignItems: "center", zIndex: 10 }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: current === i ? "22px" : "6px",
                height: "6px",
                borderRadius: current === i ? "3px" : "50%",
                background: current === i ? "var(--gold)" : "rgba(255,255,255,0.3)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <div style={{ position: "absolute", bottom: "88px", left: "48px", display: "flex", gap: "8px", alignItems: "center", marginLeft: "80px", zIndex: 10 }}>
          <button onClick={prev} style={{ width: "34px", height: "34px", background: "rgba(255,255,255,0.1)", border: "0.5px solid rgba(255,255,255,0.25)", color: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}>
            <ChevronLeft size={16} />
          </button>
          <button onClick={next} style={{ width: "34px", height: "34px", background: "rgba(255,255,255,0.1)", border: "0.5px solid rgba(255,255,255,0.25)", color: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Counter */}
        <div style={{ position: "absolute", bottom: "96px", right: "48px", fontSize: "11px", letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)", fontWeight: 300, zIndex: 10 }}>
          <strong style={{ color: "white", fontWeight: 400 }}>0{current + 1}</strong> / 0{slides.length}
        </div>

        {/* Bottom strip */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(10,20,14,0.9)", backdropFilter: "blur(8px)", display: "flex", height: "76px", borderTop: "0.5px solid rgba(201,168,76,0.2)", zIndex: 10 }}>
          {stripItems.map(({ icon, title, sub }) => (
            <div
              key={title}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "0 24px",
                borderRight: "0.5px solid rgba(255,255,255,0.08)",
                cursor: "pointer",
              }}
            >
              <div style={{ width: "30px", height: "30px", border: "1px solid rgba(201,168,76,0.35)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {icon}
              </div>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 500, color: "white", marginBottom: "1px" }}>{title}</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.03em" }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
