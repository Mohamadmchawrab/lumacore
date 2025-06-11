"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const projects = [
    {
      title: "Imageni AI",
      description: "A cutting-edge AI platform for generating high-quality images.",
      link: "https://imageniai.com",
      image: "/feature-image.png"
    },
    {
      title: "SmartInvoice",
      description: "A full Invoice management system with AI capabilities.",
      link: "#",
      image: "/projects/sync.svg",
      comingSoon: true
    },
    {
      title: "CloudFlow",
      description: "Cloud-native workflow automation solution.",
      link: "#",
      image: "/projects/cloud.svg",
      comingSoon: true
    }
  ];

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="bg-gradient-to-b from-black to-blue-900 min-h-screen">
      <header className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About lumaCore
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Empowering businesses through innovative technology solutions since 2018
          </motion.p>
        </div>
      </header>
      <div className="bg-gradient-to-b from-blue-1000 to-black">
      <main className="container mx-auto px-4 py-16">
        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-[#111111] rounded-xl border border-[#222222] hover:border-[#333333] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-gray-400 mb-6">
                At lumaCore, we're dedicated to empowering businesses with
                cutting-edge software solutions that drive growth and
                innovation. Our mission is to transform digital landscapes and
                create lasting impact through technology.
              </p>
              <ul className="space-y-4">
                {[
                  "Building scalable solutions",
                  "Driving digital transformation",
                  "Creating innovative experiences",
                  "Delivering measurable results",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 text-gray-400"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="">✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="relative h-[400px]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="/about-us.png"
                alt="Our Mission"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mt-16">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group bg-[#111111] rounded-xl border border-[#222222] hover:border-[#333333] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={project.link}
                  className="block p-6 h-full"
                  target={project.link !== "#" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <div className="relative h-40 mb-6 bg-[#0a0a0a] rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    {project.comingSoon ? (
                      <span className="text-xs font-semibold px-2 py-1 bg-[#222222] text-gray-400 rounded-full">
                        Coming Soon
                      </span>
                    ) : (
                      <motion.span 
                        className="text-[#5651e5]"
                        whileHover={{ x: 5 }}
                      >
                        →
                      </motion.span>
                    )}
                  </div>
                  <p className="text-gray-400">
                    {project.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main></div>
    </div>
  );
}
