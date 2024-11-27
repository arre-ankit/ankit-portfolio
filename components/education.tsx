import Image from "next/image"

export function Education() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8">Education</h2>
      <div className="flex items-center gap-4">
        <Image
          src="/IITBHU.png"
          alt="IIT BHU"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <h3 className="font-semibold">Indian Institute of Technology BHU(Varanasi)</h3>
          <p className="text-zinc-400">B.Tech</p>
        </div>
        <span className="ml-auto text-zinc-500">2021 - 2025</span>
      </div>
    </section>
  )
}

