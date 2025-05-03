'use client';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      <header className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Let's discuss how we can help transform your business
          </motion.p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Contact Information
            </h2>
            
            {[
              { icon: "📍", "title": "Address", "content": "Lebanon, Beirut Sin El Fil, Cubic Center, Block B" },
              { icon: "📧", title: "Email", content: "support@lumacore.com" },
              { icon: "📞", title: "Phone", content: " (+961) 71480345" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">{item.title}</h3>
                  <p className="text-gray-800">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 bg-white p-8 rounded-2xl shadow-lg"
          >
            <div>
              <label className="block text-gray-800 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-800 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                placeholder="Your message..."
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </main>
       {/* WhatsApp Chat Button */}
            <a
              href="https://wa.me/96171480345"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-4 right-4 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
              aria-label="Chat with us on WhatsApp"
            >
              <Image
                src="/whatsapp-logo.png"
                alt="WhatsApp"
                width={52}
                height={52}
                className="object-contain"
              />
            </a>
    </div>
  );
}