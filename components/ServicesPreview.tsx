'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera, Users, PartyPopper, Mountain } from 'lucide-react'
import Link from 'next/link'
import Tilt from 'react-parallax-tilt'

const services = [
    {
        icon: Camera,
        title: 'Brand Photography',
        description: 'Elevate your brand with stunning visual content',
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        icon: Users,
        title: 'Corporate Photography',
        description: 'Professional headshots and team photos',
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        icon: PartyPopper,
        title: 'Event Coverage',
        description: 'Comprehensive event photography',
        gradient: 'from-pink-500 to-rose-500',
    },
    {
        icon: Mountain,
        title: 'Advertising',
        description: 'High-impact commercial photography',
        gradient: 'from-cyan-500 to-blue-500',
    },
]

export default function ServicesPreview() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section ref={ref} className="section-padding bg-black relative overflow-hidden">
            {/* Animated Background */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"
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
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text-blue">Our Services</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Comprehensive photography solutions tailored to your needs
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                                    <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-gray-400">{service.description}</p>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-center"
                >
                    <Link href="/services">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-blue text-white font-semibold rounded-full hover:shadow-glow transition-all duration-300"
                        >
                            View All Services
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
