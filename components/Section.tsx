import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import { Mail } from "lucide-react"
import Image from "next/image"  
import { FaInstagram } from "react-icons/fa"

export function InternSection() {
    return (
      <section className="mb-16">
        <h2 className="text-3xl font-serif mb-8 text-white">Internship</h2>
        <Card className="bg-zinc-900/50 border-0 transition-all duration-300 hover:bg-gradient-to-br from-zinc-900/50 via-blue-900/30 to-purple-900/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <a className="text-xl font-serif mb-2 text-white hover:text-zinc-300 hover:cursor-pointer" href="https://www.pathaka.ai/">Pathaka AI</a>
                <p className="text-zinc-400 text-sm mb-4">
                  Working on a product which can generate <span className="font-bold">podcasts</span> from users query
                </p>
              </div>
              <div className="text-sm text-zinc-500 text-center mt-5 flex flex-col">
                <span>Oct 2024-Present</span>
                <span className="mt-2 font-bold">Full Stack Developer</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-500 mt-2">
              <span>NextJS</span>
              <span>·</span>
              <span>Typescript</span>
              <span>·</span>
              <span>TailwindCSS</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/50 border-0 transition-all duration-300 hover:bg-gradient-to-br from-zinc-900/50 via-blue-900/30 to-purple-900/30 mt-5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-serif mb-2 text-white">Global Techify</h3>
                <p className="text-zinc-400 text-sm mb-4">
                  Built a product which helps college students to find mentors
                </p>
              </div>
              <div className="text-sm text-zinc-500 text-center mt-5 flex flex-col">
                <span>May 2024-July 2024</span>
                <span className="mt-2 font-bold">Software Developer Intern</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-500 mt-2 ">
              <span>React</span>
              <span>·</span>
              <span>Javascript</span>
              <span>·</span>
              <span>NodeJS</span>
            </div>
          </CardContent>
        </Card>
      </section>
    )
}

export function ProjectSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-serif mb-8 text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-zinc-900/50 border-0 transition-all duration-300 hover:bg-gradient-to-br from-zinc-900/50 via-blue-900/30 to-purple-900/30">
          <CardContent className="p-6">
            <a className="text-xl font-serif mb-2 text-white hover:text-zinc-300 hover:cursor-pointer" href="https://speechsync-ai.pages.dev">SpeechSycn AI</a>
            <p className="text-zinc-400 text-sm mb-4">
            conversation buddy turning hesitant speakers into confident English communicators
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span>Speaking Skills</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/50 border-0 transition-all duration-300 hover:bg-gradient-to-br from-zinc-900/50 via-blue-900/30 to-purple-900/30">
          <CardContent className="p-6">
            <a className="text-xl font-serif mb-2 text-white hover:text-zinc-300 hover:cursor-pointer" href="https://cloth-trial.pages.dev">Try Your OutFit</a>
            <p className="text-zinc-400 text-sm mb-4">
            personal digital dressing room for virtual try-on
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
                <span>Clothing</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/50 border-0 transition-all duration-300 hover:bg-gradient-to-br from-zinc-900/50 via-blue-900/30 to-purple-900/30">
          <CardContent className="p-6">
            <a className="text-xl font-serif mb-2 text-white hover:text-zinc-300 hover:cursor-pointer" href="https://github.com/arre-ankit/Physics-Informed-Neural-Networks-PINNs-">Physics Informed Neural Networks(PIIN)</a>
            <p className="text-zinc-400 text-sm mb-4">
              solved partial differential equations of Timoshenko beam with PIIN
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span>Research</span>
            </div>
          </CardContent>
        </Card>


        <Card className="bg-zinc-900/50 border-0 transition-all duration-300 hover:bg-gradient-to-br from-zinc-900/50 via-blue-900/30 to-purple-900/30">
          <CardContent className="p-6">
            <a className="text-xl font-serif mb-2 text-white hover:text-zinc-300 hover:cursor-pointer" href="https://main.higher-lower-spotify-game.pages.dev">Spotify Game</a>
            <p className="text-zinc-400 text-sm mb-4">
              guess which is in treading on spotify by higher or lower game
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span>Music</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export function RecentPostsSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-serif mb-8 text-white">Recent Blogs</h2>
      <div className="border-b border-zinc-800 pb-4">
        <div className="flex items-center justify-between">
          <Link href="https://hashnode.com/post/clojnc4hn00030bie002qcwfh" className="text-white hover:text-zinc-300">
            Physics Informed Neural Networks
          </Link>
          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <span>Nov 4, 2023</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export function GallerySection() {
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-serif mb-8 text-white">I'm a Photographer 📸</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Image src="/Snapinsta.app_410182474_687346926527200_8938040163781791891_n_1080.jpg" alt="Image 6" width={1000} height={1000} />
                <Image src="/Snapinsta.app_290820325_1176370299822775_6764515071044441757_n_1080.jpg" alt="Image 1" width={300} height={300} />
                <Image src="/Snapinsta.app_294341660_379393034326593_2508151274359147139_n_1080.jpg" alt="Image 2" width={500} height={500} />
                <Image src="/Snapinsta.app_296844413_2233027476855247_3188460287510999960_n_1080.jpg" alt="Image 3" width={500} height={500} />
                <Image src="/Snapinsta.app_325504276_893255471873814_6028355058264949706_n_1080.jpg" alt="Image 4" width={500} height={500} />
                <Image src="/Snapinsta.app_407628297_7536348289726642_8977312441066667666_n_1080.jpg" alt="Image 7" width={500} height={500} />
                <Image src="/Snapinsta.app_357815360_637959254934782_3510561118277758862_n_1080.jpg" alt="Image 8" width={500} height={500} />
                <Image src="/Snapinsta.app_357642360_221293527482356_2091727702726468684_n_1080.jpg" alt="Image 9" width={500} height={500} />
                <Image src="/Snapinsta.app_336838066_556890146267382_6500881823469425943_n_1080.jpg" alt="Image 10" width={500} height={500} />
                <Image src="/Snapinsta.app_336507901_164610759781868_517369430883916725_n_1080.jpg" alt="Image 11" width={500} height={500} />
                <Image src="/Snapinsta.app_407628297_7536348289726642_8977312441066667666_n_1080.jpg" alt="Image 12" width={500} height={500} />
                <Image src="/Snapinsta.app_325521447_679458577257309_8072339987959580328_n_1080.jpg" alt="Image 5" width={500} height={500} />
            </div>
        </section>
    )
}

export function ContactSection() {
    return (
        <section className="mb-16 flex justify-center">
            <div className="flex gap-2 mb-2 mt-9  items-center justify-center">
            <Link href="https://x.com/arre_ankit" className="text-zinc-500 hover:text-white">
            <FaTwitter className="w-7 h-7" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://github.com/arre-ankit" className="text-zinc-500 hover:text-white">
              <FaGithub className="w-7 h-7" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/arre-ankit/" className="text-zinc-500 hover:text-white">
              <FaLinkedin className="w-7 h-7" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:arre.ankit@gmail.com" className="text-zinc-500 hover:text-white">
              <Mail className="w-7 h-7" />
              <span className="sr-only">Email</span>
            </Link>
            <Link href="https://www.instagram.com/shutter_kit/" className="text-zinc-500 hover:text-white">
                <FaInstagram className="w-7 h-7" />
                <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </section>
    )
}
