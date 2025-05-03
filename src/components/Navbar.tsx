'use client';
import { Space_Grotesk, Outfit } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

// Move font declarations outside component
export const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap', // Add display swap for better loading
  variable: '--font-space-grotesk', // Add variable for CSS
});

export const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-outfit',
});

export default function Navbar() {
  return (
    <header className={`fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50 ${outfit.variable} ${spaceGrotesk.variable}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.svg" 
            alt="LumaCore Logo" 
            width={45} 
            height={45}
            className="rounded-xl shadow-blue-200 shadow-lg"
            priority // Add priority to ensure logo loads first
          />
          <div className="flex items-baseline">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-space-grotesk">
              LumaCore
            </span>
            <span className="text-2xl font-bold font-space-grotesk" style={{ color: '#c94397' }}>.dev</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-outfit">
          <Link href="/#features" className="text-gray-600 hover:text-blue-600 transition font-semibold">Features</Link>
          <Link href="/#services" className="text-gray-600 hover:text-blue-600 transition font-semibold">Services</Link>
          <Link href="/#faq" className="text-gray-600 hover:text-blue-600 transition font-semibold">FAQ</Link>
          <Link href="/contact-us" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-semibold">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}