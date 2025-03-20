'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

export function AIChat() {
  const { t } = useLanguage()
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add chat functionality here
    setMessage('')
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t.chatTitle}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t.chatSubtitle}
          </p>
        </div>
        
        <div className="glass-panel p-6">
          <div className="min-h-[200px] mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-600 dark:text-gray-300">{t.demoResponse}</p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex space-x-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.messagePlaceholder}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <PaperAirplaneIcon className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
} 