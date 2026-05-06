"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CalendarIcon, CheckCircle, ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

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

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  fontSize: "14px",
  fontWeight: 300,
  fontFamily: "'DM Sans', sans-serif",
  color: "var(--text)",
  background: "var(--cream)",
  border: "0.5px solid rgba(26,58,42,0.18)",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "10.5px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "var(--text-lt)",
  marginBottom: "7px",
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  date: Date | undefined
  time: string
  notes: string
}

interface BookAppointmentProps {
  fullWidth?: boolean
  variant?: "gold" | "outline"
}

export function BookAppointment({ fullWidth = false, variant = "gold" }: BookAppointmentProps) {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({
    firstName: "", lastName: "", email: "",
    phone: "", service: "", date: undefined,
    time: "", notes: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
    } catch (_) {}
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
        setOpen(false)
        setStep(1)
        setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", date: undefined, time: "", notes: "" })
      }, 2800)
    }, 1400)
  }

  const canProceed =
    step === 1 ? !!(formData.firstName && formData.lastName && formData.email && formData.phone)
    : step === 2 ? !!(formData.service && formData.date && formData.time)
    : true

  return (
    <>
      {/* ── Trigger ── */}
      <button
        onClick={() => setOpen(true)}
        style={{
          background: variant === "gold" ? "var(--gold)" : "transparent",
          color: "var(--forest)",
          border: variant === "outline" ? "1px solid var(--forest)" : "none",
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          fontFamily: "'DM Sans', sans-serif",
          padding: "10px 22px",
          cursor: "pointer",
          transition: "background 0.2s, transform 0.15s",
          width: fullWidth ? "100%" : "auto",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = variant === "gold" ? "#D4B560" : "rgba(26,58,42,0.06)"
          e.currentTarget.style.transform = "translateY(-1px)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = variant === "gold" ? "var(--gold)" : "transparent"
          e.currentTarget.style.transform = "none"
        }}
      >
        Book Appointment
      </button>

      {/* ── Modal ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !loading && setOpen(false)}
            style={{
              position: "fixed", inset: 0,
              background: "rgba(10,20,14,0.6)",
              backdropFilter: "blur(4px)",
              zIndex: 500,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "var(--white)",
                width: "100%",
                maxWidth: "520px",
                overflow: "hidden",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
            >
              <AnimatePresence mode="wait">

                {/* ── SUCCESS ── */}
                {success ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      display: "flex", flexDirection: "column",
                      alignItems: "center", justifyContent: "center",
                      padding: "64px 48px", textAlign: "center",
                    }}
                  >
                    <div style={{
                      width: "68px", height: "68px",
                      border: "1px solid rgba(107,175,124,0.35)",
                      borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "24px",
                      background: "rgba(107,175,124,0.07)",
                    }}>
                      <CheckCircle size={28} color="#6BAF7C" strokeWidth={1.5} />
                    </div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: 300, color: "var(--forest)", marginBottom: "12px" }}>
                      Appointment Requested
                    </div>
                    <p style={{ fontSize: "14px", fontWeight: 300, color: "var(--text-mid)", lineHeight: 1.75, maxWidth: "300px" }}>
                      We'll confirm your slot within 2 hours during clinic hours and send a confirmation to <strong style={{ fontWeight: 500 }}>{formData.email}</strong>.
                    </p>
                    <div style={{ marginTop: "28px", width: "40px", height: "1.5px", background: "var(--gold)" }} />
                  </motion.div>
                ) : (

                  /* ── FORM ── */
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

                    {/* Modal header */}
                    <div style={{ background: "var(--forest)", padding: "28px 32px 26px", position: "relative" }}>
                      <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "5px" }}>
                        Ralas Hearing Clinic
                      </div>
                      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", fontWeight: 300, color: "white", marginBottom: "22px" }}>
                        Book an Appointment
                      </div>

                      {/* Step tracker */}
                      <div style={{ display: "flex", alignItems: "flex-start" }}>
                        {steps.map((label, i) => {
                          const n = i + 1
                          const done = step > n
                          const active = step === n
                          return (
                            <div key={label} style={{ display: "flex", alignItems: "center", flex: i < steps.length - 1 ? 1 : "none" }}>
                              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                                <div style={{
                                  width: "26px", height: "26px", borderRadius: "50%",
                                  border: `1px solid ${done ? "var(--gold)" : active ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.2)"}`,
                                  background: done ? "var(--gold)" : active ? "rgba(255,255,255,0.1)" : "transparent",
                                  display: "flex", alignItems: "center", justifyContent: "center",
                                  fontSize: "11px", fontWeight: 500,
                                  color: done ? "var(--forest)" : active ? "white" : "rgba(255,255,255,0.35)",
                                  transition: "all 0.3s",
                                }}>
                                  {done ? "✓" : n}
                                </div>
                                <div style={{
                                  fontSize: "9.5px", letterSpacing: "0.07em", textTransform: "uppercase",
                                  color: active ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.28)",
                                  whiteSpace: "nowrap",
                                }}>
                                  {label}
                                </div>
                              </div>
                              {i < steps.length - 1 && (
                                <div style={{
                                  flex: 1, height: "0.5px",
                                  background: done ? "var(--gold)" : "rgba(255,255,255,0.12)",
                                  margin: "0 10px", marginBottom: "22px",
                                  transition: "background 0.3s",
                                }} />
                              )}
                            </div>
                          )
                        })}
                      </div>

                      {/* Close */}
                      <button
                        onClick={() => setOpen(false)}
                        style={{ position: "absolute", top: "18px", right: "20px", background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.45)", padding: "4px" }}
                      >
                        <X size={17} />
                      </button>
                    </div>

                    {/* Form body */}
                    <div style={{ padding: "36px 32px" }}>
                      <AnimatePresence mode="wait">

                        {/* Step 1 — Personal */}
                        {step === 1 && (
                          <motion.div key="s1"
                            initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }}
                            transition={{ duration: 0.2 }}
                            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
                          >
                            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "21px", fontWeight: 400, color: "var(--forest)", marginBottom: "2px" }}>
                              Personal Information
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                              {(["firstName", "lastName"] as const).map((id) => (
                                <div key={id}>
                                  <label htmlFor={id} style={labelStyle}>{id === "firstName" ? "First Name" : "Last Name"}</label>
                                  <input id={id} type="text" value={formData[id]} onChange={handleChange}
                                    onFocus={() => setFocused(id)} onBlur={() => setFocused(null)}
                                    style={{ ...inputStyle, borderColor: focused === id ? "var(--gold)" : "rgba(26,58,42,0.18)" }}
                                  />
                                </div>
                              ))}
                            </div>
                            {([
                              { id: "email" as const, label: "Email Address", type: "email" },
                              { id: "phone" as const, label: "Phone Number", type: "tel" },
                            ]).map(({ id, label, type }) => (
                              <div key={id}>
                                <label htmlFor={id} style={labelStyle}>{label}</label>
                                <input id={id} type={type} value={formData[id]} onChange={handleChange}
                                  onFocus={() => setFocused(id)} onBlur={() => setFocused(null)}
                                  style={{ ...inputStyle, borderColor: focused === id ? "var(--gold)" : "rgba(26,58,42,0.18)" }}
                                />
                              </div>
                            ))}
                          </motion.div>
                        )}

                        {/* Step 2 — Service & Schedule */}
                        {step === 2 && (
                          <motion.div key="s2"
                            initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }}
                            transition={{ duration: 0.2 }}
                            style={{ display: "flex", flexDirection: "column", gap: "22px" }}
                          >
                            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "21px", fontWeight: 400, color: "var(--forest)", marginBottom: "2px" }}>
                              Service & Schedule
                            </div>

                            {/* Service buttons */}
                            <div>
                              <label style={labelStyle}>Service Type</label>
                              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                                {services.map(({ value, label }) => {
                                  const sel = formData.service === value
                                  return (
                                    <button key={value} type="button"
                                      onClick={() => setFormData(p => ({ ...p, service: value }))}
                                      style={{
                                        padding: "11px 14px", fontSize: "13px", fontWeight: sel ? 500 : 300,
                                        fontFamily: "'DM Sans', sans-serif", textAlign: "left", cursor: "pointer",
                                        background: sel ? "var(--forest)" : "var(--cream)",
                                        color: sel ? "white" : "var(--text-mid)",
                                        border: `0.5px solid ${sel ? "var(--forest)" : "rgba(26,58,42,0.15)"}`,
                                        transition: "all 0.18s",
                                      }}
                                    >
                                      {label}
                                    </button>
                                  )
                                })}
                              </div>
                            </div>

                            {/* Date */}
                            <div>
                              <label style={labelStyle}>Preferred Date</label>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <button type="button" style={{ ...inputStyle, display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                                    <CalendarIcon size={13} color="var(--gold)" />
                                    <span style={{ color: formData.date ? "var(--text)" : "var(--text-lt)", fontWeight: 300 }}>
                                      {formData.date ? format(formData.date, "EEEE, d MMMM yyyy") : "Select a date"}
                                    </span>
                                  </button>
                                </PopoverTrigger>
                                <PopoverContent style={{ width: "auto", padding: 0, border: "0.5px solid rgba(26,58,42,0.15)", borderRadius: 0 }} align="start">
                                  <Calendar mode="single" selected={formData.date}
                                    onSelect={(d) => setFormData(p => ({ ...p, date: d }))}
                                    initialFocus
                                    disabled={(date) => {
                                      const day = date.getDay()
                                      const today = new Date(); today.setHours(0, 0, 0, 0)
                                      return day === 0 || date < today
                                    }}
                                  />
                                </PopoverContent>
                              </Popover>
                            </div>

                            {/* Time slots */}
                            <div>
                              <label style={labelStyle}>Preferred Time</label>
                              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px" }}>
                                {timeSlots.map((slot) => {
                                  const sel = formData.time === slot
                                  return (
                                    <button key={slot} type="button"
                                      onClick={() => setFormData(p => ({ ...p, time: slot }))}
                                      style={{
                                        padding: "9px 4px", fontSize: "12px", fontFamily: "'DM Sans', sans-serif",
                                        cursor: "pointer", textAlign: "center",
                                        background: sel ? "var(--forest)" : "var(--cream)",
                                        color: sel ? "white" : "var(--text-mid)",
                                        border: `0.5px solid ${sel ? "var(--forest)" : "rgba(26,58,42,0.15)"}`,
                                        fontWeight: sel ? 500 : 300,
                                        transition: "all 0.18s",
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

                        {/* Step 3 — Confirm */}
                        {step === 3 && (
                          <motion.div key="s3"
                            initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }}
                            transition={{ duration: 0.2 }}
                            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
                          >
                            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "21px", fontWeight: 400, color: "var(--forest)", marginBottom: "2px" }}>
                              Confirm & Notes
                            </div>

                            {/* Notes */}
                            <div>
                              <label htmlFor="notes" style={labelStyle}>
                                Special Requests{" "}
                                <span style={{ color: "var(--text-lt)", fontWeight: 300, letterSpacing: 0, textTransform: "none", fontSize: "11px" }}>(optional)</span>
                              </label>
                              <textarea id="notes" rows={3}
                                placeholder="Share any specific concerns, mobility requirements, or questions…"
                                value={formData.notes} onChange={handleChange}
                                onKeyDown={(e) => e.stopPropagation()}
                                onFocus={() => setFocused("notes")} onBlur={() => setFocused(null)}
                                style={{ ...inputStyle, resize: "none", lineHeight: 1.65, borderColor: focused === "notes" ? "var(--gold)" : "rgba(26,58,42,0.18)" }}
                              />
                            </div>

                            {/* Summary */}
                            <div style={{ background: "var(--cream)", border: "0.5px solid rgba(26,58,42,0.1)", padding: "22px 24px" }}>
                              <div style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px" }}>
                                Appointment Summary
                              </div>
                              {[
                                { label: "Patient", val: `${formData.firstName} ${formData.lastName}` },
                                { label: "Contact", val: formData.phone },
                                { label: "Service", val: services.find(s => s.value === formData.service)?.label ?? "—" },
                                { label: "Date", val: formData.date ? format(formData.date, "EEEE, d MMMM yyyy") : "—" },
                                { label: "Time", val: formData.time || "—" },
                              ].map(({ label, val }) => (
                                <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "7px 0", borderBottom: "0.5px solid rgba(26,58,42,0.07)" }}>
                                  <span style={{ fontSize: "11.5px", color: "var(--text-lt)" }}>{label}</span>
                                  <span style={{ fontSize: "13px", fontWeight: 400, color: "var(--forest)", textAlign: "right" }}>{val}</span>
                                </div>
                              ))}
                            </div>

                            <p style={{ fontSize: "11.5px", color: "var(--text-lt)", lineHeight: 1.6 }}>
                              By confirming, you agree that Ralas may contact you to confirm or reschedule this appointment.
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Nav buttons */}
                      <div style={{
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        marginTop: "32px", paddingTop: "24px",
                        borderTop: "0.5px solid rgba(26,58,42,0.1)",
                      }}>
                        {step > 1 ? (
                          <button type="button" onClick={() => setStep(p => p - 1)}
                            style={{
                              display: "flex", alignItems: "center", gap: "5px",
                              fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase",
                              color: "var(--text-mid)", background: "none", border: "none", cursor: "pointer",
                              fontFamily: "'DM Sans', sans-serif",
                            }}
                          >
                            <ChevronLeft size={13} /> Back
                          </button>
                        ) : <div />}

                        {step < 3 ? (
                          <button type="button" onClick={() => setStep(p => p + 1)} disabled={!canProceed}
                            style={{
                              display: "flex", alignItems: "center", gap: "6px",
                              background: canProceed ? "var(--gold)" : "rgba(26,58,42,0.07)",
                              color: canProceed ? "var(--forest)" : "var(--text-lt)",
                              fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em",
                              textTransform: "uppercase", padding: "12px 28px",
                              border: "none", cursor: canProceed ? "pointer" : "not-allowed",
                              fontFamily: "'DM Sans', sans-serif", transition: "background 0.2s",
                            }}
                          >
                            Continue <ChevronRight size={13} />
                          </button>
                        ) : (
                          <button type="button" onClick={handleSubmit} disabled={loading}
                            style={{
                              display: "flex", alignItems: "center", gap: "8px",
                              background: "var(--forest)", color: "white",
                              fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em",
                              textTransform: "uppercase", padding: "12px 28px",
                              border: "none", cursor: loading ? "wait" : "pointer",
                              fontFamily: "'DM Sans', sans-serif", transition: "background 0.2s",
                            }}
                          >
                            {loading
                              ? <><Loader2 size={13} style={{ animation: "spin 0.8s linear infinite" }} /> Processing…</>
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

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input::placeholder, textarea::placeholder { color: var(--text-lt); opacity: 1; font-family: 'DM Sans', sans-serif; }
      `}</style>
    </>
  )
}
