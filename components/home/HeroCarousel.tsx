'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import AnimatedHearingAid from './HearingAnimation'

const slides = [
    {
        title: "Experience Sound Like Never Before",
        description: "Our cutting-edge hearing aids redefine clarity and comfort.",
        image: "/images/feature-comfort.jpg",
    },
    {
        title: "Seamless Integration with Your Lifestyle",
        description: "Connect to your devices and control settings with ease.",
        image: "/images/feature-connectivity.jpg",
    },
    {
        title: "Personalized Hearing Solutions",
        description: "Tailored to your unique hearing profile and preferences.",
        image: "/images/feature-sound.jpg",
    },
]

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    const prevSlide = () => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)

    return (
        <>
            <section className="relative bottom-0 z-10 h-screen overflow-hidden ">
                <AnimatePresence initial={false} custom={currentSlide}>
                    {slides.map((slide, index) => (
                        <motion.div
                            key={index}
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: index === currentSlide ? 1 : 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="absolute inset-0 bg-black opacity-50" />
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="relative z-10 text-center text-white px-4">
                                <motion.h1
                                    className="text-5xl font-bold mb-4"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    {slide.title}
                                </motion.h1>
                                <motion.p
                                    className="text-xl mb-8"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    {slide.description}
                                </motion.p>
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                >
                                    <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                                        Learn More
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
                <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full"
                    onClick={prevSlide}
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 p-2 rounded-full"
                    onClick={nextSlide}
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                                }`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </section>
            <div className='absolute top-0 w-full z-0'>
                <AnimatedHearingAid />
            </div>
        </>
    )
}

