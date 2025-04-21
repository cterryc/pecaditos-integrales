import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { CartProvider } from '@/contexts/CartContext'
import type React from 'react' // Import React

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pecaditos Integrales',
  description:
    'Discover our collection of elegant and stylish handbags for women.',
  generator: 'v0.dev',
  icons: {
    icon: 'https://olaclick-assets-prod.s3.amazonaws.com/companies/logos/5493e220-8ea1-4c33-9899-e12dfc16dc97.webp',
    shortcut:
      'https://olaclick-assets-prod.s3.amazonaws.com/companies/logos/5493e220-8ea1-4c33-9899-e12dfc16dc97.webp'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
