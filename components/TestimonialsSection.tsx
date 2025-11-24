'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Jennifer Williams',
    role: 'Chief Marketing Officer, GlobalTech Solutions',
    content: 'Nixon Production transformed our entire brand visual strategy. Their team captured our product launch event with such precision and artistry that the images became the centerpiece of our international marketing campaign. The ROI on their work has been exceptional.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376'
  },
  {
    name: 'Robert Chen',
    role: 'CEO & Founder, InnovateCorp',
    content: "We've worked with numerous photography agencies, but Nixon Production stands apart. Their understanding of corporate branding and ability to capture authentic moments during our annual conference was remarkable. The executive portraits they delivered elevated our entire leadership team's presence.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374'
  },
  {
    name: 'Amanda Foster',
    role: 'Vice President of Brand Strategy, Luxe Fashion Group',
    content: "Nixon Production brought our fashion campaign to life in ways we never imagined. Their creative direction and technical expertise resulted in advertising content that increased our engagement by 340%. They don't just take photos—they tell compelling brand stories.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1374'
  },
  {
    name: 'David Martinez',
    role: 'Chief Operating Officer, Premier Events International',
    content: "For our Fortune 500 client events, we trust only Nixon Production. Their professionalism, attention to detail, and ability to capture the energy of large-scale corporate gatherings is unmatched. They've become an integral part of our event success formula.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374'
  },
  {
    name: 'Sarah Thompson',
    role: 'Executive Director of Communications, HealthFirst Medical',
    content: 'Nixon Production handled our sensitive healthcare promotional campaign with incredible professionalism and empathy. The images they created for our patient stories and facility showcases have been instrumental in building trust with our community. Simply outstanding work.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1374'
  }
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isPaused])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      id="testimonials"
      ref={ref}
      className="section-padding bg-gradient-dark relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated Background */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          <span className="gradient-text">Client Testimonials</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        >
          Trusted by leading brands and executives worldwide
        </motion.p>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-purple-500/30">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-300 text-lg mb-6 italic">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </p>

                  <div>
                    <p className="text-white font-semibold text-xl gradient-text-blue">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-gray-400">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full glass-card text-white hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full glass-card text-white hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${index === currentIndex ? 'bg-gradient-primary w-8' : 'bg-zinc-600 w-2'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
