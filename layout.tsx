import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LanguageProvider } from '@/context/LanguageContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chat with AI Sathi, by Sudarshan Labs.',
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
          <header className="p-4 bg-blue-500 text-white flex justify-between items-center">
            <h1>Chat with AI Sathi</h1>
            <div>
              <button className="mr-2 p-2 bg-green-500 rounded">Talk</button>
              <button className="p-2 bg-yellow-500 rounded">Upload Image</button>
            </div>
          </header>
          <main>
            {children}
            <section className="p-4">
              <h2>Features</h2>
              <ul>
                <li><a href="#feature1" className="text-blue-500">Feature 1</a></li>
                <li><a href="#feature2" className="text-blue-500">Feature 2</a></li>
                <li><a href="#feature3" className="text-blue-500">Feature 3</a></li>
              </ul>
            </section>
          </main>
          <footer className="p-4 bg-blue-500 text-white text-center">
            <p>© 2025 Sudarshan AI Labs</p>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  )
}
