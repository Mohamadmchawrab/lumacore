'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function Contact() {
  return (
    <div className="bg-black text-gray-300 min-h-screen">
      <Navbar />
      <header className="pt-32 pb-20 ">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent">
              Contact Information
            </h2>
            
            {[
              { icon: "📍", "title": "Address", "content": "2261 Market Street STE 85170, San Francisco, CA 94114" },
              { icon: "📧", title: "Email", content: "info@lumacore.com" },
              { icon: "📞", title: "Phone", content: " (+961) 71480345" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="w-12 h-12 bg-blue-900/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl border border-blue-800/30">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-blue-300 text-lg">{item.title}</h3>
                  <p className="text-gray-300">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 bg-blue-900/20 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-800/30"
          >
            <div>
              <label className="block text-blue-300 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg bg-blue-900/30 border border-blue-800/30 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-blue-300 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-blue-900/30 border border-blue-800/30 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-blue-300 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-blue-900/30 border border-blue-800/30 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition"
                placeholder="Your message..."
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-pink-500 to-blue-400 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </main>
    </div>
  );
}