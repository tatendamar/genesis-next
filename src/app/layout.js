import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'
import Providers from './Providers'
import Navbar from '@/components/Navbar'

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api'
        


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Genesis Next Project',
    template: '%s - Genesis Next Project',
  },
  description: 'Genesis Next Project',
  openGraph: {
    title: 'Genesis Next Project',
    description: 'Genesis Next Project',
    type: 'website',
    url: 'https://www.genesisnextproject.com',
    siteName: 'Dev',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <PrimeReactProvider>
            <Header />
            <Navbar />
            {children}
          </PrimeReactProvider>
        </Providers>
      </body>
    </html>
  )
}
