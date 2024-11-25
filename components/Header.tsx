import Link from "next/link"
import Image from "next/image"
import { Mail } from 'lucide-react'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function Header() {
  return (
    <section className="mb-16">
      <div className="flex items-start gap-4">
        <Image
          src="/ankit.jpeg"
          alt="Profile"
          width={200}
          height={200}
          className="rounded-lg"
        />
        <div className="mt-32"> 
          <h1 className="text-4xl font-serif mb-2">Ankit Kumar</h1>
          <div className="flex gap-2 mb-2">
            <Link href="https://x.com/arre_ankit" className="text-zinc-500 hover:text-white">
            <FaXTwitter  className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://github.com/arre-ankit" className="text-zinc-500 hover:text-white">
              <FaGithub className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/arre-ankit/" className="text-zinc-500 hover:text-white">
              <FaLinkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:arre.ankit@gmail.com" className="text-zinc-500 hover:text-white">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
          <p className="text-zinc-500 mb-1">
            I'm a fullstack developer 🚀, curious explorer 🧐, noob photographer 📸. 
          </p>
          <p className="text-zinc-500">
          Work with NextJS,React,Node,Cloudflare but I'm always learning new tools & technologies.
          </p>
        </div>
      </div>
    </section>
  )
}

