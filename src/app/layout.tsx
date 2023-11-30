import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js" defer></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
