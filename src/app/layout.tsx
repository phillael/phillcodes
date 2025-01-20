import { ReactNode } from 'react'
import { Audiowide, Nunito } from 'next/font/google'
import '@/app/globals.css'

const audiowide = Audiowide({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-audiowide',
})

const nunito = Nunito({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-nunito',
})

export const metadata = {
  title: 'Phill Aelony - Space Portfolio',
  description: 'A space-themed portfolio showcasing my skills and projects',
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={`${audiowide.variable} ${nunito.variable}`}>
      <body className="font-nunito text-foreground">
        <div className="flex flex-col md:flex-row md:h-screen w-full md:overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout
