'use client'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Phone, Mail, MapPin, Clock, Send, CalendarRange } from 'lucide-react'
import { useState } from 'react'
import * as z from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const metadata: Metadata = {
  title: 'Contact Us | Ralas Hearing Aid Clinic',
  description: 'Get in touch with Ralas Hearing Aid Clinic for all your hearing health needs.',
}

export default function ContactPage() {

  const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^\d{10}$/, "Invalid phone number").optional().or(z.literal('')),
    message: z.string().min(10, "Message must be at least 10 characters")
  })

  type FormData = z.infer<typeof formSchema>

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })
  const [responseMessage, setResponseMessage] = useState("")

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })

      if (!res.ok) throw new Error(await res.text())

      setResponseMessage("Message sent successfully!")
      reset()
    } catch (error) {
      setResponseMessage(error instanceof Error ? error.message : "Failed to send message")
    }
  }


  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Contact</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
          Contact Our Hearing Experts
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          Your journey to better hearing starts with a conversation
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Phone className="w-6 h-6 text-primary" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-full mt-1">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-lg">Phone</p>
                  <p className="text-muted-foreground">+91 6366-638452</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-full mt-1">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-lg">Email</p>
                  <p className="text-muted-foreground">contact@ralashearing.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-full mt-1">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-lg">Address</p>
                  <p className="text-muted-foreground">
                    2nd floor, 121, 6th C Main Road,<br /> 4th Block, Jayanagar, Bengaluru, Karnataka 560011
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-full mt-1">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-lg">Hours</p>
                  <p className="text-muted-foreground">
                    Mon-Fri: 10:00am - 7:30pm

                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Visit Our Clinic</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-xl overflow-hidden shadow-md">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6463132104095!2d77.5817033!3d12.930438999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae152b5f787543%3A0x32fcd6ff153aaa20!2sRalas%20Speech%20And%20Hearing%20Clinic!5e0!3m2!1sen!2sin!4v1740823891554!5m2!1sen!2sin" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg p-6">
          <div className="space-y-2 mb-8">
            <h2 className="text-3xl font-bold">Send a Message</h2>
            <p className="text-muted-foreground">
              We typically respond within 1 business day
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">Full Name</label>
              <Input
                {...register("name")}
                placeholder="John Doe"
                className="h-12"

              />
              {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">Email</label>
              <Input
                {...register("email")}
                placeholder="john@example.com"
                className="h-12"

              />
              {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">Phone</label>
              <Input
                {...register("phone")}
                placeholder="(123) 456-7890"
                className="h-12"
              />
              {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">Message</label>
              <Textarea
                {...register("message")}
                placeholder="How can we help you?"
                rows={5}
                className="resize-none"
              />
              {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 text-lg gap-2"
            >
              {isSubmitting ? "Sending..." : <><Send className="w-5 h-5" /> Send Message</>}
            </Button>

            {responseMessage && (
              <p className={`text-center mt-4 ${responseMessage.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
                }`}>
                {responseMessage}
              </p>
            )}
          </form>
        </Card>
      </div>

      <section className="bg-primary/10 rounded-2xl p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Prefer to Visit Us?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a free consultation at our state-of-the-art clinic
          </p>
          <Button size="lg" className="gap-2">
            <CalendarRange className="w-5 h-5" />
            Book Appointment
          </Button>
        </div>
      </section>
    </div>
  )
}