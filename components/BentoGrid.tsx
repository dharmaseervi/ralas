"use client"
import Image from "next/image"
import { ArrowRight, Check, ChevronRight, Clock, Link, MapPin, Phone, Star, Users, View } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Viewdetails from "./viewdetails"
import TechnologyCard from "./TechnologyCard"
import { Badge } from "@/components/ui/badge"

export function OticonBentoGrid() {
  return (
    <section className="container py-12 md:py-24 mx-auto">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        >
          Premium Hearing Aid Brands
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-muted-foreground md:text-xl max-w-[700px]"
        >
          Discover our selection of top-quality hearing aids from leading manufacturers
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12  gap-4">
        {/* Featured Brand - Oticon */}
        <motion.div
          className="md:col-span-8 h-full"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden group h-full">
            <div className="relative">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src="/images/oticon-1.png"
                  alt="Oticon hearing aids"
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-300"
                  
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="space-y-2">
                  <Badge className="w-fit mb-2 bg-primary/80 backdrop-blur-sm">Featured Brand</Badge>
                  <CardTitle className="text-2xl text-white">Oticon</CardTitle>
                  <CardDescription className="text-white/80">
                    Premium hearing solutions with advanced technology
                  </CardDescription>
                </div>
              </div>
            </div>
            <CardFooter className="p-4 flex justify-between items-center bg-muted/50">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium">4.9/5 Expert Rating</span>
              </div>
              <Button variant="ghost" size="sm" className="gap-1 group">
                View Collection
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Product Cards Column */}
        <div className="md:col-span-4 grid gap-4">
          {/* Oticon More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden group h-full">
              <CardHeader className="p-4 pb-2">
                <Badge className="w-fit mb-2 bg-green-600 text-white">New Release</Badge>
                <CardTitle className="text-xl">Oticon More™</CardTitle>
                <CardDescription>BrainHearing™ Technology</CardDescription>
              </CardHeader>
              <CardContent className="p-0 relative">
                <AspectRatio ratio={4 / 3}>
                  <Image
                    src="/images/oticon-2.png"
                    alt="Oticon More hearing aid"
                    fill
                    className="object-contain transition-transform group-hover:scale-110 duration-300"
                  />
                </AspectRatio>
              </CardContent>
              <CardFooter className="p-4 bg-muted/50">
                <Button variant="outline" size="sm" className="w-full group">
                  Explore Features
                  <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Oticon Opn S */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="overflow-hidden group h-full">
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-xl">Oticon Opn S™</CardTitle>
                <CardDescription>Open Sound Experience</CardDescription>
              </CardHeader>
              <CardContent className="p-0 relative">
                <AspectRatio ratio={4 / 3}>
                  <Image
                    src="/images/oticon-3.png"
                    alt="Oticon Opn S hearing aid"
                    fill
                    className="object-contain transition-transform group-hover:scale-110 duration-300"
                  />
                </AspectRatio>
              </CardContent>
              <CardFooter className="p-4 bg-muted/50">
                <Viewdetails />
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        {/* Features Card */}
        <motion.div
          className="md:col-span-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full bg-primary/90 text-primary-foreground border-primary/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Why Choose Oticon?</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Industry-leading hearing technology
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { icon: <Users className="h-5 w-5" />, text: "Worn by 2M+ users worldwide" },
                { icon: <Check className="h-5 w-5" />, text: "BrainHearing™ Technology" },
                { icon: <Clock className="h-5 w-5" />, text: "24hr Rechargeable Battery" },
                { icon: <Star className="h-5 w-5" />, text: "3-year Warranty" },
                { icon: <Phone className="h-5 w-5" />, text: "Bluetooth Connectivity" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors">
                  <div className="p-2 bg-primary/10 rounded-full">{feature.icon}</div>
                  <p className="text-sm">{feature.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Technology Card */}
        <motion.div
          className="md:col-span-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden group h-full">
            <div className="grid md:grid-cols-2 h-full">
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <Badge className="w-fit mb-4">Innovation</Badge>
                  <CardTitle className="text-2xl mb-2">Deep Neural Network</CardTitle>
                  <CardDescription className="mb-4">
                    Trained with 12 million real-world sound scenes for superior performance
                  </CardDescription>
                </div>
                <TechnologyCard />
              </div>
              <div className="relative">
                <AspectRatio ratio={1}>
                  <Image
                    src="/images/dnn.jpg"
                    alt="Neural network technology"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}