import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LanguageProvider } from '@/context/LanguageContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kisaan Sathi GPT',
  description: 'Your intelligent farming assistant by SUDARSHAN AI LABS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
} 