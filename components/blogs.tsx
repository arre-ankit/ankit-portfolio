import Link from "next/link"

const posts = [
    {
      title: "Unlocking the Power of MCP Protocol",
      url: "https://arre-ankit.hashnode.dev/unlocking-the-power-of-mcp-protocol"
    },
    {
      title: "Physics Informed Neural Networks",
      url: "https://arre-ankit.hashnode.dev/physics-informed-neural-networkspinns"
    }
  ];

export function RecentPostsSection() {
  return (
    <section className="mb-16">
      <h1 className="text-3xl font-serif mb-4 text-white font-bold hover:text-zinc-300 transition-colors">Recent Blogs</h1>
      <div className="border-b border-zinc-800" />
      <div className="mt-8 space-y-10">
        {posts.map((post, index) => (
          <article key={index} className="group">
            <Link 
              href={post.url}
              target="_blank"
              className="block group-hover:translate-x-1 transition-transform duration-200"
            >
              <h2 className="text-white group-hover:text-zinc-300 text-2xl font-medium">
                {post.title}
              </h2>
              <p className="text-zinc-400 mt-2">Read article →</p>
            </Link>
            <div className="border-b border-zinc-800 mt-6" />
          </article>
        ))}
      </div>
    </section>
  )
}