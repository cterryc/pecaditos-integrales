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
    'Descubre nuestra deliciosa colección de productos integrales artesanales.',
  generator: 'v0.dev',
  icons: {
    icon: '/logoPecaditos.webp',
    shortcut: '/logoPecaditos.webp'
  },
  openGraph: {
    title: 'Pecaditos Integrales',
    description:
      'Descubre nuestra deliciosa colección de productos integrales artesanales.',
    images: [
      {
        url: '/logoPecaditos.webp',
        width: 1200,
        height: 630,
        alt: 'Pecaditos Integrales Logo'
      }
    ]
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
