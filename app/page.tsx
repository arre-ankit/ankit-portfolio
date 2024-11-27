import { Hero } from "../components/hero"
import { WorkExperience } from "../components/work-exprience"
import { Education } from "../components/education"
import { Skills } from "../components/skills"
import { Projects } from "../components/projects"
import { Contact } from "../components/contact"
import { SocialBar } from "../components/social-bar"
import { RecentPostsSection } from "../components/blogs"
import { GallerySection } from "../components/photograph"


export default function Page() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <Hero />
        <WorkExperience />
        <Education />
        <Skills />
        <Projects />
        <RecentPostsSection />
        <GallerySection />
        <Contact />
      </main>
      <SocialBar />
    </div>
  )
}

