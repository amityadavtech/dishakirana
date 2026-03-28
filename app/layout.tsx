import type { Metadata, Viewport } from 'next'
import { Poppins, Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: '--font-poppins'
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: '--font-syne'
});

export const metadata: Metadata = {
  title: 'Disha Kirana Store - Home Delivery Grocery',
  description: 'Disha Kirana - Your trusted local grocery store with fast home delivery. Fresh produce, daily essentials, and exclusive credit facility up to Rs. 15,000. Order via call or WhatsApp.',
  generator: 'v0.app',
  keywords: ['grocery', 'home delivery', 'local store', 'fresh produce', 'kirana'],
  authors: [{ name: 'Disha Kirana' }],
  openGraph: {
    title: 'Disha Kirana Store - Home Delivery Grocery',
    description: 'Your trusted local grocery store with fast home delivery',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon1-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon1-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon1.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon1.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#22c55e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${syne.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
