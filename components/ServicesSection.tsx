'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera, Users, Mountain, PartyPopper } from 'lucide-react'
import Tilt from 'react-parallax-tilt'

const services = [
  {
    icon: Camera,
    title: 'Brand Photography',
    description: 'Elevate your brand identity with stunning visual content. From product shots to lifestyle imagery that resonates with your audience.',
    price: 'From $499',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Corporate Photography',
    description: 'Professional headshots, team photos, and corporate event coverage. Perfect for websites, annual reports, and marketing materials.',
    price: 'From $399',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: PartyPopper,
    title: 'Event Coverage',
    description: 'Comprehensive event photography for conferences, product launches, galas, and corporate celebrations. Every moment captured.',
    price: 'From $799',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Mountain,
    title: 'Advertising & Promotions',
    description: 'High-impact commercial photography for advertising campaigns, promotional materials, and social media content.',
    price: 'Custom Quote',
    gradient: 'from-cyan-500 to-blue-500',
  }
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={ref} className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
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
          <span className="gradient-text">Services</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          Professional photography solutions tailored to your unique needs
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.02}
              >
                <div className="glass-card p-6 rounded-2xl h-full hover-lift group">
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <p className="text-white font-semibold text-lg gradient-text-blue">{service.price}</p>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
