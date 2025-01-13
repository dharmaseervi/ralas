'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

export default function VideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const video = ref.current as HTMLVideoElement | null
      if (video) {
        video.play()
      }
    }
  }, [isInView])

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          See Our Technology in Action
        </motion.h2>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
          <video
            ref={ref}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            poster="/images/video-poster.mp4"
          >
            <source src="/images/video-poster.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}

