import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  description:
    'An open source feature flag platform built for performance, stability, and feature richness.',
  title: 'Togglr',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="dark" lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
