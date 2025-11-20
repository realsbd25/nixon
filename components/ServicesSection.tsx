'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera, Users, Mountain, PartyPopper } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    icon: Camera,
    title: 'Brand Photography',
    description: 'Elevate your brand identity with stunning visual content. From product shots to lifestyle imagery that resonates with your audience.',
    price: 'From $499'
  },
  {
    icon: Users,
    title: 'Corporate Photography',
    description: 'Professional headshots, team photos, and corporate event coverage. Perfect for websites, annual reports, and marketing materials.',
    price: 'From $399'
  },
  {
    icon: PartyPopper,
    title: 'Event Coverage',
    description: 'Comprehensive event photography for conferences, product launches, galas, and corporate celebrations. Every moment captured.',
    price: 'From $799'
  },
  {
    icon: Mountain,
    title: 'Advertising & Promotions',
    description: 'High-impact commercial photography for advertising campaigns, promotional materials, and social media content.',
    price: 'Custom Quote'
  }
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={ref} className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-800 border-zinc-700 h-full hover:bg-zinc-750 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white font-semibold text-lg">{service.price}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
