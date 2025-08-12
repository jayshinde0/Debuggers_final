"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900 cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold neon-text mb-6">Contact Us</h2>
          <p className="text-xl font-montserrat text-gray-300 max-w-3xl mx-auto">
            Ready to join the debugging revolution? Get in touch with us!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="holographic p-6 rounded-lg">
              <h3 className="text-2xl font-poppins font-semibold neon-text mb-6">Get In Touch</h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-cyan-400 mr-4" size={24} />
                  <div>
                    <p className="font-montserrat font-medium text-white">Email</p>
                    <p className="font-montserrat text-gray-300">debuggersclubkkwieer@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="text-cyan-400 mr-4" size={24} />
                  <div>
                    <p className="font-montserrat font-medium text-white">Phone</p>
                    <p className="font-montserrat text-gray-300">9370458094</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="text-cyan-400 mr-4" size={24} />
                  <div>
                    <p className="font-montserrat font-medium text-white">Location</p>
                    <p className="font-montserrat text-gray-300">Computer Science Department</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="holographic p-6 rounded-lg">
              <h3 className="text-xl font-poppins font-semibold neon-text mb-4">Office Hours</h3>
              <div className="space-y-2 font-montserrat text-gray-300">
                <p>Monday - Friday: 2:00 PM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="holographic p-8 rounded-lg">
            <h3 className="text-2xl font-poppins font-semibold neon-text mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-montserrat font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-cyan-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white font-montserrat transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-montserrat font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-cyan-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white font-montserrat transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-montserrat font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-cyan-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white font-montserrat transition-all duration-300"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-montserrat font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-cyan-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white font-montserrat transition-all duration-300 resize-none"
                  placeholder="Tell us more..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-montserrat font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 pulse-glow flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2" size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
