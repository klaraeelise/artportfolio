// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
//import { Inter, Crimson_Pro } from 'next/font/google'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"

//const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
//const crimson = Crimson_Pro({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: "Klaras Portfolio",
  description: "A portfolio showcasing my programming projects, research, poetry, and more.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-[url('/jellies.jpg')] bg-cover bg-center bg-fixed text-moonlight font-sans`}>
        {/* Overlay to improve text readability */}
        <div className="bg-abyss/80 min-h-screen backdrop-blur-sm">
          <header className="flex items-center justify-between px-6 py-4 shadow bg-abyss/90">
            <Navbar />
            <Image
              src="/profilepic.png"
              alt="Klaras profile"
              width={96}
              height={96}
              className="rounded-full border border-sky-200 shadow-sm"
            />
          </header>

          <main className="flex-1 px-6 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
