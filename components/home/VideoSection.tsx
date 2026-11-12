"use client"

import { motion } from "framer-motion"
import { Phone, Clock, MapPin, MessageCircle } from "lucide-react"
import { BookAppointment } from "@/components/Bookappointment"

const hours = [
  { day: "Monday – Friday", time: "10:00 AM – 7:30 PM" },
  { day: "Saturday", time: "10:00 AM – 7:30 PM" },
  { day: "Sunday", time: "Closed" },
]

const highlights = [
  {
    num: "2+",
    label: "Years of expertise",
    desc: "Serving Bengaluru families since 2023",
  },
  {
    num: "1,200+",
    label: "Patients helped",
    desc: "Across all age groups and hearing profiles",
  },
  {
    num: "30-day",
    label: "Return guarantee",
    desc: "Try your hearing aid at home, risk-free",
  },
]

export default function VideoSection() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-12" style={{ background: "var(--cream-dk)" }}>
      <div className="max-w-[1200px] mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex items-center gap-2.5 mb-10 text-xs tracking-[0.2em] uppercase"
          style={{ color: "var(--gold)" }}
        >
          <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
          Visit Us
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px" style={{ background: "rgba(26,58,42,0.07)" }}>

          {/* ── Left: Location card ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 flex flex-col justify-between gap-10"
            style={{ background: "var(--forest)" }}
          >
            <div>
              <h2
                className="font-light text-white leading-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,4vw,44px)", lineHeight: 1.15 }}
              >
                Come see us<br />in Jayanagar
              </h2>
              <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Our clinic is equipped with soundproofed audiometry booths, the latest diagnostic equipment, and a full range of hearing aids from leading brands — all under one roof in central Bengaluru.
              </p>
            </div>

            {/* Address + phone */}
            <div className="flex flex-col gap-5">
              <a
                href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x3bae152b5f787543:0x32fcd6ff153aaa20"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 no-underline group"
                style={{ textDecoration: "none" }}
              >
                <MapPin size={15} color="var(--gold)" className="flex-shrink-0 mt-0.5" />
                <span
                  className="text-sm font-light leading-relaxed group-hover:opacity-80 transition-opacity"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  2nd Floor, 121, 6th C Main Road,<br />4th Block, Jayanagar,<br />Bengaluru, Karnataka – 560011
                </span>
              </a>

              <a
                href="tel:+916366638452"
                className="flex items-center gap-3 no-underline"
                style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}
              >
                <Phone size={14} color="var(--gold)" />
                <span className="text-sm font-light">+91 6366-638452</span>
              </a>

              <a
                href={`https://wa.me/916366638452?text=${encodeURIComponent("Hello, I'd like to book an appointment at Ralas Hearing Clinic.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 no-underline"
                style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}
              >
                <MessageCircle size={14} color="#25D366" />
                <span className="text-sm font-light">WhatsApp us</span>
              </a>
            </div>

            {/* Hours */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs tracking-widest uppercase" style={{ color: "var(--gold)" }}>
                <Clock size={12} color="var(--gold)" />
                Clinic Hours
              </div>
              <div className="flex flex-col gap-2.5">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex items-center justify-between gap-4">
                    <span className="text-xs font-light" style={{ color: "rgba(255,255,255,0.45)" }}>{day}</span>
                    <span
                      className="text-xs font-light"
                      style={{ color: time === "Closed" ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.75)" }}
                    >
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <BookAppointment />
              <a
                href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x3bae152b5f787543:0x32fcd6ff153aaa20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium tracking-widest uppercase px-6 py-3.5 no-underline"
                style={{ border: "0.5px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.75)", textDecoration: "none" }}
              >
                Get Directions →
              </a>
            </div>
          </motion.div>

          {/* ── Right: Highlights ── */}
          <div className="flex flex-col gap-px" style={{ background: "rgba(26,58,42,0.07)" }}>
            {highlights.map(({ num, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="flex-1 p-8 md:p-10 flex flex-col justify-center"
                style={{ background: "var(--white)" }}
              >
                <div
                  className="font-light leading-none mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px,5vw,60px)", color: "var(--gold)" }}
                >
                  {num}
                </div>
                <div className="text-sm font-medium mb-1" style={{ color: "var(--forest)" }}>{label}</div>
                <div className="text-xs font-light" style={{ color: "var(--text-lt)" }}>{desc}</div>
              </motion.div>
            ))}

            {/* Map link card */}
            <motion.a
              href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x3bae152b5f787543:0x32fcd6ff153aaa20"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="flex items-center justify-between p-7 md:p-8 no-underline group"
              style={{ background: "var(--cream)", textDecoration: "none" }}
            >
              <div>
                <div className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>Directions</div>
                <div className="text-sm font-light" style={{ color: "var(--text-mid)" }}>4th Block, Jayanagar · Google Maps →</div>
              </div>
              <MapPin size={20} color="var(--forest)" className="flex-shrink-0 group-hover:scale-110 transition-transform" />
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  )
}
