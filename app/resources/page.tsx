import { generateMetadata } from "@/lib/seo"
export const metadata = generateMetadata("resources")
import Footer from "@/components/home/Footer"
import Link from "next/link"
import { articles, tagColors, tagTextColors } from "@/lib/articles"
import Navbar from "@/components/home/NavigationBar"

const downloads = [
  {
    title: "Hearing test preparation guide",
    desc: "What to expect, what to avoid, and how to get the most accurate results from your audiological evaluation.",
    wa: "Hi%2C+I%27d+like+to+receive+the+Hearing+Test+Preparation+Guide.",
  },
  {
    title: "Hearing aid care & maintenance",
    desc: "Daily cleaning routines, battery management, moisture protection, and when to visit the clinic for servicing.",
    wa: "Hi%2C+I%27d+like+to+receive+the+Hearing+Aid+Care+%26+Maintenance+Guide.",
  },
  {
    title: "Speech therapy home practice guide",
    desc: "Exercises and activities to carry over therapy goals at home — compiled for parents and adult patients.",
    wa: "Hi%2C+I%27d+like+to+receive+the+Speech+Therapy+Home+Practice+Guide.",
  },
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
            {downloads.map(({ title, desc, wa }) => (
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
                <div className="flex-shrink-0">
                  <a
                    href={`https://wa.me/916366638452?text=${wa}`}
                    target="_blank" rel="noopener noreferrer"
                    className="text-xs font-medium tracking-widest uppercase px-4 py-2.5 no-underline whitespace-nowrap flex items-center gap-2"
                    style={{ background: "var(--gold)", color: "var(--forest)", textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <svg viewBox="0 0 24 24" fill="var(--forest)" width={13} height={13}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                    Request PDF
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