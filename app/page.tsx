import { ProjectSection,RecentPostsSection,InternSection,ContactSection,GallerySection } from "@/components/Section"
import {Header} from "@/components/Header"
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <Header />
        <InternSection />
        <ProjectSection />
        <RecentPostsSection />
        <GallerySection />
        <ContactSection />
      </main>
    </div>
  )
}

