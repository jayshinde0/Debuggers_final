import type React from "react"
import { Orbitron, Poppins, Montserrat } from "next/font/google"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-montserrat",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${poppins.variable} ${montserrat.variable} antialiased`}>
      <body className="bg-black text-white overflow-x-hidden">{children}</body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
