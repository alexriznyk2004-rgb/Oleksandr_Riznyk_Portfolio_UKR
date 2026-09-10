import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-archivo',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Олександр Різник — CG Artist / 3D Visualizer / Interior Designer',
  description:
    'CV Олександра Різника — дизайнера інтер’єру та 3D-візуалізатора, що спеціалізується на фотореалістичній архітектурній та продуктовій візуалізації.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#edece8',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
