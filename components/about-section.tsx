"use client"

import { useEffect, useState } from "react"
import { Code, Users, Lightbulb, Trophy } from "lucide-react"

export default function AboutSection() {
  const [counters, setCounters] = useState({ members: 0, events: 0, projects: 0 })

  useEffect(() => {
    const targets = { members: 25, events: 10, projects: 25 }
    const duration = 2000
    const steps = 60

    Object.keys(targets).forEach((key) => {
      const target = targets[key as keyof typeof targets]
      const increment = target / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }))
      }, duration / steps)
    })
  }, [])

  const values = [
    { icon: Code, title: "Innovation", description: "Pushing boundaries with cutting-edge solutions" },
    { icon: Users, title: "Collaboration", description: "Building together, growing together" },
    { icon: Lightbulb, title: "Learning", description: "Continuous growth and knowledge sharing" },
    { icon: Trophy, title: "Excellence", description: "Striving for perfection in every project" },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold neon-text mb-6">About Us</h2>
          <p className="text-xl font-montserrat text-gray-300 max-w-3xl mx-auto">
            We are a community of passionate developers, designers, and tech enthusiasts dedicated to solving complex
            problems and building innovative solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center holographic p-8 rounded-lg">
            <div className="text-4xl font-orbitron font-bold neon-text mb-2">{counters.members}+</div>
            <div className="text-lg font-montserrat text-gray-300">Active Members</div>
          </div>
          <div className="text-center holographic p-8 rounded-lg">
            <div className="text-4xl font-orbitron font-bold neon-text mb-2">{counters.events}+</div>
            <div className="text-lg font-montserrat text-gray-300">Upcoming events</div>
          </div>
          <div className="text-center holographic p-8 rounded-lg">
            <div className="text-4xl font-orbitron font-bold neon-text mb-2">{counters.projects}+</div>
            <div className="text-lg font-montserrat text-gray-300">Projects Completed</div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center holographic p-6 rounded-lg hover:cyber-glow transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 flex justify-center">
                <value.icon className="text-cyan-400" size={48} />
              </div>
              <h3 className="text-xl font-poppins font-semibold neon-text mb-3">{value.title}</h3>
              <p className="font-montserrat text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
