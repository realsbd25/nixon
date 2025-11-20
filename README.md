# LENS - Professional Photography Portfolio

A stunning, modern photography portfolio website built with Next.js 14+, featuring smooth animations, parallax effects, and an immersive user experience.

## Features

- **Hero Section**: Full-screen parallax background with animated headline and scroll indicator
- **About Section**: Photographer bio with fade-in animations on scroll
- **Portfolio Gallery**: Filterable image grid with lightbox functionality and hover effects
- **Services**: Animated service cards with staggered entrance animations
- **Testimonials**: Smooth carousel with client reviews
- **Contact Form**: Validated contact form with animated submit button
- **Responsive Design**: Mobile-first approach with hamburger menu
- **Dark Theme**: Elegant charcoal and white color scheme

## Tech Stack

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Framer Motion** for animations
- **React Parallax Tilt** for parallax effects

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── HeroSection.tsx     # Hero with parallax
│   ├── AboutSection.tsx    # About section
│   ├── PortfolioSection.tsx # Gallery with filters
│   ├── ServicesSection.tsx  # Services cards
│   ├── TestimonialsSection.tsx # Testimonials carousel
│   ├── ContactSection.tsx   # Contact form
│   ├── Navigation.tsx       # Responsive nav
│   ├── Footer.tsx          # Footer with socials
│   └── ui/                 # shadcn/ui components
└── lib/
    └── utils.ts            # Utility functions
```

## Animations & Effects

- **Parallax scrolling** on hero background
- **Fade-in animations** for sections using Framer Motion's `whileInView`
- **Staggered animations** for gallery images and service cards
- **Hover effects** with scale and brightness transitions
- **Smooth page transitions** throughout
- **Mobile menu** with slide-in animation and backdrop blur

## Customization

### Images
Replace the Unsplash URLs in the components with your own images:
- Hero: `components/HeroSection.tsx`
- About: `components/AboutSection.tsx`
- Portfolio: `components/PortfolioSection.tsx`

### Content
Update text content in each component file to match your brand and services.

### Colors
Modify the color scheme in `app/globals.css` under the `:root` section.

### Fonts
Change fonts in `app/layout.tsx` by importing different Google Fonts.

## Performance Optimizations

- Next.js Image component for automatic image optimization
- Lazy loading for images
- Smooth scroll behavior
- Optimized animations with Framer Motion
- Mobile-first responsive design

## License

MIT License - feel free to use this for your own photography portfolio!

## Credits

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- UI components from [shadcn/ui](https://ui.shadcn.com)
