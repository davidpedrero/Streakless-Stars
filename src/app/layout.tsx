import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/navbar';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Streakless Stars',
  description: 'A professional window cleaning business that offers its services to both commercial and residential establishments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={`${inter.className} bg-gray-900 w-screen`}>
        <div className='min-h-screen'>
          <Navbar />
          <main className='h-fit min-h-screen bg-blue-200'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
