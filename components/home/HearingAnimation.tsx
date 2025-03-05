'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import { Waves, Cpu, BatteryFull, Volume2, Bluetooth, Ear, BrainCircuit } from 'lucide-react'
import { Button } from '@/components/ui/button'

const FeatureCard = ({ icon: Icon, title, description, specs }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-blue-100 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
      </div>
      <div className="border-t pt-4">
        <h4 className="text-sm font-medium text-gray-500 mb-2">Key Specifications:</h4>
        <div className="grid grid-cols-2 gap-3">
          {specs.map((spec, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-blue-600">{spec.icon}</span>
              <span className="text-sm text-gray-700">{spec.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function TechnologyShowcase() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [controls, inView])

  const features = [
    {
      icon: BrainCircuit,
      title: "BrainHearing™ Technology",
      description: "Supports your brain's natural sound processing for clearer understanding",
      specs: [
        { icon: '⚡', label: '2.4GHz Processor' },
        { icon: '🎯', label: '12M Sound Scenes' },
        { icon: '🔊', label: '120dB Range' },
        { icon: '🧠', label: 'Neural Network' }
      ]
    },
    {
      icon: Waves,
      title: "OpenSound Navigator™",
      description: "Real-time environmental adaptation for natural listening",
      specs: [
        { icon: '🌐', label: '360° Sound' },
        { icon: '⏱️', label: '0.5ms Response' },
        { icon: '🎚️', label: 'Auto Adjustment' },
        { icon: '🔇', label: 'Smart Noise Reduction' }
      ]
    },
    {
      icon: Bluetooth,
      title: "Connectivity Suite",
      description: "Seamless integration with modern devices and ecosystems",
      specs: [
        { icon: '📶', label: 'Bluetooth 5.2' },
        { icon: '🔋', label: 'Wireless Charging' },
        { icon: '📱', label: 'iOS/Android App' },
        { icon: '🎧', label: 'Direct Streaming' }
      ]
    }
  ]

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Advanced Hearing Technology
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clinical-grade performance meets intuitive design in our next-generation hearing solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            className="relative h-[500px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/hearing-aid-cutaway.png"
              alt="Technology cutaway"
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
          </motion.div>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                {...feature}
              />
            ))}
          </div>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="p-6 bg-blue-50 rounded-xl">
            <div className="text-4xl font-bold text-blue-600 mb-3">30h</div>
            <div className="font-medium">Battery Life</div>
            <p className="text-sm text-gray-600 mt-2">With wireless charging support</p>
          </div>
          <div className="p-6 bg-purple-50 rounded-xl">
            <div className="text-4xl font-bold text-purple-600 mb-3">-40dB</div>
            <div className="font-medium">Noise Reduction</div>
            <p className="text-sm text-gray-600 mt-2">Advanced environmental filtering</p>
          </div>
          <div className="p-6 bg-green-50 rounded-xl">
            <div className="text-4xl font-bold text-green-600 mb-3">0.5ms</div>
            <div className="font-medium">Processing Speed</div>
            <p className="text-sm text-gray-600 mt-2">Ultra-low latency performance</p>
          </div>
        </motion.div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 rounded-xl shadow-lg transition-all"
          >
            Schedule Technology Demo
          </Button>
          <p className="text-sm text-gray-500 mt-4">FDA-cleared medical device | 3-year warranty included</p>
        </motion.div>
      </div>
    </section>
  )
}