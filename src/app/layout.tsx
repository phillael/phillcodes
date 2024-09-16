import { Montserrat, Roboto } from 'next/font/google'
import MusicPlayer from '@/components/MusicPlayer'
import '@/app/globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
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
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className="font-roboto text-foreground">
        <div className="relative z-10 flex flex-col md:flex-row min-h-screen">
          {children}
        </div>
        <MusicPlayer />
      </body>
    </html>
  )
}
