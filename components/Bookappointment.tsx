"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X, CalendarIcon, CheckCircle, ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^[6-9]\d{9}$/

function validateEmail(v: string) {
  if (!v) return "Email is required"
  if (!EMAIL_RE.test(v.trim())) return "Enter a valid email address"
  return ""
}
function validatePhone(v: string) {
  if (!v) return "Phone number is required"
  const digits = v.replace(/[\s\-+]/g, "")
  const mobile = digits.startsWith("91") ? digits.slice(2) : digits
  if (!PHONE_RE.test(mobile)) return "Enter a valid 10-digit Indian mobile number"
  return ""
}

const services = [
  { value: "hearing-test", label: "Hearing Test" },
  { value: "speech-therapy", label: "Speech Therapy" },
  { value: "hearing-aid-fitting", label: "Hearing Aid Fitting" },
  { value: "tinnitus-treatment", label: "Tinnitus Treatment" },
  { value: "language-therapy", label: "Language Therapy" },
  { value: "consultation", label: "Initial Consultation" },
]

const timeSlots = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "5:00 PM",
]

const steps = ["Personal Details", "Service & Schedule", "Confirm"]

interface FormData {
  firstName: string; lastName: string; email: string; phone: string
  service: string; date: Date | undefined; time: string; notes: string
  _honeypot: string
}

interface BookAppointmentProps {
  fullWidth?: boolean
  variant?: "gold" | "outline"
}

