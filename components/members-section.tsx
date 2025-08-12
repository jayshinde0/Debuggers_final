"use client"

import { useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"

export default function MembersSection() {
  const [filter, setFilter] = useState("all")

const members = [
  // Leadership
  {
    name: "Riya Patil",
    role: "President",
    image: "",
    github: "#",
    linkedin: "#",
    email: "",
  },
  {
    name: "Aryan Jadhav",
    role: "Vice President",
    image: "",
    github: "#",
    linkedin: "#",
    email: "",
  },
  {
    name: "Dhruv Mehta",
    role: "Secretary",
    image: "/Dhruv Mehta.jpg",
    github: "#",
    linkedin: "#",
    email: "",
  },
  {
    name: "Vaishnavi Chaudhari",
    role: "Secretary",
    image: "/Vaishnavi Chaudhari.jpg",
    github: "#",
    linkedin: "#",
    email: "",
  },
  {
    name: "Khetesh Deore",
    role: "Treasurer",
    image: "/Khetesh Deore.jpg",
    github: "#",
    linkedin: "#",
    email: "",
  },
  {
    name: "Manas Rajput",
    role: "Co-Treasurer",
    image: "/Manas Rajput.jpg",
    github: "#",
    linkedin: "#",
    email: "",
  },

  // Website/ERP Team
  {
    name: "Jay Shinde",
    role: "Website/ERP Coordinator",
    image: "/Jay Shinde.jpg",
    github: "#",
    linkedin: "#",
    email: "",
  },
  {
    name: "Shivam Shewale",
    role: "Website/ERP Coordinator",
    image: "/Shivam Shewale.jpg",
    github: "#",
    linkedin: "#",
    email: "",
  },

  // Placement Team
  {
    name: "Saurabh Gosavi",
    role: "Placement Coordinator",
    image: "",
    github: "#",
    linkedin: "#",
    email: "",
  },
  {
    name: "Tejaswini Narkhede",
    role: "Placement Coordinator",
    image: "/Tejaswini Narkhede.jpg",
    github: "#",
    linkedin: "#",
    email: "",
  },

  // Discipline
  {
    name: "Manas Shinde",
    role: "Discipline",
    image: "/Manas Shinde.jpg",
    github: "#",
    linkedin: "#",
    email: "",
  },

  // Creatives Team
  {
    name: "Shravani Tambat",
    role: "Creatives",
    image: "/Shravani Tambat.jpg",
    github: "#",
    linkedin: "#",
    email: "",
  },
  {
    name: "Om Bhamare",
    role: "Creatives",
    image: "/Om Bhamare.jpg",
    github: "#",
    linkedin: "#",
    email: "",
  },

  // Social Media Team
  {
    name: "Hrishikesh Gavai",
    role: "Social Media",
    image: "",
    github: "#",
    linkedin: "#",
    email: "",
  },
  {
    name: "Samiksha Jagtap",
    role: "Social Media",
    image: "",
    github: "#",
    linkedin: "#",
    email: "",
  },

  // Alumni Team
  {
    name: "Kajal Patil",
    role: "Alumni Coordinator",
    image: "",
    github: "#",
    linkedin: "#",
    email: "",
  },
  {
    name: "Jayesh Kadam",
    role: "Alumni Coordinator",
    image: "/Jayesh Kadam.jpg",
    github: "#",
    linkedin: "#",
    email: "",
  },

  // Workshop Team
  {
    name: "Shahid Shaikh",
    role: "Expert Talk/Workshop Coordinator",
    image: "/Shahid Shaikh.jpg",
    github: "#",
    linkedin: "#",
    email: "",
  },
  {
    name: "Abhishek Shinde",
    role: "Expert Talk/Workshop Coordinator",
    image: "/Abhishek Shinde.jpg",
    github: "#",
    linkedin: "#",
    email: "",
  },

  // Core Members
  {
    name: "Harsh Kumbhare",
    role: "Core Member",
    image: "/Harsh Kumbhare.jpg",
    github: "#",
    linkedin: "#",
    email: "",
  },
  {
    name: "Kishor Surwade",
    role: "Core Member",
    image: "/Kishor Surwade.jpg",
    github: "#",
    linkedin: "#",
    email: "",
  },
  {
    name: "Janhavi Patil",
    role: "Core Member",
    image: "/Janhavi Patil.jpg",
    github: "#",
    linkedin: "#",
    email: "",
  },
  {
    name: "Gargi Jadhav",
    role: "Core Member",
    image: "",
    github: "#",
    linkedin: "#",
    email: "",
  },
  {
    name: "Ishan Moyekhede",
    role: "Core Member",
    image: "",
    github: "#",
    linkedin: "#",
    email: "",
  },
  {
    name: "Ritesh Sawant",
    role: "Core Member",
    image: "",
    github: "#",
    linkedin: "#",
    email: "",
  },
];


  const filters = [
    { key: "all", label: "All Members" },
    { key: "leadership", label: "Leadership" },
    { key: "coordinators", label: "Coordinators" },
    { key: "core", label: "Core Members" },
  ]

  const filteredMembers = filter === "all" 
    ? members 
    : filter === "leadership"
      ? members.filter(m => ["President", "Vice President", "Secretary", "Treasurer", "Co-Treasurer"].includes(m.role))
      : filter === "coordinators"
        ? members.filter(m => m.role.includes("Coordinator") || ["Discipline", "Creatives", "Social Media"].includes(m.role))
        : members.filter(m => m.role === "Core Member")

  return (
    <section id="members" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold neon-text mb-6">Our Team</h2>
          <p className="text-xl font-montserrat text-gray-300 max-w-3xl mx-auto">
            Meet the brilliant minds behind Debuggers Club
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterOption) => (
            <button
              key={filterOption.key}
              onClick={() => setFilter(filterOption.key)}
              className={`px-6 py-3 rounded-lg font-montserrat font-medium transition-all duration-300 ${
                filter === filterOption.key
                  ? "bg-cyan-500 text-black cyber-glow"
                  : "holographic text-gray-300 hover:text-cyan-400"
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative holographic rounded-lg overflow-hidden hover:cyber-glow transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold neon-text mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-montserrat font-medium mb-4">{member.role}</p>

                <div className="flex space-x-3">
                  <a href={member.github} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    <Github size={20} />
                  </a>
                  <a
                    href={member.linkedin}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Mail size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}