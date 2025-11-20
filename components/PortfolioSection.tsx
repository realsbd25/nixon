'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

const categories = ['All', 'Brands', 'Corporate', 'Events', 'Adverts', 'Promotions']

const portfolioImages = [
  // Brands
  { id: 1, category: 'Brands', src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470', title: 'Brand Campaign' },
  { id: 2, category: 'Brands', src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470', title: 'Fashion Brand' },
  { id: 3, category: 'Brands', src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1470', title: 'Product Launch' },
  
  // Corporate
  { id: 4, category: 'Corporate', src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376', title: 'Corporate Portrait' },
  { id: 5, category: 'Corporate', src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374', title: 'Business Team' },
  { id: 6, category: 'Corporate', src: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1470', title: 'Executive Portrait' },
  
  // Events
  { id: 7, category: 'Events', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1469', title: 'Corporate Event' },
  { id: 8, category: 'Events', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1470', title: 'Conference' },
  { id: 9, category: 'Events', src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1470', title: 'Networking Event' },
  
  // Adverts
  { id: 10, category: 'Adverts', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1364', title: 'Commercial Ad' },
  { id: 11, category: 'Adverts', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374', title: 'Model Portrait' },
  { id: 12, category: 'Adverts', src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374', title: 'Beauty Campaign' },
  
  // Promotions
  { id: 13, category: 'Promotions', src: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1470', title: 'Promotional Shoot' },
  { id: 14, category: 'Promotions', src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070', title: 'Brand Ambassador' },
  { id: 15, category: 'Promotions', src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374', title: 'Product Promotion' },
]

export default function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const filteredImages = selectedCategory === 'All'
    ? portfolioImages
    : portfolioImages.filter(img => img.category === selectedCategory)

  return (
    <section id="portfolio" ref={ref} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
        >
          Portfolio
        </motion.h2>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-white text-black'
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-80 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setLightboxImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image
              src={lightboxImage}
              alt="Lightbox"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}
