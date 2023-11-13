import type { Metadata, Viewport } from 'next'
import '@/styles/Main.scss'

import { Oswald, Raleway } from 'next/font/google'

import Footer from '@/components/Footer/Footer'

const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })

export const metadata: Metadata = {
  metadataBase: new URL('https://sebastianwidin.se'),
  verification: {
    other: {
      ['fb:admins']: '100041376167594',
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${oswald.variable} ${raleway.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
