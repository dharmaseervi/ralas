// app/product/rechargeable-aids/page.tsx
import { generateMetadata } from "@/lib/seo"
export const metadata = generateMetadata("product-rechargeable")
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
export default function RechargeablePage() {
  return (
    <>
      <Navbar />
      <ServiceHero eyebrow="Hearing Aids" title="Rechargeable Hearing Aids" subtitle="No more fiddling with tiny batteries — modern rechargeable hearing aids offer full-day power with an overnight charge." imageSrc="/images/hearing-aids-hero.jpg" />
 
      <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--white)" }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              About Rechargeable Aids
            </div>
            <h2 className="font-light leading-tight mb-5" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(26px,4vw,42px)", color: "var(--forest)" }}>
              Hassle-free hearing — charge overnight, wear all day
            </h2>
            <p className="text-sm md:text-base font-light leading-relaxed mb-4" style={{ color: "var(--text-mid)" }}>
              Rechargeable hearing aids use built-in lithium-ion batteries that charge in a compact charging case — similar to wireless earbuds. Most provide 16–30 hours of use from a single charge, with the case providing additional charges on the go.
            </p>
            <p className="text-sm md:text-base font-light leading-relaxed mb-8" style={{ color: "var(--text-mid)" }}>
              They are especially popular with elderly patients who find disposable battery replacement difficult, and with younger users who prefer the convenience of a charging routine over weekly battery changes.
            </p>
            <div className="flex flex-col gap-1 mb-8">
              <ProductSpec label="Battery type" value="Built-in lithium-ion" />
              <ProductSpec label="Charge time" value="3–4 hours for full charge" />
              <ProductSpec label="Use per charge" value="16–30 hours" />
              <ProductSpec label="Price range" value="₹35,000 – ₹2,80,000" />
              <ProductSpec label="Brands available" value="Oticon, Signia, Widex, ReSound" />
            </div>
            <BookAppointment />
          </div>
          <div className="flex flex-col gap-3">
            {[
              { title: "No battery replacement", desc: "Never run out of batteries mid-day or struggle to replace tiny cells. Simply place in the charging case each night." },
              { title: "Environmentally friendly", desc: "Eliminate the need for disposable zinc-air batteries, reducing waste significantly over the life of the device." },
              { title: "Charging case convenience", desc: "The portable charging case doubles as a storage case and can charge the devices 2–3 additional times before needing its own recharge." },
              { title: "Bluetooth streaming", desc: "Most rechargeable models support direct Bluetooth streaming from smartphones, TVs, and other devices." },
              { title: "Ideal for elderly patients", desc: "Removes the fiddly task of handling tiny disposable batteries — a significant benefit for patients with arthritis or reduced dexterity." },
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
 
      <RelatedProducts current="Rechargeable" />
      <Footer />
    </>
  )
}