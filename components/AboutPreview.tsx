'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Camera, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function AboutPreview() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const highlights = [
        { icon: Award, label: '10+ Years', description: 'Industry Experience' },
        { icon: Users, label: '100+', description: 'Happy Clients' },
        { icon: Camera, label: '500+', description: 'Projects Completed' },
        { icon: TrendingUp, label: 'Top Rated', description: 'Photography Agency' },
    ]

    return (
        <section ref={ref} className="section-padding bg-gradient-dark relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">About Nixon Production</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        A premier photography agency specializing in commercial, corporate, and event photography.
                        We create compelling visual narratives that elevate brands and capture unforgettable moments.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-card p-6 rounded-2xl text-center hover-lift"
                        >
                            <item.icon className="w-10 h-10 mx-auto mb-3 text-purple-400" />
                            <div className="text-2xl font-bold gradient-text mb-1">{item.label}</div>
                            <div className="text-sm text-gray-400">{item.description}</div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                >
                    <Link href="/about">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-primary text-white font-semibold rounded-full hover:shadow-glow transition-all duration-300"
                        >
                            Learn More About Us
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
