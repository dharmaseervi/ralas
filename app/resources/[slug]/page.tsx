// app/resources/[slug]/page.tsx

import { notFound } from "next/navigation"
import { articles, tagColors, tagTextColors } from "@/lib/articles"

import Footer from "@/components/home/Footer"
import Link from "next/link"
import type { Metadata } from "next"
import Navbar from "@/components/home/NavigationBar"

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.desc,
    alternates: { canonical: `https://ralasclinic.com/resources/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.desc,
      url: `https://ralasclinic.com/resources/${article.slug}`,
      type: "article",
      images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: article.title }],
    },
  }
}

export default async function ArticlePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const { tag, title, desc, readTime, content } = article
  const others = articles.filter((a) => a.slug !== slug).slice(0, 3)

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="py-16 md:py-20 px-5 md:px-12" style={{ background: "var(--forest)" }}>
        <div className="max-w-[800px] mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-normal px-2.5 py-1 tracking-wider"
              style={{ background: tagColors[tag] || "var(--cream)", color: tagTextColors[tag] || "var(--text-mid)" }}>
              {tag}
            </span>
            <span className="text-xs font-light" style={{ color: "rgba(255,255,255,0.45)" }}>{readTime} read</span>
          </div>
          <h1 className="font-light text-white leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px,5vw,56px)", lineHeight: 1.1 }}>
            {title}
          </h1>
          <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            {desc}
          </p>
        </div>
      </section>

      {/* ── Article body ── */}
      <section className="py-12 md:py-20 px-5 md:px-12" style={{ background: "var(--white)" }}>
        <div className="max-w-[800px] mx-auto">

          {/* Byline */}
          <div className="flex items-center gap-3 mb-10 pb-6" style={{ borderBottom: "0.5px solid rgba(26,58,42,0.1)" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-light flex-shrink-0"
              style={{ background: "var(--forest)", color: "var(--gold-lt)", fontFamily: "'Cormorant Garamond', serif" }}>
              R
            </div>
            <div>
              <div className="text-sm font-medium" style={{ color: "var(--forest)" }}>Ralas Hearing Clinic</div>
              <div className="text-xs font-light" style={{ color: "var(--text-lt)" }}>Audiology Team · Jayanagar, Bengaluru</div>
            </div>
          </div>

          {/* Article content */}
          <div className="article-body" dangerouslySetInnerHTML={{ __html: content }} />

          {/* CTA */}
          <div className="mt-12 p-7 md:p-10" style={{ background: "var(--cream)", border: "0.5px solid rgba(26,58,42,0.08)" }}>
            <div className="font-light mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(20px,3vw,26px)", color: "var(--forest)" }}>
              Have questions about your hearing?
            </div>
            <p className="text-sm font-light leading-relaxed mb-5" style={{ color: "var(--text-mid)" }}>
              Our audiologists at Ralas Hearing Clinic in Jayanagar, Bengaluru are happy to help. Book a free first consultation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact"
                className="text-xs font-medium tracking-widest uppercase px-6 py-3 no-underline"
                style={{ background: "var(--gold)", color: "var(--forest)", textDecoration: "none" }}>
                Book a Consultation
              </Link>
              <a href="https://wa.me/916366638452"
                className="text-xs font-medium tracking-widest uppercase px-6 py-3 no-underline text-white"
                style={{ background: "#25D366", textDecoration: "none" }}>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other articles ── */}
      <section className="py-12 md:py-16 px-5 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="max-w-[800px] mx-auto">
          <div className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--text-lt)" }}>More articles</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(26,58,42,0.08)" }}>
            {others.map((a) => (
              <Link key={a.slug} href={`/resources/${a.slug}`}
                className="flex flex-col gap-2 p-5 no-underline transition-colors"
                style={{ background: "var(--white)", textDecoration: "none" }}>
                <span className="text-xs font-normal px-2 py-0.5 self-start tracking-wider"
                  style={{ background: tagColors[a.tag] || "var(--cream)", color: tagTextColors[a.tag] || "var(--text-mid)" }}>
                  {a.tag}
                </span>
                <div className="text-sm font-normal leading-snug"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--forest)" }}>
                  {a.title}
                </div>
                <div className="text-xs font-light mt-auto pt-2"
                  style={{ color: "var(--gold)", borderTop: "0.5px solid rgba(26,58,42,0.08)" }}>
                  {a.readTime} read →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .article-body { color: var(--text-mid); font-size: 15px; font-weight: 300; line-height: 1.85; }
        .article-body h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(22px,3vw,28px); font-weight: 300; color: var(--forest); margin: 2rem 0 0.75rem; line-height: 1.2; }
        .article-body h3 { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 400; color: var(--forest); margin: 1.5rem 0 0.5rem; }
        .article-body p { margin-bottom: 1.25rem; }
        .article-body ul { margin: 0 0 1.25rem 1.5rem; list-style: disc; }
        .article-body li { margin-bottom: 0.5rem; }
        .article-body strong { font-weight: 500; color: var(--forest); }
      `}</style>
    </>
  )
}