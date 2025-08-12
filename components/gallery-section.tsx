"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      id: 1,
      src: "/expert-talk-session-1.jpg",
      alt: "Expert Talk Session",
      category: "talk",
    },
    {
      id: 2,
      src: "/expert-talk-solidity.jpg",
      alt: "Expert Talk Session on Solidity",
      category: "talk",
    },
    {
      id: 3,
      src: "/java-dsa-mini-project.jpg",
      alt: "Java and DSA Mini Project Competition",
      category: "competition",
    },
    {
      id: 4,
      src: "/code-quest.jpg",
      alt: "Code Quest Programming Contest",
      category: "competition",
    },
    {
      id: 5,
      src: "/ex-committee-photo.jpg",
      alt: "Photo with Ex Committee",
      category: "social",
    },
    {
      id: 6,
      src: "/expert-talk-final.jpg",
      alt: "Expert Talk",
      category: "talk",
    },
  ]

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold neon-text mb-6">Gallery</h2>
          <p className="text-xl font-montserrat text-gray-300 max-w-3xl mx-auto">
            Capturing moments from our amazing events and activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative holographic rounded-lg overflow-hidden hover:cyber-glow transition-all duration-300 transform hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-montserrat font-medium text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm">
            <div className="relative max-w-4xl max-h-[90vh] mx-4">
              <img
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors duration-300 bg-black bg-opacity-50 rounded-full p-2"
              >
                <X size={24} />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-cyan-400 transition-colors duration-300 bg-black bg-opacity-50 rounded-full p-2"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-cyan-400 transition-colors duration-300 bg-black bg-opacity-50 rounded-full p-2"
              >
                <ChevronRight size={24} />
              </button>

              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white font-montserrat font-medium bg-black bg-opacity-50 rounded-lg px-4 py-2">
                  {images[selectedImage].alt}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
