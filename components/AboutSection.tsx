'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070"
                alt="Nixon Production Team"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
              {/* Glassmorphism Border */}
              <div className="absolute inset-0 border-2 border-white/10 rounded-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About Nixon Production LLC</span>
            </h2>
            <p className="text-gray-300 text-lg mb-4">
              Nixon Production LLC is a premier photography agency specializing in commercial, corporate, and event photography. With over a decade of experience, we&apos;ve partnered with leading brands and companies to create compelling visual narratives.
            </p>
            <p className="text-gray-300 text-lg mb-4">
              Our expertise spans brand photography, corporate headshots, advertising campaigns, promotional content, and comprehensive event coverage. We understand that every image tells a story, and we&apos;re committed to making yours unforgettable.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              From Fortune 500 companies to emerging startups, we deliver professional photography that elevates brands and captures the essence of every moment. Our work has been featured in major advertising campaigns, corporate publications, and promotional materials worldwide.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-card p-4 rounded-xl text-center"
              >
                <div className="text-3xl font-bold gradient-text-blue">10+</div>
                <div className="text-sm text-gray-400 mt-1">Years</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="glass-card p-4 rounded-xl text-center"
              >
                <div className="text-3xl font-bold gradient-text-accent">500+</div>
                <div className="text-sm text-gray-400 mt-1">Projects</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="glass-card p-4 rounded-xl text-center"
              >
                <div className="text-3xl font-bold gradient-text">100+</div>
                <div className="text-sm text-gray-400 mt-1">Clients</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
