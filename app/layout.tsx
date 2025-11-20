import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nixon Production LLC - Professional Photography Agency",
  description: "Premier photography agency specializing in brand photography, corporate events, advertising campaigns, and promotional content for leading companies worldwide.",
};

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        <Navigation />
        {children}
        <TestimonialsSection />
        <Footer />
      </body>
    </html>
  );
}
