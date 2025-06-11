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
    <header className={`fixed w-full bg-black/95 backdrop-blur-sm border-b border-white/10 z-50 ${outfit.variable} ${spaceGrotesk.variable}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo-rm.png" 
            alt="LumaCore Logo" 
            width={100} 
            height={65}
            className="rounded-xl shadow-lg bg-black"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-outfit">
          <Link href="/#features" className="text-white/70 hover:text-white transition-colors font-semibold">Features</Link>
          <Link href="/#services" className="text-white/70 hover:text-white transition-colors font-semibold">Services</Link>
          <Link href="/#faq" className="text-white/70 hover:text-white transition-colors font-semibold">FAQ</Link>
          <Link href="/contact-us" className="bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 text-white px-6 py-2 rounded-full transition-all font-semibold border border-white/20">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}