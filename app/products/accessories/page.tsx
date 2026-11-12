import NavigationBar from "@/components/home/NavigationBar"
import Footer from "@/components/home/Footer"
import { BookAppointment } from "@/components/Bookappointment"

export const metadata = {
  title: "Hearing Aid Accessories — Batteries, Cleaning Kits & More",
  description: "Shop hearing aid accessories at Ralas Hearing Clinic, Bengaluru. Batteries, cleaning kits, Bluetooth streamers, domes, ear tips and more for Oticon, Phonak, Signia and Widex devices.",
}

const categories = [
  {
    title: "Batteries & Charging",
    items: [
      { name: "Zinc-Air Batteries (Size 10)", detail: "For small ITE & CIC devices · Pack of 60" },
      { name: "Zinc-Air Batteries (Size 312)", detail: "Most common BTE size · Pack of 60" },
      { name: "Zinc-Air Batteries (Size 13)", detail: "High-drain BTE devices · Pack of 40" },
      { name: "Wireless Charging Case", detail: "Compatible with Oticon & Phonak rechargeable aids" },
    ],
  },
  {
    title: "Cleaning & Maintenance",
    items: [
      { name: "Professional Cleaning Kit", detail: "Brush, wire loop, ventilator cleaner & wax pick" },
      { name: "Drying Capsules", detail: "Absorbs moisture — extend device life by 2× " },
      { name: "Electronic Drying Box", detail: "UV-C sanitisation + drying overnight" },
      { name: "Wax Guards (8-pack)", detail: "Cerustop compatible — fits Oticon, Signia & more" },
    ],
  },
  {
    title: "Domes & Ear Tips",
    items: [
      { name: "Open Domes (S / M / L)", detail: "For mild-to-moderate high-frequency loss" },
      { name: "Closed Domes (S / M / L)", detail: "Better bass retention for moderate loss" },
      { name: "Power Domes (S / M / L)", detail: "Sealed fit for severe loss · Less feedback" },
      { name: "Custom Ear Moulds", detail: "Clinic-made · takes 2–3 days · includes impression" },
    ],
  },
  {
    title: "Connectivity & Streaming",
    items: [
      { name: "TV Streamer", detail: "Stream audio from any TV directly to compatible aids" },
      { name: "Phone Clip+", detail: "Hands-free calls and streaming for older Bluetooth aids" },
      { name: "Remote Control", detail: "Adjust volume & programme without touching aids" },
      { name: "ConnectClip (Oticon)", detail: "Microphone + streamer for meetings and calls" },
    ],
  },
]

export default function AccessoriesPage() {
  return (
    <>
      <NavigationBar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-14 md:pb-20 px-5 md:px-12" style={{ background: "var(--forest)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2.5 mb-4 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
            <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
            Products
          </div>
          <h1
            className="font-light text-white leading-tight mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,5vw,64px)", lineHeight: 1.1 }}
          >
            Hearing Aid<br />Accessories
          </h1>
          <p className="text-sm md:text-base font-light leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
            Genuine accessories for Oticon, Phonak, Signia, Widex and ReSound devices. Available in-clinic or by enquiry. Call or WhatsApp us to check availability before visiting.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="tel:+916366638452"
              className="inline-block text-xs font-medium tracking-widest uppercase px-6 py-3.5 no-underline"
              style={{ background: "var(--gold)", color: "var(--forest)", textDecoration: "none" }}
            >
              Call to Enquire
            </a>
            <a
              href={`https://wa.me/916366638452?text=${encodeURIComponent("Hi, I'd like to enquire about hearing aid accessories.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-medium tracking-widest uppercase px-6 py-3.5 no-underline"
              style={{ background: "transparent", color: "rgba(255,255,255,0.75)", border: "0.5px solid rgba(255,255,255,0.3)", textDecoration: "none" }}
            >
              WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 md:py-20 px-5 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(26,58,42,0.07)" }}>
          {categories.map(({ title, items }) => (
            <div key={title} className="p-7 md:p-10" style={{ background: "var(--white)" }}>
              <div className="text-xs tracking-widest uppercase mb-5" style={{ color: "var(--gold)" }}>
                {title}
              </div>
              <div className="flex flex-col gap-3">
                {items.map(({ name, detail }) => (
                  <div
                    key={name}
                    className="flex items-start justify-between gap-4 py-3"
                    style={{ borderBottom: "0.5px solid rgba(26,58,42,0.07)" }}
                  >
                    <div>
                      <div className="text-sm font-normal" style={{ color: "var(--forest)" }}>{name}</div>
                      <div className="text-xs font-light mt-0.5" style={{ color: "var(--text-lt)" }}>{detail}</div>
                    </div>
                    <span className="text-xs tracking-wider whitespace-nowrap flex-shrink-0" style={{ color: "var(--text-lt)" }}>
                      In-clinic
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="max-w-[1200px] mx-auto mt-8">
          <p className="text-xs font-light leading-relaxed" style={{ color: "var(--text-lt)" }}>
            Prices vary by brand and quantity. Please call or WhatsApp +91 6366-638452 to confirm availability and pricing before visiting. Custom ear moulds require a clinic appointment for impressions.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 px-5 md:px-12" style={{ background: "var(--gold)" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <div
              className="font-normal mb-1"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(20px,3vw,26px)", color: "var(--forest)" }}
            >
              Need help choosing the right accessory?
            </div>
            <p className="text-sm font-light" style={{ color: "rgba(26,58,42,0.65)" }}>
              Our audiologists will advise you on the right consumables for your specific device.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <BookAppointment />
            <a
              href="tel:+916366638452"
              className="text-xs tracking-widest uppercase pb-0.5 no-underline"
              style={{ color: "var(--forest)", borderBottom: "1px solid rgba(26,58,42,0.4)", textDecoration: "none" }}
            >
              Call us →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
