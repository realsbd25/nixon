'use client'

import { motion } from 'framer-motion'
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-6"
          >
            {[
              { icon: Instagram, href: '#' },
              { icon: Facebook, href: '#' },
              { icon: Twitter, href: '#' },
              { icon: Linkedin, href: '#' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-gray-400">
              © {new Date().getFullYear()} LENS Photography. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
