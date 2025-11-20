'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070"
                alt="Nixon Production Team"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Nixon Production LLC
            </h2>
            <p className="text-gray-300 text-lg mb-4">
              Nixon Production LLC is a premier photography agency specializing in commercial, corporate, and event photography. With over a decade of experience, we&apos;ve partnered with leading brands and companies to create compelling visual narratives.
            </p>
            <p className="text-gray-300 text-lg mb-4">
              Our expertise spans brand photography, corporate headshots, advertising campaigns, promotional content, and comprehensive event coverage. We understand that every image tells a story, and we&apos;re committed to making yours unforgettable.
            </p>
            <p className="text-gray-300 text-lg">
              From Fortune 500 companies to emerging startups, we deliver professional photography that elevates brands and captures the essence of every moment. Our work has been featured in major advertising campaigns, corporate publications, and promotional materials worldwide.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
