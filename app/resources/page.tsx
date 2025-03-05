import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { BookOpen, LifeBuoy, Ear, Settings, Waves, BadgeInfo, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hearing Aid Resources | Ralas',
  description: 'Explore our comprehensive resources on hearing health, hearing aid care, and latest advancements in hearing technology.',
}

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: "Understanding Hearing Loss",
      icon: Ear,
      links: [
        { title: "Types of Hearing Loss", href: "/resources/types-of-hearing-loss" },
        { title: "Common Causes", href: "/resources/causes-of-hearing-loss" },
        { title: "Prevention Tips", href: "/resources/hearing-loss-prevention" }
      ]
    },
    {
      title: "Hearing Aid Care",
      icon: Settings,
      links: [
        { title: "Cleaning Guide", href: "/resources/cleaning-hearing-aids" },
        { title: "Maintenance Schedule", href: "/resources/hearing-aid-maintenance" },
        { title: "Troubleshooting", href: "/resources/troubleshooting" }
      ]
    },
    {
      title: "Latest Technology",
      icon: Waves,
      links: [
        { title: "AI in Hearing Aids", href: "/resources/ai-in-hearing-aids" },
        { title: "Bluetooth Connectivity", href: "/resources/bluetooth-connectivity" },
        { title: "Rechargeable Tech", href: "/resources/rechargeable-technology" }
      ]
    },
    {
      title: "Living with Hearing Aids",
      icon: LifeBuoy,
      links: [
        { title: "Adjustment Guide", href: "/resources/adjusting-to-hearing-aids" },
        { title: "Lifestyle Integration", href: "/resources/hearing-aids-and-lifestyle" },
        { title: "Communication Tips", href: "/resources/communication-tips" }
      ]
    }
  ]

  const externalResources = [
    {
      name: "American Speech-Language-Hearing Association (ASHA)",
      href: "https://www.asha.org/public/hearing/"
    },
    {
      name: "Hearing Loss Association of America (HLAA)",
      href: "https://www.hearingloss.org/"
    },
    {
      name: "National Institute on Deafness (NIDCD)",
      href: "https://www.nidcd.nih.gov/health/hearing-ear-infections-deafness"
    }
  ]

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Resources</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
          Hearing Aid Resources
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          Your comprehensive guide to hearing health and technology
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {resourceCategories.map((category, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow h-full">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-2 h-2 bg-primary/20 rounded-full group-hover:bg-primary transition-colors" />
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mb-16">
        <Card className="bg-muted/50">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <BadgeInfo className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl">Trusted External Resources</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {externalResources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 hover:bg-background rounded-lg transition-colors"
                >
                  <BookOpen className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    {resource.name}
                  </span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="bg-primary/10 rounded-2xl p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6 flex justify-center">
            <MessageSquare className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Personalized Guidance Available</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our audiologists are ready to answer your questions and provide custom recommendations
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link href="/contact">
              <MessageSquare className="w-5 h-5" />
              Consult Our Experts
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}