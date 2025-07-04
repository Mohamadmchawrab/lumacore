"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Navbar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-blue-950">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent">
                Transform Your Digital Future
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Empowering businesses with cutting-edge software solutions and
                innovative technology.
              </p>
              <div className="flex gap-4 mt-8">
                <motion.button
                  className="bg-gradient-to-r from-pink-500 to-blue-400 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => (window.location.href = "/contact-us")}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[400px]"
            >
              <Image
                src="/hero-illustration.png"
                alt="Digital Transformation"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gradient-to-b from-blue-950 to-black">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Choose LumaCore?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Lightning Fast",
                  description:
                    "Optimized performance for seamless user experience",
                  icon: "⚡",
                },
                {
                  title: "Highly Secure",
                  description:
                    "Enterprise-grade security for your peace of mind",
                  icon: "🔒",
                },
                {
                  title: "24/7 Support",
                  description:
                    "Round-the-clock expert assistance when you need it",
                  icon: "🌟",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-900/20 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-800/30 text-white"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-blue-300">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-blue-900/20 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-800/30 text-white"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold mb-4 text-blue-300">Custom Software</h3>
                <p className="text-gray-300">
                  Tailored solutions that transform your business operations.
                </p>
              </motion.div>
              <motion.div
                className="bg-blue-900/20 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-800/30 text-white"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold mb-4 text-blue-300">SaaS Platforms</h3>
                <p className="text-gray-300">
                  Scalable platforms that grow with your business.
                </p>
              </motion.div>
              <motion.div
                className="bg-blue-900/20 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-800/30 text-white"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold mb-4 text-blue-300">Consulting</h3>
                <p className="text-gray-300">
                  Expert guidance for digital transformation.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* WhatsApp Chat Button */}
      {/* <a
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
      </a> */}
    </div>
  );
}
