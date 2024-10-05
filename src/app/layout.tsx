import { Audiowide, Jura } from 'next/font/google'
import '@/app/globals.css'

const audiowide = Audiowide({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-audiowide',
})

const jura = Jura({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-jura',
})

export const metadata = {
  title: 'Phill Aelony - Space Portfolio',
  description: 'A space-themed portfolio showcasing my skills and projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${audiowide.variable} ${jura.variable}`}>
      <body className="font-jura text-foreground">
        <div className="flex flex-col md:flex-row min-h-screen">{children}</div>
      </body>
    </html>
  )
}
