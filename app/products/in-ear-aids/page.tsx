// app/product/in-ear-aids/page.tsx
import { generateMetadata } from "@/lib/seo"
export const metadata = generateMetadata("product-ite")
import { BookAppointment } from "@/components/Bookappointment";
import Navbar from "@/components/home/NavigationBar";
import ServiceHero from "@/components/home/ServiceheroSection";
import Link from "next/link";

import { Footer } from "react-day-picker";

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
 export default function InEarPage() {
  return (
    <>
      <Navbar />
      <ServiceHero eyebrow="Hearing Aids" title="In-the-Ear (ITE) Aids" subtitle="Custom-made to fit your ear exactly — discreet, comfortable, and easy to insert." imageSrc="/images/hearing-aids-hero.jpg" />
 
      <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--white)" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              About ITE Aids
            </div>
            <h2 className="font-light leading-tight mb-5" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(26px,4vw,42px)", color: "var(--forest)" }}>
              Custom-fitted for comfort and discretion
            </h2>
            <p className="text-sm md:text-base font-light leading-relaxed mb-4" style={{ color: "var(--text-mid)" }}>
              In-the-Ear hearing aids are custom-made from an impression of your ear canal, so they fit perfectly and sit entirely within the ear. Depending on the style (ITE, ITC, CIC, or IIC), they range from filling the outer ear to being virtually invisible.
            </p>
            <p className="text-sm md:text-base font-light leading-relaxed mb-8" style={{ color: "var(--text-mid)" }}>
              ITE aids are ideal for patients who want a discreet device that is easy to insert and remove. They are suitable for mild to severe hearing loss and are available in a range of skin tones.
            </p>
            <div className="flex flex-col gap-1 mb-8">
              <ProductSpec label="Suitable for" value="Mild to severe hearing loss" />
              <ProductSpec label="Price range" value="₹22,000 – ₹1,80,000" />
              <ProductSpec label="Custom fitting" value="Made from ear impression" />
              <ProductSpec label="Styles" value="ITE, ITC, CIC, IIC" />
              <ProductSpec label="Brands available" value="Oticon, Phonak, Signia, Widex" />
            </div>
            <BookAppointment />
          </div>
          <div className="flex flex-col gap-3">
            {[
              { title: "Truly custom fit", desc: "Made from an impression of your ear canal, ITE aids fit like no other device — comfortable, secure, and tailored to your exact anatomy." },
              { title: "Discreet appearance", desc: "Smaller styles like CIC and IIC sit entirely within the ear canal and are virtually invisible to others." },
              { title: "Easy insertion", desc: "The device is inserted and removed as a single unit — no tubes, wires, or separate components to manage." },
              { title: "Natural sound", desc: "The microphone placement close to the eardrum provides a more natural sound experience, especially for directionality." },
              { title: "Multiple styles", desc: "Choose from ITE (fills outer ear), ITC (half shell), CIC (in-canal), or IIC (invisible-in-canal) depending on your preference and loss level." },
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
 
      <RelatedProducts current="In-the-Ear (ITE)" />
      <Footer />
    </>
  )
}