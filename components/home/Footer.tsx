import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">RALAS</h3>
            <p className="text-gray-400">Transforming lives through better hearing.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/product/behind-the-ear-aids" className="text-gray-400 hover:text-white">Behind The Ear Aids</Link></li>
              <li><Link href="/product/rechargeable-aids" className="text-gray-400 hover:text-white">Rechargeable Aids</Link></li>
              <li><Link href="/product/in-ear-aids" className="text-gray-400 hover:text-white">In Ear</Link></li>
              <li><Link href="/product/smart-hearing-aids" className="text-gray-400 hover:text-white">Smart Hearing Aids</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/support/faq" className="text-gray-400 hover:text-white">FAQs</Link></li>
              <li><Link href="/support/user-guide" className="text-gray-400 hover:text-white">User Guide</Link></li>
              <li><Link href="/support/warranty" className="text-gray-400 hover:text-white">Warranty</Link></li>
              <li><Link href="/support/returns" className="text-gray-400 hover:text-white">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2023 RALAS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

