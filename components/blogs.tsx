import Link from "next/link"

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