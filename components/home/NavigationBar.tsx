"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Clock, MapPin, Menu, X } from "lucide-react"
import { BookAppointment } from "../Bookappointment"


const navItems = [
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Hearing Tests", desc: "Comprehensive audiological evaluations", href: "/hearing-tests" },
      { label: "Speech Therapy", desc: "Professional speech-language services", href: "/speech-therapy" },
      { label: "Hearing Aids", desc: "Latest hearing aid technology", href: "/hearing-aids" },
      { label: "Tinnitus Treatment", desc: "Advanced tinnitus management", href: "/tinnitus-treatment" },
    ],
  },
  { label: "Hearing Aids", href: "/hearing-aids" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header>
      {/* Topbar */}
      <div style={{ background: "var(--forest)", color: "#B8CDB4", fontSize: "11.5px", letterSpacing: "0.06em", padding: "7px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <Clock size={12} /> Mon – Sat: 10:00 AM – 7:30 PM
          </span>
          <span style={{ width: "1px", height: "12px", background: "rgba(255,255,255,0.15)" }} />
          <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <MapPin size={12} />
            <Link href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x3bae152b5f787543:0x32fcd6ff153aaa20" style={{ color: "inherit", textDecoration: "none" }}>
              2nd Floor, 121, 6th C Main Rd, Jayanagar, Bengaluru – 560011
            </Link>
          </span>
        </div>
        <a href="tel:+916366638452" style={{ display: "flex", alignItems: "center", gap: "7px", color: "inherit", textDecoration: "none" }}>
          <Phone size={12} /> +91 6366-638452
        </a>
      </div>

      {/* Main nav */}
      <nav style={{
        background: "rgba(250,247,242,0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: "0.5px solid rgba(26,58,42,0.12)",
        padding: "0 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "72px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "11px", textDecoration: "none" }}>
          <div style={{ width: "36px", height: "36px", border: "1.5px solid var(--forest)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="1.5" width={16} height={16}>
              <path d="M12 2a7 7 0 0 1 7 7c0 4-3 7-5 9.5C12.5 20 12 21 12 21s-.5-1-2-2.5C8 16 5 13 5 9a7 7 0 0 1 7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </div>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 600, color: "var(--forest)", letterSpacing: "0.05em" }}>
            Ralas
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex" style={{ alignItems: "center", gap: "4px" }}>
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                style={{ position: "relative" }}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button style={{
                  fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase",
                  color: "var(--text-mid)", background: "none", border: "none",
                  cursor: "pointer", padding: "8px 14px",
                  display: "flex", alignItems: "center", gap: "4px",
                }}>
                  {item.label}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={12} height={12}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      style={{
                        position: "absolute", top: "100%", left: "0",
                        background: "var(--white)",
                        border: "0.5px solid var(--border)",
                        boxShadow: "0 12px 40px rgba(26,58,42,0.1)",
                        width: "480px", padding: "8px",
                        display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px",
                      }}
                    >
                      {item.dropdown.map((sub) => (
                        <Link key={sub.label} href={sub.href}
                          style={{ display: "block", padding: "14px 16px", textDecoration: "none" }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--cream)")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
                        >
                          <div style={{ fontSize: "13.5px", fontWeight: 500, color: "var(--forest)", marginBottom: "3px" }}>{sub.label}</div>
                          <div style={{ fontSize: "12px", fontWeight: 300, color: "var(--text-lt)" }}>{sub.desc}</div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={item.label} href={item.href}
                style={{ fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-mid)", textDecoration: "none", padding: "8px 14px" }}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Right actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <BookAppointment />
          <button className="lg:hidden" onClick={() => setMobileOpen(true)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text)", padding: "4px" }}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 200 }}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: "300px", background: "var(--white)", zIndex: 300, padding: "32px 28px", display: "flex", flexDirection: "column" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 600, color: "var(--forest)" }}>Ralas</span>
                <button onClick={() => setMobileOpen(false)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                  <X size={20} color="var(--text-mid)" />
                </button>
              </div>

              <nav style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Link href="/" onClick={() => setMobileOpen(false)}
                  style={{ display: "block", padding: "12px 0", fontSize: "15px", color: "var(--forest)", textDecoration: "none", borderBottom: "0.5px solid var(--border)" }}>
                  Home
                </Link>
                <div style={{ padding: "12px 0", fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gold)" }}>Services</div>
                {navItems[0].dropdown?.map(({ label, href }) => (
                  <Link key={label} href={href} onClick={() => setMobileOpen(false)}
                    style={{ display: "block", padding: "8px 0 8px 16px", fontSize: "14px", color: "var(--text-mid)", textDecoration: "none" }}>
                    {label}
                  </Link>
                ))}
                {navItems.slice(1).map(({ label, href }) => (
                  <Link key={label} href={href} onClick={() => setMobileOpen(false)}
                    style={{ display: "block", padding: "12px 0", fontSize: "15px", color: "var(--forest)", textDecoration: "none", borderTop: "0.5px solid var(--border)" }}>
                    {label}
                  </Link>
                ))}
              </nav>

              <div style={{ paddingTop: "24px", borderTop: "0.5px solid var(--border)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                  <a href="tel:+916366638452" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--text-mid)", textDecoration: "none" }}>
                    <Phone size={13} color="var(--gold)" /> +91 6366-638452
                  </a>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--text-mid)" }}>
                    <Clock size={13} color="var(--gold)" /> Mon–Sat, 10 AM – 7:30 PM
                  </span>
                </div>
                <BookAppointment fullWidth />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
