'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import {
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  CpuChipIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline'

interface Feature {
  title: string
  description: string
}

const featureIcons = {
  conversations: ChatBubbleLeftRightIcon,
  smartAssistance: SparklesIcon,
  advancedAI: CpuChipIcon,
  creative: LightBulbIcon
}

export function Features() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            {t.featuresTitle}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t.featuresSubtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(t.features).map(([key, feature]) => {
            const Icon = featureIcons[key as keyof typeof featureIcons]
            const typedFeature = feature as Feature
            return (
              <div key={key} className="glass-panel p-6">
                <Icon className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{typedFeature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{typedFeature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 