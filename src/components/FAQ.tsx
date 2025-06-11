'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What services does lumaCore offer?",
      a: "We provide custom software development, SaaS platform creation, digital transformation consulting, and enterprise solutions tailored to your business needs."
    },
    {
      q: "How long does a typical project take?",
      a: "Project timelines vary based on complexity and scope. Most projects range from 2-6 months, but we'll provide a detailed timeline during our initial consultation."
    },
    {
      q: "Do you provide ongoing support?",
      a: "Yes, we offer comprehensive support and maintenance packages to ensure your solutions continue to perform optimally after launch."
    },
    {
      q: "What technologies do you work with?",
      a: "We specialize in modern web technologies including React, Node.js, Python, and cloud platforms like AWS and Azure. Our stack is always optimized for your specific needs."
    },
    {
      q: "How do you ensure project success?",
      a: "We follow an agile methodology with regular client communication, iterative development, and comprehensive testing to ensure project success."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-white  bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white-50 transition"
              >
                <h3 className="text-xl font-bold text-white">{faq.q}</h3>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-white"
                >
                  ▼
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: "auto", 
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.3, delay: 0.1 }
                      }
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2 }
                      }
                    }}
                  >
                    <div className="px-6 pb-6 mt-2">
                      <p className="text-gray-200">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}