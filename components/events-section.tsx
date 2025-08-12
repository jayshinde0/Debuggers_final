"use client"

import { useState } from "react"
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react"

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)

  const events = [
    {
      id: 1,
      title: "Teachers' Day Celebration",
      date: "2024-09-05",
      time: "10:00 AM - 2:00 PM",
      location: "College Auditorium",
      attendees: 0,
      description: "Honoring our faculty with cultural performances and awards ceremony.",
      image: "/teachers-day.png",
      status: "upcoming",
      type: "Non-Technical"
    },
    {
      id: 2,
      title: "Debuggers Hackathon",
      date: "2024-10-15",
      time: "9:00 AM - 9:00 PM",
      location: "Computer Center",
      attendees: 0,
      description: "12-hour coding competition with exciting problem statements and prizes.",
      image: "/hackathon.jpg",
      status: "upcoming",
      type: "Technical"
    },
    {
      id: 3,
      title: "Engineering Day Exhibition",
      date: "2024-09-15",
      time: "11:00 AM - 4:00 PM",
      location: "Main Campus Ground",
      attendees: 0,
      description: "Showcase of student projects and innovations across engineering disciplines.",
      image: "/engineering-day.jpg",
      status: "upcoming",
      type: "Non-Technical"
    },
    {
      id: 4,
      title: "Tech Workshop Series",
      date: "2024-08-20",
      time: "2:00 PM - 5:00 PM",
      location: "Lab 304",
      attendees: 0,
      description: "Hands-on sessions on emerging technologies (AI, IoT, Blockchain).",
      image: "/tech-workshop.jpg",
      status: "upcoming",
      type: "Technical"
    },
    
   
  ]

  const [activeFilter, setActiveFilter] = useState("all")

  const filteredEvents = activeFilter === "all" 
    ? events 
    : events.filter(event => 
        activeFilter === "technical" 
          ? event.type === "Technical" 
          : event.type === "Non-Technical"
      )

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold neon-text mb-6">Upcoming Events</h2>
          <p className="text-xl font-montserrat text-gray-300 max-w-3xl mx-auto">
            Mark your calendars for these exciting activities
          </p>
        </div>

        {/* Event Type Filters */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-3 rounded-lg font-montserrat font-medium transition-all duration-300 ${
              activeFilter === "all" 
                ? "bg-cyan-500 text-black cyber-glow" 
                : "holographic text-gray-300 hover:text-cyan-400"
            }`}
          >
            All Events
          </button>
          <button
            onClick={() => setActiveFilter("technical")}
            className={`px-6 py-3 rounded-lg font-montserrat font-medium transition-all duration-300 ${
              activeFilter === "technical" 
                ? "bg-cyan-500 text-black cyber-glow" 
                : "holographic text-gray-300 hover:text-cyan-400"
            }`}
          >
            Technical
          </button>
          <button
            onClick={() => setActiveFilter("non-technical")}
            className={`px-6 py-3 rounded-lg font-montserrat font-medium transition-all duration-300 ${
              activeFilter === "non-technical" 
                ? "bg-cyan-500 text-black cyber-glow" 
                : "holographic text-gray-300 hover:text-cyan-400"
            }`}
          >
            Non-Technical
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className="group holographic rounded-lg overflow-hidden hover:cyber-glow transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedEvent(event.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-70 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-montserrat font-medium bg-cyan-500 text-black">
                  {event.type}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold neon-text mb-3">{event.title}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-300 font-montserrat text-sm">
                    <Calendar className="mr-2 text-cyan-400" size={16} />
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })} • {event.time}
                  </div>
                  <div className="flex items-center text-gray-300 font-montserrat text-sm">
                    <MapPin className="mr-2 text-cyan-400" size={16} />
                    {event.location}
                  </div>
                </div>

                <p className="text-gray-300 font-montserrat text-sm mb-4">{event.description}</p>

                <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-montserrat font-medium hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 flex items-center justify-center">
                  Register Now
                  <ExternalLink className="ml-2" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Event Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm">
            <div className="holographic rounded-lg p-8 max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-poppins font-bold neon-text">
                  {events.find(e => e.id === selectedEvent)?.title}
                </h3>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  ✕
                </button>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-montserrat font-medium text-gray-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-800 border border-cyan-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-montserrat font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-gray-800 border border-cyan-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-montserrat font-medium text-gray-300 mb-2">Student ID</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-800 border border-cyan-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-montserrat font-medium text-gray-300 mb-2">Department</label>
                    <select className="w-full px-4 py-2 bg-gray-800 border border-cyan-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white">
                      <option value="">Select Department</option>
                      <option value="CSE">Computer Science</option>
                      <option value="IT">Information Technology</option>
                      <option value="ENTC">Electronics</option>
                      <option value="MECH">Mechanical</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-montserrat font-medium text-gray-300 mb-2">Any dietary restrictions?</label>
                  <textarea
                    className="w-full px-4 py-2 bg-gray-800 border border-cyan-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                    rows={2}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-montserrat font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 pulse-glow"
                >
                  Confirm Registration
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}