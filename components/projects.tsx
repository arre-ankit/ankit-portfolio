import Image from "next/image"
import { Globe } from 'lucide-react'

const projects = [
  {
    title: "SpeechSync AI",
    description: "conversation buddy turning hesitant speakers into confident English communicators",
    image: "/SpeechSyncAI.png",
    tags: ["NextJS","ShadCN", "Hono","Cloudflare Workers"],
    type: "Web App",
    link: "https://speechsync-ai.pages.dev/"
  },
  {
    title: "Try Your OutFit",
    description: "personal digital dressing room for virtual try-on",
    image: "/TryOutfitAI.png",
    tags: ["NextJS", "ShadCN UI", "Tailwind CSS", "NodeJS", "Express"],
    type: "Web App",
    link: "https://cloth-trial.pages.dev/"
  },
  {
    title: "Physics Informed Neural Networks(PIIN)",
    description: "solved partial differential equations of Timoshenko beam with PIIN",
    image: "/PIIN.png",
    tags: ["Python", "Tensorflow", "DeepXDE"],
    type: "Research",
    link: "https://github.com/arre-ankit/Physics-Informed-Neural-Networks-PINNs-/blob/main/PINNs%20for%20Timoshenko%20Beam%20when%20g%3D0.ipynb"
  },
  {
    title: "Guess Trending Spotify Songs",
    description: "guess which is in treading on spotify by higher or lower game",
    image: "/Spotify.png",
    tags: ["NextJS", "ShadCN UI", "Tailwind CSS"],
    type: "Web App",
    link: "https://main.higher-lower-spotify-game.pages.dev/"
  },

]

export function Projects() {
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <span className="bg-zinc-900 px-4 py-2 rounded-full text-sm mb-4 inline-block">
          My Projects
        </span>
        <h2 className="text-5xl font-bold mb-4">Check out my latest work</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          I&apos;ve worked on a variety of projects, from simple games to
          complex web applications. Here are a few of my favorites.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <a key={project.title} href={project.link} target="_blank" className="bg-zinc-900/30 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={300}
              className="w-full"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-zinc-900 rounded-full text-xs text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <Globe className="w-4 h-4" />
                <span className="text-sm">{project.type}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

