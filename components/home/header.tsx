'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils"

const products = [
    { title: "In-Ear Aids", href: "/products/in-ear-aids", description: "Discreet and comfortable in-ear hearing aids" },
    { title: "Behind-the-Ear Aids", href: "/products/behind-the-ear-aids", description: "Powerful behind-the-ear hearing solutions" },
    { title: "Rechargeable Aids", href: "/products/rechargeable-aids", description: "Long-lasting, eco-friendly rechargeable options" },
    { title: "Smart Hearing Aids", href: "/products/smart-hearing-aids", description: "AI-powered hearing aids for optimal performance" },
]

const resources = [
    { title: "Hearing Health Blog", href: "/resources/blog", icon: "📝" },
    { title: "User Guides", href: "/resources", icon: "📚" },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.header
            className={cn(
                "sticky top-0 z-50 w-full border-b transition-all duration-300 backdrop-blur-md",
                scrolled ? "bg-white shadow-md border-border/40" : "bg-white"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <div className="container flex h-16 items-center">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <motion.div
                        initial={{ rotate: -10 }}
                        animate={{ rotate: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                        <img src='/ralas.png' width={30} height={30} />
                    </motion.div>
                    <motion.span
                        className="hidden font-bold sm:inline-block bg-clip-text from-primary to-primary-foreground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Ralas
                    </motion.span>
                </Link>
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                    {products.map((product) => (
                                        <ListItem
                                            key={product.title}
                                            title={product.title}
                                            href={product.href}
                                        >
                                            {product.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                    {resources.map((resource) => (
                                        <ListItem
                                            key={resource.title}
                                            title={resource.title}
                                            href={resource.href}
                                        >
                                            <span className="mr-2">{resource.icon}</span>
                                            {resource.title}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/about" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    About Us
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/contact" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Contact
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <nav className="hidden md:flex items-center space-x-2">
                        <Button variant="outline" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary">
                            Visit Our Store
                        </Button>

                        <Button size="sm" variant='ghost' className="text-primary hover:text-primary-foreground hover:bg-primary">
                            Call Us
                        </Button>

                        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            Book Appointment
                        </Button>
                    </nav>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-8 w-8" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <nav className="flex flex-col space-y-4">
                                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                                    <motion.div
                                        initial={{ rotate: -10 }}
                                        animate={{ rotate: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        🦻
                                    </motion.div>
                                    <span className="font-bold">HearClear</span>
                                </Link>
                                <MobileAccordionMenu title="Products" items={products} />
                                <MobileAccordionMenu title="Resources" items={resources} />
                                <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
                                <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                                <Button  variant="outline" onClick={() => setIsOpen(false)}>Visit Our Store</Button>
                                <Button variant="ghost" onClick={() => setIsOpen(false)}>Call Us</Button>
                                <Button onClick={() => setIsOpen(false)}>Book Appointment</Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    )
}


const ListItem = ({ className, title, children, ...props }) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
}

const MobileAccordionMenu = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button
                className="flex w-full items-center justify-between py-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4 space-y-2"
                    >
                        {items.map((item) => (
                            <motion.li
                                key={item.title}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -10, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link href={item.href} className="block py-1">
                                    {item.icon && <span className="mr-2">{item.icon}</span>}
                                    {item.title}
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    )
}

