export function Skills() {
    const skills = [
      "NextJS",
      "React",
      "Typescript",
      "Node.js",
      "Express",
      "C++",
      "Python",
      "Postgres",
      "Prisma",
      "Docker",
    ]
  
    return (
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-zinc-900 rounded-full text-sm text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    )
  }
  
  