"use client"

import { Github, Linkedin, Twitter, Instagram, ChevronUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-black border-t border-cyan-400 border-opacity-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-orbitron font-bold neon-text mb-4">{"</>"}</div>
            <p className="font-montserrat text-gray-300 mb-6 max-w-md">
              Debuggers Club - Where passionate developers come together to innovate, learn, and build the future of
              technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-poppins font-semibold neon-text mb-4">Quick Links</h3>
            <ul className="space-y-2 font-montserrat text-gray-300">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#members" className="hover:text-cyan-400 transition-colors duration-300">
                  Members
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-cyan-400 transition-colors duration-300">
                  Events
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-cyan-400 transition-colors duration-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-poppins font-semibold neon-text mb-4">Stay Updated</h3>
            <p className="font-montserrat text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and events.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-cyan-400 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white font-montserrat text-sm"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-r-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300">
                <span className="sr-only">Subscribe</span>→
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-montserrat text-gray-400 text-sm">© 2025 Debuggers Club. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="font-montserrat text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-montserrat text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 pulse-glow transform hover:scale-110 z-40"
      >
        <ChevronUp className="text-white" size={24} />
      </button>
    </footer>
  )
}
