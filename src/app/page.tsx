'use client'

import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import AIChat from '@/components/AIChat'; // ✅ Use default import

import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <Hero />
      <Features />
      <AIChat />
      <Footer />
    </main>
  )
} 
