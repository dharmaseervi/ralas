import { generateMetadata } from "@/lib/seo"
export const metadata = generateMetadata("resources")
import Footer from "@/components/home/Footer"
import Link from "next/link"
import { articles, tagColors, tagTextColors } from "@/lib/articles"
import Navbar from "@/components/home/NavigationBar"

const downloads = [
  { title: "Hearing test preparation guide",     desc: "What to expect, what to avoid, and how to get the most accurate results from your audiological evaluation.",   size: "PDF · 320 KB" },
  { title: "Hearing aid care & maintenance",     desc: "Daily cleaning routines, battery management, moisture protection, and when to visit the clinic for servicing.", size: "PDF · 210 KB" },
  { title: "Speech therapy home practice guide", desc: "Exercises and activities to carry over therapy goals at home — compiled for parents and adult patients.",        size: "PDF · 480 KB" },
]

export default function ResourcesPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="py-16 md:py-20 px-5 md:px-12" style={{ background: "var(--forest)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
            <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
            Resources
          </div>
          <h1 className="font-light text-white leading-tight mb-4 max-w-xl"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(34px,5vw,64px)", lineHeight: 1.1 }}>
            Hearing health<br />
            <em className="italic" style={{ color: "var(--gold-lt)" }}>knowledge centre</em>
          </h1>
          <p className="text-sm md:text-base font-light leading-relaxed max-w-md" style={{ color: "rgba(255,255,255,0.55)" }}>
            Guides, articles, and downloadable resources to help you understand hearing health and get the most from your care.
          </p>
        </div>
      </section>

      {/* ── Articles ── */}
      <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              Articles & Guides
            </div>
            <h2 className="font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 300, color: "var(--forest)" }}>
              From our audiologists
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(26,58,42,0.08)" }}>
            {articles.map(({ slug, tag, title, desc, readTime }) => (
              <article key={slug} className="flex flex-col gap-3 p-6 md:p-8" style={{ background: "var(--white)" }}>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-normal px-2.5 py-0.5 tracking-wider"
                    style={{ background: tagColors[tag] || "var(--cream)", color: tagTextColors[tag] || "var(--text-mid)" }}>
                    {tag}
                  </span>
                  <span className="text-xs font-light" style={{ color: "var(--text-lt)" }}>{readTime} read</span>
                </div>
                <div className="font-normal leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "19px", color: "var(--forest)" }}>
                  {title}
                </div>
                <p className="text-xs md:text-sm font-light leading-relaxed flex-1" style={{ color: "var(--text-mid)" }}>{desc}</p>
                <div className="pt-3" style={{ borderTop: "0.5px solid rgba(26,58,42,0.08)" }}>
                  <Link href={`/resources/${slug}`}
                    className="text-xs tracking-widest uppercase pb-px no-underline"
                    style={{ color: "var(--forest)", borderBottom: "1px solid var(--gold)", textDecoration: "none" }}>
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Downloads ── */}
      <section className="py-14 md:py-24 px-5 md:px-12" style={{ background: "var(--white)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
              <span className="block w-6 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
              Downloads
            </div>
            <h2 className="font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 300, color: "var(--forest)" }}>
              Free guides for patients
            </h2>
          </div>
          <div className="flex flex-col gap-px" style={{ background: "rgba(26,58,42,0.08)" }}>
            {downloads.map(({ title, desc, size }) => (
              <div key={title} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 md:p-7"
                style={{ background: "var(--cream)" }}>
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className="w-11 h-11 flex items-center justify-center flex-shrink-0" style={{ background: "var(--forest)" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" width={18} height={18}>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="12" y1="18" x2="12" y2="12" />
                      <line x1="9" y1="15" x2="15" y2="15" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="font-normal mb-1 leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "var(--forest)" }}>{title}</div>
                    <div className="text-xs md:text-sm font-light leading-relaxed" style={{ color: "var(--text-mid)" }}>{desc}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="text-xs font-light" style={{ color: "var(--text-lt)" }}>{size}</span>
                  <a href="#" className="text-xs font-medium tracking-widest uppercase px-4 py-2.5 no-underline whitespace-nowrap"
                    style={{ background: "var(--gold)", color: "var(--forest)", textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}>
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-14 md:py-20 px-5 md:px-12" style={{ background: "var(--forest)" }}>
        <div className="max-w-lg mx-auto text-center">
          <div className="flex items-center justify-center gap-2.5 mb-3 text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
            <span className="block w-6 h-px" style={{ background: "var(--gold)" }} />
            Stay Informed
            <span className="block w-6 h-px" style={{ background: "var(--gold)" }} />
          </div>
          <h2 className="font-light text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 300 }}>
            Monthly hearing health tips
          </h2>
          <p className="text-sm font-light leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
            One email per month. No spam. Practical tips from our audiologists, new articles, and clinic updates.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}