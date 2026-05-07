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

interface FormData {
  firstName: string; lastName: string; email: string; phone: string
  service: string; date: Date | undefined; time: string; notes: string
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
    firstName: "", lastName: "", email: "", phone: "",
    service: "", date: undefined, time: "", notes: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(p => ({ ...p, [id]: value }))
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
    } catch (_) { }
    setTimeout(() => {
      setLoading(false); setSuccess(true)
      setTimeout(() => {
        setSuccess(false); setOpen(false); setStep(1)
        setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", date: undefined, time: "", notes: "" })
      }, 2800)
    }, 1400)
  }

  const canProceed =
    step === 1 ? !!(formData.firstName && formData.lastName && formData.email && formData.phone)
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

      {/* ── Modal overlay ── */}
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
                          const done = step > n
                          const active = step === n
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
                              { id: "email" as const, label: "Email Address", type: "email" },
                              { id: "phone" as const, label: "Phone Number", type: "tel" },
                            ]).map(({ id, label, type }) => (
                              <div key={id}>
                                <label htmlFor={id} className="block text-xs tracking-widest uppercase mb-1.5" style={{ color: "var(--text-lt)" }}>
                                  {label}
                                </label>
                                <input id={id} type={type} value={formData[id]} onChange={handleChange}
                                  onFocus={() => setFocused(id)} onBlur={() => setFocused(null)}
                                  className={inputCls(id)} style={{ fontFamily: "'DM Sans', sans-serif" }}
                                />
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

                            {/* Date picker — PopoverContent uses z-[600] to sit above modal */}
                            <div>
                              <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--text-lt)" }}>
                                Preferred Date
                              </label>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <button type="button"
                                    className="w-full flex items-center gap-2.5 px-3.5 py-3 text-sm font-light outline-none cursor-pointer transition-colors bg-[var(--cream)] border border-[rgba(26,58,42,0.18)]"
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                                  >
                                    <CalendarIcon size={13} color="var(--gold)" />
                                    <span style={{ color: formData.date ? "var(--text)" : "var(--text-lt)" }}>
                                      {formData.date ? format(formData.date, "EEEE, d MMMM yyyy") : "Select a date"}
                                    </span>
                                  </button>
                                </PopoverTrigger>
                                {/* z-[600] ensures calendar renders above the z-[500] modal */}
                                <PopoverContent
                                  className="w-full p-0 rounded-none z-[600] "
                                  style={{ border: "0.5px solid rgba(26,58,42,0.15)" }}
                                  align="start"
                                  sideOffset={4}
                                >
                                  <Calendar
                                    mode="single"
                                    selected={formData.date}
                                    onSelect={(d) => setFormData(p => ({ ...p, date: d }))}
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

                      {/* Nav buttons */}
                      <div className="flex justify-between items-center mt-8 pt-5" style={{ borderTop: "0.5px solid rgba(26,58,42,0.1)" }}>
                        {step > 1 ? (
                          <button type="button" onClick={() => setStep(p => p - 1)}
                            className="flex items-center gap-1.5 text-xs tracking-widest uppercase bg-transparent border-none cursor-pointer"
                            style={{ color: "var(--text-mid)", fontFamily: "'DM Sans', sans-serif" }}
                          >
                            <ChevronLeft size={13} /> Back
                          </button>
                        ) : <div />}

                        {step < 3 ? (
                          <button type="button" onClick={() => setStep(p => p + 1)} disabled={!canProceed}
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

      <style>{`
        input::placeholder, textarea::placeholder { color: var(--text-lt); opacity: 1; font-family: 'DM Sans', sans-serif; }
      `}</style>
    </>
  )
}