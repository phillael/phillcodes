import { VT323 } from 'next/font/google'
import AnimatedBackground from '@/components/AnimatedBackground'
import MusicPlayer from '@/components/MusicPlayer'
import '@/app/globals.css'

const vt323 = VT323({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Phill Aelony - Retro Portfolio',
  description: 'A retro-styled portfolio showcasing my skills and projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${vt323.className} text-foreground`}>
        <AnimatedBackground />
        <div className="relative z-10 flex flex-col md:flex-row min-h-screen">
          {children}
        </div>
        <MusicPlayer />
      </body>
    </html>
  )
}
