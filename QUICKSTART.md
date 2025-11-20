# Quick Start Guide

## Run the Development Server

```bash
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000)

## What You'll See

1. **Hero Section** - Full-screen parallax background with animated text
2. **About Section** - Bio with fade-in animations
3. **Portfolio** - Filterable image gallery with lightbox
4. **Services** - Four service cards with staggered animations
5. **Testimonials** - Carousel with client reviews
6. **Contact** - Working contact form with validation
7. **Footer** - Social links

## Key Features to Test

- Scroll down to see parallax effect on hero
- Click portfolio category filters (All, Portraits, Landscapes, etc.)
- Click any portfolio image to open lightbox
- Try the mobile menu (resize browser or use mobile device)
- Submit the contact form
- Navigate using the testimonial carousel arrows
- Watch scroll progress indicator at the top

## Customization Tips

### Replace Images
All images use Unsplash URLs. Replace them with your own:
- Search for `images.unsplash.com` in component files
- Replace with your image URLs or local images in `/public`

### Update Content
- **Hero**: Edit `components/HeroSection.tsx`
- **About**: Edit `components/AboutSection.tsx`
- **Services**: Edit the `services` array in `components/ServicesSection.tsx`
- **Portfolio**: Edit the `portfolioImages` array in `components/PortfolioSection.tsx`
- **Testimonials**: Edit the `testimonials` array in `components/TestimonialsSection.tsx`
- **Contact**: Edit contact info in `components/ContactSection.tsx`

### Change Colors
Edit `app/globals.css` under `:root` to change the color scheme.

### Change Fonts
Edit `app/layout.tsx` to import different Google Fonts.

## Build for Production

```bash
pnpm build
pnpm start
```

## Deploy

This project is ready to deploy to:
- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

For Vercel:
```bash
vercel
```

Enjoy your new photography portfolio! 📸
