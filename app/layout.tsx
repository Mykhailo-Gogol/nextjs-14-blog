import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog | This page has a title 🤔',
  description: 'Blog | This page has a description',
  applicationName: 'Bbbbblog',
  keywords: ['blog, nextjs'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        <main>
          <Header />
          {children}

          <Footer />
        </main>
      </body>
    </html>
  )
}