export function BookAppointment({ fullWidth = false, variant = "gold" }: BookAppointmentProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [displayStep, setDisplayStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [calOpen, setCalOpen] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState({ email: "", phone: "" })
  const [formData, setFormData] = useState<FormData>({
    firstName: "", lastName: "", email: "", phone: "",
    service: "", date: undefined, time: "", notes: "", _honeypot: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(p => ({ ...p, [id]: value }))
    if (id === "email" || id === "phone") setFieldErrors(prev => ({ ...prev, [id]: "" }))
  }

  const handleFieldBlur = (field: "email" | "phone") => {
    setFocused(null)
    setFieldErrors(prev => ({
      ...prev,
      [field]: field === "email" ? validateEmail(formData[field]) : validatePhone(formData[field]),
    }))
  }

  const handleSubmit = async () => {
    setLoading(true)
    setSubmitError(null)
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          date: formData.date ? format(formData.date, "yyyy-MM-dd") : undefined,
        }),
      })
      if (!res.ok) throw new Error("server")
      setLoading(false)
      if (typeof window !== 'undefined') (window as any).gtag?.('event', 'generate_lead', { event_category: 'engagement', event_label: 'book_appointment' })
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false); setOpen(false); setStep(1); setDisplayStep(1)
        setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", date: undefined, time: "", notes: "", _honeypot: "" })
      }, 2800)
    } catch (_) {
      setLoading(false)
      setSubmitError("Something went wrong. Please call us at +91 6366-638452.")
    }
  }

  const canProceed =
    step === 1
      ? !!(formData.firstName && formData.lastName && formData.email && formData.phone)
        && !validateEmail(formData.email) && !validatePhone(formData.phone)
      : step === 2 ? !!(formData.service && formData.date && formData.time)
        : true

  const inputCls = (id: string) =>
    `w-full px-3.5 py-3 text-sm font-light outline-none transition-colors duration-200 bg-[var(--cream)] border ${focused === id ? "border-[var(--gold)]" : "border-[rgba(26,58,42,0.18)]"
    }`

  return (
    <>
      {/* ── Trigger button ── */}
      <button
        onClick={() => setOpen(true)}
        className={`text-xs font-medium tracking-widest uppercase cursor-pointer transition-all duration-200 hover:-translate-y-px whitespace-nowrap ${fullWidth ? "w-full" : ""}`}
        style={{
          background: variant === "gold" ? "var(--gold)" : "transparent",
          color: "var(--forest)",
          border: variant === "outline" ? "1px solid var(--forest)" : "none",
          padding: "10px 22px",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        Book Appointment
      </button>

      {/* ── Modal overlay — rendered via portal so fixed positioning is never broken by parent transforms ── */}
      {mounted && createPortal(
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => !loading && setOpen(false)}
            className="fixed inset-0 z-[500] flex items-center justify-center p-4"
            style={{ background: "rgba(10,20,14,0.6)", backdropFilter: "blur(4px)" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[520px] overflow-hidden overflow-y-auto"
              style={{ background: "var(--white)", maxHeight: "90svh" }}
            >
              <AnimatePresence mode="wait">

                {/* ── SUCCESS ── */}
                {success ? (
                  <motion.div key="success"
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center px-8 py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                      style={{ border: "1px solid rgba(107,175,124,0.35)", background: "rgba(107,175,124,0.07)" }}>
                      <CheckCircle size={28} color="#6BAF7C" strokeWidth={1.5} />
                    </div>
                    <div className="font-light mb-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", color: "var(--forest)" }}>
                      Appointment Requested
                    </div>
                    <p className="text-sm font-light leading-relaxed max-w-[280px]" style={{ color: "var(--text-mid)" }}>
                      We'll confirm your slot within 2 hours during clinic hours and send a confirmation to{" "}
                      <strong className="font-medium">{formData.email}</strong>.
                    </p>
                    <div className="mt-7 w-10 h-px" style={{ background: "var(--gold)" }} />
                  </motion.div>

                ) : (
                  /* ── FORM ── */
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

                    {/* Header */}
                    <div className="relative px-6 md:px-8 pt-6 pb-5" style={{ background: "var(--forest)" }}>
                      <div className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "var(--gold)" }}>
                        Ralas Hearing Clinic
                      </div>
                      <div className="font-light text-white mb-5" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px" }}>
                        Book an Appointment
                      </div>

                      {/* Step tracker */}
                      <div className="flex items-start">
                        {steps.map((label, i) => {
                          const n = i + 1
                          const done = displayStep > n
                          const active = displayStep === n
                          return (
                            <div key={label} className="flex items-center" style={{ flex: i < steps.length - 1 ? 1 : "none" }}>
                              <div className="flex flex-col items-center gap-1.5">
                                <div
                                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300"
                                  style={{
                                    border: `1px solid ${done ? "var(--gold)" : active ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.2)"}`,
                                    background: done ? "var(--gold)" : active ? "rgba(255,255,255,0.1)" : "transparent",
                                    color: done ? "var(--forest)" : active ? "white" : "rgba(255,255,255,0.35)",
                                  }}
                                >
                                  {done ? "✓" : n}
                                </div>
                                <div
                                  className="text-[9px] tracking-wider uppercase whitespace-nowrap"
                                  style={{ color: active ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.28)" }}
                                >
                                  {label}
                                </div>
                              </div>
                              {i < steps.length - 1 && (
                                <div className="flex-1 h-px mx-2.5 mb-5 transition-colors duration-300"
                                  style={{ background: done ? "var(--gold)" : "rgba(255,255,255,0.12)" }} />
                              )}
                            </div>
                          )
                        })}
                      </div>

                      {/* Close */}
                      <button onClick={() => setOpen(false)}
                        className="absolute top-4 right-4 p-1 bg-transparent border-none cursor-pointer"
                        style={{ color: "rgba(255,255,255,0.45)" }}>
                        <X size={17} />
                      </button>
                    </div>

                    {/* Form body */}
                    <div className="px-6 md:px-8 py-7">
                      <AnimatePresence mode="wait">

                        {/* Step 1 */}
                        {step === 1 && (
                          <motion.div key="s1"
                            initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col gap-4"
                          >
                            <div className="font-normal mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "21px", color: "var(--forest)" }}>
                              Personal Information
                            </div>
                            {/* Name row — 1 col on mobile, 2 col on sm */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {(["firstName", "lastName"] as const).map((id) => (
                                <div key={id}>
                                  <label htmlFor={id} className="block text-xs tracking-widest uppercase mb-1.5" style={{ color: "var(--text-lt)" }}>
                                    {id === "firstName" ? "First Name" : "Last Name"}
                                  </label>
                                  <input id={id} type="text" value={formData[id]} onChange={handleChange}
                                    onFocus={() => setFocused(id)} onBlur={() => setFocused(null)}
                                    className={inputCls(id)} style={{ fontFamily: "'DM Sans', sans-serif" }}
                                  />
                                </div>
                              ))}
                            </div>
                            {([
                              { id: "email" as const, label: "Email Address", type: "email", placeholder: "you@email.com" },
                              { id: "phone" as const, label: "Phone Number", type: "tel", placeholder: "10-digit mobile number" },
                            ]).map(({ id, label, type, placeholder }) => (
                              <div key={id}>
                                <label htmlFor={id} className="block text-xs tracking-widest uppercase mb-1.5" style={{ color: "var(--text-lt)" }}>
                                  {label} <span style={{ color: "#dc2626" }}>*</span>
                                </label>
                                <input id={id} type={type} value={formData[id]} onChange={handleChange}
                                  placeholder={placeholder}
                                  onFocus={() => setFocused(id)}
                                  onBlur={() => handleFieldBlur(id)}
                                  className={inputCls(id).replace(
                                    "border-[rgba(26,58,42,0.18)]",
                                    fieldErrors[id] ? "border-red-400" : "border-[rgba(26,58,42,0.18)]"
                                  )}
                                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                                />
                                {fieldErrors[id] && (
                                  <p className="mt-1 text-xs font-light" style={{ color: "#dc2626" }}>{fieldErrors[id]}</p>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}

                        {/* Step 2 */}
                        {step === 2 && (
                          <motion.div key="s2"
                            initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col gap-5"
                          >
                            <div className="font-normal mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "21px", color: "var(--forest)" }}>
                              Service & Schedule
                            </div>

                            {/* Services */}
                            <div>
                              <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--text-lt)" }}>
                                Service Type
                              </label>
                              <div className="grid grid-cols-2 gap-1.5">
                                {services.map(({ value, label }) => {
                                  const sel = formData.service === value
                                  return (
                                    <button key={value} type="button"
                                      onClick={() => setFormData(p => ({ ...p, service: value }))}
                                      className="text-left px-3 py-2.5 text-xs cursor-pointer transition-all duration-200"
                                      style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: sel ? 500 : 300,
                                        background: sel ? "var(--forest)" : "var(--cream)",
                                        color: sel ? "white" : "var(--text-mid)",
                                        border: `0.5px solid ${sel ? "var(--forest)" : "rgba(26,58,42,0.15)"}`,
                                      }}
                                    >
                                      {label}
                                    </button>
                                  )
                                })}
                              </div>
                            </div>

                            {/* Date picker — inline toggle, scrolls into view on open */}
                            <div>
                              <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--text-lt)" }}>
                                Preferred Date
                              </label>
                              <button type="button"
                                onClick={() => setCalOpen(p => !p)}
                                className="w-full flex items-center gap-2.5 px-3.5 py-3 text-sm font-light outline-none cursor-pointer transition-colors bg-[var(--cream)] border border-[rgba(26,58,42,0.18)]"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                              >
                                <CalendarIcon size={13} color="var(--gold)" />
                                <span style={{ color: formData.date ? "var(--text)" : "var(--text-lt)" }}>
                                  {formData.date ? format(formData.date, "EEEE, d MMMM yyyy") : "Select a date"}
                                </span>
                              </button>
                              {calOpen && (
                                <div ref={(el) => { if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "nearest" }), 50) }}
                                  style={{ border: "0.5px solid rgba(26,58,42,0.15)", borderTop: "none" }}>
                                  <Calendar
                                    mode="single"
                                    selected={formData.date}
                                    onSelect={(d) => { setFormData(p => ({ ...p, date: d })); setCalOpen(false); }}
                                    disabled={(date) => {
                                      const day = date.getDay()
                                      const today = new Date(); today.setHours(0, 0, 0, 0)
                                      return day === 0 || date < today
                                    }}
                                  />
                                </div>
                              )}
                            </div>

                            {/* Time slots */}
                            <div>
                              <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--text-lt)" }}>
                                Preferred Time
                              </label>
                              <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
                                {timeSlots.map((slot) => {
                                  const sel = formData.time === slot
                                  return (
                                    <button key={slot} type="button"
                                      onClick={() => setFormData(p => ({ ...p, time: slot }))}
                                      className="py-2 text-xs cursor-pointer transition-all duration-200 text-center"
                                      style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: sel ? 500 : 300,
                                        background: sel ? "var(--forest)" : "var(--cream)",
                                        color: sel ? "white" : "var(--text-mid)",
                                        border: `0.5px solid ${sel ? "var(--forest)" : "rgba(26,58,42,0.15)"}`,
                                      }}
                                    >
                                      {slot}
                                    </button>
                                  )
                                })}
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Step 3 */}
                        {step === 3 && (
                          <motion.div key="s3"
                            initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col gap-5"
                          >
                            <div className="font-normal mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "21px", color: "var(--forest)" }}>
                              Confirm & Notes
                            </div>

                            <div>
                              <label htmlFor="notes" className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--text-lt)" }}>
                                Special Requests <span className="normal-case tracking-normal text-xs font-light" style={{ color: "var(--text-lt)" }}>(optional)</span>
                              </label>
                              <textarea id="notes" rows={3}
                                placeholder="Share any specific concerns, mobility requirements, or questions…"
                                value={formData.notes} onChange={handleChange}
                                onKeyDown={(e) => e.stopPropagation()}
                                onFocus={() => setFocused("notes")} onBlur={() => setFocused(null)}
                                className={`${inputCls("notes")} resize-none leading-relaxed`}
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                              />
                            </div>

                            {/* Summary */}
                            <div className="p-5" style={{ background: "var(--cream)", border: "0.5px solid rgba(26,58,42,0.1)" }}>
                              <div className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>
                                Appointment Summary
                              </div>
                              {[
                                { label: "Patient", val: `${formData.firstName} ${formData.lastName}` },
                                { label: "Contact", val: formData.phone },
                                { label: "Service", val: services.find(s => s.value === formData.service)?.label ?? "—" },
                                { label: "Date", val: formData.date ? format(formData.date, "EEEE, d MMMM yyyy") : "—" },
                                { label: "Time", val: formData.time || "—" },
                              ].map(({ label, val }) => (
                                <div key={label} className="flex justify-between items-start py-1.5" style={{ borderBottom: "0.5px solid rgba(26,58,42,0.07)" }}>
                                  <span className="text-xs" style={{ color: "var(--text-lt)" }}>{label}</span>
                                  <span className="text-sm font-normal text-right" style={{ color: "var(--forest)" }}>{val}</span>
                                </div>
                              ))}
                            </div>

                            <p className="text-xs font-light leading-relaxed" style={{ color: "var(--text-lt)" }}>
                              By confirming, you agree that Ralas may contact you to confirm or reschedule this appointment.
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Honeypot — hidden from humans, bots fill it in */}
                      <div style={{ position: "absolute", left: "-9999px", top: 0 }} aria-hidden="true" tabIndex={-1}>
                        <label htmlFor="_hp_appt">Leave this empty</label>
                        <input id="_hp_appt" type="text" name="_honeypot"
                          value={formData._honeypot}
                          onChange={e => setFormData(p => ({ ...p, _honeypot: e.target.value }))}
                          autoComplete="off" tabIndex={-1}
                        />
                      </div>

                      {/* Error message */}
                      {submitError && (
                        <div className="mt-5 px-4 py-3 text-sm font-light" style={{ background: "rgba(220,38,38,0.07)", border: "0.5px solid rgba(220,38,38,0.25)", color: "#b91c1c" }}>
                          {submitError}
                        </div>
                      )}

                      {/* Nav buttons */}
                      <div className="flex justify-between items-center mt-8 pt-5" style={{ borderTop: "0.5px solid rgba(26,58,42,0.1)" }}>
                        {step > 1 ? (
                          <button type="button" onClick={() => { setStep(p => p - 1); setDisplayStep(p => p - 1) }}
                            className="flex items-center gap-1.5 text-xs tracking-widest uppercase bg-transparent border-none cursor-pointer"
                            style={{ color: "var(--text-mid)", fontFamily: "'DM Sans', sans-serif" }}
                          >
                            <ChevronLeft size={13} /> Back
                          </button>
                        ) : <div />}

                        {step < 3 ? (
                          <button type="button" onClick={() => { setStep(p => p + 1); setTimeout(() => setDisplayStep(p => p + 1), 180) }} disabled={!canProceed}
                            className="flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase px-6 py-3 border-none transition-colors duration-200"
                            style={{
                              background: canProceed ? "var(--gold)" : "rgba(26,58,42,0.07)",
                              color: canProceed ? "var(--forest)" : "var(--text-lt)",
                              cursor: canProceed ? "pointer" : "not-allowed",
                              fontFamily: "'DM Sans', sans-serif",
                            }}
                          >
                            Continue <ChevronRight size={13} />
                          </button>
                        ) : (
                          <button type="button" onClick={handleSubmit} disabled={loading}
                            className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase px-6 py-3 border-none text-white transition-colors duration-200"
                            style={{
                              background: "var(--forest)",
                              cursor: loading ? "wait" : "pointer",
                              fontFamily: "'DM Sans', sans-serif",
                            }}
                          >
                            {loading
                              ? <><Loader2 size={13} className="animate-spin" /> Processing…</>
                              : <>Confirm Appointment</>
                            }
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      , document.body)}

      <style>{`
        input::placeholder, textarea::placeholder { color: var(--text-lt); opacity: 1; font-family: 'DM Sans', sans-serif; }
      `}</style>
    </>
  )
}