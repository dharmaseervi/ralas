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

      {/* ── TOPBAR — hidden on mobile ── */}
      <div className="hidden md:flex items-center justify-between px-12 py-2"
        style={{ background: "var(--forest)", color: "#B8CDB4", fontSize: "11.5px", letterSpacing: "0.06em" }}>
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <Clock size={12} /> Mon – Sat: 10:00 AM – 7:30 PM
          </span>
          <span className="w-px h-3" style={{ background: "rgba(255,255,255,0.15)" }} />
          <span className="flex items-center gap-1.5">
            <MapPin size={12} />
            <Link href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x3bae152b5f787543:0x32fcd6ff153aaa20"
              style={{ color: "inherit", textDecoration: "none" }}>
              2nd Floor, 121, 6th C Main Rd, Jayanagar, Bengaluru – 560011
            </Link>
          </span>
        </div>
        <a href="tel:+916366638452" className="flex items-center gap-1.5"
          style={{ color: "inherit", textDecoration: "none" }}>
          <Phone size={12} /> +91 6366-638452
        </a>
      </div>

      {/* ── MAIN NAV ── */}
      <nav className="flex items-center justify-between px-5 md:px-12 h-16 md:h-[72px] sticky top-0 z-[100]"
        style={{
          background: "rgba(250,247,242,0.97)",
          backdropFilter: "blur(12px)",
          borderBottom: "0.5px solid rgba(26,58,42,0.12)",
        }}>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" style={{ textDecoration: "none" }}>
          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ border: "1.5px solid var(--forest)" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="1.5" width={16} height={16}>
              <path d="M12 2a7 7 0 0 1 7 7c0 4-3 7-5 9.5C12.5 20 12 21 12 21s-.5-1-2-2.5C8 16 5 13 5 9a7 7 0 0 1 7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </div>
          <span className="text-xl md:text-2xl font-semibold tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--forest)" }}>
            Ralas
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}>
                <button className="flex items-center gap-1 px-3.5 py-2 text-xs tracking-widest uppercase bg-transparent border-none cursor-pointer"
                  style={{ color: "var(--text-mid)" }}>
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
                      className="absolute top-full left-0 z-50 w-[480px] p-2 grid grid-cols-2 gap-0.5"
                      style={{
                        background: "var(--white)",
                        border: "0.5px solid var(--border)",
                        boxShadow: "0 12px 40px rgba(26,58,42,0.1)",
                      }}>
                      {item.dropdown.map((sub) => (
                        <Link key={sub.label} href={sub.href}
                          className="block p-3.5 transition-colors hover:bg-[var(--cream)]"
                          style={{ textDecoration: "none" }}>
                          <div className="text-sm font-medium mb-0.5" style={{ color: "var(--forest)" }}>{sub.label}</div>
                          <div className="text-xs font-light" style={{ color: "var(--text-lt)" }}>{sub.desc}</div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={item.label} href={item.href}
                className="px-3.5 py-2 text-xs tracking-widest uppercase transition-colors hover:opacity-70"
                style={{ color: "var(--text-mid)", textDecoration: "none" }}>
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Hide Book button on mobile — it's inside the drawer */}
          <div className="hidden sm:block">
            <BookAppointment />
          </div>
          <button className="lg:hidden p-1 bg-transparent border-none cursor-pointer"
            onClick={() => setMobileOpen(true)}
            style={{ color: "var(--text)" }}>
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/40"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-[300] w-[300px] flex flex-col p-7"
              style={{ background: "var(--white)" }}>

              {/* Drawer header */}
              <div className="flex items-center justify-between mb-10">
                <span className="text-xl font-semibold tracking-wide"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--forest)" }}>
                  Ralas
                </span>
                <button onClick={() => setMobileOpen(false)}
                  className="bg-transparent border-none cursor-pointer p-1">
                  <X size={20} color="var(--text-mid)" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 flex flex-col overflow-y-auto">
                <Link href="/" onClick={() => setMobileOpen(false)}
                  className="block py-3 text-base"
                  style={{ color: "var(--forest)", textDecoration: "none", borderBottom: "0.5px solid var(--border)" }}>
                  Home
                </Link>
                <div className="py-3 text-xs tracking-widest uppercase" style={{ color: "var(--gold)" }}>
                  Services
                </div>
                {navItems[0].dropdown?.map(({ label, href }) => (
                  <Link key={label} href={href} onClick={() => setMobileOpen(false)}
                    className="block py-2 pl-4 text-sm"
                    style={{ color: "var(--text-mid)", textDecoration: "none" }}>
                    {label}
                  </Link>
                ))}
                {navItems.slice(1).map(({ label, href }) => (
                  <Link key={label} href={href} onClick={() => setMobileOpen(false)}
                    className="block py-3 text-base"
                    style={{ color: "var(--forest)", textDecoration: "none", borderTop: "0.5px solid var(--border)" }}>
                    {label}
                  </Link>
                ))}
              </nav>

              {/* Contact + CTA */}
              <div className="pt-6" style={{ borderTop: "0.5px solid var(--border)" }}>
                <div className="flex flex-col gap-3 mb-5">
                  <a href="tel:+916366638452"
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "var(--text-mid)", textDecoration: "none" }}>
                    <Phone size={13} color="var(--gold)" /> +91 6366-638452
                  </a>
                  <span className="flex items-center gap-2 text-sm" style={{ color: "var(--text-mid)" }}>
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