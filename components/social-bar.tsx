import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import Link from "next/link"

export function SocialBar() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
      <div className="flex items-center gap-1 bg-zinc-900/90 backdrop-blur-sm px-2 py-2 rounded-full">
        <Link href="https://github.com/arre-ankit" target="_blank" className="p-2 hover:bg-zinc-800 rounded-full">
          <FaGithub className="w-5 h-5" />
        </Link>
        <Link href="https://x.com/arre_ankit" target="_blank" className="p-2 hover:bg-zinc-800 rounded-full">
          <FaTwitter className="w-5 h-5" />
        </Link>
        <Link href="https://www.linkedin.com/in/arre-ankit/" target="_blank" className="p-2 hover:bg-zinc-800 rounded-full">
          <FaLinkedin className="w-5 h-5" />
        </Link>
        <Link href="mailto:arre.ankit@gmail.com" target="_blank" className="p-2 hover:bg-zinc-800 rounded-full">
          <Mail className="w-5 h-5" />
        </Link>
      </div>
    </div>
  )
}

