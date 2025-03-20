'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            {t.heroTitle}{' '}
            <span className="gradient-text">{t.heroHighlight}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            {t.heroDescription}
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
              {t.getStarted}
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              {t.learnMore}
            </button>
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 to-teal-400/20 rounded-full blur-3xl" />
      </div>
    </section>
  )
} 