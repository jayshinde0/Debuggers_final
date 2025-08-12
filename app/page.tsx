import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import MembersSection from "@/components/members-section"
import EventsSection from "@/components/events-section"
import GallerySection from "@/components/gallery-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Preloader from "@/components/preloader"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Preloader />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MembersSection />
      <EventsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
