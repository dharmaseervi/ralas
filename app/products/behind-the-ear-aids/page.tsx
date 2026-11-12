// app/product/behind-the-ear-aids/page.tsx
import { generateMetadata } from "@/lib/seo"
export const metadata = generateMetadata("product-bte")
import { BookAppointment } from "@/components/Bookappointment";
import Navbar from "@/components/home/NavigationBar";
import ServiceHero from "@/components/home/ServiceheroSection";
import Link from "next/link";

import Footer from "@/components/home/Footer";

function ProductSpec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2.5" style={{ borderBottom: "0.5px solid rgba(26,58,42,0.08)" }}>
      <span className="text-xs font-light" style={{ color: "var(--text-lt)" }}>{label}</span>
      <span className="text-sm font-normal" style={{ color: "var(--forest)" }}>{value}</span>
    </div>
  )
}
 
function RelatedProducts({ current }: { current: string }) {
  const all = [
    { label: "Behind-the-Ear", href: "/products/behind-the-ear-aids" },
    { label: "Rechargeable", href: "/products/rechargeable-aids" },
    { label: "In-the-Ear (ITE)", href: "/products/in-ear-aids" },
    { label: "Smart Hearing Aids", href: "/products/smart-hearing-aids" },
    { label: "Accessories", href: "/products/accessories" },
  ]
  return (
    <section className="py-10 px-5 md:px-12" style={{ background: "var(--cream-dk)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--text-lt)" }}>Other Products</div>
        <div className="flex flex-wrap gap-2">
          {all.filter(p => p.label !== current).map(({ label, href }) => (
            <Link key={label} href={href} className="px-4 py-2 text-xs font-light no-underline transition-colors hover:bg-[var(--white)]"
              style={{ background: "var(--white)", border: "0.5px solid rgba(26,58,42,0.12)", color: "var(--forest)", textDecoration: "none" }}>
              {label} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
 
// ── 1. BEHIND-THE-EAR ─────────────────────────
 
export default function BehindTheEarPage() {
  return (
    <>
      <Navbar />
      <ServiceHero eyebrow="Hearing Aids" title="Behind-the-Ear (BTE) Aids" subtitle="The most versatile and reliable hearing aid style — suitable for mild to profound hearing loss at any age." imageSrc="/images/hearing-aids-hero.jpg" />
 
      <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--white)" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              About BTE Aids
            </div>
            <h2 className="font-light leading-tight mb-5" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(26px,4vw,42px)", color: "var(--forest)" }}>
              Power and versatility for every level of hearing loss
            </h2>
            <p className="text-sm md:text-base font-light leading-relaxed mb-4" style={{ color: "var(--text-mid)" }}>
              Behind-the-Ear hearing aids sit comfortably behind the ear, with a thin tube or wire connecting to a custom ear mould or dome in the ear canal. They are the most widely used hearing aid style globally — for good reason.
            </p>
            <p className="text-sm md:text-base font-light leading-relaxed mb-8" style={{ color: "var(--text-mid)" }}>
              BTE aids accommodate the largest batteries and amplification components, making them suitable for all levels of hearing loss from mild to profound. They are particularly recommended for children, elderly patients, and those with dexterity limitations.
            </p>
            <div className="flex flex-col gap-1 mb-8">
              <ProductSpec label="Suitable for" value="Mild to profound hearing loss" />
              <ProductSpec label="Price range" value="₹18,000 – ₹2,20,000" />
              <ProductSpec label="Battery" value="Disposable or rechargeable" />
              <ProductSpec label="Brands available" value="Oticon, Phonak, Signia, Widex" />
              <ProductSpec label="Warranty" value="2–3 years manufacturer warranty" />
            </div>
            <BookAppointment />
          </div>
          <div className="flex flex-col gap-3">
            {[
              { title: "All loss levels", desc: "The only style suitable for every degree of hearing loss, including profound loss that other styles cannot address." },
              { title: "Easy to handle", desc: "Larger components mean easier insertion, removal, and battery replacement — ideal for elderly patients or those with reduced dexterity." },
              { title: "Long battery life", desc: "The larger battery compartment provides significantly longer battery life than smaller styles, with rechargeable options available." },
              { title: "Durable and robust", desc: "BTE aids are known for their durability. The main electronics sit outside the ear canal, away from earwax and moisture." },
              { title: "Custom ear mould", desc: "Paired with a custom-fitted ear mould made from an impression of your ear for a comfortable, secure fit." },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-4 p-5" style={{ background: "var(--cream)", border: "0.5px solid rgba(26,58,42,0.08)" }}>
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: "var(--gold)" }} />
                <div>
                  <div className="text-sm font-medium mb-1" style={{ color: "var(--forest)" }}>{title}</div>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <RelatedProducts current="Behind-the-Ear" />
      <Footer />
    </>
  )
}