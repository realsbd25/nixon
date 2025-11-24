'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const featuredProjects = [
    {
        id: 1,
        category: 'Brand',
        src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470',
        title: 'Luxury Brand Campaign',
    },
    {
        id: 2,
        category: 'Corporate',
        src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376',
        title: 'Executive Portraits',
    },
    {
        id: 3,
        category: 'Event',
        src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469',
        title: 'Corporate Gala',
    },
    {
        id: 4,
        category: 'Advert',
        src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1364',
        title: 'Fashion Campaign',
    },
    {
        id: 5,
        category: 'Brand',
        src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470',
        title: 'Product Launch',
    },
    {
        id: 6,
        category: 'Event',
        src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1470',
        title: 'Tech Conference',
    },
]

export default function PortfolioPreview() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section ref={ref} className="section-padding bg-zinc-900 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text-accent">Featured Work</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A glimpse into our portfolio of exceptional photography projects
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
                        >
                            <Image
                                src={project.src}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="inline-block px-3 py-1 bg-gradient-primary text-white text-xs font-semibold rounded-full mb-2">
                                    {project.category}
                                </span>
                                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-2xl transition-all duration-300" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center"
                >
                    <Link href="/portfolio">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-accent text-white font-semibold rounded-full hover:shadow-glow transition-all duration-300 inline-flex items-center gap-2"
                        >
                            View Full Portfolio
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
