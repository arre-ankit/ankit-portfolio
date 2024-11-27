import Image from "next/image"

export function Hero() {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-8">
        <Image
          src="/Ankitportfolio.png"
          alt="Profile"
          width={150}
          height={150}
          className="rounded-full"
        />
        <div className="flex flex-col"> 
        <div>
          <h1 className="text-6xl font-bold mb-4 flex items-center gap-4">
            Hi, I&apos;m Ankit
            <span className="animate-waving-hand text-4xl">👋</span>
          </h1>
          <h2 className="text-xl text-zinc-400">Software Engineer & Freelancer</h2>
        </div>
          <p className="text-zinc-500 mt-2">
            Fullstack developer 🚀, curious explorer 🧐, noob photographer 📸. 
          </p>
          <p className="text-zinc-500">
            Work with NextJS,React,NodeJS,Cloudflare but I'm always learning new tools & technologies.
          </p>
        </div>
      </div>
    </section>
  )
}

