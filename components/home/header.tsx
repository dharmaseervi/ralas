"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { BookAppointment } from "../Bookappointment"


const slides = [
    {
        image:
            "/images/feature-comfort.jpg",
        title: "Experience Sound Like Never Before",
        subtitle: "Our cutting-edge hearing aids redefine clarity and comfort.",
        buttonText: "Learn More",
        buttonLink: "/services",
    },
    {
        image: "/images/feature-connectivity.jpg",
        title: "Professional Speech Therapy",
        subtitle: "Personalized therapy sessions for improved communication.",
        buttonText: "Our Services",
        buttonLink: "/speech-therapy",
    },
    {
        image: "/images/feature-sound.jpg",
        title: "Comprehensive Hearing Tests",
        subtitle: "State-of-the-art diagnostic services for all ages.",
        buttonText: "Book Test",
        buttonLink: "/hearing-tests",
    },
]

export default function Header() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, [slides.length])

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000)
        return () => clearInterval(timer)
    }, [nextSlide])

    return (
        <header className="relative">
            {/* Top Info Bar */}
            <div className="bg-green-900 text-primary-foreground px-4 py-1">
                <div className="container flex items-center justify-between h-10 text-sm">
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>Mon - Sat: 10:00 AM - 7:30 PM</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <Link href={'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x3bae152b5f787543:0x32fcd6ff153aaa20?entry=s&sa=X&ved=1t:8290&hl=en-in&ictx=111'}>2nd floor, 121, 6th C Main Road, 4th Block, Jayanagar, Bengaluru, Karnataka 560011</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <a href="tel:+911234567890" className="hover:underline">
                                +91 6366-638452
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <motion.nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    scrolled ? "bg-white shadow-md mt-0" : "bg-transparent mt-10",
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <div className="container flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center space-x-2">
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                            <img src="/ralas.png" alt="Ralas Logo" className="h-12 w-auto " />
                        </motion.div>
                        <span className={cn("text-2xl font-bold", scrolled ? "text-primary" : "text-white")}>Ralas</span>
                    </Link>

                    <NavigationMenu className="hidden lg:flex ">
                        <NavigationMenuList className="space-x-1">
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className={cn("text-base", scrolled ? "text-gray-700" : "text-gray-700")}>
                                    Services
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {[
                                            ["Hearing Tests", "Comprehensive audiological evaluations"],
                                            ["Speech Therapy", "Professional speech-language services"],
                                            ["Hearing Aids", "Latest hearing aid technology"],
                                            ["Tinnitus Treatment", "Advanced tinnitus management"],
                                        ].map(([title, desc]) => (
                                            <li
                                                key={title}
                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                            >
                                                <div className="text-sm font-medium leading-none">{title}</div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{desc}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            {["About", "Locations", "Resources", "Contact"].map((item) => (
                                <NavigationMenuItem key={item}>
                                    <Link href={`/${item.toLowerCase()}`} legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={cn(
                                                "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                                scrolled ? "text-gray-700" : "text-white",
                                            )}
                                        >
                                            {item}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="flex items-center space-x-4">
                        <BookAppointment />
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="lg:hidden">
                                    <Menu className={cn("h-6 w-6", scrolled ? "text-gray-700" : "text-white")} />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                {/* Mobile menu content */}
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </motion.nav>

            {/* Hero Section with Carousel */}
            <div className="relative h-screen  ">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                        >
                            <div className="absolute inset-0 bg-black/40" />
                        </div>
                        <div className="relative container h-full flex items-center px-10 ">
                            <div className="max-w-2xl text-white">
                                <motion.h1
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                                >
                                    {slides[currentSlide].title}
                                </motion.h1>
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-xl md:text-2xl mb-8"
                                >
                                    {slides[currentSlide].subtitle}
                                </motion.p>
                                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                                        <Link href={slides[currentSlide].buttonLink}>{slides[currentSlide].buttonText}</Link>
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Carousel Controls */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={prevSlide}
                        className="bg-white/20 hover:bg-white/40 backdrop-blur-sm"
                    >
                        <ChevronLeft className="h-4 w-4 text-white" />
                    </Button>
                    <div className="flex gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={cn(
                                    "w-2 h-2 rounded-full transition-all",
                                    currentSlide === index ? "bg-white w-6" : "bg-white/50",
                                )}
                            />
                        ))}
                    </div>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={nextSlide}
                        className="bg-white/20 hover:bg-white/40 backdrop-blur-sm"
                    >
                        <ChevronRight className="h-4 w-4 text-white" />
                    </Button>
                </div>
            </div>
        </header>
    )
}

