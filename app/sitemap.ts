// app/sitemap.ts — Next.js auto-generates /sitemap.xml from this

import type { MetadataRoute } from "next"

const BASE_URL = "https://ralasclinic.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    // ── Core pages ──
    { url: BASE_URL,                                    lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/about`,                         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`,                       lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services`,                      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/resources`,                     lastModified: now, changeFrequency: "weekly",  priority: 0.7 },

    // ── Service pages ──
    { url: `${BASE_URL}/hearing-aids`,                  lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/hearing-tests`,                 lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/speech-therapy`,                lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tinnitus-treatment`,            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/home-visits`,                   lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // ── Product pages ──
    { url: `${BASE_URL}/product/behind-the-ear-aids`,   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/product/rechargeable-aids`,     lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/product/in-ear-aids`,           lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/product/smart-hearing-aids`,    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/product/accessories`,           lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // ── Legal ──
    { url: `${BASE_URL}/privacy`,                       lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE_URL}/terms`,                         lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE_URL}/accessibility`,                 lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ]
}