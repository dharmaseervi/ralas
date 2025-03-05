import { Metadata } from 'next'
import Image from 'next/image'
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
import { Ear, HeartHandshake, BadgeCheck, BookUser, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Ralas Hearing Aid Clinic',
  description: 'Learn about Ralas Hearing Aid Clinic, our mission, and our commitment to improving lives through better hearing.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>About</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
          About Ralas Hearing Aid Clinic
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          Connecting the world through better hearing since 2005
        </p>
      </div>

      <section className="grid lg:grid-cols-2 gap-12 mb-16">
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/ralas.webp"
            alt="Ralas team"
            fill
            className="object-cover"
          />
        </div>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Ear className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl">Our Mission</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Ralas, we're dedicated to transforming lives through exceptional hearing care. 
              Combining cutting-edge technology with compassionate service, we create personalized 
              solutions that help our patients reconnect with life's precious moments.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-100/50" />
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <BookUser className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl">Our Journey</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Established in 2005, Ralas has evolved from a local hearing specialist to a regional 
                leader in audiological care. Our growth is rooted in continuous innovation and an 
                unwavering commitment to patient-centered service.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-background rounded-lg border">
                  <h3 className="text-2xl font-bold text-primary">18+</h3>
                  <p className="text-muted-foreground">Years of Experience</p>
                </div>
                <div className="p-4 bg-background rounded-lg border">
                  <h3 className="text-2xl font-bold text-primary">10k+</h3>
                  <p className="text-muted-foreground">Lives Improved</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Core Commitments</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The pillars that guide every aspect of our care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              icon: HeartHandshake, 
              title: "Personalized Care",
              description: "Tailored solutions for your unique hearing profile"
            },
            { 
              icon: BadgeCheck, 
              title: "Advanced Technology",
              description: "State-of-the-art hearing solutions and diagnostics"
            },
            { 
              icon: Phone, 
              title: "Lifetime Support",
              description: "Continuous care and adjustment services"
            },
            { 
              icon: Ear, 
              title: "Hearing Education",
              description: "Community programs and preventive care"
            },
          ].map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-primary/10 rounded-2xl p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Experience the Ralas Difference</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start your journey to better hearing today with our expert team
          </p>
          <Button size="lg" className="gap-2">
            <Phone className="w-5 h-5" />
            Schedule Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}