'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Link from 'next/link'

const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'hello@nixonproduction.com',
        href: 'mailto:hello@nixonproduction.com',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+1 (555) 123-4567',
        href: 'tel:+15551234567',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'New York, NY',
        href: '#',
    },
]

export default function ContactPreview() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section ref={ref} className="section-padding bg-gradient-dark relative overflow-hidden">
            {/* Background Effects */}
            <motion.div
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"
                animate={{
                    scale: [1.3, 1, 1.3],
                    opacity: [0.4, 0.2, 0.4],
                }}
                transition={{
                    duration: 10,
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
                        <span className="gradient-text">Let&apos;s Work Together</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Ready to elevate your brand with professional photography? Get in touch with us today.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                    {contactInfo.map((info, index) => (
                        <motion.a
                            key={info.label}
                            href={info.href}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-card p-6 rounded-2xl text-center hover-lift group"
                        >
                            <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <info.icon className="w-7 h-7 text-white" />
                            </div>
                            <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                            <div className="text-white font-semibold">{info.value}</div>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                >
                    <Link href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-primary text-white font-semibold rounded-full hover:shadow-glow transition-all duration-300 inline-flex items-center gap-2 animate-glow-pulse"
                        >
                            <Send className="w-5 h-5" />
                            Get In Touch
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Decorative Elements */}
                <div className="mt-16 flex justify-center gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="w-2 h-2 bg-purple-500 rounded-full"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="w-2 h-2 bg-blue-500 rounded-full"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="w-2 h-2 bg-pink-500 rounded-full"
                    />
                </div>
            </div>
        </section>
    )
}
