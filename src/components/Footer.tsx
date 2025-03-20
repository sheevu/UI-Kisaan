'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.appName}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t.footerDescription}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                  {t.about}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                  {t.featuresLink}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.connect}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} {t.appName}. {t.rights}</p>
        </div>
      </div>
    </footer>
  )
} 