import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Blog | DataArk Labs",
  description: "Insights on CPG automation, AI, and data analytics from DataArk Labs.",
}

const blogPosts = [
  {
    slug: "cpg-automation-platform",
    title: "Why I'm Building a CPG Automation Platform",
    description: "How 20 years of CPG experience revealed the same problems across companies—and why I'm building a platform to solve them.",
    date: "2026-01-12",
    readTime: "10 min read",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#08314d] mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights on CPG automation, AI, and data analytics
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#08314d] group-hover:opacity-80 transition-opacity">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {post.date} • {post.readTime}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{post.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
