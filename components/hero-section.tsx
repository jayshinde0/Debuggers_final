"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const [text, setText] = useState("")
  const fullText = "Debug. Innovate. Dominate."

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center particle-bg cyber-grid">
      {/* Logo Section - Top Left */}
      <div className="absolute top-8 left-8 z-20 group">
        <div className="relative">
          {/* Glow effect container */}
          <div className="absolute -inset-2 bg-cyan-500 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          
          {/* Logo with floating animation */}
          <img 
            src="/Debuggers_png.png" 
            alt="Debuggers Club Logo"
            className="relative h-30 w-auto floating transition-transform duration-300 group-hover:scale-110" 
          />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full floating opacity-60"></div>
        <div
          className="absolute top-40 right-20 w-6 h-6 bg-purple-500 rounded-full floating opacity-40"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-3 h-3 bg-cyan-300 rounded-full floating opacity-80"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-5 h-5 bg-purple-400 rounded-full floating opacity-50"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-orbitron font-bold mb-8 glitch" data-text="DEBUGGERS">
          <span className="neon-text">DEBUGGERS</span>
        </h1>

        <div className="text-2xl md:text-4xl font-poppins font-semibold mb-8 h-16 flex items-center justify-center">
          <span className="neon-text">{text}</span>
          <span className="animate-pulse text-cyan-400">|</span>
        </div>

        <p className="text-lg md:text-xl font-montserrat text-gray-300 mb-12 max-w-2xl mx-auto">
          Join the elite community of problem solvers, innovators, and tech enthusiasts. Where code meets creativity and
          bugs become features.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-poppins font-semibold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 pulse-glow transform hover:scale-105">
            Join the Club
          </button>
          <button className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-poppins font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 holographic">
            Explore Events
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-cyan-400" size={32} />
      </div>
    </section>
  )
}