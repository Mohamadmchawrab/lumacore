import { footer } from "framer-motion/client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
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
            <p className="text-gray-400 mt-4">
              Building the future of digital solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Custom Software</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">SaaS Platforms</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 flex flex-col">
              <Link href="/about-us" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/contact-us" className="hover:text-white transition-colors">Contact</Link>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LumaCore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
