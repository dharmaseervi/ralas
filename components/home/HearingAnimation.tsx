'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'

const HearingAidPart = ({ src, alt, initial, animate, transition, className, description }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`absolute ${className} cursor-pointer group`}
      initial={initial}
      animate={animate}
      transition={transition}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={200}
        height={400}
        className="transition-transform duration-300 group-hover:scale-110"
      />
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-4 rounded-lg shadow-lg max-w-xs z-10"
        >
          <p className="text-sm text-gray-800 dark:text-gray-200">{description}</p>
        </motion.div>
      )}
    </motion.div>
  )
}

export default function AnimatedHearingAid() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  }

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-800 dark:text-blue-300">
          Revolutionary Hearing Aid Technology
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Experience the pinnacle of auditory innovation with our cutting-edge hearing aids, combining advanced technology
          and sleek design for unmatched sound quality and comfort.
        </p>
        <motion.div
          className="relative w-full h-[600px]"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <HearingAidPart
            src="/hearing-aid-shell.svg"
            alt="Hearing Aid Shell"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px]"
            description="The outer shell provides durability and a perfect fit, ensuring all components work seamlessly together."
          />
          <HearingAidPart
            src="/hearing-aid-microphone.svg"
            alt="Hearing Aid Microphone"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="left-[calc(50%-120px)] top-[15%] w-[100px] h-[100px]"
            description="Dual microphones capture sound in high resolution, ensuring clear audio in all environments."
          />
          <HearingAidPart
            src="/hearing-aid-speaker.svg"
            alt="Hearing Aid Speaker"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="left-[calc(50%+50px)] bottom-[25%] w-[80px] h-[80px]"
            description="Delivering crisp and natural sound, the speaker is designed for unparalleled clarity."
          />
          <HearingAidPart
            src="/hearing-aid-battery.svg"
            alt="Hearing Aid Battery"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="left-[calc(50%-40px)] bottom-[10%] w-[80px] h-[140px]"
            description="Long-lasting, rechargeable battery ensures all-day use without interruptions."
          />
          <HearingAidPart
            src="/hearing-aid-processor.svg"
            alt="Hearing Aid Processor"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 1.2, ease: 'easeOut' }}
            className="left-[calc(50%-60px)] top-[40%] w-[120px] h-[60px]"
            description="Real-time sound optimization powered by our state-of-the-art processor."
          />
        </motion.div>
        <div className="mt-16 text-center z-10 relative">
          <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-300">Why Choose Our Hearing Aids?</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mt-4">
            Designed with precision and built with care, our hearing aids deliver crystal-clear audio, unmatched comfort,
            and seamless integration with modern technology. Elevate your hearing experience today.
          </p>
        </div>
      </div>
    </section>
  )
}
