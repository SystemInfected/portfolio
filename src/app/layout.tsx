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
  maximumScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <meta charSet='utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover'
      />
      <body className={`${oswald.variable} ${raleway.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
