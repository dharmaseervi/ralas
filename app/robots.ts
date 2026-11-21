// app/robots.ts — Next.js auto-generates /robots.txt from this

import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://ralasclinic.com/sitemap.xml",
    host: "https://ralasclinic.com",
  }
}