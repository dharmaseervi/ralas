'use client'

import { motion } from 'framer-motion'
import { BrainCircuit, Waves, Zap, Bluetooth, Cloud, Ear, Volume2, Cpu, BatteryFull } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const features = [
  { 
    icon: BrainCircuit, 
    title: "BrainHearing™ Technology",
    stats: "50% better speech understanding",
    description: "Supports the brain's natural sound processing with neural network technology",
    color: "bg-oticon-red",
    specs: [
      { icon: <Volume2 size={16} />, label: "120dB dynamic range" },
      { icon: <Cpu size={16} />, label: "2.4GHz processor" }
    ]
  },
  { 
    icon: Waves, 
    title: "OpenSound Navigator™",
    stats: "360° sound processing",
    description: "Real-time environmental adaptation with 0.5ms response time",
    color: "bg-oticon-blue",
    specs: [
      { icon: "🌐", label: "Full environment scan" },
      { icon: "🔇", label: "Smart noise reduction" }
    ]
  },
  { 
    icon: Zap, 
    title: "Polite™ Platform",
    stats: "30% less listening effort",
    description: "Ultra-fast processing with 12M sound scene training",
    color: "bg-oticon-teal",
    specs: [
      { icon: <BatteryFull size={16} />, label: "30h battery life" },
      { icon: "⚡", label: "Wireless charging" }
    ]
  },
  // Add remaining features...
]

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-8 flex justify-center">
            <div className="bg-oticon-red/10 p-4 rounded-2xl shadow-inner">
              <img 
                src="/oticon-logo-icon.jpeg " 
                alt="Oticon More" 
                className="h-full w-full mix-blend-multiply"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-oticon-red">Revolutionary</span> Hearing Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clinical-grade performance powered by Oticon's patented More™ platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group relative overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`absolute inset-x-0 top-0 h-1 ${feature.color} transition-all duration-300`} />
                
                <CardHeader className="pb-0">
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-6`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </CardTitle>
                  <div className="text-lg font-semibold text-oticon-red mb-4">
                    {feature.stats}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {feature.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-oticon-red">{spec.icon}</span>
                          <span className="text-sm text-gray-700">{spec.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-oticon-red to-oticon-blue hover:from-oticon-red/90 hover:to-oticon-blue/90 text-white px-12 py-7 rounded-xl shadow-lg transition-all"
          >
            <span className="text-lg">Schedule Free Demo</span>
            <span className="ml-2 text-sm opacity-90">FDA-Cleared Medical Device</span>
          </Button>
          <p className="text-sm text-gray-500 mt-4">3-year warranty included with all devices</p>
        </motion.div>

        <div className="absolute inset-0 -z-10">
          <div className="absolute w-[800px] h-[800px] bg-oticon-red/5 rounded-full blur-3xl -top-96 -left-96" />
          <div className="absolute w-[800px] h-[800px] bg-oticon-blue/5 rounded-full blur-3xl -bottom-96 -right-96" />
        </div>
      </div>
    </section>
  )
}