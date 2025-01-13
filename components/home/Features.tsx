'use client'

import { motion } from 'framer-motion'
import { Ear, Zap, Smartphone, Waves, Bluetooth, Cloud } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  { 
    icon: Ear, 
    title: "Advanced Sound Processing", 
    description: "Experience crystal clear sound in any environment with our cutting-edge technology that adapts to your surroundings in real-time.",
    color: "bg-blue-500"
  },
  { 
    icon: Zap, 
    title: "Extended Battery Life", 
    description: "Enjoy up to 30 hours of uninterrupted use on a single charge, ensuring you stay connected throughout your day.",
    color: "bg-green-500"
  },
  { 
    icon: Smartphone, 
    title: "Smart Device Connectivity", 
    description: "Seamlessly control your hearing aids with our intuitive smartphone app, allowing for easy adjustments on the go.",
    color: "bg-purple-500"
  },
  { 
    icon: Waves, 
    title: "Adaptive Noise Cancellation", 
    description: "Our AI-powered noise cancellation technology automatically adjusts to your surroundings, providing optimal hearing in any situation.",
    color: "bg-red-500"
  },
  { 
    icon: Bluetooth, 
    title: "Bluetooth Audio Streaming", 
    description: "Stream your favorite music, podcasts, and phone calls directly to your hearing aids for an immersive listening experience.",
    color: "bg-yellow-500"
  },
  { 
    icon: Cloud, 
    title: "Cloud-based Adjustments", 
    description: "Receive remote fine-tuning from our expert audiologists, ensuring your hearing aids are always optimized for your needs.",
    color: "bg-indigo-500"
  },
]

export default function Features() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cutting-Edge Features
        </motion.h2>
        <motion.p 
          className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Discover the advanced technology that sets our hearing aids apart and enhances your auditory experience.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

