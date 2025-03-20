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

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <header className="relative">
        
            {/* Main Navigation */}
            <motion.nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md mt-0",
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
                        <span className={cn("text-2xl font-bold",  "text-primary" )}>Ralas</span>
                    </Link>

                    <NavigationMenu className="hidden lg:flex ">
                        <NavigationMenuList className="space-x-1">
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className={cn("text-base","text-gray-700" )}>
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
                                                "text-gray-700"
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
                                    <Menu className={cn("h-6 w-6", "text-gray-700" )} />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <div className="flex flex-col h-full">
                                    {/* Logo and Close Button */}
                                    <div className="flex items-center justify-between mb-8">
                                        <Link href="/" onClick={() => setIsOpen(false)}>
                                            <img src="/ralas.png" alt="Ralas Logo" className="h-10 w-auto" />
                                        </Link>
                                    </div>

                                    {/* Mobile Navigation */}
                                    <nav className="flex-1 space-y-4">
                                        <Link href="/" className="block py-2 text-lg font-medium" onClick={() => setIsOpen(false)}>
                                            Home
                                        </Link>

                                        <div className="space-y-2">
                                            <h3 className="text-lg font-medium text-primary">Services</h3>
                                            <div className="space-y-2 pl-4">
                                                <Link href="/hearing-tests" className="block py-1.5 text-muted-foreground" onClick={() => setIsOpen(false)}>
                                                    Hearing Tests
                                                </Link>
                                                <Link href="/speech-therapy" className="block py-1.5 text-muted-foreground" onClick={() => setIsOpen(false)}>
                                                    Speech Therapy
                                                </Link>
                                                <Link href="/hearing-aids" className="block py-1.5 text-muted-foreground" onClick={() => setIsOpen(false)}>
                                                    Hearing Aids
                                                </Link>
                                                <Link href="/tinnitus-treatment" className="block py-1.5 text-muted-foreground" onClick={() => setIsOpen(false)}>
                                                    Tinnitus Treatment
                                                </Link>
                                            </div>
                                        </div>

                                        {['About', 'Locations', 'Resources', 'Contact'].map((item) => (
                                            <Link
                                                key={item}
                                                href={`/${item.toLowerCase()}`}
                                                className="block py-2 text-lg font-medium"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item}
                                            </Link>
                                        ))}
                                    </nav>

                                    {/* Contact Info */}
                                    <div className="mt-8 pt-6 border-t">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <Phone className="h-5 w-5 text-primary" />
                                                <a href="tel:+916366638452" className="hover:underline">
                                                    +91 6366-638452
                                                </a>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Clock className="h-5 w-5 text-primary" />
                                                <span>Mon-Sat: 10AM - 7:30PM</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <MapPin className="h-5 w-5 text-primary mt-1" />
                                                <Link
                                                    href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x3bae152b5f787543:0x32fcd6ff153aaa20?entry=s&sa=X&ved=1t:8290&hl=en-in&ictx=111"
                                                    className="hover:underline"
                                                >
                                                    2nd floor, 121, 6th C Main Road, 4th Block, Jayanagar, Bengaluru
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Mobile Appointment Button */}
                                        <div className="mt-6">
                                            <BookAppointment />
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </motion.nav>

        </header>
    )
}

