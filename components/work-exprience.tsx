import Image from "next/image"

const experiences = [
  {
    company: "Pathaka AI",
    role: "Full Stack Developer Intern",
    period: "Oct 2024 - Present",
    logo: "/PathakaLogo.webp"
  },
  {
    company: "Global Techify",
    role: "Software Engineer Intern",
    period: "May 2024 - July 2024",
    logo: "/GlobalTechify.png"
  }
]

export function WorkExperience() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.company} className="flex items-center gap-4">
            <Image
              src={exp.logo}
              alt={exp.company}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <h3 className="font-semibold">{exp.company}</h3>
              <p className="text-zinc-400">{exp.role}</p>
            </div>
            <span className="ml-auto text-zinc-500">{exp.period}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

