'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { LanguageIcon } from '@heroicons/react/24/outline'

export function Navbar() {
  const { t, language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en')
  }

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              {t.appName}
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <LanguageIcon className="h-5 w-5 mr-2" />
              {language === 'en' ? 'English' : 'हिंदी'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 