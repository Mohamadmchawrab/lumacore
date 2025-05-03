import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
            <div className="flex items-baseline">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-space-grotesk">
              LumaCore
            </span>
            <span className="text-2xl font-bold font-space-grotesk" style={{ color: '#c94397' }}>.dev</span>
          </div>
              <p className="text-gray-400">
                Building the future of digital solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Custom Software</li>
                <li>SaaS Platforms</li>
                <li>Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400  flex flex-col">
                <Link href='/about-us'>About Us</Link>
                <Link href='contact-us'>Contact</Link>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 lumaCore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
